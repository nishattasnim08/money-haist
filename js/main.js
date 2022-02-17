// handle calculate button event

document.getElementById('calculateButton').addEventListener('click', function () {
    const incomeInput = document.getElementById('inputIncome');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);
    // current income amount
    const totalBalance = document.getElementById('balanceAmount');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);

    // update balance
    totalBalance.innerText = previousTotalBalance + incomeAmount;

    // clear income input field
    incomeInput.value = '';

// current expense amount
const 
})