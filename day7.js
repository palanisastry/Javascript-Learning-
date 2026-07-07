//craete a function with 2 numbers
function add(a,b){
    return a+b;
    }
add(5,10);
console.log(add(10,20));

//craete a function expression multiply with 2 numbers  
const multiply = (a,b) => {
    return a*b;
    }
console.log(multiply(5,10));

//Create anaymous function to print welcome javascript
const welcome =function(){
    console.log("welcome to javascript");
    }
welcome();

//create an arrow function to calculate print the square of two numbers
const square = (num) => {
    return num*num;
}
console.log(square(5));

//create a function with default paramemter
function greet1(name ="guest"){
    console.log(name);
    }
    greet1();
    greet1("palani");

//use a rest parameter to calculate the total of 10 20 30 40 50 60
function total(...numbers) {
    return numbers.reduce((sum, value) => sum + value, 0);
}
console.log(total(10, 20, 30, 40, 50, 60));



//create 2 fucntions with spread opertions
const fruits1 =["apple", "banana", "mango"];
const fruits2 =["orange", "grapes", "kiwi"];    
const allFruits =[...fruits1,...fruits2];
console.log(allFruits);

//create a call back program with 2 functions
function greet(callback, name) {
    console.log("Hello " + name);
}
greet();

function processUser(name){
    console.log("PAlani");
    }
    greet(processUser,"Palani");

//create a program with for each style
const browsers = ["safari", "chrome", "Mozilla"];
browsers.forEach((browser) => {
    console.log("Launching" +browser);
});
