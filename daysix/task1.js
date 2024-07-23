// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access

// . Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr=[1,2,3,4,5]
console.log(arr)
// . Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr[0])//output 1
console.log(arr[arr.length-1])//output 5
// Activity 2: Array Methods (Basic)

// . Task 3: Use the push method to add a new number to the end of the array and log the updated array.
const updatedArray =arr.push(6)
console.log(updatedArray)
console.log(arr)
// . Task 4: Use the pop method to remove the last element from the array and log the updated array.
const popArray=arr.pop()
console.log(popArray)
console.log(arr)
// . Task 5: Use the shift method to remove the first element from the array and log the updated array.
const shiftArray=arr.shift()
console.log(shiftArray)
console.log(arr)
// . Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
const unshiftArray=arr.unshift(1,0)
console.log(unshiftArray)
console.log(arr)

// Activity 3: Array Methods (Intermediate)

// . Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const arr1=[2,3,4,5,6]
const result=arr1.map((num)=>num*2)
console.log(result)//output [4,6,8,10,12]

// . Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const arr3=[1,2,3,4,5,6,7,8,9,10]
const evenArray=arr3.filter((num)=>num%2==0)
console.log(arr3)
console.log(evenArray)

// . Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const arr4=[1,2,3,4,5,6,7,8,9,10]
const sumOfArray=arr4.reduce((acc,cur)=>acc+cur)
console.log(sumOfArray)

// Activity 4: Array Iteration

// . Task 10: Use a for loop to iterate over the array and log each element to the console.
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

// . Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach((num)=>console.log(num))

// Activity 5: Multi-dimensional Arrays

// . Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const arr5=[[1,2,3],[4,5,6],[7,8,9]]
console.log(arr5)
// . Task 13: Access and log a specific element from the two-dimensional array.
console.log(arr5[1][1])