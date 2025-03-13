import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/dashboard/SearchBar';
import FeaturedItems from '../../components/dashboard/FeaturedItems';
import SwapSuggestions from '../../components/dashboard/SwapSuggestions';
import NotificationPanel from '../../components/dashboard/NotificationPanel';
import UserProfileShortcut from '../../components/dashboard/UserProfileShortcut';
import AddItemButton from '../../components/dashboard/AddItemButton';

function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implement search logic
  };

  const handleAddItem = () => {
    navigate('/items/new');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">weLINKyou</h1>
            <div className="flex items-center space-x-4">
              <NotificationPanel />
              <UserProfileShortcut />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <SearchBar onSearch={handleSearch} />
          
          <div className="grid gap-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Items</h2>
              <FeaturedItems />
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Swap Suggestions</h2>
              <SwapSuggestions />
            </section>
          </div>

          <div className="fixed bottom-8 right-8">
            <AddItemButton onClick={handleAddItem} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;