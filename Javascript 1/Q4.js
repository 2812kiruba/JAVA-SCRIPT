const prompt=require("prompt-sync")();
let num=prompt("entere number");
let str=num.toString();
let a=str.split('');
let rev=a.reverse();
let reverse=rev.join('');
let final=parseInt(reverse,10);
console.log(final);