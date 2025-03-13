import React from 'react';

function WhyChooseUs() {
  const features = [
    {
      title: 'Safe & Secure',
      description: 'Verified users and secure transactions for peace of mind'
    },
    {
      title: 'Easy to Use',
      description: 'Simple listing process and intuitive interface'
    },
    {
      title: 'Item Swapping',
      description: 'Unique feature to exchange items of similar value'
    }
  ];

  return (
    <div className="mt-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose weLINKyou?</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;