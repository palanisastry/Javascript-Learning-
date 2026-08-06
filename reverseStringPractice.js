// for each loop
let word ="Javascript";
let reserword = "";
word.split("").forEach((char)=>{
    reserword = char + reserword;
});
console.log(reserword);

 //with for loop
 let word1 = "PALANISASTRY";
 let resword= "";
 for (let i=word1.length-1;i>=0;i--){
    resword += word1[i];
 }
 console.log(resword); 

 //with built in methods

 let word2 ="I love Automation python with JAVASCRIPT";
 let resword2 = word2.split("").reverse().join("");
 console.log(resword2);

 

 console.log("Hello, World!");
