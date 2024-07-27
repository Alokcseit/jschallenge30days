//Activity 1: Basic Event Handling
//• Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const button=document.getElementById("btn");
const para=document.getElementById("para");

button.addEventListener('click', ChangeText);
function ChangeText(){
    para.textContent="Button Clicked! text changed!";
}
//• Task 2: Add a double-click event listener to an image that toggles its visibility.
const image=document.getElementById("image");
image.addEventListener('dblclick', ChangeVisibility);
function ChangeVisibility(){
    image.style.visibility="hidden";
}
//Activity 2: Mouse Events
//• Task 3: Add a mouseover event listener to an element that changes its background color.
const box=document.getElementById("box");
box.addEventListener('mouseover', ChangeColor);
function ChangeColor(){
    box.style.backgroundColor="red";
}
//• Task 4: Add a mouseout event listener to an element that resets its background color.
box.addEventListener('mouseout', ResetColor);
function ResetColor(){
    box.style.backgroundColor="cyan";
}

//Activity 3: Keyboard Events
//• Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const text=document.getElementById("text");
text.addEventListener('keydown', logKey);
function logKey(){
    console.log(text.value);
}
//• Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
text.addEventListener('keyup', displayValue);
function displayValue(){
    para.textContent=text.value;
}
//Activity 4: Form Events
//• Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form=document.getElementById("form");
form.addEventListener('submit', logForm);
function logForm(event){
    event.preventDefault();
    console.log(form.name.value);
    console.log(form.mobile.value);
    console.log(form.password.value);
}
//• Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const select=document.getElementById("select");
const option=document.getElementById("option");

select.addEventListener('change', displaySelect);
function displaySelect(){
option.textContent=select.value;

}
//Activity 5: Event Delegation
// Task 9: Add a click event to a list that logs the text content of the clicked list item using event delegation.

const list = document.getElementById("myList");

list.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "LI") {
    console.log("List item clicked:", e.target.textContent);
  }
});
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parent = document.getElementById("parent");
const addChildButton = document.getElementById("addChild");

// Function to add a new child element
const addChild = () => {
  const newChild = document.createElement("div");
  newChild.className = "child";
  newChild.textContent = `Child ${
    document.querySelectorAll(".child").length + 1
  }`;
  parent.appendChild(newChild);
};

// Add event listener to the parent element
parent.addEventListener("click", (event) => {
  // Check if the clicked element is a dynamically added child element
  if (event.target && event.target.className === "child") {
    console.log("Dynamically added child clicked:", event.target.textContent);
  }
});

// Add click event to the "Add Child" button to dynamically add child elements
addChildButton.addEventListener("click", addChild);
