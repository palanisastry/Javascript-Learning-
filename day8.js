//print the values
let a = "Start";
let b = "Middle";
let c = "End";
console.log(a);
console.log(b);
console.log(c);

//use set time program
console.log("Start");
setTimeout(() =>{
    console.log("Hello after 3 seconds");
}, 3000);
console.log("End");

//create call back function 
function download(callback){
    console.log("downloading...");
    callback();
}

function completed(){
    console.log("download completed");
}
download(completed);

//create a program
const promise = new Promise((resolve, reject) => {
    let success1 = true;

    if (success1) {
        resolve("Login Successful");
    } else {
        reject("Login Failed");
    }
});

promise
    .then((message) => console.log(message))
    .catch((error) => console.error(error));

//create a async program welcome palani
async function greet()
{
    return "welcome Palani";
}
greet().then(console.log);

//create a async program using awit method
function waitTwoSeconds() {
        return new Promise(resolve => 
            {
                setTimeout(() => 
                    {
                        resolve("Done");
                    },2000);
            });
}
async function start(){
    console.log("start");
    const result = await waitTwoSeconds();
    console.log("Start");
    console.log("End");
}
start();

