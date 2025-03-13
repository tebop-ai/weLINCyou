import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ImageUploader from '../../components/items/ImageUploader';
import VeriLINCRequest from '../../components/items/VeriLINCRequest';
import { ItemService } from '../../services/items/ItemService';

function PostAdPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    price: '',
    location: '',
    images: [],
    requestVeriLINC: false
  });
  const [loading, setLoading] = useState(false);
  const itemService = new ItemService();

  useEffect(() => {
    if (!user) {
      navigate('/login', { state: { from: '/post-ad' } });
    }
  }, [user, navigate]);

  const handleImageUpload = (images) => {
    setFormData({ ...formData, images });
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const item = await itemService.createItem({
        ...formData,
        userId: user.uid,
        status: 'active',
        createdAt: new Date().toISOString()
      });

      if (formData.requestVeriLINC) {
        // Handle VeriLINC certificate request
        // This would typically be handled by your VeriLINC service
      }

      navigate('/seller/dashboard');
    } catch (error) {
      console.error('Error creating listing:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    'Vehicles',
    'Property',
    'Electronics',
    'Furniture',
    'Fashion',
    'Sports',
    'Collectibles',
    'Jobs',
    'Services'
  ];

  const conditions = [
    'New',
    'Like New',
    'Good',
    'Fair',
    'Poor'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-6">Post New Ad</h1>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((number) => (
              <div
                key={number}
                className={`flex items-center ${
                  number < step ? 'text-primary' : number === step ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    number <= step ? 'bg-primary text-white' : 'bg-gray-200'
                  }`}
                >
                  {number}
                </div>
                <span className="ml-2">
                  {number === 1 ? 'Photos' : number === 2 ? 'Details' : 'Review'}
                </span>
              </div>
            ))}
          </div>

          {step === 1 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Upload Photos</h2>
              <ImageUploader onUpload={handleImageUpload} maxImages={10} />
            </div>
          )}

          {step === 2 && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Condition</label>
                  <select
                    required
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  >
                    <option value="">Select Condition</option>
                    {conditions.map((condition) => (
                      <option key={condition} value={condition}>{condition}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price (ZAR)</label>
                  <input
                    type="number"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="City, Province"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                Continue
              </button>
            </form>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <VeriLINCRequest
                onChange={(value) => setFormData({ ...formData, requestVeriLINC: value })}
              />
              
              <div className="border-t pt-6">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  {loading ? 'Publishing...' : 'Publish Ad'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostAdPage;