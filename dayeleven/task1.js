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

//Activity 3: Using Async/Await
//• Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const promise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved from fromise 4")
    },2000)
})
const promise5=async()=>{
    const data=await promise4
    console.log(data)
}
promise5()

//Activity 4: Fetching Data from an API
//• Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
//• Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchdata=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data=await response.json()
    console.log(data)
}
fetchdata()
//Activity 5: Concurrent Promises
//• Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise6=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved from fromise 6")
    },2000)
})
const promise7=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved from fromise 7")
    },2000)
})
Promise.all([promise6,promise7]).then((data)=>console.log(data))
//• Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promise8=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved from fromise 8")
    },2000)
})
const promise9=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved from fromise 9")
    },2000)
})
Promise.race([promise8,promise9]).then((data)=>console.log(data))