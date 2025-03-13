import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

function AccountSettings() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: user?.displayName || '',
    email: user?.email || '',
    phone: '',
    location: '',
    notifications: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle profile update
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="notifications"
            checked={formData.notifications}
            onChange={(e) => setFormData({...formData, notifications: e.target.checked})}
            className="h-4 w-4 text-primary rounded border-gray-300"
          />
          <label htmlFor="notifications" className="ml-2 text-sm text-gray-700">
            Receive notifications about new swap matches and messages
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default AccountSettings;