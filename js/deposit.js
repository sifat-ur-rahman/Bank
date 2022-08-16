document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString = depositField.value
    const newDepositAmount = parseFloat(newDepositAmountString)

    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    depositField.value = ''

    if (isNaN(newDepositAmount)) {
        alert('please provite a number')
        return
    }
    depositTotalElement.innerText = newDepositAmount

    const currentDepositTotal = previousDepositTotal + newDepositAmount
    depositTotalElement.innerText = currentDepositTotal

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalElementString = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementString)

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount
    balanceTotalElement.innerText = currentBalanceTotal



})