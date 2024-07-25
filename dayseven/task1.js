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

// Activity 3: Nested Objects

// . Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the
// console.
const library ={
    name:"library",
    books:[
        {
            title:"harry potter",
            author:"j.k rowling",
            year:1997
        },
        {
            title:"to kill a mockingbird",
            author:"Harper Lee",
            year:1960
        }
    ]
}
console.log(library);

// . Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name)

library.books.forEach((book)=>console.log(book.title))

// Activity 4: The this Keyword

// . Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this
// method.

book.getBookInfo = function() {
    return `${this.title} - ${this.year}`
}
console.log(book.getBookInfo())
// Activity 5: Object Iteration

// . Task 8: Use a for ... in loop to iterate over the properties of the book object and log each property and its value.
for( const item in book)
{
    console.log(item,book[item])
}

// . Task 9: Use Object.keys and Object. values methods to log all the keys and values of the book object.
console.log(Object.keys(book))
console.log(Object.values(book))
//thank u
