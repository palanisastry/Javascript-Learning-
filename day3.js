//print 1 to 20 numbers using for loop
for(let i=1; i<=20; i++){
    console.log(i);
}
//Print even numbers from 2 to 20 using for loop
for(let i=2; i<=20; i++)
    { 
     if(i%2 === 0)
        {
            console.log(i);
        }
    }

//Print odd numbers from 1 to 19.
for(let i=1; i<20; i++)
    {
    if(i % 2 !==0)
        {
            console.log(i);
        }
    }   

//Print numbers from 20 down to 1.
for(let i=20;i>=1;i--)
{
    console.log(i);
}

//find the sum of numbers from 1 to 10

let sum=0;
for(let i=1;i<=10;i++){
    sum+=i;
    }
console.log("Sum:", sum);

//Use a while loop to print numbers 1 to 10.
let i=0;
while(i<10){
    console.log(i);
    i++;
    }
//use do while loop to print numbers 1 to 5
let j=1;
do{
    console.log(j);
     j++;
}
while(j<=5)


//print 1st line * up to 5th line ****** 
const lines = 5;
for (let i = 0; i < lines; i++) 
    {
        let stars = "*";
            for (let j = 0 ; j < i; j++)
                {
                    stars += "*";
                }
    console.log(stars);
    }


    //break statement 

    let a= 0;
    while(a<10){
        a++;
        if(a===7){
            break;
        }
        console.log(a);
    }
//continue statement
    let b = 0;
    do{ b++
        if(b===7)
            { 
              continue;   
            }
            console.log(b);
        }
       
    while(b<10)
        //console.log(b);