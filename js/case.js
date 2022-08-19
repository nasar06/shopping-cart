document.getElementById('case-minus').addEventListener('click', function(){
    //get input value
    const getInputValue = getInputQuantity(false, 'case-quantity');
    
    // update total.
    updateCaseTotal (getInputValue);

    //update sub total
    calculateSubTotal();
})


document.getElementById('case-plus').addEventListener('click', function(){
    //get input value
    const getInputValue = getInputQuantity(true, 'case-quantity');

    //update total
    updateCaseTotal (getInputValue);

    //update sub total
    calculateSubTotal();
})