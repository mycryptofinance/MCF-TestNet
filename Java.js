// --- КОНФИГУРАЦИЯ МУЛЬТИЧЕЙН ---
const CONTRACT_CONFIG = {
    // Arc Testnet (Chain ID: 5042002)
    5042002: {
        networkName: "Arc Testnet",
        nativeTicker: "USDC",
        mcf: "0xe33A789a973F7ed878e72D03F8a505e794D9D468", 
        nft: "0x439CEcb4C22D595b15c7FD37de3E975AC1534cc8", 
        staking: "0xA7c8e23e9aed4b3057D884aa925C26904BF82795", 
        explorerUrl: "https://testnet.arcscan.app"
    },

    // Sepolia Testnet (Chain ID: 11155111)
    11155111: {
        networkName: "Sepolia",
        nativeTicker: "ETH",
        mcf: "0xb66008C221CE3699c7F50AebB07898695845e95f",
        nft: "0xda2384357a072818a7c1BC4Bbd79Edf22065c95A",
        staking: "0x825FC04C154053d9F1f697cd9522019224343fC9",
        explorerUrl: "https://sepolia.etherscan.io"
    },
    // BNB Smart Chain Testnet (Chain ID: 97)
    97: {
        networkName: "BNB Testnet",
        nativeTicker: "BNB",
        // НОВЫЙ АДРЕС КОНТРАКТА MCF ДЛЯ BNB TESTNET
        mcf: "0xB499CDDDdF296e247cCCABAB530cD21a8c36a0aA",
        nft: "0x620bc61e7344103F9e780c617445a28ab92a4ceF", // Используем Sepolia NFT/Staking для примера
        staking: "0x3BFbc2b79A3A1CC6FD6467dFdbE7240Eb7e64ac8", // Используем Sepolia NFT/Staking для примера
        explorerUrl: "https://testnet.bscscan.com"
    }
    // Добавьте Mainnet (1, 56) или Base (8453) при необходимости
};

// ABI для всех сетей (используется один и тот же MCF ABI, если функции не отличаются)
const MCF_ABI = [{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"address payable","name":"_treasuryWallet","type":"address"},{"internalType":"uint256","name":"_initialMintPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newTreasury","type":"address"}],"name":"setTreasuryWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAccidentalNativeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const NFT_ABI = ["function mintByMCF(uint256 editionId)", "function hasEditionMinted(address _addr, uint256 editionId) view returns (bool)"];
const STAKING_ABI = ["function stake(uint256 amount, uint8 tier)", "function unstake(uint8 tier)", "function calculateReward(address user, uint8 tier) view returns (uint256)", "function userStakes(address, uint8) view returns (uint256 amount, uint256 startTime, uint256 lockDuration)", "function tierConfigs(uint8) view returns (uint256 lockDuration, uint256 rewardMultiplier)"];


const STAKING_PLANS = [
    { id: 0, days: 0, apy: 5, label: "FLEXIBLE" },
    { id: 1, days: 7, apy: 10, label: "7 DAYS" },
    { id: 2, days: 30, apy: 15, label: "30 DAYS" },
    { id: 3, days: 90, apy: 25, label: "90 DAYS" }
];

const nftImages = [
    "https://olive-random-anteater-963.mypinata.cloud/ipfs/bafkreicwkh3wdpe4bec5aimnjirtp73sjfadkuwe3sikyatatguxbvfbp4", "https://olive-random-anteater-963.mypinata.cloud/ipfs/bafkreiacnj5vbnw32n2legauzdmlrn5377ifl5ozixp2em6uka5syfa5qe", "https://olive-random-anteater-963.mypinata.cloud/ipfs/bafkreiepkz7zfeyrb6u4u7pg7obechyrqei7l6iy7wc2fdfjm3ims6l2se", "https://olive-random-anteater-963.mypinata.cloud/ipfs/bafkreifnzbz6pr7wy7klmb5tknqi6mnfuh2bxdiy73t2llowdykdxu3boa", "https://olive-random-anteater-963.mypinata.cloud/ipfs/bafkreiaz2w5z7cjbz2ggcgfwovdhpimbipuueffemkw73wq3i7lk5uzifm", "https://olive-random-anteater-963.mypinata.cloud/ipfs/bafkreigkk4y57l7s4fsts5wsjjaqtoi362nmwqhassptuu4k46o3rpdvum", "https://olive-random-anteater-963.mypinata.cloud/ipfs/bafkreigdctqvwaosav37brqwxnglfrnie7puthgfsvvxmroybnqov4aayu", "https://olive-random-anteater-963.mypinata.cloud/ipfs/bafkreiaxboy632fm55nwaeg322d2qsdadzcg6gzhfcntktpdpab6nbmzdi"
];
const nftNames = ["EAGLE", "WOLF", "FOX", "BEAR", "HORSE", "BULL", "LION", "OWL"];

let provider, signer, mcfContract, nftContract, stakingContract;
let userAccount = null, isConnected = false;
let currentChainId = null; // Новая переменная для текущего Chain ID
let contractState = { mintPriceWei: ethers.BigNumber.from(0), tokensPerEth: 0 };
let selectedPlanId = 1;
let loadedStakes = [];

// --- INIT ---
const nftGrid = document.getElementById('nftGrid');
const plansContainer = document.getElementById('stakingPlans');
// Элементы, которые нужно обновить
const mintLabel = document.querySelector('.input-group label');
const mintCurrencySpan = document.querySelector('.input-wrapper .currency');


// Шаблон NFT с новой кнопкой
nftGrid.innerHTML = nftImages.map((img, i) => `
    <div class="nft-card">
        <div class="nft-image-container"><img src="${img}" class="nft-image" loading="lazy"></div>
        <div style="font-size:0.9rem; color:#fff; font-weight:bold; margin-top:5px;">${nftNames[i] || "Edition #" + (i + 1)}</div>
        <div style="font-size:0.8rem; color:var(--primary); margin-bottom:5px;">10,000 MCF</div>
        
        <div class="button-container" style="margin-top: auto;">
            <button class="space-button btn-mint-nft" id="btn-nft-${i+1}" onclick="mintNFT(${i+1})" disabled style="padding: 12px 25px;">
                <div class="bright-particles"></div>
                <span id="btn-text-nft-${i+1}">Connect</span>
            </button>
        </div>
    </div>`).join('');

function renderPlans() {
    plansContainer.innerHTML = STAKING_PLANS.map(plan => `
        <div class="plan-card ${plan.id === selectedPlanId ? 'selected' : ''}" onclick="selectPlan(${plan.id})">
            <div class="plan-duration">${plan.label}</div>
            <div class="plan-apy">${plan.apy}<span>%</span></div>
        </div>`).join('');
    calcStakeReward();
}
renderPlans();

function selectPlan(id) { selectedPlanId = id; renderPlans(); }
document.getElementById('stakeAmount').addEventListener('input', calcStakeReward);

function calcStakeReward() {
    const amt = parseFloat(document.getElementById('stakeAmount').value) || 0;
    const plan = STAKING_PLANS.find(p => p.id === selectedPlanId);
    let reward = plan.days === 0 ? amt * (plan.apy / 100) / 365 : amt * (plan.apy / 100) * (plan.days / 365);
    document.getElementById('stakeRewardCalc').innerText = plan.days === 0 ? `~${reward.toFixed(2)} / DAY` : `+${reward.toFixed(2)} MCF`;
}

// --- LOGIC ---

/**
 * Инициализирует контракты на основе текущего Chain ID.
 */
function setupContracts(chainId, signerOrProvider) {
    const config = CONTRACT_CONFIG[chainId];
    if (!config) {
        console.error("Unsupported Chain ID:", chainId);
        return false;
    }
    
    mcfContract = new ethers.Contract(config.mcf, MCF_ABI, signerOrProvider);
    nftContract = new ethers.Contract(config.nft, NFT_ABI, signerOrProvider);
    stakingContract = new ethers.Contract(config.staking, STAKING_ABI, signerOrProvider);
    return true;
}

async function connect() {
    if (!window.ethereum) return alert("Install MetaMask");
    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        userAccount = await signer.getAddress();
        
        const net = await provider.getNetwork();
        currentChainId = net.chainId;

        // Инициализация контрактов в соответствии с текущей сетью
        const contractsReady = setupContracts(currentChainId, signer);
        if (!contractsReady) {
            alert(`Unsupported network (${currentChainId}). Please switch to Sepolia (11155111) or BNB Testnet (97).`);
            isConnected = false;
            updateUI();
            return;
        }

        isConnected = true;
        await updateBalances();
        updateUI();
        updateMintUI(); // Обновляем UI минта
        fetchMCFData();
        checkNFTs();
        loadRealStakes();
        
        window.ethereum.on('accountsChanged', () => window.location.reload());
        window.ethereum.on('chainChanged', () => window.location.reload());

    } catch (e) { console.error(e); openModal('error', "Connection Error"); }
}

/**
 * Обновляет текст в разделе минта в зависимости от текущей сети.
 */
function updateMintUI() {
    const config = CONTRACT_CONFIG[currentChainId];
    if (config) {
        // Обновляем текст в метке
        if (mintLabel) {
            mintLabel.innerText = `You Pay (${config.nativeTicker})`;
        }
        // Обновляем тикер в инпуте
        if (mintCurrencySpan) {
            mintCurrencySpan.innerText = config.nativeTicker;
        }
        // Обновляем тикер в цене
        const priceDisplay = document.getElementById('priceDisplay');
        if (priceDisplay) {
            priceDisplay.innerText = priceDisplay.innerText.replace(/(ETH|BNB)/, config.nativeTicker);
        }
    }
}

function updateUI() {
    const shortAddr = userAccount.substring(0, 6) + "..." + userAccount.substring(userAccount.length - 4);
    document.getElementById('connectBtn').innerText = shortAddr;
    document.getElementById('connectBtn').classList.add("connected");
    
    // ОБНОВЛЕНИЕ ТЕКСТА КНОПОК
    const mintSpan = document.getElementById('mintBtnText');
    if (mintSpan) mintSpan.innerText = "BUY TOKENS";
    document.getElementById('mintBtn').disabled = false;
    
    document.querySelectorAll('.btn-mint-nft').forEach((b, index) => {
        const span = b.querySelector('span'); 
        if (span) span.innerText = "MINT";
        b.disabled = false;
    });
    
    // Обновление кнопки переключения сетей
    const netConfig = CONTRACT_CONFIG[currentChainId];
    const btn = document.getElementById('networkBtn');
    if(btn && netConfig) {
        btn.innerText = netConfig.networkName;
    } else if(btn) {
        btn.innerText = "Wrong Net";
    }
}

document.getElementById('connectBtn').addEventListener('click', () => { if(!isConnected) connect(); else window.location.reload(); });

async function mintToken() {
    if (!isConnected || !mcfContract) return;
    const val = document.getElementById('mintAmountEth').value;
    if(!val) return;
    openModal('loading', "Confirm Transaction...");
    try {
        const ethVal = ethers.utils.parseEther(val);
        // Используем 10^18 для расчета количества токенов (стандартная точность)
        const tokensToMintInUnits = ethVal.div(contractState.mintPriceWei); 
        
        const tx = await mcfContract.mint(tokensToMintInUnits, { value: ethVal });
        openModal('loading', "Minting...");
        const receipt = await tx.wait();
        
        const tokenAmount = tokensToMintInUnits.toLocaleString('en-US');
    
        openModal('success', `Successful Mint!`, receipt.transactionHash, `Received ${tokenAmount} MCF`);

        fetchMCFData();
        updateBalances();
        await updateBalances();
    } catch(e) { openModal('error', e.reason || e.message); }
}

async function transferToken() {
    if (!isConnected || !mcfContract) return;
    const to = document.getElementById('recipientAddress').value;
    const amt = document.getElementById('sendAmount').value;
    if(!ethers.utils.isAddress(to) || !amt) return alert("Invalid Input");
    openModal('loading', "Transferring...");
    try {
        const val = ethers.utils.parseEther(amt);
        const tx = await mcfContract.transfer(to, val);
        const receipt = await tx.wait();
        openModal('success', `Successful Sending!`, receipt.transactionHash, `Sent ${amt} MCF`);
        await updateBalances();
    } catch(e) { openModal('error', e.reason || e.message); }
}

async function mintNFT(id) {
    if (!isConnected || !mcfContract || !nftContract) return;
    openModal('loading', "Checking...");
    try {
        const price = ethers.utils.parseEther("10000");
        const allow = await mcfContract.allowance(userAccount, nftContract.address);
        if(allow.lt(price)) {
            openModal('loading', "Approve MCF...");
            const txApp = await mcfContract.approve(nftContract.address, price);
            await txApp.wait();
        }
        openModal('loading', "Minting NFT...");
        const tx = await nftContract.mintByMCF(id);
        const receipt = await tx.wait();
        const nftName = nftNames[id - 1] || `Edition #${id}`;
        openModal('success', `NFT successfully mined`, receipt.transactionHash, `NFT received: ${nftName}`);
        checkNFTs();
        await updateBalances();
    } catch(e) { openModal('error', e.reason || e.message); }
}

async function stakeTokens() {
    if (!isConnected || !mcfContract || !stakingContract) return alert("Connect Wallet!");
    const amt = document.getElementById('stakeAmount').value;
    if(!amt || amt <= 0) return alert("Enter Amount");
    const planId = selectedPlanId; 
    const plan = STAKING_PLANS.find(p => p.id === planId);
    openModal('loading', "Checking Allowance...");
    try {
        const weiAmt = ethers.utils.parseEther(amt);
        const allowance = await mcfContract.allowance(userAccount, stakingContract.address);
        if(allowance.lt(weiAmt)) {
            openModal('loading', "Approve Staking...");
            const txApp = await mcfContract.approve(stakingContract.address, weiAmt);
            await txApp.wait();
        }
        openModal('loading', "Staking...");
        const txStake = await stakingContract.stake(weiAmt, planId);
        const receipt = await txStake.wait();
        openModal('success', `Successful Staking!`, receipt.transactionHash, `Staked ${amt} MCF on ${plan.label}`);
        loadRealStakes(); 
        await updateBalances();
    } catch (e) { console.error(e); openModal('error', e.reason || e.message); }
}

async function loadRealStakes() {
    // Проверка, что контракты инициализированы для текущей сети
    if (!stakingContract) return;
    const container = document.getElementById('userStakesList');
    container.innerHTML = '<p style="text-align:center; color: #888;">Fetching blockchain data...</p>';
    loadedStakes = [];
    try {
        for (let i = 0; i < 4; i++) {
            const stakeData = await stakingContract.userStakes(userAccount, i);
            if (stakeData.amount.gt(0)) {
                const reward = await stakingContract.calculateReward(userAccount, i);
                loadedStakes.push({
                    tierId: i,
                    amount: ethers.utils.formatEther(stakeData.amount),
                    startTime: stakeData.startTime.toNumber(),
                    lockDuration: stakeData.lockDuration.toNumber(),
                    reward: ethers.utils.formatEther(reward),
                    label: STAKING_PLANS[i].label,
                    isFlexible: i === 0
                });
            }
        }
        renderStakesUI();
    } catch (e) { container.innerHTML = '<p style="text-align:center; color: var(--error);">Error loading stakes</p>'; }
}

function renderStakesUI() {
    const container = document.getElementById('userStakesList');
    if (loadedStakes.length === 0) {
        container.innerHTML = '<p style="text-align:center; color: #666; font-size: 0.8rem;">No active stakes found.</p>';
        return;
    }
    container.innerHTML = loadedStakes.map((stake) => `
        <div class="stake-row">
            <div class="stake-header"><span>${stake.label}</span><span>${parseFloat(stake.amount).toFixed(0)} MCF</span></div>
            <div style="display:flex; justify-content:space-between; color:#aaa; font-size:0.8rem;">
                <span>Reward: <b style="color:#fff;">+${parseFloat(stake.reward).toFixed(2)}</b></span>
                <span class="stake-timer" id="timer-tier-${stake.tierId}">Loading...</span>
            </div>
            <button class="btn-claim" id="btn-claim-${stake.tierId}" onclick="claimStake(${stake.tierId})" disabled>LOCKED</button>
        </div>`).join('');
}

setInterval(() => {
    if(!loadedStakes.length) return;
    const now = Math.floor(Date.now() / 1000);
    loadedStakes.forEach(stake => {
        const el = document.getElementById(`timer-tier-${stake.tierId}`);
        const btn = document.getElementById(`btn-claim-${stake.tierId}`);
        if(!el) return;
        if(stake.isFlexible) {
            el.innerText = "Accruing...";
            btn.disabled = false;
            btn.innerText = "UNSTAKE & CLAIM";
        } else {
            const endTime = stake.startTime + stake.lockDuration;
            const left = endTime - now;
            if(left <= 0) {
                el.innerText = "Unlocked"; el.style.color = "#00ff88";
                btn.disabled = false;
                btn.innerText = "CLAIM & UNSTAKE";
            } else {
                const d = Math.floor(left / 86400);
                const h = Math.floor((left % 86400) / 3600);
                const m = Math.floor((left % 3600) / 60);
                const s = left % 60;
                el.innerText = `${d}d ${h}h ${m}m ${s}s`;
            }
        }
    });
}, 1000);

async function claimStake(tierId) {
    if (!stakingContract) return;
    openModal('loading', "Unstaking...");
    try {
        const tx = await stakingContract.unstake(tierId);
        const receipt = await tx.wait();
        openModal('success', `Successful Stake Removal!`, receipt.transactionHash, `Your tokens and rewards have been returned.`);
        loadRealStakes();
        await updateBalances();
    } catch (e) { openModal('error', e.reason || e.message); }
}

function getExplorerUrl(txHash) {
    const config = CONTRACT_CONFIG[currentChainId] || CONTRACT_CONFIG[5042002]; // По умолчанию Sepolia
    return `${config.explorerUrl}/tx/${txHash}`;
}

async function updateBalances() {
    if (!provider || !userAccount) return;
    try {
        const net = await provider.getNetwork();
        currentChainId = net.chainId; // Убеждаемся, что Chain ID актуален
        const config = CONTRACT_CONFIG[currentChainId];
        
        // Переинициализируем контракты, если сеть изменилась (на всякий случай)
        if (!mcfContract || mcfContract.address !== config.mcf) {
             setupContracts(currentChainId, signer);
        }


        const nativeBalanceWei = await provider.getBalance(userAccount);
        const formattedNative = parseFloat(ethers.utils.formatEther(nativeBalanceWei)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
        
        let mcfFormatted = "0";
        if (mcfContract) {
            const mcfBalanceWei = await mcfContract.balanceOf(userAccount);
            const mcfNum = parseFloat(ethers.utils.formatEther(mcfBalanceWei));
            if (mcfNum > 0) mcfFormatted = mcfNum.toLocaleString('en-US', { maximumFractionDigits: 2 });
        }
        
        document.getElementById('nativeBalanceDisplay').innerText = formattedNative;
        document.getElementById('nativeTicker').innerText = config ? config.nativeTicker : "NATIVE";
        document.getElementById('mcfBalanceDisplay').innerText = mcfFormatted;

        updateMintUI(); // Обновляем UI после получения балансов и тикера
    } catch (e) {
        console.error("Update Balances Error:", e);
    }
}

async function fetchMCFData() {
    if(!mcfContract) return;
    try {
        const price = await mcfContract.mintPrice();
        contractState.mintPriceWei = price;
        const total = await mcfContract.totalSupply();
        const max = await mcfContract.MAX_SUPPLY();
        const remaining = max.sub(total);
        
        // Получаем тикер для отображения цены
        const config = CONTRACT_CONFIG[currentChainId] || CONTRACT_CONFIG[5042002]; 
        const nativeTicker = config.nativeTicker;


        document.getElementById('soldDisplay').innerText = parseFloat(ethers.utils.formatEther(remaining)).toLocaleString('ru-RU', { maximumFractionDigits: 0 });
        document.getElementById('priceDisplay').innerText = ethers.utils.formatEther(price) + " " + nativeTicker;
        
        const pct = total.mul(100).div(max).toNumber();
        document.getElementById('supplyBar').style.width = pct + "%";
        document.getElementById('progressText').innerText = `${parseFloat(ethers.utils.formatEther(total)).toLocaleString('ru-RU')} / ${parseFloat(ethers.utils.formatEther(max)).toLocaleString('ru-RU')} SOLD`;
    } catch(e){
        console.error("Fetch MCF Data Error:", e);
    }
}

async function checkNFTs() {
    if(!nftContract) return;
    for(let i=1; i<=8; i++) {
        try {
            const done = await nftContract.hasEditionMinted(userAccount, i);
            const btn = document.getElementById(`btn-nft-${i}`);
            if(!btn) continue;
            
            if(done) { 
                const span = btn.querySelector('span');
                if(span) span.innerText = "ALREADY MINTED"; 
                btn.disabled = true; 
                btn.classList.add('owned'); 
                // Убираем свечение контейнера
                if(btn.parentElement && btn.parentElement.classList.contains('button-container')) {
                    btn.parentElement.style.background = 'transparent';
                    btn.parentElement.style.boxShadow = 'none';
                    btn.parentElement.style.animation = 'none';
                }
            }
        } catch(e){}
    }
}

// Новая функция для добавления сети BNB Testnet в MetaMask
const addBNBTestnet = async () => {
    try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: '0x61', // 97 in Hex
                chainName: 'BNB Smart Chain Testnet',
                nativeCurrency: {
                    name: 'tBNB',
                    symbol: 'tBNB',
                    decimals: 18,
                },
                rpcUrls: ['https://data-seed-pre-2-s1.binance.org:8545'],
                blockExplorerUrls: ['https://testnet.bscscan.com/'],
            }],
        });
        return true;
    } catch (error) {
        console.error("Failed to add BNB Testnet", error);
        return false;
    }
};

const addArcNetwork = async () => {
    try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: '0x4CEE52',
                chainName: 'Arc Testnet',
                nativeCurrency: { name: 'USDC', symbol: 'USDC', decimals: 18 },
                rpcUrls: ['https://rpc.testnet.arc.network'],
                blockExplorerUrls: ['https://testnet.arcscan.app'],
            }],
        });
        return true;
    } catch (e) { return false; }
};


async function switchNetwork(chainId) {
    if (chainId === 5042002) await addArcNetwork();
    if (chainId === 97) await addBNBTestnet();
    if (chainId === 3945) await addNexusNetwork();
    
    try { 
        await window.ethereum.request({ 
            method: 'wallet_switchEthereumChain', 
            params: [{ chainId: ethers.utils.hexValue(parseInt(chainId)) }] 
        });
    } catch(e) { 
        if(e.code !== 4902) openModal('error', "Switch failed"); 
    }
}



// Обновленный блок для калькулятора минта
const mintEthInput = document.getElementById('mintAmountEth');
mintEthInput.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    if (contractState.mintPriceWei.gt(0) && inputValue) {
        try {
            // Парсим значения для расчета
            const ethAmount = parseFloat(inputValue);
            const ethPrice = parseFloat(ethers.utils.formatEther(contractState.mintPriceWei));
            
            if (ethPrice > 0) {
                // Расчет: Общая сумма ETH / (Цена одного токена в ETH)
                const tokens = ethAmount / ethPrice;
                const formattedTokens = tokens.toLocaleString('ru-RU', { maximumFractionDigits: 4 });
                document.getElementById('calcOutput').innerText = formattedTokens + " MCF";
            } else {
                document.getElementById('calcOutput').innerText = "0 MCF";
            }
        } catch (error) {
            document.getElementById('calcOutput').innerText = "0 MCF";
        }
    } else {
        document.getElementById('calcOutput').innerText = "0 MCF";
    }
});

// Feature 1: MAX Functions
async function setMaxMint() {
    if(!provider || !userAccount) return;
    const bal = await provider.getBalance(userAccount);
    const gasBuffer = ethers.utils.parseEther("0.005");
    let maxVal = bal.sub(gasBuffer);
    if(maxVal.lt(0)) maxVal = ethers.BigNumber.from(0);
    document.getElementById('mintAmountEth').value = ethers.utils.formatEther(maxVal);
    document.getElementById('mintAmountEth').dispatchEvent(new Event('input'));
}

async function setMaxStake() {
    if(!mcfContract || !userAccount) return;
    const bal = await mcfContract.balanceOf(userAccount);
    document.getElementById('stakeAmount').value = ethers.utils.formatEther(bal);
    document.getElementById('stakeAmount').dispatchEvent(new Event('input'));
}

async function setMaxSend() {
    if(!mcfContract || !userAccount) return;
    const bal = await mcfContract.balanceOf(userAccount);
    document.getElementById('sendAmount').value = ethers.utils.formatEther(bal);
}

// Feature 2: Add Token Function
async function addTokenToWallet() {
    const config = CONTRACT_CONFIG[currentChainId] || CONTRACT_CONFIG[11155111]; 
    try {
        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: { address: config.mcf, symbol: 'MCF', decimals: 18 },
            },
        });
    } catch (error) { console.error(error); }
}

function openModal(type, title, txHash = null, details = null) {
    const m = document.getElementById('txModal'); m.style.display='flex';
    let iconHtml = '', detailsHtml = '';

    switch (type) {
        case 'loading':
            iconHtml = '<div class="spinner"></div>';
            document.getElementById('modalDesc').innerText = title;
            break;
        case 'success':
            iconHtml = '✅';
            document.getElementById('modalDesc').innerText = title; 
            if (details) detailsHtml += `<p style="font-size: 0.9rem; color: #ccc; margin-top: 5px;">${details}</p>`;
            if (txHash && provider) {
                const explorerUrl = getExplorerUrl(txHash);
                const shortHash = txHash.substring(0, 6) + '...' + txHash.substring(txHash.length - 4);
                document.getElementById('modalIcon').innerHTML = iconHtml;
                document.getElementById('modalDesc').innerHTML = `
                    <h3 style="margin: 0; color: var(--primary);">${title}</h3>
                    ${detailsHtml}
                    <div style="margin-top: 10px; font-size: 0.8rem;">
                        <span style="color: #888;">TX Hash: </span>
                        <a href="${explorerUrl}" target="_blank" style="color: var(--primary); text-decoration: none; font-weight: bold;">${shortHash} ↗</a>
                    </div>`;
                return; 
            }
            break;
        case 'error':
            iconHtml = '❌';
            document.getElementById('modalDesc').innerText = `Error: ${title}`;
            break;
    }
    document.getElementById('modalIcon').innerHTML = iconHtml;
    document.getElementById('modalDesc').innerHTML = `<h3 style="margin: 0; color: ${type==='success'?'var(--primary)':'var(--error)'};">${title}</h3>`;
    if (type === 'error') document.getElementById('modalDesc').innerText = title;
}

function closeModal() { document.getElementById('txModal').style.display='none'; }

document.getElementById('networkBtn').addEventListener('click', function() { document.getElementById('networkDropdown').classList.toggle('show'); });
window.onclick = function(event) {
    if (!event.target.matches('.network-select')) {
        const dropdown = document.getElementById('networkDropdown');
        if (dropdown && dropdown.classList.contains('show')) dropdown.classList.remove('show');
    }
}
function switchNetworkByValue(chainId, chainName) {
    document.getElementById('networkBtn').innerText = chainName;
    currentChainId = chainId; // Обновляем текущий Chain ID
    updateMintUI(); // Обновляем UI сразу после выбора
    switchNetwork(chainId); 
    document.getElementById('networkDropdown').classList.remove('show');
}

const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let width, height, snowflakes = [];

// Установка размеров холста
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

// Создание снежинки
function createSnowflakes() {
    const count = 250; // Количество снежинок
    snowflakes = [];
    for (let i = 0; i < count; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            opacity: Math.random(),
            speedX: Math.random() * 1 - 0.3,
            speedY: Math.random() * 1 + 1,
            radius: Math.random() * 2 + 1
        });
    }
}

// Рисование и анимация
function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // Белый цвет с прозрачностью
    ctx.beginPath();

    for (let flake of snowflakes) {
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        
        // Движение
        flake.y += flake.speedY;
        flake.x += flake.speedX;

        // Если снежинка улетела вниз — возвращаем её наверх
        if (flake.y > height) {
            flake.y = -flake.radius;
            flake.x = Math.random() * width;
        }
    }
    
    ctx.fill();
    requestAnimationFrame(draw);
}

createSnowflakes();
draw();
