import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

function OrderConfirmationPage() {
  const location = useLocation();
  const { orderNumber, product, quantity, total, certificate } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order number is: {orderNumber}
          </p>

          <div className="border-t border-b py-4 my-6">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-medium">{product?.title}</span>
                <span className="ml-2">x{quantity}</span>
                {certificate && (
                  <div className="flex items-center mt-1 text-sm text-green-600">
                    <ShieldCheckIcon className="h-4 w-4 mr-1" />
                    VeriLINC Certified
                  </div>
                )}
              </div>
              <div className="text-lg font-bold text-primary">
                R {total?.toLocaleString()}
              </div>
            </div>
          </div>

          {certificate && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-left">
              <h3 className="text-sm font-semibold text-green-800 mb-2">VeriLINC Certificate</h3>
              <p className="text-sm text-green-700">
                This purchase includes a VeriLINC certificate verifying the item's authenticity and value.
                Certificate #{certificate.certificateNumber}
              </p>
            </div>
          )}

          <p className="text-gray-600 mb-6">
            We'll send you an email with your order details and tracking information.
          </p>

          <Link
            to="/buy-sell"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationPage;