import React from 'react';
import { Link } from 'react-router-dom';
import NotificationPanel from '../dashboard/NotificationPanel';
import UserProfileShortcut from '../dashboard/UserProfileShortcut';

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            weLINKyou
          </Link>
          <div className="flex items-center space-x-4">
            <NotificationPanel />
            <UserProfileShortcut />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;