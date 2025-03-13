import React, { useState, useEffect } from 'react';
import { VeriLINCService } from '../../services/certificates/VeriLINCService';

function CertificateList() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('active'); // active, expired
  const veriLINCService = new VeriLINCService();

  useEffect(() => {
    loadCertificates();
  }, [filter]);

  const loadCertificates = async () => {
    try {
      const data = await veriLINCService.getCertificates(filter);
      setCertificates(data);
    } catch (error) {
      console.error('Error loading certificates:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReissue = async (certificateId) => {
    try {
      await veriLINCService.reissueCertificate(certificateId);
      await loadCertificates();
    } catch (error) {
      console.error('Error reissuing certificate:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Your Certificates</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'active'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('expired')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'expired'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Expired
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="border rounded-lg p-4 hover:border-primary transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{cert.itemName}</h4>
                <p className="text-sm text-gray-600">
                  Certificate #{cert.certificateNumber}
                </p>
              </div>
              <div className={`px-2 py-1 rounded text-sm ${
                cert.status === 'active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {cert.status}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Issued Date:</span>
                <span className="ml-2">{new Date(cert.issuedDate).toLocaleDateString()}</span>
              </div>
              <div>
                <span className="text-gray-600">Expiry Date:</span>
                <span className="ml-2">{new Date(cert.expiryDate).toLocaleDateString()}</span>
              </div>
              <div>
                <span className="text-gray-600">Estimated Value:</span>
                <span className="ml-2">R {cert.estimatedValue.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-gray-600">Certificate Type:</span>
                <span className="ml-2">{cert.type}</span>
              </div>
            </div>

            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => window.open(cert.pdfUrl, '_blank')}
                className="text-primary hover:text-secondary"
              >
                View Certificate
              </button>
              {cert.status === 'expired' && (
                <button
                  onClick={() => handleReissue(cert.id)}
                  className="text-primary hover:text-secondary"
                >
                  Reissue Certificate
                </button>
              )}
            </div>
          </div>
        ))}

        {certificates.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No certificates found.
          </div>
        )}
      </div>
    </div>
  );
}

export default CertificateList;