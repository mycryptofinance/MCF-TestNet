/* ============================================================
   1. КОНФИГУРАЦИЯ И НАСТРОЙКИ
   Адреса смарт-контрактов, ABI и ссылки на блокчейн-эксплореры
   ============================================================ */

// Адреса фабрик в разных сетях
const FACTORY_ADDRESSES = {
    5042002: "0xa3A5fA760e3c35Edd0e8ac853E36D646451a6b45",
    46630: "0x8E80F2D2Ba69dee7B2db9CCA74E04E47B293DA56"
};

// Минимальный интерфейс (ABI) для взаимодействия с фабрикой
const FACTORY_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"TokenCreated","type":"event"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"supply","type":"uint256"},{"internalType":"uint8","name":"tokenType","type":"uint8"}],"name":"createToken","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Ссылки на эксплореры для проверки транзакций и адресов
const EXPLORER_URLS = {
    5042002: "https://testnet.arcscan.app/address/",
    46630: "https://explorer.testnet.chain.robinhood.com/address/",
};

/* ============================================================
   2. ОСНОВНАЯ ЛОГИКА СОЗДАНИЯ (DEPLOY)
   Функции для запуска процесса выпуска нового токена
   ============================================================ */

/**
 * Главная функция деплоя токена. 
 * Собирает данные из полей, вызывает контракт и обрабатывает результат.
 */
async function deployUserToken() {
    const name = document.getElementById('tokenName').value.trim();
    const symbol = document.getElementById('tokenSymbol').value.trim();
    const supply = document.getElementById('tokenSupply').value;
    const type = document.getElementById('tokenType').value; 
    
    if (!name || !symbol || !supply || supply <= 0) {
        showStatus('error', 'Missing Data', 'Please fill in all fields with valid information.');
        return;
    }

    try {
        const network = await provider.getNetwork();
        const factoryAddr = FACTORY_ADDRESSES[network.chainId];
        
        if (!factoryAddr) {
            showStatus('error', 'Wrong Network', 'Token Factory is not deployed on this network.');
            return;
        }

        const factory = new ethers.Contract(factoryAddr, FACTORY_ABI, signer);
        const userAddress = await signer.getAddress();

        showStatus('loading', 'Creating Token', 'Please confirm the deployment in your wallet...');

        const tx = await factory.createToken(name, symbol, supply, type);
        
        showStatus('loading', 'Deploying Contract', 'Transaction sent! Waiting for confirmation...', tx.hash);
        
        const receipt = await tx.wait();
        const event = receipt.events?.find(e => e.event === 'TokenCreated');
        
        if (event) {
            const tokenAddr = event.args.tokenAddress;
            showStatus('success', 'Success!', `Your token "${name}" is live!`, tx.hash);
            saveTokenToHistory(tokenAddr, name, symbol, type, userAddress, network.chainId);
            
            if (typeof renderUserTokens === "function") {
                renderUserTokens(userAddress, network.chainId);
            }

            document.getElementById('tokenName').value = '';
            document.getElementById('tokenSymbol').value = '';
            document.getElementById('tokenSupply').value = '';
            
        } else {
            throw new Error("TokenCreated event not found");
        }
        
    } catch (error) {
        console.error("Deploy Error:", error);
        let errorMessage = "Could not deploy token. Check your balance.";
        if (error.code === 'ACTION_REJECTED') errorMessage = "Transaction was rejected.";
        showStatus('error', 'Deploy Failed', errorMessage);
    }
}

/**
 * Сохраняет данные о созданном токене в LocalStorage браузера
 */
function saveTokenToHistory(address, name, symbol, type, userAddress, networkId) {
    const typeLabels = { '0': 'Standard', '1': 'Burnable', '2': 'Tax (5%)' };
    let allTokens = JSON.parse(localStorage.getItem('mcf_created_tokens') || '[]');
    
    allTokens.push({
        creator: userAddress.toLowerCase(),
        network: networkId,
        address: address,
        name: name,
        symbol: symbol,
        type: typeLabels[type] || 'Standard',
        timestamp: Date.now()
    });
    
    localStorage.setItem('mcf_created_tokens', JSON.stringify(allTokens));
    renderUserTokens(userAddress, networkId);
}

/* ============================================================
   3. УПРАВЛЕНИЕ СПИСКОМ И БАЛАНСАМИ
   Отображение токенов пользователя и подгрузка данных из сети
   ============================================================ */

/**
 * Отрисовывает список токенов пользователя в интерфейсе и запрашивает балансы
 */
async function renderUserTokens(forcedAddr = null, forcedNet = null) {
    const listElement = document.getElementById('myTokensList');
    if (!listElement) {
        console.error("❌ ОШИБКА: Элемент #myTokensList не найден в HTML!");
        return;
    }

       
    let userAddress = forcedAddr || (typeof userAccount !== 'undefined' ? userAccount : null);

   // Если кошелек подключен, берем актуальный ID сети напрямую из провайдера
    let netId;
    if (forcedNet) {
        netId = forcedNet;
    } else {
        const net = await provider.getNetwork();
        netId = net.chainId;
    }
   
   // let netId = forcedNet || currentChainId;

    if (!userAddress) {
        listElement.innerHTML = '<p class="empty-msg">Connect wallet to view tokens</p>';
        return;
    }

    const allTokens = JSON.parse(localStorage.getItem('mcf_created_tokens') || '[]');
    const userTokens = allTokens.filter(t => 
    t.creator.toLowerCase() === userAddress.toLowerCase() && 
        Number(t.network) === Number(netId)
    );
       
    //      t.creator.toLowerCase() === userAddress.toLowerCase() && (!netId || t.network === netId)
    // );

    if (userTokens.length === 0) {
        listElement.innerHTML = '<p class="empty-msg">No tokens created yet</p>';
        return;
    }

    listElement.innerHTML = userTokens.map(token => {
        const typeClass = token.type.toLowerCase().includes('burn') ? 'badge-burn' : 
                          token.type.toLowerCase().includes('tax') ? 'badge-tax' : 'badge-std';
        const explorerBase = EXPLORER_URLS[netId] || "https://etherscan.io/address/";
        const explorerLink = explorerBase + token.address;
        return `
        <div class="token-item">
            <div class="token-info">
                <div class="token-top-row">
                    <span class="token-name-tag clickable-action" 
                          onclick="openTokenManager('${token.address}', '${token.symbol}', '${token.name}')">
                        <i class="fas fa-paper-plane" style="font-size: 0.8rem; margin-right: 5px; color: #64ffda;"></i>
                        <span class="send-label" style="font-size: 0.75rem; text-transform: uppercase; margin-right: 8px; opacity: 0.8;">Send:</span>
                        <b>${token.name}</b> <small class="token-ticker" style="color: #64ffda; margin-left: 4px;">${token.symbol}</small>
                    </span>
                    <span class="token-badge ${typeClass}">${token.type}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                    <a href="${explorerLink}" target="_blank" class="explorer-link" title="View on Explorer">
                        <code class="token-addr-small">${token.address.substring(0, 6)}...${token.address.substring(38)}</code>
                    </a>
                    <a href="${explorerLink}" target="_blank" id="balance-${token.address}" class="balance-display explorer-link" style="text-decoration: none; color: #fff;">
                        <i class="fas fa-spinner fa-spin"></i>
                    </a>
                </div>
            </div>
            <div class="token-actions">
                <button class="mini-copy-btn" onclick="copyToClipboard('${token.address}')"><i class="fas fa-copy"></i></button>
                <button class="mini-add-btn" onclick="addToMetamask('${token.address}', '${token.symbol}')"><i class="fas fa-plus"></i></button>
            </div>
        </div>`;
    }).reverse().join('');

    userTokens.forEach(async (token) => {
        try {
            const tokenContract = new ethers.Contract(token.address, [
                "function balanceOf(address owner) view returns (uint256)",
                "function decimals() view returns (uint8)"
            ], provider);
            
            const [balance, decimals] = await Promise.all([
                tokenContract.balanceOf(userAddress),
                tokenContract.decimals()
            ]);
            
            const formattedBalance = ethers.utils.formatUnits(balance, decimals);
            const numBalance = parseFloat(formattedBalance);
            const displayBalance = numBalance.toLocaleString(undefined, {maximumFractionDigits: 2});
            
            const balEl = document.getElementById(`balance-${token.address}`);
            const tokenItem = balEl.closest('.token-item');
            const hideZero = document.getElementById('hideZeroCheckbox')?.checked;

            if (balEl) {
                balEl.innerHTML = `<i class="fas fa-wallet" style="font-size: 0.7rem; color: #64ffda; margin-right: 5px;"></i> ${displayBalance} ${token.symbol}`;
            }

            if (hideZero && numBalance === 0) {
                tokenItem.style.display = 'none'; 
            } else {
                tokenItem.style.display = 'flex';
            }
        } catch (e) {
            console.error("Balance error:", e);
        }
    });
}

/* ============================================================
   4. ВЗАИМОДЕЙСТВИЕ С WALLET (METAMASK) И ТРАНЗАКЦИИ
   Отправка токенов, добавление в кошелек и копирование
   ============================================================ */

/**
 * Добавляет токен в список активов MetaMask
 */
async function addToMetamask(address, symbol) {
    try {
        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: { address, symbol, decimals: 18 },
            },
        });
    } catch (error) { console.log(error); }
}

/**
 * Базовая функция перевода токенов (используется в старых частях кода)
 */
async function transferCreatedToken() {
    const addr = document.getElementById('newTokenAddress').innerText;
    const to = document.getElementById('sendTokenTo').value;
    const amount = document.getElementById('sendTokenAmount').value;

    if(!ethers.utils.isAddress(to)) return alert("Invalid Address");

    const tokenContract = new ethers.Contract(addr, [
        "function transfer(address to, uint256 amount) public returns (bool)"
    ], signer);

    const tx = await tokenContract.transfer(to, ethers.utils.parseEther(amount));
    await tx.wait();
    alert("Tokens sent!");
}

/**
 * Функция копирования текста в буфер обмена с визуальной индикацией
 */
async function copyToClipboard(text, elementId = null) {
    try {
        await navigator.clipboard.writeText(text);
        if (elementId) {
            const el = document.getElementById(elementId);
            const originalHTML = el.innerHTML;
            el.innerHTML = '<i class="fas fa-check" style="color: #64ffda;"></i>';
            setTimeout(() => { el.innerHTML = originalHTML; }, 2000);
        } else {
            alert("Address copied to clipboard!");
        }
    } catch (err) {
        console.error('Failed to copy: ', err);
        window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
    }
}

/**
 * Копирует адрес только что созданного токена
 */
function copyMainTokenAddress() {
    const addr = document.getElementById('newTokenAddress').innerText;
    copyToClipboard(addr, 'copyMainAddr');
}

/**
 * Добавляет только что созданный токен в MetaMask
 */
async function addCurrentTokenToMetamask() {
    const addr = document.getElementById('newTokenAddress').innerText;
    const symbol = document.getElementById('tokenSymbol').value;
    await addToMetamask(addr, symbol);
}

/* ============================================================
   5. МОДАЛЬНЫЕ ОКНА И СТАТУСЫ
   Логика управления окном перевода и статусными сообщениями
   ============================================================ */

let activeModalToken = { address: '', symbol: '' };

/**
 * Открывает окно управления конкретным токеном (отправка/копирование)
 */
function openTokenManager(address, symbol, name) {
    activeModalToken = { address, symbol };
    const modal = document.getElementById('tokenModal');
    document.getElementById('modalTokenName').innerText = `Manage ${name || 'Token'}`;
    document.getElementById('modalTokenAddress').innerText = address;
    modal.style.display = 'flex';
    setTimeout(() => { modal.classList.add('active'); }, 10);
}

/**
 * Закрывает модальное окно управления токеном
 */
function closeTokenModal() {
    const modal = document.getElementById('tokenModal');
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

/**
 * Копирует адрес из открытой модалки
 */
function copyModalAddress() {
    copyToClipboard(activeModalToken.address);
}

/**
 * Добавляет токен из открытой модалки в MetaMask
 */
async function addModalTokenToMetamask() {
    await addToMetamask(activeModalToken.address, activeModalToken.symbol);
}

/**
 * Универсальная функция показа статуса (Loading, Success, Error)
 */
function showStatus(type, title, message, txHash = null) {
    const modal = document.getElementById('statusModal');
    const icon = document.getElementById('statusIcon');
    const titleEl = document.getElementById('statusTitle');
    const msgEl = document.getElementById('statusMessage');
    const btn = document.getElementById('statusCloseBtn');
    const txLinkContainer = document.getElementById('txLinkContainer');
    const statusTxLink = document.getElementById('statusTxLink');

    txLinkContainer.style.display = 'none';

    if (type === 'loading') {
        icon.innerHTML = '<i class="fas fa-spinner fa-spin" style="color: #64ffda;"></i>';
        btn.style.display = 'none';
    } else if (type === 'success') {
        icon.innerHTML = '<i class="fas fa-check-circle" style="color: #00ff88;"></i>';
        btn.style.display = 'block';
        if (txHash) {
            const networkId = currentChainId;
            const explorerBase = EXPLORER_URLS[networkId] || "https://etherscan.io/tx/";
            const txBase = explorerBase.replace('/address/', '/tx/');
            statusTxLink.href = txBase + txHash;
            txLinkContainer.style.display = 'block';
        }
    } else if (type === 'error') {
        icon.innerHTML = '<i class="fas fa-times-circle" style="color: #ff4d4d;"></i>';
        btn.style.display = 'block';
    }

    titleEl.innerText = title;
    msgEl.innerText = message;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

/**
 * Закрывает окно статуса
 */
function closeStatusModal() {
    const modal = document.getElementById('statusModal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

/**
 * Выполняет перевод токенов непосредственно из модального окна
 */
async function transferFromModal() {
    const toInput = document.getElementById('modalSendTo').value.trim();
    const amountInput = document.getElementById('modalSendAmount').value;
    
    if (!ethers.utils.isAddress(toInput)) {
        showStatus('error', 'Invalid Address', 'Please enter a valid recipient wallet address.');
        return;
    }
    
    if (!amountInput || isNaN(amountInput) || parseFloat(amountInput) <= 0) {
        showStatus('error', 'Invalid Amount', 'Please enter a positive number of tokens to send.');
        return;
    }

    const btn = document.querySelector('#tokenModal .action-btn');
    
    try {
        btn.disabled = true;
        btn.innerText = "Processing...";
        showStatus('loading', 'Sending Tokens', 'Please confirm the transaction in your wallet...');

        const tokenContract = new ethers.Contract(activeModalToken.address, [
            "function transfer(address to, uint256 amount) public returns (bool)",
            "function decimals() view returns (uint8)"
        ], signer);

        const decimals = await tokenContract.decimals();
        const parsedAmount = ethers.utils.parseUnits(amountInput.toString(), decimals);

        const tx = await tokenContract.transfer(toInput, parsedAmount);
        showStatus('loading', 'Broadcasting', 'Transaction sent! Waiting for confirmation...', tx.hash);
        await tx.wait();

        showStatus('success', 'Transfer Successful!', `Successfully sent ${amountInput} ${activeModalToken.symbol}`, tx.hash);
        closeTokenModal();
        if (typeof renderUserTokens === "function") renderUserTokens(); 

    } catch (error) {
        console.error("Transfer Error:", error);
        let errorMsg = "Transaction failed or was rejected.";
        if (error.code === 'ACTION_REJECTED') errorMsg = "User rejected the transaction.";
        showStatus('error', 'Transaction Failed', errorMsg);
    } finally {
        btn.disabled = false;
        btn.innerText = "SEND TOKENS";
    }
}

/* ============================================================
   6. ИНТЕРФЕЙСНЫЕ ФУНКЦИИ (UI)
   Кастомный селект, обработка кликов и анимации
   ============================================================ */

/**
 * Открывает/закрывает кастомный выпадающий список типов токена
 */
function toggleTokenSelect() {
    document.getElementById('tokenTypeContainer').classList.toggle('open');
}

/**
 * Обрабатывает выбор типа токена в кастомном меню
 */
function selectTokenType(name, value) {
    document.getElementById('selectedTokenText').innerText = name;
    document.getElementById('tokenType').value = value;
    document.getElementById('tokenTypeContainer').classList.remove('open');
    
    const trigger = document.querySelector('.select-trigger');
    trigger.style.borderColor = '#64ffda';
    setTimeout(() => trigger.style.borderColor = 'rgba(100, 255, 218, 0.2)', 500);
}

// Закрытие выпадающего списка при клике в любом месте экрана
window.addEventListener('click', function(e) {
    if (!document.getElementById('tokenTypeContainer').contains(e.target)) {
        document.getElementById('tokenTypeContainer').classList.remove('open');
    }
});

// Закрытие модального окна при клике на темный фон
window.onclick = function(event) {
    const modal = document.getElementById('tokenModal');
    if (event.target == modal) closeTokenModal();
}
