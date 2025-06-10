import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Scale, Ruler, Clock, Package } from 'lucide-react';

interface Skip {
  id: number;
  size: string;
  capacity: string;
  price: number;
  period: string;
  image: string;
  allowedOnRoad: boolean;
  description: string;
  binBags: string;
  dimensions: string;
}

interface SkipComparisonProps {
  skips: Skip[];
  selectedSkip: number;
}

const SkipComparison: React.FC<SkipComparisonProps> = ({ skips, selectedSkip }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const selectedSkipData = skips.find(skip => skip.id === selectedSkip);

  if (!selectedSkipData) return null;

  const comparisonSkips = skips.filter(skip => skip.id !== selectedSkip).slice(0, 2);

  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6 mb-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <div className="flex items-center space-x-3">
          <Scale className="h-5 w-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Compare Skip Sizes</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-slate-300" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-300" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-6 overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-w-full">
            {/* Selected Skip */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400 rounded-xl p-4">
              <div className="text-center mb-4">
                <div className="inline-flex items-center bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                  YOUR CHOICE
                </div>
                <h4 className="font-bold text-white">{selectedSkipData.size}</h4>
                <div className="text-2xl font-bold text-blue-400">£{selectedSkipData.price}</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-slate-300" />
                  <span className="text-slate-300">{selectedSkipData.capacity}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-slate-300" />
                  <span className="text-slate-300">{selectedSkipData.period}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400">Capacity:</span>
                  <span className="font-semibold text-blue-300">{selectedSkipData.binBags}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400">Dimensions:</span>
                  <span className="font-semibold text-blue-300">{selectedSkipData.dimensions}</span>
                </div>
              </div>
            </div>

            {/* Comparison Skips */}
            {comparisonSkips.map((skip) => (
              <div key={skip.id} className="bg-slate-700/50 border border-slate-600 rounded-xl p-4">
                <div className="text-center mb-4">
                  <h4 className="font-bold text-white">{skip.size}</h4>
                  <div className="text-2xl font-bold text-slate-300">£{skip.price}</div>
                  <div className="text-xs text-slate-400">
                    {skip.price > selectedSkipData.price ? '+' : ''}
                    £{skip.price - selectedSkipData.price} vs selected
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-slate-400" />
                    <span>{skip.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <span>{skip.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-400">Capacity:</span>
                    <span className="font-semibold text-blue-300">{skip.binBags}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-400">Dimensions:</span>
                    <span className="font-semibold text-blue-300">{skip.dimensions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkipComparison;
