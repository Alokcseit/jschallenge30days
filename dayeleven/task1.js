//Activity 1: Understanding Promises
//• Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello, Promise completed!")
    },2000)

})
promise.then((messsage)=> console.log(messsage))
