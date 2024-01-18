const prompt=require("prompt-sync")();
var n=prompt("ENTER SIZE");
let a=[];
for(i=0;i<n;i++){
    a[i]=prompt();
}
var r=prompt("ENTER NO. OF ROTATION :")
for(j=0;j<r-1;j++){
  var temp = a[n-1];
      for( i = n-1; i>0; i--){
         a[i] = a[i-1];
      }
      a[0] = temp;
    }
for(i=0;i<n;i++){
    console.log(a[i]);
}