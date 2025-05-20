
import React from "react";

const Catalogue = ({ onAdd }) => {
  const items = ["Apple", "Banana", "Carrot", "Doughnut"];

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Product Catalogue</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} className="mb-2">
            {item}
            <button
              className="ml-2 bg-green-500 text-white px-2 py-1"
              onClick={() => onAdd(item)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;
