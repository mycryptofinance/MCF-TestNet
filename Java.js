// --- КОНФИГУРАЦИЯ МУЛЬТИЧЕЙН ---
const CONTRACT_CONFIG = {
    11155111: {
        networkName: "Sepolia",
        nativeTicker: "ETH",
        mcf: "0xb66008C221CE3699c7F50AebB07898695845e95f",
        nft: "0xda2384357a072818a7c1BC4Bbd79Edf22065c95A",
        staking: "0x825FC04C154053d9F1f697cd9522019224343fC9",
        explorerUrl: "https://sepolia.etherscan.io"
    },
    3945: {
        networkName: "Nexus Testnet",
        nativeTicker: "NEX",
        mcf: "0xb66008C221CE3699c7F50AebB07898695845e95f",
        nft: "0xda2384357a072818a7c1BC4Bbd79Edf22065c95A", 
        staking: "0x825FC04C154053d9F1f697cd9522019224343fC9",
        explorerUrl: "https://nexus.testnet.blockscout.com" 
    },
    5042002: {
        networkName: "Arc Testnet",
        nativeTicker: "USDC",
        mcf: "0x...", 
        nft: "0x...", 
        staking: "0x...", 
        explorerUrl: "https://testnet.arcscan.app"
    },
    97: {
        networkName: "BNB Testnet",
        nativeTicker: "BNB",
        mcf: "0xB499CDDDdF296e247cCCABAB530cD21a8c36a0aA",
        nft: "0x620bc61e7344103F9e780c617445a28ab92a4ceF",
        staking: "0x3BFbc2b79A3A1CC6FD6467dFdbE7240Eb7e64ac8",
        explorerUrl: "https://testnet.bscscan.com"
    }
};

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
let currentChainId = null;
let contractState = { mintPriceWei: ethers.BigNumber.from(0), tokensPerEth: 0 };
let selectedPlanId = 1;
let loadedStakes = [];

// Инициализация интерфейса
const nftGrid = document.getElementById('nftGrid');
const plansContainer = document.getElementById('stakingPlans');
const mintLabel = document.querySelector('.input-group label');
const mintCurrencySpan = document.querySelector('.input-wrapper .currency');

if(nftGrid) {
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
}

function renderPlans() {
    if(!plansContainer) return;
    plansContainer.innerHTML = STAKING_PLANS.map(plan => `
        <div class="plan-card ${plan.id === selectedPlanId ? 'selected' : ''}" onclick="selectPlan(${plan.id})">
            <div class="plan-duration">${plan.label}</div>
            <div class="plan-apy">${plan.apy}<span>%</span></div>
        </div>`).join('');
    calcStakeReward();
}
renderPlans();

function selectPlan(id) { selectedPlanId = id; renderPlans(); }

const stakeInput = document.getElementById('stakeAmount');
if(stakeInput) stakeInput.addEventListener('input', calcStakeReward);

function calcStakeReward() {
    const amt = parseFloat(document.getElementById('stakeAmount')?.value) || 0;
    const plan = STAKING_PLANS.find(p => p.id === selectedPlanId);
    let reward = plan.days === 0 ? amt * (plan.apy / 100) / 365 : amt * (plan.apy / 100) * (plan.days / 365);
    const display = document.getElementById('stakeRewardCalc');
    if(display) display.innerText = plan.days === 0 ? `~${reward.toFixed(2)} / DAY` : `+${reward.toFixed(2)} MCF`;
}

function setupContracts(chainId, signerOrProvider) {
    const config = CONTRACT_CONFIG[chainId];
    if (!config) return false;
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

        if (!setupContracts(currentChainId, signer)) {
            alert(`Unsupported network. Please switch to supported network.`);
            isConnected = false;
            updateUI();
            return;
        }

        isConnected = true;
        await updateBalances();
        updateUI();
        updateMintUI();
        fetchMCFData();
        checkNFTs();
        loadRealStakes();
        window.ethereum.on('accountsChanged', () => window.location.reload());
        window.ethereum.on('chainChanged', () => window.location.reload());
    } catch (e) { console.error(e); openModal('error', "Connection Error"); }
}

function updateMintUI() {
    const config = CONTRACT_CONFIG[currentChainId];
    if (config) {
        if (mintLabel) mintLabel.innerText = `You Pay (${config.nativeTicker})`;
        if (mintCurrencySpan) mintCurrencySpan.innerText = config.nativeTicker;
        const priceDisplay = document.getElementById('priceDisplay');
        if (priceDisplay) priceDisplay.innerText = priceDisplay.innerText.replace(/(ETH|BNB|NEX)/, config.nativeTicker);
    }
}

function updateUI() {
    const shortAddr = userAccount.substring(0, 6) + "..." + userAccount.substring(userAccount.length - 4);
    const connBtn = document.getElementById('connectBtn');
    if(connBtn) {
        connBtn.innerText = shortAddr;
        connBtn.classList.add("connected");
    }
    const mintSpan = document.getElementById('mintBtnText');
    if (mintSpan) mintSpan.innerText = "BUY TOKENS";
    
    const mintBtn = document.getElementById('mintBtn');
    if(mintBtn) mintBtn.disabled = false;

    document.querySelectorAll('.btn-mint-nft').forEach((b) => {
        const span = b.querySelector('span'); 
        if (span) span.innerText = "MINT";
        b.disabled = false;
    });
    
    const netConfig = CONTRACT_CONFIG[currentChainId];
    const netBtn = document.getElementById('networkBtn');
    if(netBtn && netConfig) netBtn.innerText = netConfig.networkName;
}

const connectBtn = document.getElementById('connectBtn');
if(connectBtn) {
    connectBtn.addEventListener('click', () => { if(!isConnected) connect(); else window.location.reload(); });
}

// --- ФУНКЦИИ ДОБАВЛЕНИЯ СЕТЕЙ ---
const addBNBTestnet = async () => {
    try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: '0x61', chainName: 'BNB Smart Chain Testnet',
                nativeCurrency: { name: 'tBNB', symbol: 'tBNB', decimals: 18 },
                rpcUrls: ['https://data-seed-pre-2-s1.binance.org:8545'],
                blockExplorerUrls: ['https://testnet.bscscan.com/'],
            }],
        });
        return true;
    } catch (e) { return false; }
};

const addNexusNetwork = async () => {
    try {
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId: '0xF69',
                chainName: 'Nexus Testnet',
                nativeCurrency: { name: 'Nexus', symbol: 'NEX', decimals: 18 },
                rpcUrls: ['https://testnet.rpc.nexus.xyz'],
                blockExplorerUrls: ['https://nexus.testnet.blockscout.com'],
            }],
        });
        return true;
    } catch (e) { return false; }
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
    if (chainId === 97) await addBNBTestnet();
    if (chainId === 3945) await addNexusNetwork();
    if (chainId === 5042002) await addArcNetwork();
    
    try { 
        await window.ethereum.request({ 
            method: 'wallet_switchEthereumChain', 
            params: [{ chainId: ethers.utils.hexValue(parseInt(chainId)) }] 
        });
    } catch(e) { 
        if(e.code !== 4902) openModal('error', "Switch failed"); 
    }
}

// ОСНОВНАЯ ФУНКЦИЯ ДЛЯ КНОПОК В СПИСКЕ (как в HTML onclick)
function switchNetworkByValue(chainId, name) {
    const btn = document.getElementById('networkBtn');
    if(btn) btn.innerText = name;
    
    const dropdown = document.getElementById('networkDropdown');
    if(dropdown) dropdown.classList.remove('show');
    
    switchNetwork(chainId);
}

// ОБРАБОТЧИКИ КЛИКОВ МЕНЮ
const networkBtn = document.getElementById('networkBtn');
if(networkBtn) {
    networkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = document.getElementById('networkDropdown');
        if(dropdown) dropdown.classList.toggle('show');
    });
}

window.addEventListener('click', () => {
    const dropdown = document.getElementById('networkDropdown');
    if(dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});

// --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ---
async function updateBalances() {
    if (!provider || !userAccount) return;
    try {
        const net = await provider.getNetwork();
        currentChainId = net.chainId;
        const config = CONTRACT_CONFIG[currentChainId];
        if (config && (!mcfContract || mcfContract.address !== config.mcf)) setupContracts(currentChainId, signer);
        
        const nativeBalanceWei = await provider.getBalance(userAccount);
        const displayNative = document.getElementById('nativeBalanceDisplay');
        if(displayNative) displayNative.innerText = parseFloat(ethers.utils.formatEther(nativeBalanceWei)).toFixed(4);
        
        const ticker = document.getElementById('nativeTicker');
        if(ticker) ticker.innerText = config ? config.nativeTicker : "NATIVE";
        
        if (mcfContract) {
            const mcfBal = await mcfContract.balanceOf(userAccount);
            const displayMcf = document.getElementById('mcfBalanceDisplay');
            if(displayMcf) displayMcf.innerText = parseFloat(ethers.utils.formatEther(mcfBal)).toFixed(2);
        }
    } catch (e) { console.error(e); }
}

async function fetchMCFData() {
    if(!mcfContract) return;
    try {
        const price = await mcfContract.mintPrice();
        contractState.mintPriceWei = price;
        const total = await mcfContract.totalSupply();
        const max = await mcfContract.MAX_SUPPLY();
        const remaining = max.sub(total);
        const config = CONTRACT_CONFIG[currentChainId] || CONTRACT_CONFIG[11155111];
        
        const soldDisplay = document.getElementById('soldDisplay');
        if(soldDisplay) soldDisplay.innerText = parseFloat(ethers.utils.formatEther(remaining)).toLocaleString();
        
        const priceDisplay = document.getElementById('priceDisplay');
        if(priceDisplay) priceDisplay.innerText = ethers.utils.formatEther(price) + " " + config.nativeTicker;
        
        const bar = document.getElementById('supplyBar');
        if(bar) {
            const pct = total.mul(100).div(max).toNumber();
            bar.style.width = pct + "%";
        }
    } catch(e){ console.error(e); }
}

// --- ОСТАЛЬНЫЕ ФУНКЦИИ (MINT, STAKE И Т.Д.) ---
async function mintToken() {
    if (!isConnected || !mcfContract) return;
    const val = document.getElementById('mintAmountEth').value;
    if(!val) return;
    openModal('loading', "Confirm Transaction...");
    try {
        const ethVal = ethers.utils.parseEther(val);
        const tokensToMintInUnits = ethVal.div(contractState.mintPriceWei); 
        const tx = await mcfContract.mint(tokensToMintInUnits, { value: ethVal });
        const receipt = await tx.wait();
        openModal('success', `Successful Mint!`, receipt.transactionHash, `Received ${tokensToMintInUnits.toLocaleString()} MCF`);
        fetchMCFData(); updateBalances();
    } catch(e) { openModal('error', e.reason || e.message); }
}

async function stakeTokens() {
    if (!isConnected || !mcfContract || !stakingContract) return alert("Connect Wallet!");
    const amt = document.getElementById('stakeAmount').value;
    if(!amt || amt <= 0) return alert("Enter Amount");
    openModal('loading', "Processing...");
    try {
        const weiAmt = ethers.utils.parseEther(amt);
        const allowance = await mcfContract.allowance(userAccount, stakingContract.address);
        if(allowance.lt(weiAmt)) {
            const txApp = await mcfContract.approve(stakingContract.address, weiAmt);
            await txApp.wait();
        }
        const txStake = await stakingContract.stake(weiAmt, selectedPlanId);
        await txStake.wait();
        openModal('success', `Staked ${amt} MCF`);
        loadRealStakes(); await updateBalances();
    } catch (e) { openModal('error', e.reason || e.message); }
}

async function loadRealStakes() {
    if (!stakingContract || !userAccount) return;
    const container = document.getElementById('userStakesList');
    if(!container) return;
    loadedStakes = [];
    try {
        for (let i = 0; i < 4; i++) {
            const stakeData = await stakingContract.userStakes(userAccount, i);
            if (stakeData.amount.gt(0)) {
                const reward = await stakingContract.calculateReward(userAccount, i);
                loadedStakes.push({
                    tierId: i, amount: ethers.utils.formatEther(stakeData.amount),
                    startTime: stakeData.startTime.toNumber(), lockDuration: stakeData.lockDuration.toNumber(),
                    reward: ethers.utils.formatEther(reward), label: STAKING_PLANS[i].label, isFlexible: i === 0
                });
            }
        }
        renderStakesUI();
    } catch (e) { console.error(e); }
}

function renderStakesUI() {
    const container = document.getElementById('userStakesList');
    if(!container) return;
    if (loadedStakes.length === 0) {
        container.innerHTML = '<p style="text-align:center; color: #666; font-size: 0.8rem;">No active stakes.</p>';
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

async function claimStake(tierId) {
    if (!stakingContract) return;
    openModal('loading', "Unstaking...");
    try {
        const tx = await stakingContract.unstake(tierId);
        await tx.wait();
        openModal('success', `Success!`);
        loadRealStakes(); await updateBalances();
    } catch (e) { openModal('error', e.reason || e.message); }
}

async function checkNFTs() {
    if(!nftContract || !userAccount) return;
    for(let i=1; i<=8; i++) {
        try {
            const done = await nftContract.hasEditionMinted(userAccount, i);
            const btn = document.getElementById(`btn-nft-${i}`);
            if(done && btn) { 
                btn.querySelector('span').innerText = "OWNED"; 
                btn.disabled = true; btn.classList.add('owned'); 
            }
        } catch(e){}
    }
}

async function mintNFT(id) {
    if (!isConnected || !mcfContract || !nftContract) return;
    openModal('loading', "Minting NFT...");
    try {
        const price = ethers.utils.parseEther("10000");
        const allow = await mcfContract.allowance(userAccount, nftContract.address);
        if(allow.lt(price)) {
            const txApp = await mcfContract.approve(nftContract.address, price);
            await txApp.wait();
        }
        const tx = await nftContract.mintByMCF(id);
        await tx.wait();
        openModal('success', `NFT Minted!`);
        checkNFTs(); await updateBalances();
    } catch(e) { openModal('error', e.reason || e.message); }
}

function openModal(type, title, txHash = null, details = null) {
    const m = document.getElementById('txModal'); 
    if(!m) return;
    m.style.display='flex';
    let iconHtml = (type === 'loading') ? '<div class="spinner"></div>' : (type === 'success' ? '✅' : '❌');
    document.getElementById('modalIcon').innerHTML = iconHtml;
    document.getElementById('modalDesc').innerHTML = `<h3>${title}</h3><p>${details||''}</p>`;
}
function closeModal() { 
    const m = document.getElementById('txModal');
    if(m) m.style.display='none'; 
}

// Максимальные значения
async function setMaxMint() {
    const bal = await provider.getBalance(userAccount);
    const gas = ethers.utils.parseEther("0.005");
    let max = bal.sub(gas);
    const input = document.getElementById('mintAmountEth');
    if(input) {
        input.value = ethers.utils.formatEther(max.gt(0)?max:0);
        input.dispatchEvent(new Event('input'));
    }
}
async function setMaxStake() {
    const bal = await mcfContract.balanceOf(userAccount);
    const input = document.getElementById('stakeAmount');
    if(input) {
        input.value = ethers.utils.formatEther(bal);
        calcStakeReward();
    }
}
