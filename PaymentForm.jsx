import React, { useState } from 'react';
import { PaymentService } from '../../services/payment/PaymentService';

function PaymentForm({ amount, description, onSuccess, onError }) {
  const [loading, setLoading] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: ''
  });
  const paymentService = new PaymentService();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const paymentIntentId = await paymentService.createPaymentIntent(
        amount,
        'zar',
        description
      );

      const result = await paymentService.processPayment(
        paymentIntentId,
        cardDetails
      );

      if (result.status === 'succeeded') {
        onSuccess(result);
      } else {
        onError(new Error('Payment failed'));
      }
    } catch (error) {
      onError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Card Number
        </label>
        <input
          type="text"
          value={cardDetails.number}
          onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
          placeholder="4242 4242 4242 4242"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Expiry Date
          </label>
          <input
            type="text"
            value={cardDetails.expiry}
            onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="MM/YY"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            CVC
          </label>
          <input
            type="text"
            value={cardDetails.cvc}
            onChange={(e) => setCardDetails({ ...cardDetails, cvc: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="123"
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors disabled:opacity-50"
        >
          {loading ? 'Processing...' : `Pay R${amount.toFixed(2)}`}
        </button>
      </div>
    </form>
  );
}

export default PaymentForm;