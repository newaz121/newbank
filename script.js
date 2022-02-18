
var logInBtn = document.getElementById('login-btn');
var main_page = document.getElementById('main-page');
main_page.style.display = 'none'

logInBtn.addEventListener('click', function () {
    var logInBox = document.getElementById('login-box');
    var acc_no = document.getElementById('acc_no').value;
    var pass = document.getElementById('pass').value;


    // allert message for log in
    if (acc_no == '') {
        alert('Account number is required');

    }
    else if (pass == '') {
        alert('Password is required');
    }
    else {
        logInBox.style.display = 'none';
        main_page.style.display = 'block';
    }

});

// add deposit start here

var Add_depositBTN = document.getElementById('Add_depositBTN');
Add_depositBTN.addEventListener('click', function () {

    var deposit_input = document.getElementById('deposit_input').value;
    var depositNewInput = parseFloat(deposit_input);

    var total_deposit = document.getElementById('total-deposit').innerHTML;
    var totalNewDeposit = parseFloat(total_deposit);
    var total_Deposit = depositNewInput + totalNewDeposit;
    // deposit_input.value = '';
    document.getElementById("total-deposit").innerHTML = total_Deposit.toFixed(2);
    deposit_input.value = '';

    // change balance
    var total_balance = document.getElementById('total-balance').innerHTML;
    var NewTotalBalance = parseFloat(total_balance);
    var TotalNewBalance = NewTotalBalance + depositNewInput;
    document.getElementById('total-balance').innerHTML = TotalNewBalance.toFixed(2);
});
// add deposit end here
// deposit
var Add_withdrawBTN = document.getElementById('Add_withdrawBTN');
Add_withdrawBTN.addEventListener('click', function () {
    var withdraw_input = document.getElementById('withdraw-input').value;
    var newWithdrawInput = parseFloat(withdraw_input);

    var total_withdraw = document.getElementById('total-withdraw').innerHTML;
    var newTotalWithdraw = parseFloat(total_withdraw);

    var withdrawBalance = newWithdrawInput + newTotalWithdraw;
    document.getElementById('total-withdraw').innerHTML = withdrawBalance.toFixed(2);
    // withdraw chnage balance
    var total_balance = document.getElementById('total-balance').innerHTML;
    var NewTotalBalance = parseFloat(total_balance);

    var AfterWithdraw = NewTotalBalance - newWithdrawInput;
    document.getElementById('total-balance').innerHTML = AfterWithdraw.toFixed(2);

})