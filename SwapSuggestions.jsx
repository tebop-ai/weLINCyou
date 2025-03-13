import React, { useState } from 'react';
import SwapTransactionModal from '../swap/SwapTransactionModal';

function SwapSuggestions() {
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [selectedSwap, setSelectedSwap] = useState(null);

  const suggestions = [
    {
      id: 1,
      item1: {
        title: 'Mountain Bike',
        image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1470&q=80',
        value: 15000
      },
      item2: {
        title: 'iPhone 11',
        image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=1470&q=80',
        value: 14000
      }
    }
  ];

  const handleViewMatch = (suggestion) => {
    setSelectedSwap(suggestion);
    setShowSwapModal(true);
  };

  return (
    <div className="space-y-4">
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
          <div className="flex-1">
            <img
              src={suggestion.item1.image}
              alt={suggestion.item1.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <p className="mt-2 text-sm font-medium">{suggestion.item1.title}</p>
            <p className="text-sm text-primary">R {suggestion.item1.value.toLocaleString()}</p>
          </div>
          
          <div className="flex-shrink-0 px-4">
            <span className="text-2xl">↔️</span>
          </div>
          
          <div className="flex-1">
            <img
              src={suggestion.item2.image}
              alt={suggestion.item2.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <p className="mt-2 text-sm font-medium">{suggestion.item2.title}</p>
            <p className="text-sm text-primary">R {suggestion.item2.value.toLocaleString()}</p>
          </div>
          
          <button
            onClick={() => handleViewMatch(suggestion)}
            className="ml-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
          >
            View Match
          </button>
        </div>
      ))}

      {showSwapModal && selectedSwap && (
        <SwapTransactionModal
          item1={selectedSwap.item1}
          item2={selectedSwap.item2}
          onClose={() => setShowSwapModal(false)}
        />
      )}
    </div>
  );
}

export default SwapSuggestions;