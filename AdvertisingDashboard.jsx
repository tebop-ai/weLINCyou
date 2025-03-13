import React, { useState, useEffect } from 'react';
import { AdvertisingService } from '../../services/advertising/AdvertisingService';
import PromoteListingForm from '../../components/advertising/PromoteListingForm';
import BannerAdForm from '../../components/advertising/BannerAdForm';
import AdvertisingAnalytics from '../../components/advertising/AdvertisingAnalytics';

function AdvertisingDashboard() {
  const [activeTab, setActiveTab] = useState('promote');
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const advertisingService = new AdvertisingService();

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const data = await advertisingService.getAdvertisingAnalytics('current-business-id');
      setAnalytics(data);
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Advertising Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex">
                  <button
                    onClick={() => setActiveTab('promote')}
                    className={`py-4 px-6 text-sm font-medium ${
                      activeTab === 'promote'
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Promote Listings
                  </button>
                  <button
                    onClick={() => setActiveTab('banner')}
                    className={`py-4 px-6 text-sm font-medium ${
                      activeTab === 'banner'
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Banner Ads
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'promote' ? (
                  <PromoteListingForm onSuccess={loadAnalytics} />
                ) : (
                  <BannerAdForm onSuccess={loadAnalytics} />
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AdvertisingAnalytics analytics={analytics} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisingDashboard;