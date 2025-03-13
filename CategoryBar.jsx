import React from 'react';

const categories = [
  'Vehicles',
  'Property',
  'Electronics',
  'Furniture',
  'Fashion',
  'Sports',
  'Collectibles',
  'Jobs',
  'Services'
];

function CategoryBar() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto py-4">
          {categories.map((category) => (
            <button
              key={category}
              className="text-gray-600 hover:text-primary whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;