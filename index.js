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
6. Largest of Two Numbers: Write a JavaScript program that accepts two numbers and 
uses if...else to compare them and display the larger number or "Both are Equal"
when they are the same.


let a = Number(prompt("Enter your first number : "))
let b = Number(prompt("Enter your second number : "))

if(a>b)
{
    console.log(a+" is greater than "+b);
}
else if(a<b)
{
    console.log(b+" is greater than "+a);
}
else
{
    console.log("Both are equal");
}
    
7. Login Validation: Write a JavaScript program that accepts a username and password
and uses nested if statements to first check whether the username is correct and then
check whether the password is correct, displaying an appropriate login message.
let username =prompt("enter your name : ")
let password =prompt("enter your password : ")

if(username=="danusree")
{
    if(password=="1234")
    {
        console.log("login success");
    }
    else
    {
        console.log("invalid password");
    }   
}

8. Number Range Checker: Write a JavaScript program that accepts a number and uses nested
if statements to first check whether the number is positive and then determine 
whether it is below 50 or 50 and above.

let a = Number(prompt("Enter the number : "))

if(a>0)
{
    if(a<50)
    {
        console.log("below 50");
    }
    if(a>50)
    {
        console.log("above 50");
    }
    else
    {
    console.log("invalid number");
    }
}

9. Electricity Bill Category: Write a JavaScript program that accepts the number 
of electricity units consumed and uses an else if ladder to classify the consumption
as Low, Medium, High, or Very High based on suitable unit ranges.

let ebill = Number(prompt("Enter the unit"))

if(ebill>1000)
{
    console.log("very high");
}
else if(ebill>500)
{
    console.log("high");
}
else if(ebill>200)
{
    console.log("Medium");
}
else{
    console.log("very low");
    
}

10. Student Admission Eligibility: Write a JavaScript program that accepts
a student's mark and age and uses nested if statements to first check whether
the mark is 50 or above and then check whether the age is 18 or above, displaying
whether the student is Eligible or Not Eligible for Admission.*/

let a = Number(prompt("Enter your Tamil Mark"))
let b = Number(prompt("Enter your English Mark"))
let c = Number(prompt("Enter your Maths Mark"))
let d = Number(prompt("Enter your Science Mark"))
let e = Number(prompt("Enter your Social Mark"))
let total = a+b+c+d+e
console.log("total is "+total);
let age = Number(prompt("Enter your aage : "))

if(total>300)
{
    if(age>=18)
    {
    console.log("Eligible for Admission");
    }
    else{
        console.log("Not eligible for Admission");
        
    }
}

