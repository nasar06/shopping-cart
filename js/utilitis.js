//get quantity input value
function getInputQuantity(isValue, quantity){
    const getInputElement = document.getElementById(quantity);
    const getInputString = getInputElement.value;
    const getInputValue = parseFloat(getInputString);

    let totalQuantity
    if(isValue === true){
       totalQuantity = getInputValue +1
    }
    else{
       totalQuantity = getInputValue -1
    }
    
    getInputElement.value = totalQuantity;
    return totalQuantity;
}

//update phone total
function updateTotal (getQuantity){
        const totalValue = getQuantity * 501;
        const restTotalElment = document.getElementById('phone-total');
        restTotalElment.innerText = totalValue;
    
}

//update case total

function updateCaseTotal (getQuantity){
    const totalValue = getQuantity * 200;
    const restTotalElment = document.getElementById('case-total');
    restTotalElment.innerText = totalValue;

}


//
function subTotal(productTotal){
    // get product total
   const getTotalElement = document.getElementById(productTotal);
   const getTotalString = getTotalElement.innerText;
   const getTotalValue = parseInt(getTotalString);
   return getTotalValue;
}

// set sub total and tax total
function setElement (elementId, totalAmount){
    const TotalElement = document.getElementById(elementId)
    TotalElement.innerText = totalAmount;
}

// calculat sub total
function calculateSubTotal(){
    const phoneTotalAmount = subTotal('phone-total');
   const caseTotalAmount = subTotal('case-total');
   const subTotalAmount = phoneTotalAmount + caseTotalAmount;

   setElement ('sub-total', subTotalAmount)
   

   //set tax
   const taxAmountstring = (subTotalAmount * 0.1).toFixed(2);
   const taxAmount =parseFloat(taxAmountstring);
   setElement('tax', taxAmount);

   //set main total
   const mainTotal = subTotalAmount + taxAmount;
   setElement('main-total', mainTotal)
}















































// // get input quantity value
// function getQuantity(getinput){
//     const getInput = document.getElementById(getinput);
//     const getInputString = getInput.value;
//     const getQuantityValue = parseFloat(getInputString);
    
//     return getQuantityValue;
// }

// //set input Quantity value.
// function setQuantity(inputId, decreaseValue){
//     const inputElement = document.getElementById(inputId);
//     inputElement.value = decreaseValue;
// }


// // get total value
// function getTotalValue(totalFildId){
//     const restTotalElement = document.getElementById(totalFildId);
//     const restTotalString = restTotalElement.innerText;
//     const restTotalValue = parseFloat(restTotalString);

//     return restTotalValue;
// }


// // set total value
// function setTotal(restTotalElementId, totalValue){
//     const restTotalElement = document.getElementById(restTotalElementId);
//     restTotalElement.innerText = totalValue;
// }