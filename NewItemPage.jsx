import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUploader from '../../components/items/ImageUploader';
import ItemDetailsForm from '../../components/items/ItemDetailsForm';
import VeriLINCRequest from '../../components/items/VeriLINCRequest';
import { ItemService } from '../../services/items/ItemService';

function NewItemPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [itemData, setItemData] = useState({
    images: [],
    title: '',
    description: '',
    category: '',
    condition: '',
    features: [],
    estimatedValue: '',
    preferredSwapItems: [],
    requestVeriLINC: false
  });
  const [loading, setLoading] = useState(false);
  const itemService = new ItemService();

  const handleImageUpload = (images) => {
    setItemData({ ...itemData, images });
    setStep(2);
  };

  const handleDetailsSubmit = (details) => {
    setItemData({ ...itemData, ...details });
    setStep(3);
  };

  const handleVeriLINCRequest = (request) => {
    setItemData({ ...itemData, requestVeriLINC: request });
  };

  const handlePublish = async () => {
    try {
      setLoading(true);
      await itemService.createItem(itemData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error publishing item:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-6">Post New Item</h1>

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
            <ImageUploader onUpload={handleImageUpload} />
          )}

          {step === 2 && (
            <ItemDetailsForm onSubmit={handleDetailsSubmit} />
          )}

          {step === 3 && (
            <div className="space-y-6">
              <VeriLINCRequest onChange={handleVeriLINCRequest} />
              
              <div className="border-t pt-6">
                <button
                  onClick={handlePublish}
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  {loading ? 'Publishing...' : 'Publish Item'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewItemPage;