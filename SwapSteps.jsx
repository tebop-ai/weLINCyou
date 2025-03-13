import React from 'react';

function SwapSteps({ currentStep, steps }) {
  return (
    <div className="flex justify-between mb-8">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`flex flex-col items-center ${
            step.number <= currentStep ? 'text-primary' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
              step.number <= currentStep ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
          >
            {step.number}
          </div>
          <span className="text-sm">{step.title}</span>
        </div>
      ))}
    </div>
  );
}

export default SwapSteps;