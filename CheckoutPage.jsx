import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PaymentService } from '../../services/payment/PaymentService';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity, total, certificate } = location.state || {};
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [loading, setLoading] = useState(false);
  const paymentService = new PaymentService();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const paymentResult = await paymentService.processPayment({
        amount: total,
        currency: 'ZAR',
        paymentMethod: {
          card: {
            number: formData.cardNumber,
            exp_month: formData.expiryDate.split('/')[0],
            exp_year: formData.expiryDate.split('/')[1],
            cvc: formData.cvv
          }
        }
      });

      if (paymentResult.status === 'succeeded') {
        navigate('/order-confirmation', { 
          state: { 
            orderNumber: Math.random().toString(36).substr(2, 9).toUpperCase(),
            product,
            quantity,
            total,
            certificate
          }
        });
      }
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-medium">{product?.title}</p>
              <p className="text-sm text-gray-500">Quantity: {quantity}</p>
              {certificate && (
                <div className="flex items-center mt-2 text-sm text-green-600">
                  <ShieldCheckIcon className="h-4 w-4 mr-1" />
                  VeriLINC Certified
                </div>
              )}
            </div>
            <p className="font-bold text-primary">R {total?.toLocaleString()}</p>
          </div>
          
          {certificate && (
            <div className="mt-4 p-3 bg-green-50 rounded-md">
              <p className="text-sm text-green-800">
                This item has been verified by VeriLINC for authenticity and fair market value.
              </p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Delivery Address</label>
            <textarea
              required
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                required
                value={formData.cardNumber}
                onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="4242 4242 4242 4242"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  required
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  required
                  value={formData.cvv}
                  onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="123"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing...' : `Pay R ${total?.toLocaleString()}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;