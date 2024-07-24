// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access

// . Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book={
    title:"harry potter",
    author:"j.k rowling",
    year:1997
}
console.log(book)

// . Task 2: Access and log the title and author properties of the book object.
console.log(book.author,book.title)

// . Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateyear = function(year) {
    this.year=year
   
}
book.updateyear(2021)
console.log(book.year)