import React from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

function VeriLINCBadge({ certificate }) {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <div className="flex items-center space-x-3">
        <ShieldCheckIcon className="h-6 w-6 text-green-600" />
        <div>
          <h3 className="text-sm font-semibold text-green-800">
            VeriLINC Certified
          </h3>
          <p className="text-sm text-green-600">
            Certificate #{certificate.certificateNumber}
          </p>
        </div>
      </div>
      <div className="mt-2 text-sm text-green-700">
        <p>Market Value: R {certificate.estimatedValue.toLocaleString()}</p>
        <p className="text-xs text-green-600 mt-1">
          Last Verified: {new Date(certificate.lastUpdated).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default VeriLINCBadge;