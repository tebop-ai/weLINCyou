import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { VeriLINCService } from '../../services/certificates/VeriLINCService';

const CertificateRequest = () => {
  const [step, setStep] = useState('capture'); // capture, preview, processing, complete
  const [image, setImage] = useState(null);
  const [itemDetails, setItemDetails] = useState({
    category: '',
    condition: '',
    description: ''
  });
  const [certificate, setCertificate] = useState(null);
  const webcamRef = useRef(null);
  const veriLINCService = new VeriLINCService();

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setStep('preview');
  };

  const handleSubmit = async () => {
    setStep('processing');
    try {
      // Convert base64 to blob
      const response = await fetch(image);
      const blob = await response.blob();
      
      const certificate = await veriLINCService.generateCertificate(blob, itemDetails);
      setCertificate(certificate);
      setStep('complete');
    } catch (error) {
      console.error('Error:', error);
      // Handle error appropriately
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Request VeriLINC Certificate</h2>
      
      {step === 'capture' && (
        <div className="space-y-4">
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full rounded-lg"
          />
          <button
            onClick={captureImage}
            className="w-full bg-primary text-white py-2 rounded-lg"
          >
            Capture Image
          </button>
        </div>
      )}

      {step === 'preview' && (
        <div className="space-y-4">
          <img src={image} alt="Preview" className="w-full rounded-lg" />
          <select
            value={itemDetails.category}
            onChange={(e) => setItemDetails({...itemDetails, category: e.target.value})}
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
            onChange={(e) => setItemDetails({...itemDetails, condition: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="Like New">Like New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
          <button
            onClick={handleSubmit}
            className="w-full bg-primary text-white py-2 rounded-lg"
          >
            Request Certificate
          </button>
        </div>
      )}

      {step === 'processing' && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Analyzing your item...</p>
        </div>
      )}

      {step === 'complete' && certificate && (
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold">VeriLINC Certificate</h3>
            <p>Estimated Value: R {certificate.estimatedValue}</p>
            <p>Certificate Fee: R {certificate.fee}</p>
            <p>Status: {certificate.status}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-primary text-white py-2 rounded-lg"
          >
            Request Another Certificate
          </button>
        </div>
      )}
    </div>
  );
}

export default CertificateRequest;