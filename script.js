// Variables
/*
let age = 25;
let price = 10.99;
let gpa = 8.5;

console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is : ${price}`);
*/




// Arithmetic Operator
/*
let student = 30;

students = students + 1;   // Addition
students = students - 1;   // Substraction
students = students * 2;   // Multiplication
students = students / 2;   // Division
students = students ** 1;  // rais to
students = students % 1;   // Modules

// Augmented Assignment Operator
students = students + 1; 
students ++ ; 

//Operator Precedence
let result = 1 + 2 * 3 + 4 ** 2 ;
console.log(result);
*/




// User Input 
/*
let username;
username = window.prompt("What is your name?");
console.log(username);


<h1 id="myH1">Welcome</h1>
<label>Username: </label>
<input id="myText"><br><br>
<button id="mySubmit">Submit</button>

let username;
    document.getElementById("mySubmit").onclick = function(){
      username = document.getElementByI("myText").value;
      document.getElementById("myH1").textContent = `Hello ${username}`;
    }
*/




// Type Conversion
/*
let age = window.prompt("How old are you?");
age = Number(age);
age +=1;
console.log(age, typeof age);


let x = "Shaikh";
let y = "Shaikh";
let z = "Shaikh";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/




// Constant
/*
const PI = 3.14159;
let radius ;
let circumference;

radius = window.prompt("Enter the radius of the circle ?");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);


<h1>Welcome</h1>
<label for="">Enter radius: </label>
<input type="text" id="myText"><br><br>
<button id="mySubmit">Submit</button>
<h3 id="myH3"></h3>

const PI = 3.14159;
let radius ;
let circumference;

document.getElementById("mySubmit").onclick = function(){
radius = document.getElementById("myText").value ;
radius = Number(radius);
circumference = 2 * PI * radius;
document.getElementById("myH3").textContent = circumference + " cm" ;
}




// Math
/*
let a = 10;
let b = 20;
let c = 30;
let d = 30.31;
let e = 30.99;
let f = 0;
let g = 0;
let x = 0;
let y =0;
let z =0;

let max = Math.max(a, b, c);
let min = Math.min(a, b, c);
let k
k = Math.ceil(d);
let j
j = Math.floor(e);
let o
o = Math.trunc(e);
console.log (`The Max is ${max}`);
console.log (`The Min is ${min}`);
console.log (`The round up is ${k}`)
console.log (`The round down is ${j}`)
console.log(`the trunc is ${o}`);
*/




//if and checked Property
/* 
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subReport = document.getElementById("subReport");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function () {
    if(myCheckBox.checked) {
        subReport.textContent = (`You have Subcribed`);
    } else {
        subReport.textContent = (`You haven't Subscribe`)
    }

    if (visaBtn.checked) {
        payResult.textContent = (`You are paying using VISA`);
    } else if (masterCardBtn.checked) {
        payResult.textContent = (`You are paying using MASTERCARD`);
    } else if (payPalBtn.checked) {
        payResult.textContent = (`You are paying using PAYPAL`);
    } else {
        payResult.textContent = (`You haven't selected a payment method`);
    }
}
*/




//Ternary Operator
/* 
let age = 90 ;
let message = age >= 18 ? "You're an ADULT" : "You're a MINOR" ;
console.log(message);
*/




//Switch Case
/* 
let day = 1 ;
switch(day) {
    case 1 :
        console.log("It's Monday");
        break;
    case 2 :
        console.log("It's Tuesday");
        break;
    case 3 :
        console.log("It's Wednesday");
        break;
    case 4 :
        console.log("It's Thursday");
        break;
    case 5 :
        console.log("It's Friday");
        break;
    case 6 :
        console.log("It's Saturday");
        break;
    case 7 :
        console.log("It's Sunday");
        break;
    default:
        console.log(`${day} is not a correct day`);
}
*/




//String Methods
/*
let userName = "Abdul Sami";

console.log(userName.charAt(0));
console.log(userName.indexOf("b"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(2));
console.log(userName.startsWith("A"));
console.log(userName.endsWith("i"));
console.log(userName.includes("u"));
console.log(userName.replaceAll("a", "s"));
console.log(userName.replaceAll("s", "a"));
*/

//String Slicing
/*
const fullName = "Abdul Sami" ;

let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6);

console.log(firstName);
console.log(lastName);

const email = "abdulsamishaikh232@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") +1);

console.log(userName);
console.log(extension);
*/




//Arrays
/*
let fruits = ["Apple", "Mango", "Banana", "Papaya" ];

console.log(`The length of the Array is = ${fruits.length} `);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


fruits.push("orange");

console.log(`The length of the Array after push is = ${fruits.length} `);
for (i=0 ; i<fruits.length ; i++){
    console.log(fruits[i]);
}


fruits.pop(4);

console.log(`The length of the Array after pop is = ${fruits.length} `);
for (i=0 ; i<fruits.length ; i++){
    console.log(fruits[i]);
}
*/




//Objects
/*
const person1 = {
    firstName : "Abdul" ,
    lastName : "Sami" ,
    age : 20 ,
    isEmployed : false , 
    eat : function(){console.log(`He loves Briyani`)} ,
}

console.log(`First name is ${person1.firstName}`);
console.log(`Last name is ${person1.lastName}`);
console.log(`His age is ${person1.age}`);
console.log(`Does he have a job ${person1.isEmployed} 😂`);
person1.eat();

*/