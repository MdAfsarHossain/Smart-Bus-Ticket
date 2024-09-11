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


function updateSeatsList(seatName) {
    const seatsList = document.getElementById('seats-list');
    const tr = document.createElement('tr');
    tr.className = 'w-full text-center';
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td1.innerText = seatName;
    td2.innerText = 'Economy';
    td3.innerText = '550';
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    seatsList.appendChild(tr);
}