const cardNum = document.getElementById('card-num'),
cardOwnerName = document.querySelector('.card-owner-name'),
expDate = document.querySelector('.exp-date'),
cvcCard = document.getElementById('cvc-card'),
secondContainer = document.querySelector('.second-container'),
cardOwnerNameInput = document.getElementById('name'),
cardNumInput = document.getElementById('card-number'),
expMonth = document.getElementById('month'),
expYear = document.getElementById('year'),
cvcInput = document.getElementById('cvc'),
submitBtn = document.querySelector('.btn');


function prefix(ele){
    if(ele.length==1){
        return '0'+ ele;
    }else{
        return ele;
    }
}

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    if(/\D+/.test(cardNumInput.value)){
        cardNumInput.style.borderColor = 'hsl(0, 100%, 66%)';
        cardNumInput.nextElementSibling.classList.toggle('none');
    }

    if(expMonth.value==''){
        expMonth.style.borderColor = 'hsl(0, 100%, 66%)';
        expMonth.nextElementSibling.classList.toggle('none');
    }
    if(expYear.value==''){
        expYear.style.borderColor = 'hsl(0, 100%, 66%)';
        expYear.nextElementSibling.classList.toggle('none');
    }
    if(cvcInput.value==''){
        cvcInput.style.borderColor = 'hsl(0, 100%, 66%)';
        cvcInput.nextElementSibling.classList.toggle('none');
    }

    if(cardNumInput.value.length < 16 || cardOwnerNameInput.value == '' ||
    expMonth.value == '' ||
    expYear.value == ''||
    cvcInput.value.length<3){
        return false;
    }else{
        secondContainer.innerHTML = `
        <img class="complete-img" src="images/icon-complete.svg" alt="">
        <h1 class="complete-title">Thank you!</h1>
        <p class="complete-para">We've added your card details</p>
        <button class="complete-btn">Continue</button>
        `;
        secondContainer.style.textAlign = 'center';
        cardNum.textContent = cardNumInput.value;
        cardOwnerName.textContent = cardOwnerNameInput.value;
        expDate.textContent =
        `${prefix(expMonth.value)}/${prefix(expYear.value)}`;
        cvcCard.textContent = cvcInput.value;
    }
})