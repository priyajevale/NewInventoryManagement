// import React from "react";

// const Cart = (props) => {
//   const totalQuantity = props.cart.reduce(
//     (total, cartMedicine) => total + cartMedicine.quantity,
//     0
//   );

//   return (
//     <div>
//       <button onClick={props.onShow}>Cart</button>
      
//       {totalQuantity > 0 && <p>{totalQuantity}</p>}
//     </div>
//   );
// };

// export default Cart;
// import React from 'react';

// const Cart = ({ cartItems, onIncrease, onDecrease, onClose, onClick }) => {
//   const totalQuantity = cartItems.reduce(
//     (total, cartMedicine) => total + cartMedicine.quantity,
//     0
//   );

//   return (
//     <div>
//       <button onClick={onClick}>Cart</button>
//       {totalQuantity > 0 && <p>Quantity in Cart: {totalQuantity}</p>}
//     </div>
//   );
// };

// export default Cart;
// import React from 'react';

// const Cart = ({ cartItems, onIncrease, onDecrease, onClose, onShow }) => {
//   const totalQuantity = cartItems.reduce(
//     (total, cartMedicine) => total + cartMedicine.quantity,
//     0
//   );

//   return (
//     <div>
//       <button onClick={onShow}>Cart</button>
//       {totalQuantity > 0 && <p>Quantity in Cart: {totalQuantity}</p>}
//     </div>
//   );
// };

// export default Cart;
import React from 'react';

const Cart = ({ cartItems, onShow }) => {
  const totalQuantity = cartItems.reduce(
    (total, cartMedicine) => total + cartMedicine.quantity,
    0
  );

  return (
    <div>
      <button onClick={onShow}>Cart</button>
      {totalQuantity > 0 && <p>Quantity in Cart: {totalQuantity}</p>}
    </div>
  );
};

export default Cart;