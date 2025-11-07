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