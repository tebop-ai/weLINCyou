import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

function SavedItems() {
  const savedItems = [
    {
      id: 1,
      title: 'iPhone 13',
      image: 'https://placehold.co/600x400?text=iPhone',
      value: 11000,
      location: 'Cape Town'
    },
    {
      id: 2,
      title: 'PlayStation 5',
      image: 'https://placehold.co/600x400?text=PS5',
      value: 8500,
      location: 'Johannesburg'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Saved Items</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {savedItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md">
                <HeartIcon className="h-5 w-5 text-red-500" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-primary font-medium">R {item.value.toLocaleString()}</p>
              <p className="text-sm text-gray-600">{item.location}</p>
            </div>
          </div>
        ))}
      </div>

      {savedItems.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No saved items yet.
        </div>
      )}
    </div>
  );
}

export default SavedItems;