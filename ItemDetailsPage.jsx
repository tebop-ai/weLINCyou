import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '../../components/items/ImageGallery';
import VeriLINCBadge from '../../components/items/VeriLINCBadge';
import DeliveryOptions from '../../components/delivery/DeliveryOptions';
import ProposeSwapModal from '../../components/items/ProposeSwapModal';
import { HeartIcon } from '@heroicons/react/24/outline';

function ItemDetailsPage() {
  const { id } = useParams();
  const [showProposeModal, setShowProposeModal] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock item data (replace with actual data fetch)
  const item = {
    id,
    title: 'Mountain Bike',
    description: 'Trek mountain bike in excellent condition',
    images: [
      'https://placehold.co/600x400?text=Mountain+Bike+1',
      'https://placehold.co/600x400?text=Mountain+Bike+2'
    ],
    value: 12000,
    category: 'Sports',
    condition: 'Excellent',
    location: 'Cape Town',
    owner: {
      name: 'John Doe',
      rating: 4.8,
      swapsCompleted: 15
    },
    veriLINC: {
      certified: true,
      certificateNumber: 'VL123456',
      estimatedValue: 11800,
      lastUpdated: '2023-12-20'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div>
            <ImageGallery images={item.images} />
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{item.title}</h1>
                <p className="text-lg text-primary font-semibold mt-2">
                  R {item.value.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-2 rounded-full ${
                  isWishlisted ? 'text-red-500' : 'text-gray-400'
                } hover:bg-gray-100`}
              >
                <HeartIcon className="h-6 w-6" />
              </button>
            </div>

            {item.veriLINC.certified && (
              <VeriLINCBadge certificate={item.veriLINC} />
            )}

            <div className="border-t border-b py-4">
              <h2 className="text-lg font-semibold mb-2">Item Details</h2>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm text-gray-500">Category</dt>
                  <dd className="text-sm font-medium">{item.category}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Condition</dt>
                  <dd className="text-sm font-medium">{item.condition}</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Location</dt>
                  <dd className="text-sm font-medium">{item.location}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>

            <div className="border-t pt-4">
              <h2 className="text-lg font-semibold mb-4">Delivery Options</h2>
              <DeliveryOptions
                pickup={item.location}
                dropoff="User's location" // This would be dynamic based on logged-in user
                packageDetails={{
                  weight: 10, // This would come from item details
                  declaredValue: item.value
                }}
              />
            </div>

            <div className="border-t pt-4">
              <button
                onClick={() => setShowProposeModal(true)}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                Propose Swap
              </button>
            </div>
          </div>
        </div>
      </div>

      {showProposeModal && (
        <ProposeSwapModal
          item={item}
          onClose={() => setShowProposeModal(false)}
        />
      )}
    </div>
  );
}

export default ItemDetailsPage;