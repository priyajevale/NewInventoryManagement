
import React, { useState } from 'react';
// import { MedicineProvider, useMedicineContext } from './component/MedicineContext';
import AddMedicine from './component/AddMedicine';
import MedicineList from './component/MedicineList';
import Cart from './component/Cart';
import './App.css'; 
import ShowCart from './component/ShowCart';
import { CartProvider } from './component/CartContext';


function App() {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addToCart = (medicine) => {
    const updatedMedicines = medicines.map((m) =>
      m.name === medicine.name ? { ...m, quantity: m.quantity - 1 } : m
    );

    setMedicines(updatedMedicines);

    const existingCartItem = cart.find((item) => item.name === medicine.name);

    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item.name === medicine.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
  };

 

  
  // const handleIncreaseQuantity = (item) => {
  //   const updatedCart = cart.map((cartItem) =>
  //     cartItem.name === item.name
  //       ? {
  //           ...cartItem,
  //           price: cartItem.price + item.price,
  //         }
  //       : cartItem
  //   );
  //   setCart(updatedCart);
  // };
  // const handleIncreaseQuantity = (item) => {
  //   setCart((prevCart) =>
  //     prevCart.map((cartItem) =>
  //       cartItem.name === item.name
  //         ? {
  //             ...cartItem,
  //             quantity: cartItem.quantity + 1,
  //             totalAmount: (cartItem.quantity + 1) * cartItem.price,
  //           }
  //         : cartItem
  //     )
  //   );
  // };
  // 
  // const handleIncreaseQuantity = (item) => {
  //   const updatedCart = cart.map((cartItem) =>
  //     cartItem.name === item.name
  //       ? {
  //            ...cartItem,
  //           quantity: cartItem.quantity + 1,
  //           totalAmount: (cartItem.quantity + 1) * cartItem.price,
  //         }
  //       : cartItem
  //   );
  //   setCart(updatedCart);
  // };
  const handleIncreaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.name === item.name
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount: (cartItem.quantity + 1) * cartItem.price,
          }
          : cartItem
    );
    setCart(updatedCart);
  };
  
  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 0) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.name === item.name
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
              totalAmount: (cartItem.quantity - 1) * cartItem.price,
            }
          : cartItem
      );
      setCart(updatedCart);
    }
  };
  // const handleDecreaseQuantity = (item) => {
  //   if (item.quantity > 0) {
  //     const updatedCart = cart.map((cartItem) =>
  //       cartItem.name === item.name
  //         ? { ...cartItem, price: cartItem.price - (item.price / item.quantity) }
  //         : cartItem
  //     );
  //     setCart(updatedCart);
  //   }
  // };
  // const handleDecreaseQuantity = (item) => {
  //   if (item.quantity > 0) {
  //     const updatedCart = cart.map((cartItem) =>
  //       cartItem.name === item.name
  //         ? {
  //             ...cartItem,
  //             quantity: cartItem.quantity - 1,
  //             price: cartItem.price - item.price,
  //           }
  //         : cartItem
  //     );
  //     setCart(updatedCart);
  //   }
  // };

  // const handleDecreaseQuantity = (item) => {
  //   if (item.quantity > 0) {
  //     const updatedCart = cart.map((cartItem) =>
  //       cartItem.name === item.name
  //         ? {
  //             ...cartItem,
  //             price: cartItem.price - item.price,
  //           }
  //         : cartItem
  //     );
  //     setCart(updatedCart);
  //   }
  // };

  return (
    <CartProvider>
      <div className="App">
        {showCart && (
          <ShowCart 
            cart={cart}
            onClick={hideCartHandler}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />
        )}
        <h1>Medical Shop Inventory Management</h1>
        <AddMedicine addMedicine={addMedicine} />
        <div className="flex-container">
          <div className="column">
            <MedicineList medicines={medicines} addToCart={addToCart} />
          </div>
          <div className="column">
            <Cart cartItems={cart} onShow={showCartHandler} />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;

