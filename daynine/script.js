//___________________Selecting and Manipulating Elements____________________

// Task 1: Select an HTML element by its ID and change its text content.
const h1=document.getElementById("h1");
h1.textContent="Hello World";

//  Task 2: Select an HTML element by its class and change its background color
const h2=document.getElementsByClassName("name")[0];
h2.style.backgroundColor="red";
//_______________________ Creating and Appending Elements ___________________________
//  Task 3: Create a new div element with some text content and append it to the body.
const newelement=document.createElement("div");
newelement.textContent = "This is a new div element";
document.body.append(newelement);
//  Task 4: Create a new li element and add it to an existing ul list.
const newli=document.createElement("li");
newli.textContent="This is a new li element";
const ul1=document.getElementById("ul1");
ul1.append(newli);
// ____________________________ Removing Elements____________________________

// Task 5: Select an HTML element and remove it from the DOM.
// const p1=document.getElementById("p1");
// p1.remove();

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.querySelector("button");
button.addEventListener('click', ChangeText);
function ChangeText(){
    const p = document.getElementById("Textpara");
    p.textContent="It's Day 9 of 30 Days JS Challange"
}
//  Task 10: Add a mouseover event listener to an element that changes its border color

button.addEventListener('mouseover', (event) => {
   
    button.style.border = "2px solid black";

  });