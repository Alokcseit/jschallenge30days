// Day 2: Operators
// modulus % :- remainder
// exponetiation :- a ** b   // a to the power b
// increment  :- a++  // a = a + 1       
// decrement   :- a-- // b = b - 1

// Tasks/Activities:
// Activity 1: Arithmetic Operations

// . Task 1: Write a program to add two numbers and log the result to the console.
let a=10
let b=20
console.log(a+b)
// . Task 2: Write a program to subtract two numbers and log the result to the console.
let c=30
let d=20
console.log(c-d)
// . Task 3: Write a program to multiply two numbers and log the result to the console.
let num1=10
let num2=3
console.log(num1*num2)
// . Task 4: Write a program to divide two numbers and log the result to the console.
let num3=10
let num4=3
console.log(num3/num4)
// . Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let num5=10
let num6=3
console.log(num5%num6)
// . Task 6: Write a program to find the square root of a number and log the result to the console.
let num7=10
let num8=3
console.log(num7**num8)
// Activity 2: Assignment Operators

// . Task 7: Use the += operator to add a number to a variable and log the result to the console.
let num9=10
num9+=10// num9=num9+10  We can also use
console.log(num9)
// . Task 8: Use the -= operator to subtract a number from a variable and log the result to the console.
let num10=10
num10-=10
console.log(num10)
// . Task 9: Use the *= operator to multiply a number by a variable and log the result to the console.
let num11=10
num11*=10
console.log(num11)
// . Task 10: Use the /= operator to divide a number by a variable and log the result to the console.
let num12=10
num12/=10
console.log(num12)
// . Task 11: Use the %= operator to find the remainder of a number by a variable and log the result to the console.
let num13=10
num13%=10
console.log(num13)
//Activity 3: Comparison Operators

// . Task 12: Write a program to compare two numbers using > and < and log the result to the console.
let v1=10
let v2=20
console.log(v1>v2) // false
console.log(v1<v2) // true

// . Task 13: Write a program to compare two numbers using >= and <= and log the result to the console.
let v3=30
let v4=20
console.log(v3>=v4) // true
console.log(v3<=v4) // false

// . Task 14: Write a program to compare two numbers using == and != and log the result to the console.
let v5=30
let v6=20
console.log(v5==v6) // false
console.log(v5!=v6) // true

// . Task 15: Write a program to compare two numbers using === and !== and log the result to the console.
let v7=30
let v8=20
console.log(v7===v8) // false
console.log(v7!==v8) // true
// . Task 16: Write a program to compare two numbers using == and === and log the result to the console.
let v9=30
let v10=20
let v11=20

console.log(v9==v10) // false
console.log(v9===v10) // false
console.log(v10==v11) // true
// . Task 17: Write a program to compare two numbers using != and !== and log the result to the console.
let v12=30
let v13=20
console.log(v12!=v13) // true
console.log(v12!==v13) // true
// Activity 4: Logical Operators

// . Task 18: Write a program that uses the && operator to combine two conditions and log the result to the console
let a1=10
let a2=20
console.log(a1<a2 &&a1!=a2) // true
console.log(a1>a2 &&a1!=a2) // false
// . Task 19: Write a program that uses the I | operator to combine two conditions and log the result to the console.
let a3=10
let a4=20
console.log(a3<a4 ||a3!=a4) // true
console.log(a3>a4 ||a3!=a4) // false
// . Task 20: Write a program that uses the ! operator to negate a condition and log the result to the console.
let a5=10
let a6=20
console.log(!a5) // false
console.log(!a6) // true
// Activity 5: Ternary Operator

// . Task 21: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let a7=10
let a8=20
console.log(a7>0 ? "positive" : "negative") // positive
console.log(a8>0 ? "positive" : "negative") // negative