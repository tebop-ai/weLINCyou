import React, { useState } from 'react';
import StandardCertificateRequest from '../../components/certificates/StandardCertificateRequest';
import AdvancedCertificateRequest from '../../components/certificates/AdvancedCertificateRequest';
import CertificateList from '../../components/certificates/CertificateList';

function CertificatePage() {
  const [activeTab, setActiveTab] = useState('standard');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">VeriLINC Fair Value Certificate</h1>

          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('standard')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'standard'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Standard Certificate
              </button>
              <button
                onClick={() => setActiveTab('advanced')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'advanced'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Advanced Certificate
              </button>
              <button
                onClick={() => setActiveTab('view')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'view'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                View Certificates
              </button>
            </nav>
          </div>

          {activeTab === 'standard' && <StandardCertificateRequest />}
          {activeTab === 'advanced' && <AdvancedCertificateRequest />}
          {activeTab === 'view' && <CertificateList />}
        </div>
      </div>
    </div>
  );
}

export default CertificatePage;