// --- КОНФИГУРАЦИЯ (ЗАГЛУШКИ) ---
const GM_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"count","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"GMSent","type":"event"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getGMStatus","outputs":[{"internalType":"bool","name":"canClaim","type":"bool"},{"internalType":"uint256","name":"timeLeft","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"gmCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastGM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sayGM","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const GM_ADDRESSES = {
    5042002: "0x3D61e47dF17BF638329Cd975cf8B449F13113f53",
    46630: "0xC9FcA60F832412C4fCfEB6D13E06657c8c55dE0c",
    97: "0xe33A789a973F7ed878e72D03F8a505e794D9D468"
};

let gmCountdown;

// Вызывать эту функцию при подключении кошелька и ПРИ СМЕНЕ СЕТИ
async function checkGMStatus() {
    const btn = document.getElementById('gmBtn');
    const timerText = document.getElementById('gmTimerText');
    const countDisplay = document.getElementById('userGmCount'); // ID твоего счетчика в HTML

    if (!isConnected || !signer) return;

    try {
        const network = await provider.getNetwork();
        const gmAddr = GM_ADDRESSES[network.chainId];
        const userAddr = await signer.getAddress();

        if (!gmAddr) {
            if (btn) btn.innerText = "UNSUPPORTED NETWORK";
            return;
        }

        const contract = new ethers.Contract(gmAddr, GM_ABI, signer);
        
        // ВЫЗОВ КОНТРАКТА
        const status = await contract.getGMStatus(userAddr);
        
        // Распределяем данные из ответа контракта
        const canClaim = status.canClaim;   // Доступность
        const timeLeft = status.timeLeft;   // Время ожидания
        const totalGms = status.count;      // ТВОЙ СЧЕТЧИК

        // 1. Обновляем счетчик на экране
        if (countDisplay) {
            countDisplay.innerText = totalGms.toString();
        }

        // 2. Логика кнопки и таймера
        if (canClaim) {
            if (btn) {
                btn.innerText = "SAY GM!";
                btn.classList.remove('gm-btn-disabled');
                btn.classList.add('gm-ready');
            }
            if (timerText) timerText.innerText = "Ready to claim your daily GM!";
        } else {
            // Если уже нажимали, запускаем таймер
            startGMTimer(parseInt(timeLeft));
        }

        console.log(`User has ${totalGms} total GMs on network ${network.chainId}`);

    } catch (error) {
        console.error("Failed to check GM status:", error);
    }
}

function startGMTimer(seconds) {
    const btn = document.getElementById('gmBtn');
    const timerText = document.getElementById('gmTimerText');
    
    btn.classList.add('gm-btn-disabled');
    btn.classList.remove('gm-ready');

    if (gmCountdown) clearInterval(gmCountdown);

    gmCountdown = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
            clearInterval(gmCountdown);
            checkGMStatus();
            return;
        }

        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        
        btn.innerText = "GM CLAIMED";
        timerText.innerText = `Next GM in: ${h}h ${m}m ${s}s`;
    }, 1000);
}

async function handleGM() {
    try {
        const network = await provider.getNetwork();
        const gmAddr = GM_ADDRESSES[network.chainId];
        
        if (!gmAddr) {
            alert("Please switch to a supported network!");
            return;
        }

        const contract = new ethers.Contract(gmAddr, GM_ABI, signer);

        // 1. Запускаем транзакцию
        const tx = await contract.sayGM();
        
        // Меняем текст на кнопке
        const btnText = document.getElementById('gmBtnText');
        if (btnText) btnText.innerText = "TRANSACTION PENDING...";
        
        console.log("Transaction sent:", tx.hash);

        // 2. ЖДЕМ подтверждения в блокчейне (1 блок)
        const receipt = await tx.wait();
        console.log("Transaction confirmed:", receipt);

        // 3. Формируем ссылку на эксплорер в зависимости от сети
        let explorerUrl = "";
        if (network.chainId === 46630) {
            explorerUrl = `https://robinhood.testnet.socialscan.io/tx/${tx.hash}`;
        } else if (network.chainId === 5042002) {
            explorerUrl = `https://testnet.arcscan.app/tx/${tx.hash}`;
        } else if (network.chainId === 97) {
            explorerUrl = `https://testnet.bscscan.com/tx/${tx.hash}`;
        }

        // 4. Показываем красивое модальное окно (используем твою структуру)
        showGMSuccessModal(tx.hash, explorerUrl);

        // 5. Обновляем состояние кнопки и запускаем таймер
        checkGMStatus();

    } catch (error) {
        console.error("GM error:", error);
        // Возвращаем текст кнопке при ошибке
        checkGMStatus(); 
        
        if (error.code === 4001) {
            alert("User rejected the transaction");
        } else {
            alert("Transaction failed! Check console for details.");
        }
    }
}

// Функция для вызова модального окна (адаптируй под свои ID)
function showGMSuccessModal(hash, url) {
    const modal = document.getElementById('txModal'); // Твое ID модалки
    const modalIcon = document.getElementById('modalIcon');
    const modalDesc = document.getElementById('modalDesc');

    if (modalIcon) modalIcon.innerHTML = '<div style="font-size: 50px; color: #64ffda;">✔</div>';
    
    if (modalDesc) {
        modalDesc.innerHTML = `
            <h3>Successful GM!</h3>
            <p>Your daily activity recorded.</p>
            <p>TX Hash: <a href="${url}" target="_blank" style="color: #64ffda; text-decoration: none;">
                ${hash.substring(0, 10)}...${hash.substring(hash.length - 4)} ↗
            </a></p>
        `;
    }

    if (modal) modal.style.display = 'flex';
}

window.ethereum.on('chainChanged', () => {
    window.location.reload(); // Самый простой способ обновить статус контрактов

});


