import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

function EscrowStatus({ escrow }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'disputed':
        return 'text-red-600 bg-red-100';
      case 'completed':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Escrow Status</h2>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-lg">Current Status</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(escrow.status)}`}>
            {escrow.status.charAt(0).toUpperCase() + escrow.status.slice(1)}
          </span>
        </div>

        <div className="border-t border-b py-4">
          <h3 className="font-semibold mb-4">Release Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Buyer Release</span>
              {escrow.releaseStatus.buyer ? (
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
              ) : (
                <XCircleIcon className="h-6 w-6 text-gray-300" />
              )}
            </div>
            <div className="flex items-center justify-between">
              <span>Seller Release</span>
              {escrow.releaseStatus.seller ? (
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
              ) : (
                <XCircleIcon className="h-6 w-6 text-gray-300" />
              )}
            </div>
          </div>
        </div>

        {escrow.disputeResolution && (
          <div>
            <h3 className="font-semibold mb-2">Dispute Information</h3>
            <div className="bg-gray-50 rounded p-4">
              <p className="text-sm text-gray-600 mb-2">
                Status: {escrow.disputeResolution.status}
              </p>
              {escrow.disputeResolution.resolution && (
                <p className="text-sm text-gray-600">
                  Resolution: {escrow.disputeResolution.resolution}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EscrowStatus;