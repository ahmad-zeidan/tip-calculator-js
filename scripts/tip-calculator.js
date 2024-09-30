// DOM Elements
const total = document.querySelector('.total-input');
const tipPercentage = document.querySelector('.tip-input');
const tipAmountText = document.querySelector('.tip-amount');
const splitBill = document.querySelector('.split-bill-input');
const perPersonText = document.querySelector('.per-person');
const totalAmountText = document.querySelector('.total-amount');
const calculateButton = document.querySelector('.calculate-button');
const tenPercent = document.getElementById('ten-percent');
const fifteenPercent = document.getElementById('fifteen-percent');
const twentyPercent = document.getElementById('twenty-percent');
const onePersonButton = document.getElementById('one-person');
const twoPeopleButton = document.getElementById('two-people');
const threePeopleButton = document.getElementById('three-people');

// People Selection
onePersonButton.addEventListener('click', () => splitBill.value = 1);
twoPeopleButton.addEventListener('click', () => splitBill.value = 2);
threePeopleButton.addEventListener('click', () => splitBill.value = 3);

// Tip Percentage Selection
tenPercent.addEventListener('click', () => tipPercentage.value = 10);
fifteenPercent.addEventListener('click', () => tipPercentage.value = 15);
twentyPercent.addEventListener('click', () => tipPercentage.value = 20);

// Calculate Button Event
calculateButton.addEventListener('click', () => {
  const totalValue = Number(total.value);
  const tipPercentageValue = Number(tipPercentage.value);
  const splitValue = Number(splitBill.value);

  // Input Validation
  if (isNaN(totalValue) || isNaN(tipPercentageValue) || isNaN(splitValue) || totalValue <= 0 || tipPercentageValue < 0 || splitValue <= 0) {
    tipAmountText.innerHTML = "Please enter valid values.";
    totalAmountText.innerHTML = "";
    perPersonText.innerHTML = "";
    return;
  }

  // Calculation
  const tipAmount = totalValue * (tipPercentageValue / 100);
  const totalAmount = totalValue + tipAmount;
  const perPerson = totalAmount / splitValue;

  // Display Results
  tipAmountText.innerHTML = `Tip Amount: $${tipAmount.toFixed(2)}`;
  totalAmountText.innerHTML = `Total: $${totalAmount.toFixed(2)}`;
  perPersonText.innerHTML = `Per Person: $${perPerson.toFixed(2)}`;
});
