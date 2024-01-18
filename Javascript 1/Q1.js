const prompt=require("prompt-sync")();
var a;
var b;
a=prompt("Enter word :");
b=prompt("Enter word :");
let str1=a.split("");
let str2=b.split("");
str1.sort();
str2.sort();
let l1=str1.length;
let l2=str2.length;
var c=0;
if(l1!=l2)
console.log("Not a Anagram");
else{
    for(let i=0;i<l1;i++){
        if(str1[i]==str2[i])
        c++;
    }
    if(c==l1)
    console.log("Anagram");
    else
    console.log("Not a Anagram");
}
