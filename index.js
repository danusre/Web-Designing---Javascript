/*-----------Task 1 ----------------------*/
/*1. Positive Number Check: Write a JavaScript program that accepts a number and uses a simple 
if statement to display "Positive Number" only when the entered number is greater than 0.*/


/*
let a = Number(prompt("Enter your number : "))

if(a>0)
{
    console.log(a+"Positive Number");
}
else{
    console.log("invalid Number");
}

/*2. Voting Eligibility: Write a JavaScript program that accepts a person's age and
uses if...else to display "Eligible to Vote" when the age is 18 or above,
otherwise display "Not Eligible to Vote".

let age = Number(prompt("Enter your Age : "))

if(age>=18)
{
    console.log(age +"Eligible to Vote")
}
else{
    console.log(age+"Not Eligible for Vote")
}*/

/*3. Even or Odd: Write a JavaScript program that accepts an integer and uses if...else
to check whether the number is even or odd and display the appropriate result.

let a =Number(prompt("enter your number : "))

if(a%2==0)
{
    console.log(a+"is an even number");
    
}
else{
    console.log(a+"is an odd number");
    
}
4. Number Classification: Write a JavaScript program that accepts a number and uses
else if to determine whether it is positive, negative, or zero.

let a = Number(prompt("number : "))

if(a>0)
{
    console.log(a+"Positive number");
    
}
else if(a<0)
{
    console.log(a+"negative nuber");
}
else if(a==0)
{
    console.log(a+"zero");
}
else{
    console.log("invalid number");
    
}

5. Student Grade: Write a JavaScript program that accepts a student's mark and uses
an else if ladder to display A, B, C, D, or F according to suitable mark ranges.*/

let a = Number(prompt("Enter your Tamil Mark"))
let b = Number(prompt("Enter your English Mark"))
let c = Number(prompt("Enter your Maths Mark"))
let d = Number(prompt("Enter your Science Mark"))
let e = Number(prompt("Enter your Social Mark"))
let total = a+b+c+d+e
console.log("total is "+total);
let avg = total/5
console.log("average is "+avg);

if(avg>90)
{
    console.log("Grade A");   
}
else if(avg>80)
{
    console.log("Grade B")
}
else if(avg>70)
{
    console.log("Grade C")
}
else if(avg>60)
{
    console.log("Grade D")
}
else if(avg>50)
{
    console.log("Grade E");
    
}
else if(avg<50)
{
    console.log("Grade F")
}
else{
    console.log("Fail");
}
