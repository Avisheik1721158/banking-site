// handel deposit button event
function getInputMethod(inputId) {
    let inputAmount = document.getElementById(inputId)
    let inputAmountValue = inputAmount.value;
    let inputAmountValueInt = parseInt(inputAmountValue)
    inputAmount.value = '';
    return inputAmountValueInt;



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
    let depositCurrentValue = document.getElementById('deposit-value')
    depositCurrentValue.innerText = parseInt(depositCurrentValue.innerText) + depositCurrent


    //  updated balance
    let currentBalance = document.getElementById('balance-value')
    let currentBalanceNext = currentBalance.innerText;
    let newBalanceTotal = parseInt(currentBalanceNext) + depositCurrent
    currentBalance.innerText = newBalanceTotal;
})


// get the amount of withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // let withdrawAmount = document.getElementById('withdraw-amount')
    // let withdrawAmountValue = withdrawAmount.value;


    // let withdrawCurrentValue = document.getElementById('withdraw-value')
    // withdrawCurrentValue.innerText = parseInt(withdrawCurrentValue.innerText) + parseInt(withdrawAmountValue)
    const withdrawCurrent = getInputMethod('withdraw-amount')
    let withdrawCurrentValue = document.getElementById('withdraw-value')
    withdrawCurrentValue.innerText = parseInt(withdrawCurrentValue.innerText) + withdrawCurrent
    //  updated balance
    let currentBalance = document.getElementById('balance-value')
    currentBalance.innerText = currentBalance.innerText - withdrawCurrent


})

