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