import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

function AddItemButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-primary text-white rounded-lg px-4 py-3 flex items-center justify-center space-x-2 hover:bg-secondary transition-colors"
    >
      <PlusIcon className="h-5 w-5" />
      <span>Post New Item</span>
    </button>
  );
}

export default AddItemButton;