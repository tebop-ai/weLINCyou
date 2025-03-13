import React, { useState } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';

function NotificationPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-full hover:bg-gray-100"
      >
        <BellIcon className="h-6 w-6 text-gray-600" />
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-200">
            <h3 className="text-sm font-semibold">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {/* Sample notifications */}
            <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
              <p className="text-sm">New swap suggestion for your item</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationPanel;