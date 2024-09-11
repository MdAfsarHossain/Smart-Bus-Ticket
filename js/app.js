// Select the seat 
let totalSelectedSeat = 0;
let seatResumed = 40;

// Update the filed inner text
function updateFieldInnerText(fieldName, value) {
    document.getElementById(fieldName).innerText = value;
}


// Get value from field
function getValueFromField(fieldName) {
    return parseFloat(document.getElementById(fieldName).innerText);
}