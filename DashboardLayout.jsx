import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import SearchBar from './SearchBar';
import NotificationPanel from './NotificationPanel';
import UserProfileShortcut from './UserProfileShortcut';

function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handlePostAd = () => {
    if (user) {
      navigate('/post-ad');
    } else {
      navigate('/login', { state: { from: '/post-ad' } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">weLINCyou</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePostAd}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
              >
                Post Ad
              </button>
              <NotificationPanel />
              <UserProfileShortcut />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;