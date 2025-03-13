import React from 'react';

function SwapTokens() {
  const tokens = 50;
  const tokenHistory = [
    { id: 1, type: 'earned', amount: 10, description: 'Successful swap completed', date: '2023-12-20' },
    { id: 2, type: 'spent', amount: 5, description: 'VeriLINC certificate', date: '2023-12-18' }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Swap Tokens</h2>
      
      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-primary">{tokens}</div>
        <div className="text-sm text-gray-600">Available Tokens</div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Token History</h3>
        {tokenHistory.map((transaction) => (
          <div key={transaction.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium">{transaction.description}</p>
              <p className="text-sm text-gray-600">{transaction.date}</p>
            </div>
            <span className={`font-medium ${
              transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.type === 'earned' ? '+' : '-'}{transaction.amount}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors">
        Buy More Tokens
      </button>
    </div>
  );
}

export default SwapTokens;