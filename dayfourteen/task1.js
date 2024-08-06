// Activity 1: Class Definition
// • Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
 class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    greeting(){
        return `hello I am ${this.name} and I am ${this.age} years old` 
    }
 }
 let person1=new Person("Alok",21)
 console.log(person1.greeting())
 // • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
 person1.updateage=function(age){
     this.age=age
     console.log(this.age)
 }
 console.log(person1.updateage(22))