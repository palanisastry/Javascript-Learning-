//Synchronous JavaScript
console.log("day1");
console.log("day2");
console.log("day3");


//Asynchronous JavaScript
console.log("start");
setTimeout(()=>{
    console.log("Inside Timedout")
},3000);

console.log("end");

//Callback Function
function greet(name,callback){
    console.log("Good morning " + name);
    callback();
}
function user(){
    console.log("have a good day!")
    }
 greet("Palani", user);   

//Promise Basics
let promise = new Promise((resolve,reject) =>
{
    let success= true;
    if (success)
    {
        resolve("login successful");
    }
    else{
        reject("login failed");
    }
});
promise
.then(result=>console.log(result))
.catch(error => console.log(error));

//Promise States
//Promise Creation
function login(){
let promise = new Promise((reject,resolve)
{
    let user =true;
    if(user){
        resolve("login successful");
    }
    else{
        reject("login failed");
    }
});
login.then(data=>console.log(data)).catch(error =>console.log(error));
}
/*
await
try...catch
setTimeout()
setInterval()
A real-world login example
A Playwright async/await example (using comments if you don't want to execute it)
*/
