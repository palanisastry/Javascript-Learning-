//craeting the employee details with an object
let employee = { name: "Palani",
                company: "Emudhra",
                expierience: 9.6,
                city: "Bengaluru",
                salary: 1232000,
               
            };
console.log("Employee Details:", employee);

//I wnat to update the location bengaluru to chennai
employee.city = "Chennai";
console.log("Updated Employee Details:", employee);

//I want to add the designation to employee table
const designation = "Test Lead";
employee.designation = designation;
console.log("Employee Details with Designation:", employee);

//delete the salary from employee table
delete employee.salary;
console.log("employee details after deleting the salary:", employee);


//creation of student method with an object
let student = {
    name: "Palani",
    showDetails() {
        console.log("Student Name: " + this.name + "Course: JavaScript");
    }
};
student.showDetails();
 
//craeted nested object with student, address and print the details
let student1 = {
    name: "Palani", 
    company: "Emudhra", 
    address: {
       name: "Palani",
        city: "Bengaluru",
        state: "Karnataka",}
        }

        console.log("Student Details:", student1);
        console.log("Address Details:", student1.address);

//use for..in loop to iterate through employee table
for (let key in employee) {
    console.log(key + ": " + employee[key]);
}       
