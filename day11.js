//Print employee names using forEach()
let employee=["Palani","Kiran","Rama"];
employee.forEach(emp=>console.log(emp));

//find a squares using map()

let numbers=[1,2,3,4,5];
let square = numbers.map(num=>num*num);
console.log(square);

//Filter numbers greater than 50.
 
let numb=[10,20,70,50,120,160];
let maxvalue = numb.filter(num1=> num1 > 50);
console.log(maxvalue);

//Find "Palani" using find().

let empl=employee.find(emp2=>emp2==="Palani");
console.log(empl);

//Find the index of "John".
let people =["Aran","John","Ravan"];
console.log(people.findIndex(ppl=>ppl==="John"));

//Sum all numbers using reduce().
let abc = [10,20,30,40,50];
let totalvalue=abc.reduce((sum,num)=>sum+num,0);
console.log(totalvalue);
//Check if any number is greater than 100 using some().
let grtval=[20,100,150];
console.log(grtval.some(grt=>grt>=100));

//Check if all numbers are positive using every().
let posevery= [20,35,85,99];
console.log(posevery.every(pos=>pos=>35));

//Sort numbers in ascending and descending order.
let ascdec=[540,20,10,607,18];
ascdec.sort((a,b)=>a-b);
console.log(ascdec);
ascdec.sort((a,b)=>b-a);
console.log(ascdec);


//Reverse an array.
let data1=[1,5,7,9,6,3,4];
data1.reverse();
console.log(data1);

//Remove duplicate values.
let duplicate=[1,1,2,3,2,3,4,3,2,4,5];
let unique=[...new Set(duplicate)];
console.log(unique);
//Find the largest and smallest number.
let largest=[30,70,40,60,90];
console.log("largest value is " + Math.max(...largest));
console.log("smallest value is " + Math.min(...largest));

//Create an array of employee objects and print their details.
let staff =[{Name:"Ramya",
             Company :"Emudhra",
             Experience:9.6
            },
            {
             Name:"Raghav",
             Company :"TCS",
             Experience:6
            },
            {
             Name:"Narendra",
             Company :"CTS",
             Experience:6.3
            },
            {
             Name:"Krishna",
             Company :"TCS",
             Experience:6.1
            }];
        staff.forEach(staf=>{console.log(staf.Name)});

//Print only employee names using map().
let names =staff.map(staf=>staf.Name);
console.log(names);

//Filter employees with experience greater than or equal to 8 years.
let seniorEmployee=staff.filter(staf=>staf.Experience>=8);
console.log(seniorEmployee);

//print the reverse string value 
const resText ="TYPESCRIPT";
const afterRevText=resText.split("").reverse().join().toLowerCase();
console.log(afterRevText);
//timed out 3 secs program
console.log("start");
setTimeout(() => {
    console.log("inside timed out")
}, 3000);
console.log("End");

//callback
function greet(name , callback){
console.log("Hello" , + name);
callback();
}
function end(){
    console.log("good boy");
}
greet("Palani", end);
