import React, { useState } from 'react';
import { AdvertisingService } from '../../services/advertising/AdvertisingService';

function PromoteListingForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    listingId: '',
    duration: 7,
    budget: '',
    targetAudience: {
      locations: [],
      interests: [],
      ageRange: { min: 18, max: 65 }
    }
  });
  const [loading, setLoading] = useState(false);
  const advertisingService = new AdvertisingService();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await advertisingService.createSponsoredListing(formData);
      onSuccess();
    } catch (error) {
      console.error('Error promoting listing:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Listing to Promote
        </label>
        <select
          value={formData.listingId}
          onChange={(e) => setFormData({ ...formData, listingId: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
          required
        >
          <option value="">Select a listing</option>
          {/* Add your listings here */}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Promotion Duration (days)
        </label>
        <select
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
        >
          <option value="7">7 days</option>
          <option value="14">14 days</option>
          <option value="30">30 days</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Daily Budget (ZAR)
        </label>
        <input
          type="number"
          min="50"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
          required
        />
        <p className="mt-1 text-sm text-gray-500">Minimum budget: R50/day</p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors disabled:opacity-50"
      >
        {loading ? 'Creating Promotion...' : 'Promote Listing'}
      </button>
    </form>
  );
}

export default PromoteListingForm;