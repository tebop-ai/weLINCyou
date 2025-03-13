import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

function SwapRatings() {
  const ratings = [
    { id: 1, rating: 5, comment: "Great swap! Item was exactly as described.", date: "2023-12-15" },
    { id: 2, rating: 4, comment: "Smooth transaction, good communication.", date: "2023-12-10" }
  ];

  const averageRating = ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Swap Ratings & Reviews</h2>

      <div className="flex items-center mb-6">
        <div className="text-3xl font-bold mr-4">{averageRating.toFixed(1)}</div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={`h-5 w-5 ${
                star <= averageRating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">
            ({ratings.length} reviews)
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {ratings.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{review.date}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SwapRatings;