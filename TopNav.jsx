import React from 'react';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              weLINKyou
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;