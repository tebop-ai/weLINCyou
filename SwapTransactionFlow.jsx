import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SwapTransactionFlow({ item }) {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const steps = [
    { number: 1, title: 'Initiate Swap' },
    { number: 2, title: 'VeriLINC Check' },
    { number: 3, title: 'Escrow Setup' },
    { number: 4, title: 'Delivery' },
    { number: 5, title: 'Complete' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        {steps.map((s) => (
          <div
            key={s.number}
            className={`flex flex-col items-center ${
              s.number <= step ? 'text-primary' : 'text-gray-400'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                s.number <= step ? 'bg-primary text-white' : 'bg-gray-200'
              }`}
            >
              {s.number}
            </div>
            <span className="text-sm">{s.title}</span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="mt-8">
        {step === 1 && (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to swap for {item.title}?</h3>
            <p className="text-gray-600 mb-6">
              Value: R {item.value.toLocaleString()}
            </p>
            <button
              onClick={() => setStep(2)}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Start Swap Process
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">VeriLINC Verification</h3>
            <p className="text-gray-600 mb-6">
              Let's verify the item's condition and value
            </p>
            <button
              onClick={() => setStep(3)}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Continue to Escrow
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Secure Escrow Setup</h3>
            <p className="text-gray-600 mb-6">
              Setting up secure escrow for both parties
            </p>
            <button
              onClick={() => setStep(4)}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Proceed to Delivery
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Delivery Setup</h3>
            <p className="text-gray-600 mb-6">
              Choose your preferred delivery method
            </p>
            <button
              onClick={() => setStep(5)}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Complete Swap
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Swap Initiated!</h3>
            <p className="text-gray-600 mb-6">
              Your swap has been successfully initiated. You'll receive updates via email.
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Return to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SwapTransactionFlow;