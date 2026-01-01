import React from "react";

const MenuCard = ({ menuItem }) => {
  const { itemName, itemDescription, itemPrice, imageUrl } = menuItem;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={imageUrl || "https://via.placeholder.com/400x300?text=No+Image"}
          alt={itemName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{itemName}</h3>
        <p className="text-sm text-gray-500">{itemDescription}</p>
        <p className="text-green-600 font-bold text-md">${itemPrice}</p>
        <button className="border rounded-2xl bg-blue-500 p-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuCard;
