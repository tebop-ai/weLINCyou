import React from 'react';
import { featuredItems } from '../../data/featuredItems';

function FeaturedItems() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {featuredItems.map((item) => (
        <div 
          key={item.id} 
          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-600">{item.category}</span>
                <span className="text-xs text-gray-500 block">{item.location}</span>
              </div>
              <span className="text-primary font-medium">R {item.value.toLocaleString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedItems;