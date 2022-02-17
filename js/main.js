// getting all input value
function getInput(inputFieldId) {
    const inputValueText = document.getElementById(inputFieldId);
    if (isNaN(inputValueText.value)) {
        console.log(inputFieldId);
        alert('You must enter a number in');
    }

    else {
        inputValue = parseFloat(inputValueText.value);
        if (inputValue >= 0) {

            return inputValue;

        }
        else {
            alert('You must enter a posittive number');
        }
    }

}

// balance and expense calculation

function balenceAmountCalculator(income, foodExpense, rentExpense, clothExpense) {
    const totalExpense = foodExpense + rentExpense + clothExpense;
    const totalBalenceAmount = income - totalExpense;

    if (totalBalenceAmount < 0) {
        alert("You have insuficient income Bro!")
    }
    else {
        document.getElementById('expenseAmount').innerText = totalExpense;
        document.getElementById('balanceAmount').innerText = totalBalenceAmount;

    }
}

// handle calculate button event

document.getElementById('calculateButton').addEventListener('click', function () {
    const incomeAmount = getInput("inputIncome");
    const foodExpenseAmount = getInput("inputFood");
    const rentExpenseAmount = getInput("inputRent");
    const clothEpenseAmount = getInput("inputCloths");

    balenceAmountCalculator(incomeAmount, foodExpenseAmount, rentExpenseAmount, clothEpenseAmount)
})

// handle save button event
document.getElementById('savingsButton').addEventListener('click', function () {

    const incomeAmount = getInput('inputIncome');
    const saveParsentence = getInput('inputSavePercent');

    const totalSaveAmount = incomeAmount * (saveParsentence / 100);

    totalBalenceAmount = parseFloat(document.getElementById('balanceAmount').innerText)

    if (totalSaveAmount < totalSaveAmount) {
        alert('Your balance amount is insufficient Dude!')
    }

    else {
        document.getElementById('saveAmount').innerText = totalSaveAmount;
        document.getElementById('remainingBalanceAmount').innerText = totalBalenceAmount - totalSaveAmount;
    }
})