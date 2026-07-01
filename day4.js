//create function to welcome
function welcome(){
    console.log("Welcome to the javascript program!");
}
welcome();

//login with different user names

function login(name){
    console.log("Hello" +name);
}
login("Palani");
login("Ravi");
login("john");

//return function with 2 values
function add(a,b){
    return a+b;
   // return a*b;
}
console.log(add(5,10)); 
//console.log(mutiply(2,3));

function test(c,d){
    return c*d;
}
console.log(test(2,3));

//print all the values
let company = "Emudhra";
let experience = 9.6;
let city = "Bengaluru";
let salary = 1232000;
function printDetails(company, experience, city, salary){
    console.log("Company:", company);
    console.log("Experience:", experience);
    console.log("City:", city);
    console.log("Salary:", salary);
}
printDetails(company, experience, city, salary);

//create arrow function to calculate square of a number
const square  = (num) => {
    return num*num;
}
console.log(square(5));

//valid login credentails with username and password
const validLogin = (username, password) => {
    if(username === "admin" && password === "admin123"){
        return "Login successful.";
    }
    else{
        return "Invalid username or password.";
    }
}
console.log(validLogin("admin", "admin123"));
console.log(validLogin("user", "password"));
