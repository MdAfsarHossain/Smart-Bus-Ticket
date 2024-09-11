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


// Selects seat 
function selectSeat(params) {
    const seatName = params.innerText;

    document.getElementById('next-btn').classList.remove('btn-disabled');
    
    params.disabled = true;
    totalSelectedSeat = totalSelectedSeat + 1;
    
    if(totalSelectedSeat === 4) {
        document.getElementById('coupon-btn').classList.remove('btn-disabled');
    }

    if(totalSelectedSeat > 4) {
        const seatFillupError = document.getElementById('seat-fillup-error-modal');
        seatFillupError.showModal();

        params.disabled = false;
        totalSelectedSeat = totalSelectedSeat - 1;
        return;
    }
    
    seatResumed = seatResumed - 1;

    let totalPrice = 550 * totalSelectedSeat;

    const discount = getValueFromField('discount');
    
    const grandTotal = totalPrice + discount;

    updateSeatsList(seatName);
    updateFieldInnerText('seat-resumed', seatResumed);
    updateFieldInnerText('total-selected-seats', totalSelectedSeat);
    updateFieldInnerText('total-price', totalPrice);
    updateFieldInnerText('grand-total', grandTotal);
}


// Display Hidden
function displayHidden(fieldName, className) {
    if(className === 'Hidden') {
        fieldName.classList.add('hidden');
    }
    else if(className === 'Display') {
        document.getElementById(fieldName).classList.remove('hidden');
    }
}


// Apply discount 15% and 20%
function discountCount(params) {
    const discountCoupon = params.parentNode.children[0].value;

    if(discountCoupon === 'NEW15') {
        const discount = getValueFromField('total-price') * 0.15;
        updateFieldInnerText('discount', discount);
        updateFieldInnerText('grand-total', getValueFromField('total-price') - discount);
        displayHidden(params.parentNode, 'Hidden');
        displayHidden('discount-div', 'Display');
    }
    else if(discountCoupon === 'COUPLE20') {
        const discount = getValueFromField('total-price') * 0.20;
        updateFieldInnerText('discount', discount);
        updateFieldInnerText('grand-total', getValueFromField('total-price') - discount);
        displayHidden(params.parentNode, 'Hidden');
        displayHidden('discount-div', 'Display');
    }
    else {
        const errorModal = document.getElementById('error-modal');
        errorModal.showModal();
    }    
}


// Clear all fields
function clearAllFields(params) {
    totalSelectedSeat = 0;
    seatResumed = 40;

    // Enable all buttons again
    const buttons = document.getElementsByTagName("button");
    
    for (const button of buttons) {
        button.disabled = false;
    }

    document.getElementById('seat-resumed').innerText = seatResumed;
    document.getElementById('total-selected-seats').innerText = totalSelectedSeat;
    document.getElementById('total-price').innerText = 0;
    document.getElementById('grand-total').innerText = 0;
    document.getElementById('discount').innerText = 0;
    document.getElementById('seats-list').innerHTML = '';
    document.getElementById('coupon-btn').classList.add('btn-disabled');
    document.getElementById('next-btn').classList.add('btn-disabled');
    document.getElementById('discount-div').classList.add('hidden');
    document.getElementById('coupon-div').classList.remove('hidden');

    const inputFields = document.querySelectorAll('input');
    inputFields.forEach((inputField) => {
        inputField.value = '';
    });
}


// Get value from input field
function getValueFromInputField(params) {
    return document.getElementById(params).value;
}
