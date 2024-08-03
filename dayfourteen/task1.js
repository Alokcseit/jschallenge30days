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