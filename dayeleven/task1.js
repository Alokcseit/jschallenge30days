//Activity 1: Understanding Promises
//• Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello, Promise completed!")
    },2000)

})
promise.then((messsage)=> console.log(messsage))
//• Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using •catch() .
const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise Rejected")
    },2000)
})
promise1.catch((error)=> console.log(error))
//Activity 2: Chaining Promises
//• Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
 const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data fetched from server 1")
    },1000)
})
const promise3=promise2.then((message)=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(message+" Data fetched from server 2")
    },1000)
}))

promise3.then((message)=> console.log(message))