// --- КОНФИГУРАЦИЯ МУЛЬТИЧЕЙН ---
const CONTRACT_CONFIG = {
    // Sepolia Testnet (Chain ID: 11155111)
    11155111: {
        networkName: "Sepolia",
        nativeTicker: "ETH",
        mcf: "0xb66008C221CE3699c7F50AebB07898695845e95f",
        nft: "0xda2384357a072818a7c1BC4Bbd79Edf22065c95A",
        staking: "0x825FC04C154053d9F1f697cd9522019224343fC9",
        explorerUrl: "https://sepolia.etherscan.io"
    },
    // Nexus Testnet (Chain ID: 3945)
    3945: {
        networkName: "Nexus Testnet",
        nativeTicker: "NEX",
        mcf: "0xb66008C221CE3699c7F50AebB07898695845e95f",
        nft: "0xda2384357a072818a7c1BC4Bbd79Edf22065c95A", 
        staking: "0x825FC04C154053d9F1f697cd9522019224343fC9",
        explorerUrl: "https://nexus.testnet.blockscout.com" 
    },
    // Arc Testnet (Chain ID: 5042002)
    5042002: {
        networkName: "Arc Testnet",
        nativeTicker: "USDC",
        mcf: "0x...", 
        nft: "0x...", 
        staking: "0x...", 
        explorerUrl: "https://testnet.arcscan.app"
    },
    // BNB Smart Chain Testnet (Chain ID: 97)
    97: {
        networkName: "BNB Testnet",
        nativeTicker: "BNB",
        mcf: "0xB499CDDDdF296e247cCCABAB530cD21a8c36a0aA",
        nft: "0x620bc61e7344103F9e780c617445a28ab92a4ceF",
        staking: "0x3BFbc2b79A3A1CC6FD6467dFdbE7240Eb7e64ac8",
        explorerUrl: "https://testnet.bscscan.com"
    }
};

const MCF_ABI = [{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"address payable","name":"_treasuryWallet","type":"address"},{"internalType":"uint256","name":"_initialMintPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newTreasury","type":"address"}],"name":"setTreasuryWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAccidentalNativeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
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

const nftGrid = document.getElementById('nftGrid');
const plansContainer = document.getElementById('stakingPlans');
const mintLabel = document.querySelector('.input-group label');
const mintCurrencySpan = document.querySelector('.input-wrapper .currency');

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
    document.getElementById('connectBtn').innerText = shortAddr;
    document.getElementById('connectBtn').classList.add("connected");
    const mintSpan = document.getElementById('mintBtnText');
    if (mintSpan) mintSpan.innerText = "BUY TOKENS";
    document.getElementById('mintBtn').disabled = false;
    document.querySelectorAll('.btn-mint-nft').forEach((b, index) => {
        const span = b.querySelector('span'); 
        if (span) span.innerText = "MINT";
        b.disabled = false;
    });
    const netConfig = CONTRACT_CONFIG[currentChainId];
    const btn = document.getElementById('networkBtn');
    if(btn && netConfig) btn.innerText = netConfig.networkName;
}

document.getElementById('connectBtn').addEventListener('click', () => { if(!isConnected) connect(); else window.location.reload(); });

async function mintToken() {
    if (!isConnected || !mcfContract) return;
    const val = document.getElementById('mintAmountEth').value;
    if(!val) return;
    openModal('loading', "Confirm Transaction...");
    try {
        const ethVal = ethers.utils.parseEther(val);
        const tokensToMintInUnits = ethVal.div(contractState.mintPriceWei); 
        const tx = await mcfContract.mint(tokensToMintInUnits, { value: ethVal });
        openModal('loading', "Minting...");
        const receipt = await tx.wait();
        openModal('success', `Successful Mint!`, receipt.transactionHash, `Received ${tokensToMintInUnits.toLocaleString()} MCF`);
        fetchMCFData(); updateBalances();
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
        openModal('success', `NFT successfully mined`, receipt.transactionHash, `NFT received: ${nftNames[id-1]}`);
        checkNFTs(); await updateBalances();
    } catch(e) { openModal('error', e.reason || e.message); }
}

async function stakeTokens() {
    if (!isConnected || !mcfContract || !stakingContract) return alert("Connect Wallet!");
    const amt = document.getElementById('stakeAmount').value;
    if(!amt || amt <= 0) return alert("Enter Amount");
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
        const txStake = await stakingContract.stake(weiAmt, selectedPlanId);
        const receipt = await txStake.wait();
        openModal('success', `Successful Staking!`, receipt.transactionHash, `Staked ${amt} MCF`);
        loadRealStakes(); await updateBalances();
    } catch (e) { openModal('error', e.reason || e.message); }
}

async function loadRealStakes() {
    if (!stakingContract) return;
    const container = document.getElementById('userStakesList');
    container.innerHTML = '<p style="text-align:center; color: #888;">Fetching data...</p>';
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
    } catch (e) { container.innerHTML = '<p style="text-align:center; color: var(--error);">Error</p>'; }
}

function renderStakesUI() {
    const container = document.getElementById('userStakesList');
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

setInterval(() => {
    if(!loadedStakes.length) return;
    const now = Math.floor(Date.now() / 1000);
    loadedStakes.forEach(stake => {
        const el = document.getElementById(`timer-tier-${stake.tierId}`);
        const btn = document.getElementById(`btn-claim-${stake.tierId}`);
        if(!el) return;
        if(stake.isFlexible) {
            el.innerText = "Accruing..."; btn.disabled = false; btn.innerText = "UNSTAKE & CLAIM";
        } else {
            const endTime = stake.startTime + stake.lockDuration;
            const left = endTime - now;
            if(left <= 0) {
                el.innerText = "Unlocked"; el.style.color = "#00ff88"; btn.disabled = false; btn.innerText = "CLAIM & UNSTAKE";
            } else {
                const d = Math.floor(left / 86400), h = Math.floor((left % 86400) / 3600), m = Math.floor((left % 3600) / 60), s = left % 60;
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
        await tx.wait();
        openModal('success', `Success!`);
        loadRealStakes(); await updateBalances();
    } catch (e) { openModal('error', e.reason || e.message); }
}

function getExplorerUrl(txHash) {
    const config = CONTRACT_CONFIG[currentChainId] || CONTRACT_CONFIG[11155111];
    return `${config.explorerUrl}/tx/${txHash}`;
}

async function updateBalances() {
    if (!provider || !userAccount) return;
    try {
        const net = await provider.getNetwork();
        currentChainId = net.chainId;
        const config = CONTRACT_CONFIG[currentChainId];
        if (config && (!mcfContract || mcfContract.address !== config.mcf)) setupContracts(currentChainId, signer);
        const nativeBalanceWei = await provider.getBalance(userAccount);
        document.getElementById('nativeBalanceDisplay').innerText = parseFloat(ethers.utils.formatEther(nativeBalanceWei)).toFixed(4);
        document.getElementById('nativeTicker').innerText = config ? config.nativeTicker : "NATIVE";
        if (mcfContract) {
            const mcfBal = await mcfContract.balanceOf(userAccount);
            document.getElementById('mcfBalanceDisplay').innerText = parseFloat(ethers.utils.formatEther(mcfBal)).toFixed(2);
        }
        updateMintUI();
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
        document.getElementById('soldDisplay').innerText = parseFloat(ethers.utils.formatEther(remaining)).toLocaleString();
        document.getElementById('priceDisplay').innerText = ethers.utils.formatEther(price) + " " + config.nativeTicker;
        const pct = total.mul(100).div(max).toNumber();
        document.getElementById('supplyBar').style.width = pct + "%";
        document.getElementById('progressText').innerText = `${parseFloat(ethers.utils.formatEther(total)).toLocaleString()} / ${parseFloat(ethers.utils.formatEther(max)).toLocaleString()} SOLD`;
    } catch(e){ console.error(e); }
}

async function checkNFTs() {
    if(!nftContract) return;
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

// Функции добавления сетей
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
        if(e.code === 4902) {
             console.log("Network needs to be added first.");
        } else {
             openModal('error', "Switch failed"); 
        }
    }
}

function switchNetworkByValue(chainId, name) {
    const btn = document.getElementById('networkBtn');
    if(btn) btn.innerText = name;
    
    const dropdown = document.getElementById('networkDropdown');
    if(dropdown) dropdown.classList.remove('show');
    
    switchNetwork(chainId);
}

// Обработчик кнопки меню
document.getElementById('networkBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = document.getElementById('networkDropdown');
    if(dropdown) dropdown.classList.toggle('show');
});

// Закрытие при клике в любое другое место
window.addEventListener('click', () => {
    const dropdown = document.getElementById('networkDropdown');
    if(dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});

document.getElementById('mintAmountEth').addEventListener('input', (e) => {
    const val = e.target.value;
    if (contractState.mintPriceWei.gt(0) && val) {
        const tokens = parseFloat(val) / parseFloat(ethers.utils.formatEther(contractState.mintPriceWei));
        document.getElementById('calcOutput').innerText = tokens.toFixed(2) + " MCF";
    }
});

async function setMaxMint() {
    const bal = await provider.getBalance(userAccount);
    const gas = ethers.utils.parseEther("0.005");
    let max = bal.sub(gas);
    document.getElementById('mintAmountEth').value = ethers.utils.formatEther(max.gt(0)?max:0);
    document.getElementById('mintAmountEth').dispatchEvent(new Event('input'));
}
async function setMaxStake() {
    const bal = await mcfContract.balanceOf(userAccount);
    document.getElementById('stakeAmount').value = ethers.utils.formatEther(bal);
    calcStakeReward();
}
async function setMaxSend() {
    const bal = await mcfContract.balanceOf(userAccount);
    document.getElementById('sendAmount').value = ethers.utils.formatEther(bal);
}

async function addTokenToWallet() {
    const config = CONTRACT_CONFIG[currentChainId] || CONTRACT_CONFIG[11155111]; 
    try {
        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: { type: 'ERC20', options: { address: config.mcf, symbol: 'MCF', decimals: 18 } },
        });
    } catch (e) {}
}

function openModal(type, title, txHash = null, details = null) {
    const m = document.getElementById('txModal'); 
    if(!m) return;
    m.style.display='flex';
    let iconHtml = '';
    if(type === 'loading') iconHtml = '<div class="spinner"></div>';
    else if(type === 'success') iconHtml = '✅';
    else iconHtml = '❌';
    document.getElementById('modalIcon').innerHTML = iconHtml;
    document.getElementById('modalDesc').innerHTML = `<h3>${title}</h3><p>${details||''}</p>`;
}

function closeModal() { 
    const m = document.getElementById('txModal');
    if(m) m.style.display='none'; 
}
