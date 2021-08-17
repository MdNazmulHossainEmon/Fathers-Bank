
document.getElementById('deposit-button').addEventListener('click', function () {
   const depositInput = document.getElementById('deposit-input');
   const newDepositAmountText = depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText)
   const depositTotal = document.getElementById('total-deposit');
   const depositAmountText = depositTotal.innerText;
   const depositAmount = parseFloat(depositAmountText)
   depositTotal.innerText = depositAmount + newDepositAmount;
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const balanceTotalAmount = parseFloat(balanceTotalText);
   balanceTotal.innerText = balanceTotalAmount + newDepositAmount;
   depositInput.value = '';
})
document.getElementById('withdraw-button').addEventListener('click', function () {
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawAmountText = withdrawInput.value;
   const withdrawAmount = parseFloat(withdrawAmountText)
   const withdrawTotal = document.getElementById('withdraw-total');
   const withdrawTotalText = withdrawTotal.innerText;
   const withdrawTotalAmount = parseFloat(withdrawTotalText)
   withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;
   const balance = document.getElementById('balance-total');
   const balanceText = balance.innerText;
   const balanceAmount = parseFloat(balanceText);
   balance.innerText = balanceAmount - withdrawAmount;
   withdrawInput.value = ''
})
