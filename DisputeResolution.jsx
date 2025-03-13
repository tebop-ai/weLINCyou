import React, { useState } from 'react';
import { EscrowService } from '../../services/escrow/EscrowService';
import ImageUploader from '../items/ImageUploader';

function DisputeResolution({ escrowId }) {
  const [formData, setFormData] = useState({
    reason: '',
    description: '',
    evidence: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const escrowService = new EscrowService();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      await escrowService.submitDispute(escrowId, formData);
      // Handle success (e.g., show confirmation, redirect)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEvidenceUpload = (files) => {
    setFormData({ ...formData, evidence: files });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Submit Dispute</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reason for Dispute
          </label>
          <select
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="">Select a reason</option>
            <option value="item_not_received">Item Not Received</option>
            <option value="item_not_as_described">Item Not As Described</option>
            <option value="item_damaged">Item Damaged</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Detailed Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Evidence
          </label>
          <ImageUploader onUpload={handleEvidenceUpload} maxImages={5} />
          <p className="text-sm text-gray-500 mt-1">
            Upload photos, screenshots, or other relevant evidence
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Dispute'}
        </button>
      </form>
    </div>
  );
}

export default DisputeResolution;