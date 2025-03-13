import React, { useState } from 'react';

function ItemDetailsForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    features: [],
    estimatedValue: '',
    preferredSwapItems: []
  });

  const categories = [
    'Electronics', 'Furniture', 'Clothing', 'Sports', 'Books',
    'Collectibles', 'Home & Garden', 'Toys & Games', 'Other'
  ];

  const conditions = [
    'New', 'Like New', 'Good', 'Fair', 'Poor'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleFeatureAdd = () => {
    const feature = document.getElementById('feature-input').value.trim();
    if (feature && !formData.features.includes(feature)) {
      setFormData({
        ...formData,
        features: [...formData.features, feature]
      });
      document.getElementById('feature-input').value = '';
    }
  };

  const handlePreferredItemAdd = () => {
    const item = document.getElementById('preferred-item-input').value.trim();
    if (item && !formData.preferredSwapItems.includes(item)) {
      setFormData({
        ...formData,
        preferredSwapItems: [...formData.preferredSwapItems, item]
      });
      document.getElementById('preferred-item-input').value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            required
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
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
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          >
            <option value="">Select Condition</option>
            {conditions.map((condition) => (
              <option key={condition} value={condition}>{condition}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Features</label>
        <div className="mt-1 flex">
          <input
            id="feature-input"
            type="text"
            className="block w-full rounded-l-md border border-gray-300 px-3 py-2"
            placeholder="Add a feature"
          />
          <button
            type="button"
            onClick={handleFeatureAdd}
            className="bg-primary text-white px-4 rounded-r-md hover:bg-secondary"
          >
            Add
          </button>
        </div>
        {formData.features.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.features.map((feature, index) => (
              <span
                key={index}
                className="bg-gray-100 px-2 py-1 rounded text-sm flex items-center"
              >
                {feature}
                <button
                  type="button"
                  onClick={() => setFormData({
                    ...formData,
                    features: formData.features.filter((_, i) => i !== index)
                  })}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Estimated Value (ZAR)</label>
        <input
          type="number"
          required
          value={formData.estimatedValue}
          onChange={(e) => setFormData({ ...formData, estimatedValue: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          min="0"
          step="1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred Swap Items</label>
        <div className="mt-1 flex">
          <input
            id="preferred-item-input"
            type="text"
            className="block w-full rounded-l-md border border-gray-300 px-3 py-2"
            placeholder="Add preferred item"
          />
          <button
            type="button"
            onClick={handlePreferredItemAdd}
            className="bg-primary text-white px-4 rounded-r-md hover:bg-secondary"
          >
            Add
          </button>
        </div>
        {formData.preferredSwapItems.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.preferredSwapItems.map((item, index) => (
              <span
                key={index}
                className="bg-gray-100 px-2 py-1 rounded text-sm flex items-center"
              >
                {item}
                <button
                  type="button"
                  onClick={() => setFormData({
                    ...formData,
                    preferredSwapItems: formData.preferredSwapItems.filter((_, i) => i !== index)
                  })}
                  className="ml-2 text-gray-500 hover:text-red-500"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors"
        >
          Continue
        </button>
      </div>
    </form>
  );
}

export default ItemDetailsForm;