const prompt=require("prompt-sync")();
let possibleCombinations = (str) => {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}
let a=prompt("ENTER STRING : ") 
console.log(possibleCombinations(a));