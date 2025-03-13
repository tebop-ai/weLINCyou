import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircleIcon, BellIcon } from '@heroicons/react/24/outline';

function Navbar({ onPostAd }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">weLINKyou</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onPostAd}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              Post Ad
            </button>
            <BellIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
            <UserCircleIcon 
              className="h-6 w-6 text-gray-500 cursor-pointer"
              onClick={() => navigate('/profile')}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;