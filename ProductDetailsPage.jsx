import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HeartIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';
import { featuredProducts } from '../../data/marketplace/featuredProducts';
import VeriLINCBadge from '../../components/marketplace/VeriLINCBadge';
import { VeriLINCService } from '../../services/certificates/VeriLINCService';

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // For demo, we're using the iPhone listing
  const product = featuredProducts[1]; // iPhone listing
  const veriLINCService = new VeriLINCService();

  useEffect(() => {
    const loadCertificate = async () => {
      try {
        // Mock certificate data (replace with actual API call)
        const cert = {
          certificateNumber: 'VL' + Math.random().toString().slice(2, 8),
          estimatedValue: 19999,
          lastUpdated: new Date().toISOString(),
          condition: 'Excellent',
          authenticity: 'Verified Original',
          marketAnalysis: {
            averagePrice: 20500,
            priceRange: {
              min: 18500,
              max: 22000
            }
          }
        };
        setCertificate(cert);
      } catch (error) {
        console.error('Error loading certificate:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCertificate();
  }, []);

  const handleBuyNow = () => {
    navigate(`/checkout/${id}`, { 
      state: { 
        product,
        quantity,
        total: product.price * quantity,
        certificate
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full rounded-lg shadow-sm"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <p className="text-2xl font-bold text-primary mt-2">
                R {product.price.toLocaleString()}
              </p>
            </div>

            {certificate && <VeriLINCBadge certificate={certificate} />}

            <div className="flex items-center space-x-4">
              <ShieldCheckIcon className="h-5 w-5 text-green-500" />
              <span className="text-green-600">Verified Seller</span>
            </div>

            <div className="border-t border-b py-4">
              <h3 className="text-lg font-semibold mb-2">Product Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 256GB Storage</li>
                <li>• 6.7-inch Super Retina XDR display</li>
                <li>• Pro camera system</li>
                <li>• A16 Bionic chip</li>
                <li>• All-day battery life</li>
              </ul>
            </div>

            {certificate && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">Market Analysis</h3>
                <div className="space-y-2 text-sm text-blue-700">
                  <p>Average Market Price: R {certificate.marketAnalysis.averagePrice.toLocaleString()}</p>
                  <p>Price Range: R {certificate.marketAnalysis.priceRange.min.toLocaleString()} - R {certificate.marketAnalysis.priceRange.max.toLocaleString()}</p>
                  <p>Condition: {certificate.condition}</p>
                  <p>Authenticity: {certificate.authenticity}</p>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-4">
              <TruckIcon className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-gray-500">2-3 business days</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-700">Quantity:</label>
                <select 
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border rounded-md px-2 py-1"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                Buy Now
              </button>

              <button className="w-full border border-primary text-primary py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;