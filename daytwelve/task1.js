//Activity 1: Basic Error Handling with Try-Catch
//• Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function myFunction() {
    throw new Error("My error message");
}
function handleError()
{
    try {
    
        myFunction()
        } catch (error) {
            console.log(error)
        }
}
// handleError()


//• Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
 function Devider(num1,num2){
    if(num2==0)
    {
        throw new Error("Divide by zero error");
    }
    else
    {
        console.log(num1/num2)
    }
 }
  function HandleDevide(){
    try {
        Devider(10,2)
    } catch (error) {
        console.log(error)
    }
  }
  HandleDevide()
  //Activity 2: Finally Block
//• Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("try block")
    if(3>=2)
    {
    console.log("3 is greater")
    }
    else{
        throw new Error("3 is not greater")
    }
} catch (error) {
    console.log(error)
}
finally{
    console.log("finally block")// always finally execute
}
//Activity 3: Custom Error Objects
//• Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class MyError extends Error{
    constructor(message){
        super(message)
        this.name="MyError"
    }
}
  
  function throwError(){
    throw new MyError("My error message")
  }
   
  function HandleError(){
    try {
        throwError()
        
    } catch (error) {
        if(error instanceof MyError){
            console.log(` ${error.name} : ${error.message}`)
        }
    }
  }
  HandleError()
  //• Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails.
//Handle the custom error using a try-catch block.
const validateInput = (input) => {
    if (input === "") {
      throw new MyError("Input cannot be empty");
    }
    console.log("Input validated successfully");
}
const ip="hello"
validateInput(ip)

//Activity 4: Error Handling in Promises
//• Task 6: Create a promise that randomly resolves or rejects. Use -catch () to handle the rejection and log an appropriate message to the console.
const random_num = Math.round(Math.random()*1);

const myPromise = new Promise((resolve, reject) => {
  if (random_num === 1) {
    resolve("This promise is resolved");
  } else {
    reject("This promise is rejected");
  }
});

function check_promise() {
  myPromise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}
check_promise();