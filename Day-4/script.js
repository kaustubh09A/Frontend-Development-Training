// EVENTS HANDLING
// onclick Event
function changeBgColor(){
    document.body.style.backgroundColor = "lightblue";
}

// onmouseover Event
function showMessage(){
    document.getElementById("welcome").innerHTML =
    "Welcome to JavaScript, Mouse Hover Effect";
}

// onkeyup Event
function countChars(){
    let text =
    document.getElementById("textArea").value;

    document.getElementById("count").innerHTML =
    text.length;
}


// onchange Event
function displaySelectedValue(){
    let course =
    document.getElementById("course").value;

    document.getElementById("selectedCourse").innerHTML =
    "Selected Course : " + course;
}


// ARRAYS

let fruits = ["Apple","Banana","Mango"]; 
fruits.push("Orange");        
console.log("After Add: "+ fruits);

fruits.pop();                 
console.log("After Removing: " + fruits);

fruits.sort();                // Sort Array Alphabetically
console.log(fruits);

let numbers = [10,20,50,5,80];
console.log("Maximum Value = " +
Math.max(...numbers));   // Find Maximum Value

console.log("Minimum value = " +
Math.min(...numbers));   // Find Minimum Value

// ARRAY METHODS
// Display Each Element One By One
numbers.forEach(function(num){
    console.log(num);
});

// map()
// Create New Array with Doubled Values
let doubleNumbers =
numbers.map(function(num){
    return num * 2;
});
console.log("Doubled Array(num * 2) = " + doubleNumbers); // Display Doubled Array

// filter()
// Store Numbers Greater Than 20
let greaterNumbers =
numbers.filter(function(num){
    return num > 20;
});

console.log( "Greater number than 20 = " + greaterNumbers);    // Display Filtered Array

// OBJECTS
// Student Object
let student = {
    name : "Kaustubh",
    age : 24,
    department : "Computer Engineering"
};

// Employee Object
let employee = {
    id : 101,
    name : "Rahul",
    salary : 30000
};

employee.salary = 35000;


console.log( "Updated Salary: "+ employee.salary);  // Display Updated Salary

// Display Student Details
function displayStudent(){
    document.getElementById("studentInfo").innerHTML =
    "Name : " + student.name +
    "<br>Age : " + student.age +
    "<br>Department : " + student.department;
}

// Mini Webpage
function showProjectInfo(){

    document.getElementById("projectInfo").innerHTML =
    "Technologies Used : HTML, CSS, JavaScript";

} 
function showSalary(){

    document.getElementById("salaryInfo").innerHTML =
    "Employee ID : " + employee.id +
    "<br>Employee Name : " + employee.name +
    "<br>Employee Salary : " + employee.salary;

}     