import React from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

function VeriLINCRequest({ onChange }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-start space-x-4">
        <ShieldCheckIcon className="h-8 w-8 text-primary flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold">VeriLINC Certificate</h3>
          <p className="text-gray-600 mt-1">
            Get your item verified and valued by our AI-powered system for more trusted swaps.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              AI-powered item analysis
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Professional valuation
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Trust badge on your listing
            </li>
          </ul>
          <div className="mt-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => onChange(e.target.checked)}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-600">
                Yes, I want a VeriLINC certificate (R50)
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VeriLINCRequest;