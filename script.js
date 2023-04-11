const handleTextToggle = (optionToToggle) => {
  const targetIdToShow = `payment-option-${optionToToggle}`;
  const defaultPayment = document.getElementById("payment-option-1");
  const debitLatePayment = document.getElementById("payment-option-2");

  if (targetIdToShow === "payment-option-1") {
    defaultPayment.classList.add("show");
    debitLatePayment.classList.remove("show");
  } else {
    defaultPayment.classList.remove("show");
    debitLatePayment.classList.add("show");
  }
};

const handleRadioButtons = () => {
  const accountTypeBtns = document.querySelectorAll('input[type="radio"]');
  for (const radio of accountTypeBtns) {
    radio.addEventListener("click", (event) => {
      const targetToUpdate = document.getElementById(
        event.target.dataset.netsuiteFormid
      );
      if (targetToUpdate) {
        targetToUpdate.value = event.target.value;
        if (event.target.name === "paymentType") {
          handleTextToggle(event.target.value);
        }
      }
    });
  }
};

const init = () => {
  handleRadioButtons();
};

init();