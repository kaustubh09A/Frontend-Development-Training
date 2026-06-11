// 1------Variables and Data Type
let name = "Kaustubh";    // String
let age = 24;            // Number
let isStudent = true;   // Boolean

// Array
let skills = ["HTML", "CSS", "JavaScript"];

// Object
let student = {
    name: "Kaustubh",
    department: "Computer Engineering"
};

console.log(name);
console.log(age);
console.log(isStudent);
console.log(skills);
console.log(student);

// 2------ JavaScript Programs

let a = 10;
let b = 20;
console.log("Addition = " + (a + b));  //Addition

let number = 8;                        //Even / Odd
if(number % 2 == 0){
    console.log("Even Number");
}
else{
    console.log("Odd Number");
}     

// Largest Among Three Numbers
let x = 10;                       
let y = 25;
let z = 15;

if(x > y && x > z){
    console.log("X is largest");
}
else if(y > z){
    console.log("Y is largest");
}
else{
    console.log("Z is largest");
}

// Simple Calculator
let num1 = 10;
let num2 = 5;
let operator = "+";

if(operator == "+"){
    console.log(num1 + num2);
}
else if(operator == "-"){
    console.log(num1 - num2);
}
else if(operator == "*"){
    console.log(num1 * num2);
}
else if(operator == "/"){
    console.log(num1 / num2);
}

// 3------Functions

//Greeting Function
function greet(){
    alert("Welcome to JavaScript");
}
greet();

// Addition & Subtraction Function
function calculate(a,b){
    console.log("Addition = " + (a+b));
    console.log("Subtraction = " + (a-b));
}
calculate(20,10);

// Multiplication Table using loop
function table(number){

    for(let i=1;i<=10;i++){
        console.log(number + " x " + i + " = " + number*i);
    }
}
table(5);

// 4------Loops

// For Loop
for(let i=1;i<=5;i++){
    console.log(i);
}

// While Loop
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}

// Do While Loop
let j = 1;
do{
    console.log(j);
    j++;
}
while(j<=5);

// 5------Conditions

// If
if(20 >= 18){
    console.log("Eligible");
}
// If-else
if(20 >= 18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}
// Switch Case
let day = 1;
switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");
}

// 6------ DOM Manipulation 

// Change text content dynamically
function changeText() {
    document.getElementById("heading").innerHTML =
    "DOM Manipulation Completed";
}

// Change background color on button click
function changeColor() {
    document.body.style.backgroundColor = "rgb(213, 197, 167)";
}

// Show and Hide Elements
function hideText() {
    document.getElementById("message").style.display =
    "none";
}

function showText() {
    document.getElementById("message").style.display =
    "block";
}

// Update Image Dynamically
function changeImage() {

    document.getElementById("demoImage").src =
    "Update_Image.jpg";

}

// 7------ Form Validation

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Validate Name Field
    if(name == "") {
        alert("Please Enter Name");
        return false;
    }

    // Validate Email Field
    if(email.includes("@") == false) {
    alert("Email must contain @ symbol");
    return false;
    }

    // Success Message
    alert("Form Submitted Successfully");
    return true;
}