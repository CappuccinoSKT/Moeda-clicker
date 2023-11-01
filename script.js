let coins = 0;
let clickValue = 1; // Valor padrão de moedas ganhas por clique
let upgradeCost = 20; // Custo da atualização para dobrar o valor por clique

// Obtém elementos do DOM
const coinDisplay = document.getElementById("coins");
const clickButton = document.getElementById("clickButton");
const upgradeButton = document.getElementById("upgradeButton");

// Atualiza o display de moedas
function updateCoinDisplay() {
    coinDisplay.textContent = coins;
}

// Atualiza o texto do botão de atualização
function updateUpgradeButton() {
    upgradeButton.textContent = `Comprar atualização (Custa ${upgradeCost} moedas)`;
}

// Adiciona moedas quando o botão é clicado
clickButton.addEventListener("click", () => {
    coins += clickValue;
    updateCoinDisplay();
});

// Compra a atualização para dobrar o valor por clique
upgradeButton.addEventListener("click", () => {
    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        clickValue *= 2; // Dobra o valor por clique
        upgradeCost *= 2; // Dobra o custo da próxima atualização
        updateCoinDisplay();
        updateUpgradeButton();
    }
});

// Chama as funções de atualização iniciais
updateCoinDisplay();
updateUpgradeButton();

alert("tenha pacincia e jogue");