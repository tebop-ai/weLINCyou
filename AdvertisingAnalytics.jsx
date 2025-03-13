import React from 'react';
import { ChartBarIcon, CurrencyRandIcon, EyeIcon, CursorClickIcon } from '@heroicons/react/24/outline';

function AdvertisingAnalytics({ analytics, loading }) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="space-y-3">
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
            <div className="h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!analytics) return null;

  const stats = [
    {
      name: 'Total Impressions',
      value: analytics.listings.totalImpressions + analytics.banners.totalImpressions,
      icon: EyeIcon
    },
    {
      name: 'Total Clicks',
      value: analytics.listings.totalClicks + analytics.banners.totalClicks,
      icon: CursorClickIcon
    },
    {
      name: 'Active Campaigns',
      value: analytics.listings.activeCount + analytics.banners.activeCount,
      icon: ChartBarIcon
    },
    {
      name: 'Total Spend',
      value: `R ${analytics.totalSpend.toLocaleString()}`,
      icon: CurrencyRandIcon
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6">Campaign Analytics</h2>
        
        <div className="space-y-6">
          {stats.map((stat) => (
            <div key={stat.name} className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Performance Breakdown</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span>Sponsored Listings</span>
                <span>CTR: {analytics.listings.ctr.toFixed(2)}%</span>
              </div>
              <div className="mt-1 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-primary rounded-full"
                  style={{ width: `${analytics.listings.ctr}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span>Banner Ads</span>
                <span>CTR: {analytics.banners.ctr.toFixed(2)}%</span>
              </div>
              <div className="mt-1 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-primary rounded-full"
                  style={{ width: `${analytics.banners.ctr}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisingAnalytics;