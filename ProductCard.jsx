import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ id = 1, title, price, location, imageUrl, date }) {
  return (
    <Link to={`/product/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-xl font-bold text-primary">R {price.toLocaleString()}</p>
          <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
            <span>{location}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;