import React from 'react';
import Button from '../common/Button';

function SwapStep({ title, description, buttonText, onNext }) {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button onClick={onNext}>{buttonText}</Button>
    </div>
  );
}

export default SwapStep;