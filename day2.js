let age =25;
if(age >= 18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You are not eligible to vote.");
}

let username = "admin";
let password = "admin123";
if(username ==="admin" && password ==="admin123"){
    console.log("Login successful.");
}
else{
    console.log("Invalid username or password.");
}       

let marks  = 82;
if(marks >= 90){
    console.log("Grade: A");
}       
else if(marks >= 80){
    console.log("Grade: B");
}   
else if(marks >= 70){
    console.log("Grade: C");
}
else if(marks >= 60){
    console.log("Grade: D");
}
else{
    console.log("Grade: F");
}   

let browser = "Firefox";
switch(browser){
    case "Chrome":
        console.log("You are using Chrome browser.");
        break;
    case "Firefox":
        console.log("You are using Firefox browser.");
        break;
    case "Safari":
        console.log("You are using Safari browser.");
        break;
    default:
        console.log("You are using an unknown browser.");
}
let balance = 10000;
let withdrawAmount = 15000;
if(withdrawAmount <= balance){
    balance -= withdrawAmount;
    console.log("Withdrawal successful. Remaining balance:", balance);
}
else{
    console.log("Insufficient balance. Withdrawal failed.");
}

