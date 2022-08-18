

//event handaler btn minus 
document.getElementById('btn-minus').addEventListener('click', function(){
    const getQuantity = getInputQuantity(false);

    //update total value
   updateTotal(getQuantity);
   
})

//event handaler btn minus 
document.getElementById('btn-plus').addEventListener('click', function(){
    const getQuantity = getInputQuantity(true);

    //update total value
   updateTotal(getQuantity);
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