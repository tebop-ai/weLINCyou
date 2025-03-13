import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon, ChartBarIcon, TagIcon, BellIcon } from '@heroicons/react/24/outline';

function SellerDashboardPage() {
  const listings = [
    {
      id: 1,
      title: 'iPhone 14 Pro Max',
      price: 19999,
      status: 'active',
      views: 245,
      inquiries: 12,
      publishedDate: '2024-01-15'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Seller Dashboard</h1>
          <Link
            to="/post-ad"
            className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Post New Ad
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <ChartBarIcon className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Views</p>
                <p className="text-2xl font-bold">245</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <TagIcon className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Active Listings</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <BellIcon className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">New Inquiries</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Your Listings</h2>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3">Title</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Views</th>
                  <th className="pb-3">Inquiries</th>
                  <th className="pb-3">Published</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing) => (
                  <tr key={listing.id} className="border-b">
                    <td className="py-4">{listing.title}</td>
                    <td>R {listing.price.toLocaleString()}</td>
                    <td>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {listing.status}
                      </span>
                    </td>
                    <td>{listing.views}</td>
                    <td>{listing.inquiries}</td>
                    <td>{new Date(listing.publishedDate).toLocaleDateString()}</td>
                    <td>
                      <button className="text-primary hover:text-secondary">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboardPage;