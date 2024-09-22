let balance = document.getElementById("balance");
const modal = document.getElementById("my_modal_1");
let modalAmount = document.getElementById("modalAmount");
const transactionSec = document.getElementById("transactionSec");

/**
 * Noakhali Donate
 */
document
  .getElementById("donateNoakhaliBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateAmount = getInputValueById("donateNoakhaliInput");
    let donateNoakhali = document.getElementById("donateNoakhali");
    if (
      !isNaN(donateAmount) &&
      donateAmount > 0 &&
      donateAmount <= getTextValueById("balance")
    ) {
      donateNoakhali.innerText =
        getTextValueById("donateNoakhali") + donateAmount;
      balance.innerText = getTextValueById("balance") - donateAmount;
      modalAmount.innerText = donateAmount + " BDT";
      modal.showModal();
      //Transaction
      const transactions = document.createElement("div");
      transactions.innerHTML = `
        <div class="border rounded-xl p-4 md:p-8 space-y-4" >
            <h1 class="font-bold"><span id="historyAmount">${donateAmount}</span> Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
            <p class="font-light">Date: <span>${new Date()}</span></p>
          </div>`;
      transactionSec.appendChild(transactions);
      //Clear Input Value
      document.getElementById("donateNoakhaliInput").value = "";
    } else {
      alert("Please enter valid Amount!");
    }
  });

/**Feni Donate
 *
 */

document
  .getElementById("donateFeniBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateAmount = getInputValueById("donateFeniInput");
    let donateFeni = document.getElementById("donateFeni");
    if (
      !isNaN(donateAmount) &&
      donateAmount > 0 &&
      donateAmount <= getTextValueById("balance")
    ) {
      donateFeni.innerText = getTextValueById("donateFeni") + donateAmount;
      balance.innerText = getTextValueById("balance") - donateAmount;
      modalAmount.innerText = donateAmount + " BDT";
      modal.showModal();
      //Transaction
      const transactions = document.createElement("div");
      transactions.innerHTML = `
        <div class="border rounded-xl p-4 md:p-8 space-y-4" >
            <h1 class="font-bold"><span id="historyAmount">${donateAmount}</span> Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
            <p class="font-light">Date: <span>${new Date()}</span></p>
          </div>`;
      transactionSec.appendChild(transactions);
      //Clear Input Value
      document.getElementById("donateFeniInput").value = "";
    } else {
      alert("Please enter valid Amount!");
    }
  });

/**
 * Quota Injured Donate
 */

document
  .getElementById("donateQuotaBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateAmount = getInputValueById("donateQuotaInput");
    let donateQuota = document.getElementById("donateQuota");
    if (
      !isNaN(donateAmount) &&
      donateAmount > 0 &&
      donateAmount <= getTextValueById("balance")
    ) {
      donateQuota.innerText = getTextValueById("donateQuota") + donateAmount;
      balance.innerText = getTextValueById("balance") - donateAmount;
      modalAmount.innerText = donateAmount + " BDT";
      modal.showModal();
      //Transaction
      const transactions = document.createElement("div");
      transactions.innerHTML = `
        <div class="border rounded-xl p-4 md:p-8 space-y-4" >
            <h1 class="font-bold"><span id="historyAmount">${donateAmount}</span> Taka is Donated for Injured in the Quota Movement of Bangladesh</h1>
            <p class="font-light">Date: <span>${new Date()}</span></p>
          </div>`;
      transactionSec.appendChild(transactions);
      //Clear Input Value
      document.getElementById("donateQuotaInput").value = "";
    } else {
      alert("Please enter valid Amount!");
    }
  });
