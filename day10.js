//Practcing the String  in JS
//Print your full name
let name = "hemmanuru palani kumar";
console.log(name);
//Find the length of your name.
console.log(name.length);

//Convert your company name to uppercase.
let company = "emudhra";
console.log(company.toUpperCase());
//Convert "JAVASCRIPT" to lowercase
let language ="JAVASCRIPT";
console.log(language.toLowerCase());
//Find the first occurrence of "a" in "Palani".
console.log("Palani".indexOf("a"));
//Check if "Playwright" contains "wright".
let course ="Playwright";
console.log(course.endsWith("wright"));
//Replace "Java" with "JS" in "JavaScript".
let language2= "JavaScript";
console.log(language2.replaceAll("Java","JS"));
//Remove spaces from " Hello World ".
let greet=" Hello World ";
console.log(greet.trim());
//Split "Apple,Mango,Orange" into an array.
let fruits ="Apple,Mango,Orange";
console.log(fruits.split(","));
//Reverse the string "Automation".
let testingType="Automation";
let reverse = testingType.split("").reverse().join("");
console.log(reverse);
//given name is palindrome 
let palin=name.split("").reverse().join("");
console.log(name===palin);

//check the given word vowels count
let text ="Automation";
let count =0;
for (let ch of text.toLowerCase())
{
    if("aeious".includes(ch)){
        count++;
    }
}
console.log("voewls:",count);

