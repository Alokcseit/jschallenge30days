//Activity 1: If-Else Statements
//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let a=10
if(a>0)
{
    console.log("positive")
}
else if(a<0)
{
    console.log("negative")
}
else
{
    console.log("zero")
}
//output:positive

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let personAge=30;
if(personAge>=18)
{
    console.log("eligible to vote")
}
else
{
    console.log("not eligible to vote")
}
//output:eligible to vote

//Activity 2: Nested If-Else Statements
//Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let num1=10
let num2=20
let num3=30
if(num1>num2 && num1>num3)
{
    console.log(num1)
}
else if(num2>num1 && num2>num3)
{
    console.log(num2)
}
else
{
    console.log(num3)
}
//output:30
//num1>num2 && num1>num3?console.log(num1):num2>num1&&num2>num3?console.log(num2):console.log(num3)

//Activity 3: Switch Case
//Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let day=4
switch(day){
    case 1:
        console.log("monday")
        break
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("invalid")
        break

}
//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score=95
switch(true){
    case score>=85 && score<=100:
        console.log("A")
        break
    case score>=75 && score<=84:
        console.log("B")
        break
    case score>=60 && score<=74:
        console.log("C")
        break
    case score>=30 && score<=59:
        console.log("D")
        break
    case score>=0 && score<=29:
        console.log("F")
        break
    default:
        console.log("invalid")
        break
}

//Activity 4: Conditional (Ternary) Operator
//Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num=10
console.log(num%2==0?"even":"odd")//output:even

//Activity 5: Combining Conditions
//Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year=2021

if(year%4==0&&(year%100!=0||year%400==0))
{
    console.log("leap year")
}
else
{
    console.log("not a leap year")
}

//Thanku