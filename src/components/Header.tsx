import React from 'react';
import { Truck, Shield, Clock, Award } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative bg-transparent text-white overflow-hidden">
      {/* Background Pattern */}

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
          {/* Brand Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-2 sm:p-3 shadow-xl">
              <Truck className="h-7 w-7 sm:h-10 sm:w-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                SkipHire
              </h1>
              <p className="text-blue-200 text-xs sm:text-sm font-medium">Professional Waste Management Solutions</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:flex lg:space-x-8">
            <div className="flex items-center space-x-1 sm:space-x-2 text-center lg:text-left">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
              <div>
                <div className="text-xs sm:text-sm font-semibold">Fully Licensed</div>
                <div className="text-[10px] sm:text-xs text-blue-200">Environment Agency</div>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 text-center lg:text-left">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
              <div>
                <div className="text-xs sm:text-sm font-semibold">Same Day</div>
                <div className="text-[10px] sm:text-xs text-blue-200">Delivery Available</div>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 text-center lg:text-left">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
              <div>
                <div className="text-xs sm:text-sm font-semibold">5 Star Rated</div>
                <div className="text-[10px] sm:text-xs text-blue-200">1000+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};