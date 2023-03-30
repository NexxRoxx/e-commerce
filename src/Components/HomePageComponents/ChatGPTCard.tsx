import React from "react";

function ProductCard({ image, brand, name, price }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img className="h-48 w-full object-cover" src={image} alt={name} />
      <div className="p-6">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {brand}
        </div>
        <h2 className="mt-1 text-lg leading-tight font-medium text-black">
          {name}
        </h2>
        <div className="mt-2 text-gray-500">${price}</div>
        <div className="mt-2 text-green-500">Free delivery</div>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
