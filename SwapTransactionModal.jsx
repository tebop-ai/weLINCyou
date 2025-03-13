import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import SwapSteps from './SwapSteps';
import Button from '../common/Button';

function SwapTransactionModal({ item1, item2, onClose }) {
  const [step, setStep] = useState(1);
  
  const steps = [
    { number: 1, title: 'Review Items' },
    { number: 2, title: 'VeriLINC Check' },
    { number: 3, title: 'Escrow Setup' },
    { number: 4, title: 'Delivery' },
    { number: 5, title: 'Complete' }
  ];

  return (
    <Dialog open={true} onClose={onClose} className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        
        <div className="relative bg-white rounded-lg max-w-3xl w-full mx-auto p-6">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-500">
            <XMarkIcon className="h-6 w-6" />
          </button>

          <SwapSteps currentStep={step} steps={steps} />

          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center">Review Swap Items</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <img src={item1.image} alt={item1.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="font-semibold">{item1.title}</h3>
                  <p className="text-primary">R {item1.value.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <img src={item2.image} alt={item2.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="font-semibold">{item2.title}</h3>
                  <p className="text-primary">R {item2.value.toLocaleString()}</p>
                </div>
              </div>
              <Button onClick={() => setStep(2)} className="w-full">Continue to VeriLINC Check</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <ShieldCheckIcon className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-800">VeriLINC Verification</h3>
                    <p className="text-sm text-green-600">Both items have been verified</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => setStep(3)} className="w-full">Proceed to Escrow</Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center">Escrow Setup</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">Escrow fee: R {Math.max(item1.value * 0.02, 50).toFixed(2)}</p>
                <p className="text-sm text-blue-600 mt-2">Protects both parties during the swap</p>
              </div>
              <Button onClick={() => setStep(4)} className="w-full">Set Up Delivery</Button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center">Delivery Options</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                  <h3 className="font-semibold">Meet in Person</h3>
                  <p className="text-sm text-gray-600">Arrange a safe meeting point</p>
                </div>
                <div className="border rounded-lg p-4 cursor-pointer hover:border-primary">
                  <h3 className="font-semibold">Courier Service</h3>
                  <p className="text-sm text-gray-600">Professional delivery service</p>
                </div>
              </div>
              <Button onClick={() => setStep(5)} className="w-full">Complete Swap</Button>
            </div>
          )}

          {step === 5 && (
            <div className="text-center space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-2">Swap Initiated!</h2>
                <p className="text-green-600">Your swap has been successfully initiated. You'll receive updates via email.</p>
              </div>
              <Button onClick={onClose} className="w-full">Return to Dashboard</Button>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default SwapTransactionModal;