import React from 'react';

function QuickStats() {
  const stats = [
    { label: 'Active Listings', value: 5 },
    { label: 'Pending Swaps', value: 2 },
    { label: 'Completed Swaps', value: 8 },
    { label: 'VeriLINC Certificates', value: 3 }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{stat.label}</span>
            <span className="font-semibold">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickStats;