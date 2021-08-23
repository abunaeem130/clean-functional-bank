function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
function updateTotal(fieldId, amount) {
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalText);
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).totalTag.innerText = newTotal;
    return newTotal;
}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').balanceTag.innerText = newBalance;
}
// handle deposite button 
document.getElementById('deposite-button').addEventListener('click', function () {
    const amount = getInputValue('deposite-input');
    if (amount > 0) {
        updateTotal('deposite-total', amount);
        updateBalance(amount, true);
    }
})
// handle withDraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})