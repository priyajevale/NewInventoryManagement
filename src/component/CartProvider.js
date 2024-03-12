// import React,{ useReducer } from 'react';
// import CartContext from "./CartContext";
// const defaultCartState = {
//     name:[],
//     TotalAmount:0,

// };
// const CartReducer=(state,action) =>{
//     if(action.type === 'ADD'){
//         const updatedName=state.name.concat(action.item);
//         const updatedTotalAmount=state.TotalAmount+action.item.price * action.item.amount;
//         return {
//             name:updatedName,
//             TotalAmount:updatedTotalAmount,
//         };
//     }

//     if(action.type==='REMOVE'){

//     }
//     return defaultCartState;
    
// }
// const CartProvider =props =>{
//     const [cartState,dispatchCartAction] = useReducer(
//        CartReducer,defaultCartState
//     );
//     const addItemToCartHandler = item =>{
//         dispatchCartAction ({ type : 'ADD' , item : item});
//     }

//     const removeItemFromCartHandler =id=>{
//         dispatchCartAction({ type:'REMOVE' , id:id});
//     }
//     const cartContet={
      
//         name:cartState.name,
//         totalAmount:cartState.TotalAmount,
//         addItem:addItemToCartHandler ,
//         removeItem:removeItemFromCartHandler,
//     }
//     return(
//         <div>
//      <CartContext.Provider value={cartContet}>
//         {props.children}
//     </CartContext.Provider>
//     </div>
//     );
// };
// export default CartProvider;