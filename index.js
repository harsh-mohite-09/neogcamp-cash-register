const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error");
const noOfNotes = document.querySelectorAll(".number-of-notes");
const returnBalance = document.querySelector("#return");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

hideMessage();
checkButton.addEventListener("click", clickHandler);

function clickHandler() {
  console.log(~~billAmount.value + ~~cashGiven.value);
  hideMessage();
  if (~~billAmount.value > 0 && ~~cashGiven.value > 0) {
    if (~~cashGiven.value >= ~~billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      returnBalance.innerText = "Rs. " + amountToBeReturned;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you wanna wash dishes?");
    }
  } else {
    showMessage("Amount should be greater than zero!");
  }
}

checkButton.addEventListener("click", clickHandler);

function calculateChange(amount) {
  for (i = 0; i < availableNotes.length; i++) {
    const numberofNotes = Math.trunc(amount / availableNotes[i]);
    amount %= availableNotes[i];
    noOfNotes[i].innerText = numberofNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
