// handel deposit button event
function getInputMethod(inputId) {
    let inputAmount = document.getElementById(inputId)
    let inputAmountValue = inputAmount.value;
    let inputAmountValueInt = parseInt(inputAmountValue)
    inputAmount.value = '';
    return inputAmountValueInt;
}
function updateTotalAmount(value, amountCurrent) {
    debugger;
    let amountCurrentValue = document.getElementById(value)
    amountCurrentValue.innerText = parseInt(amountCurrentValue.innerText) + amountCurrent

}

function updateBalance(amountCurrent, isAdd) {
    let currentBalance = document.getElementById('balance-value')
    let currentBalanceNext = currentBalance.innerText;
    if (isAdd == true) {
        let newBalanceTotal = parseInt(currentBalanceNext) + amountCurrent
        currentBalance.innerText = newBalanceTotal;
    }

    else {
        let newBalanceTotal = parseInt(currentBalanceNext) - amountCurrent
        currentBalance.innerText = newBalanceTotal;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    // let depositAmount = document.getElementById('deposit-amount')
    // let depositAmountValue = depositAmount.value;


    // let depositCurrentValue = document.getElementById('deposit-value')
    // depositCurrentValue.innerText = parseInt(depositCurrentValue.innerText) + parseInt(depositAmountValue)
    // document.getElementById('deposit-value').innerText = parseInt(depositValue) + parseInt(document.getElementById('deposit-value').innerText)
    // depositAmount.value = '';

    const depositCurrent = getInputMethod('deposit-amount')
    // let depositCurrentValue = document.getElementById('deposit-value')
    // depositCurrentValue.innerText = parseInt(depositCurrentValue.innerText) + depositCurrent
    updateTotalAmount('deposit-value', depositCurrent)


    //  updated balance
    /* let currentBalance = document.getElementById('balance-value')
    let currentBalanceNext = currentBalance.innerText;
    let newBalanceTotal = parseInt(currentBalanceNext) + depositCurrent
    currentBalance.innerText = newBalanceTotal; */
    updateBalance(depositCurrent, true)
})


// get the amount of withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // let withdrawAmount = document.getElementById('withdraw-amount')
    // let withdrawAmountValue = withdrawAmount.value;


    // let withdrawCurrentValue = document.getElementById('withdraw-value')
    // withdrawCurrentValue.innerText = parseInt(withdrawCurrentValue.innerText) + parseInt(withdrawAmountValue)
    const withdrawCurrent = getInputMethod('withdraw-amount')
    // let withdrawCurrentValue = document.getElementById('withdraw-value')
    // withdrawCurrentValue.innerText = parseInt(withdrawCurrentValue.innerText) + withdrawCurrent
    updateTotalAmount('withdraw-value', withdrawCurrent)
    //  updated balance
    /* let currentBalance = document.getElementById('balance-value')
    currentBalance.innerText = currentBalance.innerText - withdrawCurrent */
    updateBalance(withdrawCurrent, false)


})

