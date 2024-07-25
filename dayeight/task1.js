// Day 8: ES6+ Features

// Tasks/Activities:
// Activity 1: Template Literals

// . Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name ="alok"
let age =27

console.log(`my name is ${name} and my age is ${age}`)

// . Task 2: Create a multi-line string using template literals and log it to the console.

let multiline = `my name is ${name} and my age is ${age}`

console.log(multiline)
// Activity 2: Destructuring

// . Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.-
let arr=[1,2,3,4,5,6,7,8,9,10]
let [one,two]=arr
console.log(one)
console.log(two)
// . Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book={
    title:"harry potter",
    author:"j.k rowling",
    year:1997
}
const {title,author}=book
console.log(title,author)

// Activity 3: Spread and Rest Operators

// . Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to
// the console.
const arr1=[1,2,3,4,5,6,7,8,9,10]
const arr2=[11,12,13,14,15,16,17,18,19,20]
const newarr=[...arr1,...arr2]
console.log(newarr)


// . Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...args){
    let sum=0
    for(let i=0;i<args.length;i++){
        sum+=args[i]
    }
    return sum

}

console.log(sum(1,2,3,4,5,6,7,8,9,10))

// Activity 4: Default Parameters

// . Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of
// calling this function with and without the second parameter.

function multiply(num1,num2=1){
    return num1*num2
}

console.log(multiply(5,10))
console.log(multiply(5))

// Activity 5: Enhanced Object Literals

// . Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const obj={
    name:"alok",
    age:27,
    getBookInfo(){
        return `my name is ${this.name} and my age is ${this.age}`
    }
}

console.log(obj.getBookInfo())
console.log(obj)

// . Task 9: Create an object with computed property names based on variables and log the object to the console.

// note: To use computed values for property names, you use square brackets and pass the expression.

// Variables to be used as property names
const value1 = "John";
const value2 = "Doe";
const value3 = 25;
const propname1="firstName"
const propname2="lastName"
const propname3="age"
const person = {
   [propname1]: value1
,  [propname2]: value2
,  [propname3]: value3
}
console.log(person)


///thank u