import React from 'react';
import ProductCard from './ProductCard';
import { featuredProducts } from '../../data/marketplace/featuredProducts';

function FeaturedListings() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Featured Listings</h2>
        <button className="text-primary hover:text-secondary">View all</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedListings;