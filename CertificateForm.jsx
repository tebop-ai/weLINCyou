import React from 'react';

export const CertificateForm = ({ itemDetails, onDetailsChange }) => (
  <div className="space-y-4">
    <select
      value={itemDetails.category}
      onChange={(e) => onDetailsChange({ ...itemDetails, category: e.target.value })}
      className="w-full p-2 border rounded"
    >
      <option value="">Select Category</option>
      <option value="Electronics">Electronics</option>
      <option value="Furniture">Furniture</option>
      <option value="Clothing">Clothing</option>
      <option value="Sports">Sports</option>
    </select>
    <select
      value={itemDetails.condition}
      onChange={(e) => onDetailsChange({ ...itemDetails, condition: e.target.value })}
      className="w-full p-2 border rounded"
    >
      <option value="">Select Condition</option>
      <option value="New">New</option>
      <option value="Like New">Like New</option>
      <option value="Good">Good</option>
      <option value="Fair">Fair</option>
    </select>
  </div>
);