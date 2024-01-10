const billInput = document.querySelector(".bill-input");
const numberPplInput = document.querySelector(".people-input");
const percentButtons = document.querySelector(".percents");
const tipMoney = document.querySelector(".tip-money");
const totalMoney = document.querySelector(".total-money");
const moneyInput = document.querySelector(".money-input");
const rstButton = document.querySelector(".reset-btn");
const customInput = document.querySelector(".custom-input");

const updateValues = () => {
  const newBillInput = parseFloat(billInput.value);
  const newNumberPlpInput = parseFloat(numberPplInput.value);
  const tipPercentage = parseFloat(customInput.value) || parseFloat(event.target.textContent);

  if (!newBillInput || !newNumberPlpInput) {
    billInput.style.border = "1px solid red";
    numberPplInput.style.border = "1px solid red";
    moneyInput.classList.add("err-people", "err-bill");
    return;
  }

  tipMoney.textContent = (tipPercentage * newBillInput) / 100;
  totalMoney.textContent = newBillInput / newNumberPlpInput + tipMoney.textContent / 2;
};

percentButtons.addEventListener("click", updateValues);

customInput.addEventListener("keydown", updateValues);

rstButton.addEventListener("click", () => {
  tipMoney.textContent = totalMoney.textContent = "0.00";
  billInput.value = numberPplInput.value = customInput.value = "";
  billInput.style.border = numberPplInput.style.border = "none";
  moneyInput.classList.remove("err-bill", "err-people");
});

billInput.addEventListener("keydown", () => {
  billInput.style.border = "none";
  moneyInput.classList.remove("err-bill");
});

numberPplInput.addEventListener("keydown", () => {
  numberPplInput.style.border = "none";
  moneyInput.classList.remove("err-people");
});




// down is old code

// const billInput = document.querySelector(".bill-input");
// const numberPplInput = document.querySelector(".people-input");
// const percentButtons = document.querySelector(".percents");
// const tipMoney = document.querySelector(".tip-money");
// const totalMoney = document.querySelector(".total-money");
// const moneyInput = document.querySelector(".money-input");
// const rstButton = document.querySelector(".reset-btn");
// const customInput = document.querySelector(".custom-input");
// // percent buttons function
// percentButtons.addEventListener("click", (e) => {
//   const btn = e.target.closest(".percent-btn");

//   if (!btn) return;

//   if (!parseFloat(billInput.value) && !parseFloat(numberPplInput.value)) {
//     billInput.style.border = "1px solid red";
//     numberPplInput.style.border = "1px solid red";
//     moneyInput.classList.add("err-people", "err-bill");
//     return;
//   }

//   const newBtn = parseFloat(btn.textContent);
//   const newBillInput = parseFloat(billInput.value);
//   const newNumberPlpInput = parseFloat(numberPplInput.value);
//   console.log(newBillInput);
//   tipMoney.textContent = (newBtn * newBillInput) / 100;
//   totalMoney.textContent =
//     newBillInput / newNumberPlpInput + tipMoney.textContent / 2;
// });
// // custom button function
// customInput.addEventListener("change", () => {
//   const customValue = parseFloat(customInput.value);
//   const newBillInput = parseFloat(billInput.value);
//   const newNumberPlpInput = parseFloat(numberPplInput.value);
//   tipMoney.textContent = (customInput.value * newBillInput) / 100;
//   totalMoney.textContent =
//     newBillInput / newNumberPlpInput + tipMoney.textContent / 2;

//   if (!parseFloat(billInput.value) && !parseFloat(numberPplInput.value)) {
//     billInput.style.border = "1px solid red";
//     numberPplInput.style.border = "1px solid red";
//     moneyInput.classList.add("err-people", "err-bill");
//     return;
//   }
//   console.log(customValue);
// });

// // reset buuton function
// rstButton.addEventListener("click", () => {
//   tipMoney.textContent = "0.00";
//   totalMoney.textContent = "0.00";
//   billInput.value = "";
//   numberPplInput.value = "";
//   customInput.value = "";
//   billInput.style.border = "none";
//   moneyInput.classList.remove("err-bill");
//   numberPplInput.style.border = "none";
//   moneyInput.classList.remove("err-people");
// });

// billInput.addEventListener("change", () => {
//   billInput.style.border = "none";
//   moneyInput.classList.remove("err-bill");
// });
// numberPplInput.addEventListener("change", () => {
//   numberPplInput.style.border = "none";
//   moneyInput.classList.remove("err-people");
// });
