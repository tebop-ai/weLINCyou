import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function ProposeSwapModal({ item, onClose }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [message, setMessage] = useState('');

  // Mock user's items (replace with actual data fetch)
  const userItems = [
    {
      id: 1,
      title: 'iPhone 13',
      value: 11000,
      image: 'https://placehold.co/600x400?text=iPhone'
    },
    {
      id: 2,
      title: 'PlayStation 5',
      value: 8500,
      image: 'https://placehold.co/600x400?text=PS5'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle swap proposal submission
    console.log('Proposing swap:', { selectedItem, message });
    onClose();
  };

  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="relative bg-white rounded-lg max-w-2xl w-full mx-auto p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <Dialog.Title className="text-xl font-semibold mb-4">
            Propose a Swap
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select one of your items to swap
              </label>
              <div className="grid grid-cols-2 gap-4">
                {userItems.map((userItem) => (
                  <button
                    key={userItem.id}
                    type="button"
                    onClick={() => setSelectedItem(userItem)}
                    className={`border rounded-lg p-4 text-left ${
                      selectedItem?.id === userItem.id
                        ? 'border-primary ring-2 ring-primary ring-opacity-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={userItem.image}
                      alt={userItem.title}
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <h3 className="font-medium">{userItem.title}</h3>
                    <p className="text-primary">
                      R {userItem.value.toLocaleString()}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message to owner (optional)
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Tell them why this would be a great swap..."
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!selectedItem}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary disabled:opacity-50"
              >
                Propose Swap
              </button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
}

export default ProposeSwapModal;