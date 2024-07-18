//. Task 1: Declare a variable using var , assign it a number, and log the value to the console.

var number = 5;

console.log(number);

//. Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let string="Alok kumar swain"
console.log(string)

//Activity 2: Constant Declaration

const pi = 3.14;

console.log(pi);
//. Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
    const isTrue = false;
    console.log(isTrue);
    //. Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeofoperator.
    const v1=30
    console.log(typeof(v1))
    const v2="Alok"
    console.log(typeof(v2))
    const v3=true
    console.log(typeof(v3))
    const v4={name:"Alok"}
    console.log(typeof(v4))
    const v5=[1,2,3]
    console.log(typeof(v5))
   
//. Task 5: Declare a variable using 1et, assign it an initial value, reassign a new value, and log both values to the console.
   let var1=40
   var1="alok kumar"
   console.log(var1)
//. Task 6: Try reassigning a variable declared with const and observe the error.
   const var2=50;
   //var2=60; // This will cause an error as const variables are immutable.
   console.log(var2)
//Feature Request:

//1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of eachvariable to the console.
   console.log(typeof(v1))
   console.log(v1)
   console.log(typeof(v2))
   console.log(v2)
   console.log(typeof(v3))
   console.log(v3)
   console.log(typeof(v4))
   console.log(v4)
   console.log(typeof(v5))// it gives object insted of array
   console.log(v5)
//2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes toreassignment.
    let var3=60
    var3="Alok kumar swain"
    console.log(var3)
    const var4=70
    //var4="Alok kumar swain" // This will cause an error as const variables are immutable.
    console.log(var4)