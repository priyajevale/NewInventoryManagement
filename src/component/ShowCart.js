

// import React, { useContext, useState, useEffect } from 'react';
// import { CartContext } from './CartContext';

// const ShowCart = (props) => {
//   const cartCtx = useContext(CartContext);
//   const [totalPrice, setTotalPrice] = useState(0);
//  const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Calculate the total price when the cart changes
//     const newTotalPrice = cartCtx.cart.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);
//     setTotalPrice(newTotalPrice);
//   }, [cartCtx.cart]);

//   const handleIncreaseQuantity = (index) => {
//     cartCtx.addItem(cartCtx.cart[index]);
//   };

 
//   const handleDecreaseQuantity = (index) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.map((item, i) =>
//         i === index && item.quantity > 0
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };
//   return (
//     <article>
//       <div>
//         {cartCtx.cart.map((item, index) => (
//           <div key={item.name}>
//             <div>
//               <span>Medicine: {item.name}</span>
//               <span>Price: {item.price}</span>
//               <span>Quantity: {item.quantity}</span>
//             </div>
//             <div>
//               <button onClick={() => handleIncreaseQuantity(index)}>+</button>
//               <button onClick={() => handleDecreaseQuantity(index)}>-</button>
//             </div>
//             <button onClick={props.onClick}>Close</button>
//           </div>
//         ))}
//         <div>
//           {/* <span>Total price of your cart</span> */}
//           <span>Rs - {totalPrice.toFixed(2)}</span>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ShowCart;
// import React from 'react';

// const ShowCart = ({ cart, onIncrease, onDecrease, onClick }) => {
//   return (
//     <div>
//       {cart.map((item) => (
//         <div key={item.name}>
//           <p>Medicine Name: {item.name}</p>
//           <p>Price: {item.price}</p>
//           <p>Quantity: {item.quantity}</p>
//           <p>Total Amount: {item.price * item.quantity}</p>
//           <button onClick={() => onIncrease(item)}>+</button>
//           <button onClick={() => onDecrease(item)}>-</button>
//         </div>
//       ))}
//       <button onClick={onClick}>Close Cart</button>
//     </div>
//   );
// };

// export default ShowCart;
// import React from 'react';

// const ShowCart = ({ cart, onIncrease, onDecrease, onClick }) => {
//   return (
//     <div>
//       {cart.map((item) => (
//         <div key={item.name}>
//           <p>Medicine Name: {item.name}</p>
//           {/* <p>Price: {item.price}</p> */}
//           <p>Price: {item.price * item.quantity}</p>
//           <p>Quantity: {item.quantity}</p>
//           {/* <p>Total Amount: {item.price * item.quantity}</p> */}
//           <p>Total Amount: {item.price}</p>
//           <button onClick={() => onIncrease(item)}>+</button>
//           <button onClick={() => onDecrease(item)}>-</button>
//         </div>
//       ))}
//       <button onClick={onClick}>Close Cart</button>
//     </div>
//   );
// };

// export default ShowCart;
import React from 'react';

const ShowCart = ({ cart, onIncrease, onDecrease, onClick }) => {
  return (
    <div>
      {cart.map((item) => (
        <div key={item.name}>
          <p>Medicine Name: {item.name}</p>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total Amount: {item.price * item.quantity}</p>
          <button onClick={() => onIncrease(item)}>+</button>
          <button onClick={() => onDecrease(item)}>-</button>
        </div>
      ))}
      <button onClick={onClick}>Close Cart</button>
    </div>
  );
};

export default ShowCart;