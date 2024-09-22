document
  .getElementById("donateQuotaBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateAmount = getInputValueById('donateQuotaInput')
    let donateQuota = document.getElementById('donateQuota')
    if(!isNaN(donateAmount) && donateAmount > 0 && donateAmount <= getTextValueById('balance')){
        donateQuota.innerText = getTextValueById('donateQuota') + donateAmount
        balance.innerText = getTextValueById('balance') - donateAmount
        modalAmount.innerText = donateAmount + " BDT"
        modal.showModal()
        //Transaction
        transactions.innerHTML = `
        <div class="border rounded-xl p-4 md:p-8 space-y-4" >
            <h1 class="font-bold"><span id="historyAmount">${donateAmount}</span> Taka is Donated for Injured in the Quota Movement of Bangladesh</h1>
            <p class="font-light">Date: <span>${new Date()}</span></p>
          </div>`
        transactionSec.appendChild(transactions)

    }
    else{
        alert('Please enter valid Amount!')
    }
  });
