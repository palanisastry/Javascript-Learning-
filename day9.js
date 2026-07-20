//create a class for employee and using objects
class Employee{
 constructor(name,company,experience) {
    this.name=name;
    this.company=company;
    this.experience=experience;

 }  
}
let emp =new Employee(
    "palani",
    "emudhra",
    9);

console.log("Name:",emp.name);
console.log("Company:",emp.company);
console.log("Experience",emp.experience);
 
// using with showDetails function using print the emaployee details
class Employee1{
 constructor(name,company,experience) {
    this.name=name;
    this.company=company;
    this.experience=experience;
 }  

showDetails(){
 console.log("Name:",this.name);
console.log("Company:",this.company);
console.log("Experience",this.experience);   
}
}
const emp1= new Employee1("Palanisastry","TCS",9);
emp1.showDetails();


//creating parent class for using the same method

class Person{
    constructor(person){
        this.person = person;
    }
}
class Walk extends Person{
    constructor(person, walking){
        super(person);
        this.walk = walking;
    }
}
const walker = new Walk("person", "walking");
console.log(walker.person, walker.walk);


//use constructor + super keyword
class Designation extends Employee {
    constructor(name, company, experience, designation) {
        super(name, company, experience);
        this.designation = designation;
    }
}
const designation = new Designation("palani", "emudhra", 9, "QA Lead");
console.log(designation.name, designation.designation);


//create a bank account program in that inaitial 10000,deposite 5000 & withdran 13000 and banlance amount i want display

class BankAccount{
    constructor(balance) {
        this.balance=balance;
        }
    deposite(amount){
        this.balance +=amount;
        }
    withdraw(amount){
            this.balance -=amount;
            }
    getBalance(){
                return this.balance;
                }
}
const account=new BankAccount(10000);
account.deposite(5000);
account.withdraw(13000);
console.log(account.getBalance());


//print the value
// Write a Java program that prints 'Hello, World!' to the console.


let string = "Hello";
console.log(string +", World!");