// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = withdrawTotalElement.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)

    // step-7
    withdrawField.value = ''

    if (isNaN(newWithdrawAmount)) {
        alert('please provite a number')
        return
    }


    // step-5
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalElementString = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementString)



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Bank e eto taka nai')
        return
    }
    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    withdrawTotalElement.innerText = currentWithdrawTotal
    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    balanceTotalElement.innerText = newBalanceTotal




})