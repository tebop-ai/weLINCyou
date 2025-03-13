import React from 'react';
import { StarIcon } from '@heroicons/react/24/outline';

function MembershipStatus() {
  const isPremium = false;
  const benefits = [
    'No fees on VeriLINC certificates',
    'Priority swap matching',
    'Advanced analytics',
    'Premium badge on listings'
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Membership Status</h2>
        <StarIcon className={`h-6 w-6 ${isPremium ? 'text-yellow-500' : 'text-gray-400'}`} />
      </div>

      <div className="mb-6">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          isPremium ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {isPremium ? 'Premium Member' : 'Basic Member'}
        </span>
      </div>

      {!isPremium && (
        <>
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Premium Benefits</h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors">
            Upgrade to Premium
          </button>
        </>
      )}
    </div>
  );
}

export default MembershipStatus;