import React, { useState } from 'react';
import ImageUploader from '../items/ImageUploader';
import { VeriLINCService } from '../../services/certificates/VeriLINCService';

function StandardCertificateRequest() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    images: [],
    category: '',
    condition: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const veriLINCService = new VeriLINCService();

  const handleImageUpload = (images) => {
    setFormData({ ...formData, images });
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const certificate = await veriLINCService.generateCertificate(formData);
      // Handle success
      console.log('Certificate generated:', certificate);
    } catch (error) {
      console.error('Error generating certificate:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Standard Certificate</h3>
        <p className="text-blue-600">
          Get a quick AI-powered valuation of your item based on photos and basic information.
          Perfect for common items with clear market values.
        </p>
        <p className="text-blue-600 mt-2">
          Fee: R50
        </p>
      </div>

      {step === 1 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Upload Item Photos</h3>
          <ImageUploader onUpload={handleImageUpload} maxImages={5} />
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Request Certificate'}
          </button>
        </form>
      )}
    </div>
  );
}

export default StandardCertificateRequest;