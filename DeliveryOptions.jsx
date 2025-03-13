import React, { useState, useEffect } from 'react';
import { DeliveryService } from '../../services/delivery/DeliveryService';

export default function DeliveryOptions({ pickup, dropoff, packageDetails }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const deliveryService = new DeliveryService();

  useEffect(() => {
    async function fetchDeliveryOptions() {
      try {
        const options = await deliveryService.calculateDeliveryOptions(
          pickup,
          dropoff,
          packageDetails
        );
        setDeliveryOptions(options);
      } catch (error) {
        console.error('Error fetching delivery options:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDeliveryOptions();
  }, [pickup, dropoff, packageDetails]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Available Delivery Options</h3>
      
      {deliveryOptions.map((option, index) => (
        <div
          key={index}
          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
            selectedOption === index ? 'border-primary bg-orange-50' : 'border-gray-200'
          }`}
          onClick={() => setSelectedOption(index)}
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold">{option.provider}</h4>
            <span className="text-primary font-bold">R {option.cost.toFixed(2)}</span>
          </div>
          
          <div className="text-sm text-gray-600 mb-2">
            <span className="mr-4">Type: {option.type}</span>
            <span>Estimated Time: {option.estimatedTime}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {option.features.map((feature, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      ))}

      {selectedOption !== null && (
        <button
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => {
            // Handle delivery selection
            console.log('Selected delivery option:', deliveryOptions[selectedOption]);
          }}
        >
          Confirm Delivery Option
        </button>
      )}
    </div>
  );
}