const prompt=require("prompt-sync")();
function amountToCoins(amount, CoinsList) {
    CoinsList.sort((a, b) => b - a);

    const result = [];

    for (let i = 0; i < CoinsList.length; i++) {
        const coin = CoinsList[i];

        while (amount >= coin) {
            result.push(coin);
            amount -= coin;
        }
    }

    return result;
}

// Example usage
const amount = prompt("Enter amount");
const CoinsList = [];
for(i=0;i<5;i++){
    CoinsList[i]=prompt();
}
const coinsNeeded = amountToCoins(amount, CoinsList);

console.log(coinsNeeded); // Output: [25, 10, 10, 1]
