

//event handaler btn minus 
document.getElementById('btn-minus').addEventListener('click', function(){
    //get quantity
    const getQuantity = getInputQuantity(false, 'phone-quantity');

    //update total value
   const updateTotalValue = updateTotal(getQuantity);

   
    //update sub total
    calculateSubTotal();
})

//event handaler btn plus 
document.getElementById('btn-plus').addEventListener('click', function(){
    const getQuantity = getInputQuantity(true, 'phone-quantity');

    //update total value
   updateTotal(getQuantity);

   //update sub total
   calculateSubTotal();
})

















































// // Dom Click Decrease Btn
// document.getElementById('btn-minus').addEventListener('click', function(){
    

//     // (-) get phone Quantity value
//     const getQuantityValue = getQuantity('phone-quantity');
    
//     // (-) decrease phone quantity
//     const decreaseValue = getQuantityValue -1;
    
//     // (-) set decreased value
//     setQuantity('phone-quantity', decreaseValue);


//     //get total value
//     const restTotalValue = getTotalValue('phone-total');
    
//     // multiply decrease value * total value
//     const totalValue = decreaseValue * 500 ;
    
//     // set total value;
//     setTotal('phone-total', totalValue)


// })


// // Dom Click Increase Btn
// document.getElementById('btn-plus').addEventListener('click', function(){
    
//     // (+) get phone quantity
//      const getQuantityValue = getQuantity('phone-quantity');

//     // (+) increase phone quantity
//     const increaseValue = getQuantityValue + 1;
    

//     // (+) set increase value.
//     setQuantity('phone-quantity', increaseValue);



//     // get rest total value
//     const restTotalValue = getTotalValue('phone-total');

//     // multiply increase value * total value;
//     const totalValue = increaseValue * 500;

//     //set-Total value
//     setTotal('phone-total', totalValue)

// })