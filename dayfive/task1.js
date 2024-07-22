// Day 5: Functions
// Tasks/Activities:

// Activity 1: Function Declaration

// . Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(n)
{
    if(n%2==0)
    {
        return "even"
    }
    else{
        return "odd"
    }
}

let num=10
let result=checkEvenOdd(num)
console.log(result)
// . Task 2: Write a function to calculate the square of a number and return the result.
let num1=5
function calculateSquare(num1)
{
    return num1*num1
}

square=calculateSquare(num1)
console.log(square)
// Activity 2: Function Expression

// . Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let number1=5
let number2=10
function checkMax(x,y){
    if(x>y)
    {
        return x
    }
    else{
        return y
    }
}
let max=checkMax(number1,number2)
console.log(max)

let maximum=function(x,y){
    if(x>y)
    {
        return x
    }
    else{
        return y
    }
}
console.log(maximum(number1,number2))
// . Task 4: Write a function expression to concatenate two strings and return the result.

let string1="hello"
let string2="world"
let concatString=function(s1,s2){
    return s1.concat(" ",s2)
}
console.log(concatString(string1,string2))
// Activity 3: Arrow Functions

// . Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let num3=5
let num4=10
let sum=(n1,n2)=>n1+n2
console.log(sum(num3,num4))

// . Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let string3="hello world"
let searchedChar="f"
let result1=(s,c)=>s.includes(c)
console.log(result1(string3,searchedChar))///false
// Activity 4: Function Parameters and Default Values

// . Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
let num5=5
let num6=10
let product=(n1,n2=10)=>n1*n2
console.log(product(num5,num6))

// . Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
let name="Alok"
let age=20
let greeting=(n,a=20)=>`hello ${n} your age is ${a}`
console.log(greeting(name,age))

// Activity 5: Higher-Order Functions

// . Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
let hFunction=(fn,num3)=>{
    for(let i=0;i<num3;i++)
    {
        fn()
    }
}
 
function fn(){
    console.log("hello")
}

console.log(hFunction(fn,3))

// . Task 10: Write a higher-order function that takes an array of numbers and a function, and returns a new array with the results of calling the function on each number.

let arr=[1,2,3,4,5]
let result2=(arr,fn)=>arr.map(fn)

function sq(x){
    return x*x
}

console.log(result2(arr,sq))
// . Task 11: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies  the second function to the result.
let final=(fn1,fn2,val)=>{
    res1=fn1(val)
    res2=fn2(res1)
    return res2
}
let fn1=(x)=>x+2
let fn2=(x)=>x+3
