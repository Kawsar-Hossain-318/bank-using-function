// getting input form input boxes 
function getTheInput(inputId){
    let theInput = document.getElementById(inputId);
    let theInputValueText = theInput.value;
    let theInputValue = parseFloat(theInputValueText);
    // clear the input value after get it
    theInput.value = '';
    return theInputValue;
}

// getting the static amount and make it number here
function getTheStaticAmount(inputValue, getTheId){
    let staticAmount = document.getElementById(getTheId);
    let staticamountText = staticAmount.innerText;
    let amountNumber = parseFloat(staticamountText);
    let totalAmount = amountNumber + inputValue;
    staticAmount.innerText = totalAmount;
}

// update the main balance here 
function updateBalance(inputedBalance, isAdd){
    let mainBalance = document.getElementById('balance-total');
    let mainBalanceText = mainBalance.innerText;
    let mainbalanceNumber = parseFloat(mainBalanceText);
    if(isAdd == true){
        let newBalance = mainbalanceNumber + inputedBalance;
        mainBalance.innerText = newBalance;
    }
    else{
        let newBalance = mainbalanceNumber - inputedBalance;
        mainBalance.innerText = newBalance;
    }
}

// get the current balance here
function currentBalance(){
    let mainBalance = document.getElementById('balance-total');
    let mainBalanceText = mainBalance.innerText;
    let mainbalanceNumber = parseFloat(mainBalanceText);
    return mainbalanceNumber;
}

// here is the deposit button 
document.getElementById('deposit-btn').addEventListener('click', function(){

    // calling the input value function here
    const depositInput = getTheInput('deposit-amount');
    if(depositInput > 0){
    // set the total amount in the main box of deposit
    getTheStaticAmount(depositInput, 'deposit-total'); 
    // update the balance here
    updateBalance(depositInput, true);
    }
    else{
        document.getElementById('error').innerText = 'Please Input a valid Number';
    }

});

// here is the withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){

    // calling the input value function here
    const withdrawInput = getTheInput('withdraw-amount');
    const getCurrentBalance = currentBalance();
    if(withdrawInput > 0 && withdrawInput <= getCurrentBalance){
    // set the total amount in the main box of withdraw
    getTheStaticAmount(withdrawInput, 'withdraw-total');
    // update the balance here
    updateBalance(withdrawInput, false);
    }
    else{
        document.getElementById('error-2').innerText = 'Please Input a valid Number';
    }
});
