//get quantity input value
function getInputQuantity(isValue){
    const getInputElement = document.getElementById('phone-quantity');
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

//update total
function updateTotal (getQuantity){
    const totalValue = getQuantity * 500;
    const restTotalElment = document.getElementById('phone-total');
    restTotalElment.innerText = totalValue;
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