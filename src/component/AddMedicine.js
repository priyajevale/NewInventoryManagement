import React, { useState } from 'react';
import './AddMedicine.css'; 

const AddMedicine = (props) => {
  const [medicine, setMedicine] = useState({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
  });

  const handleAddMedicine = () => {
    props.addMedicine(medicine);
    setMedicine({ name: '', description: '', price: 0, quantity: 0 });
  };

  return (
    <div>
      <h2>Add Medicine</h2>
      <label>
        Medicine Name:
        <input
          type="text"
          value={medicine.name}
          onChange={(e) => setMedicine({ ...medicine, name: e.target.value })}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={medicine.description}
          onChange={(e) => setMedicine({ ...medicine, description: e.target.value })}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={medicine.price}
          onChange={(e) => setMedicine({ ...medicine, price: e.target.value })}
        />
      </label>
      <label>
        Quantity Available:
        <input
          type="number"
          value={medicine.quantity}
          onChange={(e) => setMedicine({ ...medicine, quantity: e.target.value })}
        />
      </label>
      <button onClick={handleAddMedicine}>Add Medicine</button>
    </div>
  );
};

export default AddMedicine;