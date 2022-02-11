// handel deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    let depositAmount = document.getElementById('deposit-amount')
    let depositAmountValue = depositAmount.value;


    let depositCurrentValue = document.getElementById('deposit-value')
    depositCurrentValue.innerText = parseInt(depositCurrentValue.innerText) + parseInt(depositAmountValue)
    // document.getElementById('deposit-value').innerText = parseInt(depositValue) + parseInt(document.getElementById('deposit-value').innerText)
    depositAmount.value = '';



    //  updated balance
    let currentBalance = document.getElementById('balance-value')
    let currentBalanceNext = currentBalance.innerText;
    let newBalanceTotal = parseInt(currentBalanceNext) + parseInt(depositAmountValue)

    currentBalance.innerText = newBalanceTotal;



})


// get the amount of withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    let withdrawAmount = document.getElementById('withdraw-amount')


    let withdrawCurrentValue = document.getElementById('withdraw-value')
    withdrawCurrentValue.innerText = parseInt(withdrawCurrentValue.innerText) + parseInt(withdrawAmount.value)
    //  updated balance
    let currentBalance = document.getElementById('balance-value')
    currentBalance.innerText = currentBalance.innerText - parseInt(withdrawAmount.value)

    withdrawAmount.value = '';
})

