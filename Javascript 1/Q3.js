const prompt=require("prompt-sync")();
var n=prompt("ENTER SIZE: ");
let a=[];
for(i=0;i<n;i++){
    a[i]=prompt();
}
console.log("THE NUMBERS ARE: ");
for(i=0;i<n;i++){
    if(a[i]%2==0)
    console.log(a[i]);
}