import React, { useState } from 'react';
import ImageUploader from '../items/ImageUploader';
import { VeriLINCService } from '../../services/certificates/VeriLINCService';

function AdvancedCertificateRequest() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    images: [],
    category: '',
    condition: '',
    description: '',
    receipts: [],
    proofOfOwnership: [],
    additionalDetails: '',
    serialNumber: '',
    purchaseDate: '',
    originalPrice: ''
  });
  const [loading, setLoading] = useState(false);
  const veriLINCService = new VeriLINCService();

  const handleImageUpload = (images) => {
    setFormData({ ...formData, images });
    setStep(2);
  };

  const handleReceiptUpload = (receipts) => {
    setFormData({ ...formData, receipts });
  };

  const handleProofUpload = (proofs) => {
    setFormData({ ...formData, proofOfOwnership: proofs });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const certificate = await veriLINCService.generateAdvancedCertificate(formData);
      // Handle success
      console.log('Advanced certificate generated:', certificate);
    } catch (error) {
      console.error('Error generating advanced certificate:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">Advanced Certificate</h3>
        <p className="text-purple-600">
          Get a comprehensive valuation with human expert review. Includes detailed analysis,
          authenticity verification, and market comparison.
        </p>
        <p className="text-purple-600 mt-2">
          Fee: R150
        </p>
      </div>

      {step === 1 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Upload Item Photos</h3>
          <ImageUploader onUpload={handleImageUpload} maxImages={10} />
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Fashion">Fashion</option>
                <option value="Sports">Sports</option>
                {/* Add more categories */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Condition
              </label>
              <select
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select condition</option>
                <option value="New">New</option>
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Serial Number (if applicable)
            </label>
            <input
              type="text"
              value={formData.serialNumber}
              onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Purchase Date
              </label>
              <input
                type="date"
                value={formData.purchaseDate}
                onChange={(e) => setFormData({ ...formData, purchaseDate: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Original Price (ZAR)
              </label>
              <input
                type="number"
                value={formData.originalPrice}
                onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Details
            </label>
            <textarea
              value={formData.additionalDetails}
              onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
              className="w-full border border-gray-300 rounded-md p-2"
              rows={4}
              placeholder="Include any relevant details about the item's history, modifications, or special features"
            />
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Upload Receipts</h4>
            <ImageUploader onUpload={handleReceiptUpload} maxImages={3} />
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Proof of Ownership</h4>
            <ImageUploader onUpload={handleProofUpload} maxImages={3} />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Request Advanced Certificate'}
          </button>
        </form>
      )}
    </div>
  );
}

export default AdvancedCertificateRequest;