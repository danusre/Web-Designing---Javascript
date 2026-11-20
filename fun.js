/*================A. Predefined Functions==================== */

/*1.String Conversion: Write a JavaScript program that accepts a string and 
uses the predefined functions toUpperCase() and toLowerCase() to display 
the string in uppercase and lowercase.*/

/*2.String Search: Write a JavaScript program that accepts a sentence and 
a word and uses the predefined includes() function to check whether the 
word is present in the sentence.*/

/*3.Number Calculation: Write a JavaScript program that accepts a decimal number
and uses the predefined Math.round(), Math.floor(), and Math.ceil() functions
to display the rounded, floor, and ceiling values.

let a = Number(prompt("enter the number : "))

function hello()
{
    console.log("floor value:",Math.floor(a));
    console.log("ceil value:",Math.ceil(a));
    console.log("round value",Math.round(a));
}
hello()*/

/*4.Random Number Generator: Write a JavaScript program that uses the predefined 
Math.random() and Math.floor() functions to generate and display a random number
between 1 and 10.

let num = Number(prompt("enter the number : "))

function ram(){
    console.log(Math.random(Math.floor(num)*10)+1);
}
ram()*/

/*5.Array Processing: Write a JavaScript program that stores five numbers 
in an array and uses predefined methods such as push(), pop(), and sort() to add a number, 
remove the last number, and sort the array.

let c =[10,20,30,40,50]
// console.log(c);
c.push(70);
console.log(c);
c.pop();
console.log(c);
c.sort();
console.log(c);*/

/*=====================B. User-Defined Functions=========================*/

/*6. Even or Odd Function: Write a JavaScript program that defines a function 
checkEvenOdd(num) which accepts a number and uses if...else to return whether
the number is even or odd.

let a = Number(prompt("enter the evenodd"))

function check()
{
    if(a%2==0)
    {
        console.log("even number is ",a);
    }
    else{
        console.log("odd number is ",a);

    }
}
check()*/

/*7. Largest Number Function: Write a JavaScript program that defines a function 
findLargest(a, b, c) which accepts three numbers and uses conditional statements
to find and return the largest number.

let a = Number(prompt("enter the first number : "))
let b = Number(prompt("enter the second number : "))
let c = Number(prompt("enter the third number : "))

function great()
{
    if(a>=b && b>=c)
    {
        console.log(a,"is the greatest number");
    }
    else if(b>=a && b>=c)
    {
        console.log(b,"is the greatest number");
        
    }
    else if(c>=a && b>= a)
    {
        console.log(c,"is the greatest number");
        
    }
    else{
        console.log("error");
        
    }
}
great()*/