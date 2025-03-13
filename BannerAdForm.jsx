import React, { useState } from 'react';
import ImageUploader from '../items/ImageUploader';
import { AdvertisingService } from '../../services/advertising/AdvertisingService';

function BannerAdForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: [],
    targetUrl: '',
    placement: 'homepage',
    duration: 30,
    budget: ''
  });
  const [loading, setLoading] = useState(false);
  const advertisingService = new AdvertisingService();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await advertisingService.createBannerAd(formData);
      onSuccess();
    } catch (error) {
      console.error('Error creating banner ad:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (images) => {
    setFormData({ ...formData, images });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ad Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ad Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Banner Image
        </label>
        <ImageUploader onUpload={handleImageUpload} maxImages={1} />
        <p className="mt-1 text-sm text-gray-500">
          Recommended size: 728x90px (leaderboard) or 300x250px (medium rectangle)
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Target URL
        </label>
        <input
          type="url"
          value={formData.targetUrl}
          onChange={(e) => setFormData({ ...formData, targetUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Placement
        </label>
        <select
          value={formData.placement}
          onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
        >
          <option value="homepage">Homepage</option>
          <option value="search">Search Results</option>
          <option value="category">Category Pages</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Campaign Duration (days)
        </label>
        <select
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
        >
          <option value="30">30 days</option>
          <option value="60">60 days</option>
          <option value="90">90 days</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Daily Budget (ZAR)
        </label>
        <input
          type="number"
          min="100"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
          required
        />
        <p className="mt-1 text-sm text-gray-500">Minimum budget: R100/day</p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors disabled:opacity-50"
      >
        {loading ? 'Creating Banner Ad...' : 'Create Banner Ad'}
      </button>
    </form>
  );
}

export default BannerAdForm;