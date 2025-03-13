import React from 'react';
import { Link } from 'react-router-dom';

function AuthHeader({ title, subtitle }) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <Link to="/" className="flex justify-center mb-6">
        <span className="text-3xl font-bold text-primary">weLINKyou</span>
      </Link>
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-center text-sm text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default AuthHeader;