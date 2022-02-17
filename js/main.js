// getting all input value
function getInput(inputFieldId) {
    const inputValueText = document.getElementById(inputFieldId);
    if (isNaN(inputValueText.value)) {
        alert('You must enter a number');
    }

    else {
        inputValue = parseFloat(inputValueText);
    }
    if (inputValue >= 0) {

        return inputValue;

    }
    else {
        alert('You must enter a posittive number')
    }
}

// balance calculation

function balenceAmountCalculator(income,food,rent,cloths){
    const balence = income - expence ;

    if(balence < 0){
        alert("vai apni khoroc bashi kore felcen, tai income baran")
    }
    else{
        document.getElementById('expence').innerText = expence;
        document.getElementById('balance').innerText = balence;

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