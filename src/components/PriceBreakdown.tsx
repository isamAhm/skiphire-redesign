
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calculator, Check } from 'lucide-react';

interface Skip {
  id: number;
  size: string;
  capacity: string;
  price: number;
  period: string;
  image: string;
  allowedOnRoad: boolean;
  description: string;
}

interface PriceBreakdownProps {
  skip: Skip;
}

const PriceBreakdown: React.FC<PriceBreakdownProps> = ({ skip }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const breakdown = [
    { item: 'Skip hire (14 days)', price: skip.price - 50 },
    { item: 'Delivery & collection', price: 35 },
    { item: 'Disposal & recycling', price: 15 },
    { item: 'Environmental levy', price: 0, note: 'Included' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6 mb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center space-x-3">
          <Calculator className="h-5 w-5 text-green-400" />
          <div>
            <h3 className="text-lg font-semibold text-white">Price Breakdown</h3>
            <p className="text-sm text-slate-300">See what's included in your £{skip.price}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-slate-300" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-300" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-6">
          <div className="space-y-3">
            {breakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-slate-600/50 last:border-b-0">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span className="text-slate-300">{item.item}</span>
                  {item.note && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                      {item.note}
                    </span>
                  )}
                </div>
                <span className="font-semibold text-white">
                  {item.price === 0 ? 'FREE' : `£${item.price}`}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t-2 border-slate-600/50">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-white">Total Price</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                £{skip.price}
              </span>
            </div>
            <p className="text-sm text-slate-300 mt-1">No hidden fees • Price includes VAT</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceBreakdown;
