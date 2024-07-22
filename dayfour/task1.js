// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop

// . Task 1: Write a program to print numbers from 1 to 10 using a for loop.
let n =10;
for(i=1;i<=10;i++){
    console.log(i);
}
//// . Task 2: Write a program to print the multiplication table of 5 using a for loop.
let nu=10
 console.log("Multiplication Table of 5:")
for(i=1;i<=nu;i++){
    console.log("5*"+i+"="+5*i)
}
//// Activity 2: While Loop

// . Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let num =1
let sum =0
while(num<=10){
    sum+=num
    num++
}

console.log("Sum of numbers from 1 to 10: "+sum)
// . Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let num1=10
while(num1<=10&&num1>=1){
    console.log(num1);
    num1--
}
// Activity 3: Do ... While Loop

// . Task 5: Write a program to print numbers from 1 to 5 using a do ... while loop.

let num2=1
do{
    console.log(num2);
    num2++
}while(num2<=5)

// . Task 6: Write a program to calculate the factorial of a number using a do ... while loop.

let num3=1
let fact =1
do{
    fact *= num3
    num3++
}while(num3<=5)
console.log("Factorial of 10: "+fact)
// Activity 4: Nested Loops

// . Task 7: Write a program to print a pattern using nested for loops:
let pattern=" "
for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        pattern+="*";
    }
    console.log(pattern);
    pattern=" "
}
// Activity 5: Loop Control Statements

// . Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
let number1=10
for(let i=1;i<=number1;i++){
    if(i==5) continue;
    console.log(i)
}
// . Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

let number2=10
for(let i=1;i<=number2;i++){
    if(i==7) break;
    console.log(i)
}
//thanks