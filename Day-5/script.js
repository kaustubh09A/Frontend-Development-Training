function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    
     
    let message =
        document.getElementById("message");
        message.style.color = "red";

    if(name==""){
        message.innerHTML="Please enter name";
    }
    else if(email==""){
        message.innerHTML="Please enter email";
    }
    else if(!email.includes("@")){
        message.innerHTML="Invalid email";
    }
    else if(mobile==""){
        message.innerHTML="Please enter mobile number";
    }
    else if(mobile.length!=10){
       message.innerHTML="Enter 10 digit mobile";
    }
    else if(password!=confirmPassword){
        message.innerHTML="Passwords do not match";
    }
    else{
        message.style.color="green";
        message.innerHTML="Form Submitted Successfully";
    }
}

/* Dynamic Text */

function changeText(){
    document.getElementById("heading").innerHTML =
    "Text Changed Successfully";
}

/* Dynamic Image */

function changeImage(){
    document.getElementById("image").src =
    "images/image-4.jpg";
}

/* Background Color */

function changeColor(){
    document.body.style.backgroundColor =
    "#d4f5d4";
}

/* Theme Switcher */

function darkMode(){
    document.body.style.backgroundColor =
    "#222";
    document.body.style.color =
    "white";
}

function lightMode(){
    document.body.style.backgroundColor =
    "#f4f6f9";
    document.body.style.color =
    "black";
}

/* Image Gallery */

let images=[
    "images/image-1.jpg",
    "images/image-2.jpg",
    "images/image-3.jpg",
    "images/image-4.jpg"
];

let index=0;

function nextImage(){
    index++;
    if(index>=images.length){
        index=0;
    }

    document.getElementById("gallery").src=
    images[index];
}

function previousImage(){
    index--;
    if(index<0){
        index=images.length-1;
    }

    document.getElementById("gallery").src=
    images[index];
}

/* Character Counter */

function countCharacters(){
    let text=
    document.getElementById("feedback").value;

    document.getElementById("count").innerHTML=
    text.length;
}