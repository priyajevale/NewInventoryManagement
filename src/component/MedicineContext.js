
import React, { useState } from "react";

const MedicineProvider = (props) => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);

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

  return (
    <div>
      {props.children({
        medicines,
        setMedicines,
        cart,
        setCart,
        addMedicine,
        addToCart,
      })}
    </div>
  );
};

export default MedicineProvider;