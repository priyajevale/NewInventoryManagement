import React from "react";

const MedicineList = (props) => {
  const handleAddToBill = (medicine) => {
    if (medicine.quantity > 0) {
      props.addToCart(medicine);
    }
  };

  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {props.medicines.map((medicine) => (
          <li key={medicine.name}>
            {medicine.name} - {medicine.description} - Price: {medicine.price} -
            Quantity: {medicine.quantity}{" "}
            <button
              onClick={() => handleAddToBill(medicine)}
              disabled={medicine.quantity === 0}
              style={{
                backgroundColor: medicine.quantity === 0 ? "grey" : "inherit",
              }}
            >
              {medicine.quantity === 0 ? "Out of Stock" : "Add to Bill"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;