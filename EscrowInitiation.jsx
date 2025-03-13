import React, { useState } from 'react';
import { EscrowService } from '../../services/escrow/EscrowService';

function EscrowInitiation({ swapDetails, onComplete }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const escrowService = new EscrowService();

  const handleInitiate = async () => {
    try {
      setLoading(true);
      setError(null);
      const escrow = await escrowService.initiateEscrow(swapDetails);
      onComplete(escrow);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const escrowFee = escrowService.calculateEscrowFee(swapDetails.itemValue);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Secure Swap Escrow</h2>

      <div className="space-y-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-800 mb-2">How Escrow Works</h3>
          <ol className="list-decimal list-inside text-blue-700 space-y-2">
            <li>Both parties agree to the swap terms</li>
            <li>Each party pays the escrow fee</li>
            <li>Items are exchanged via our delivery network</li>
            <li>Both parties confirm receipt and satisfaction</li>
            <li>The swap is completed and recorded</li>
          </ol>
        </div>

        <div className="border-t border-b py-4">
          <h3 className="font-semibold mb-2">Escrow Details</h3>
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-sm text-gray-600">Item Value</dt>
              <dd className="font-medium">R {swapDetails.itemValue.toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Escrow Fee</dt>
              <dd className="font-medium">R {escrowFee.toLocaleString()}</dd>
            </div>
          </dl>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <button
          onClick={handleInitiate}
          disabled={loading}
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50"
        >
          {loading ? 'Initiating Escrow...' : 'Start Secure Swap'}
        </button>
      </div>
    </div>
  );
}

export default EscrowInitiation;