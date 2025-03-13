import React from 'react';

export const CertificateResult = ({ certificate, onRequestAnother }) => (
  <div className="space-y-4">
    <div className="border rounded-lg p-4">
      <h3 className="font-bold">VeriLINC Certificate</h3>
      <p>Estimated Value: R {certificate.estimatedValue}</p>
      <p>Certificate Fee: R {certificate.fee}</p>
      <p>Status: {certificate.status}</p>
    </div>
    <button
      onClick={onRequestAnother}
      className="w-full bg-primary text-white py-2 rounded-lg"
    >
      Request Another Certificate
    </button>
  </div>
);