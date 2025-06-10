import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle } from "lucide-react";

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

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 ${
        isSelected
          ? "transform scale-105"
          : "hover:transform hover:scale-102"
      }`}
      onClick={onSelect}
    >
      {/* Card */}
      <div
        className={`relative overflow-hidden rounded-2xl transition-all duration-300 flex min-h-[200px] ${
          isSelected
            ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400 shadow-2xl shadow-blue-500/25"
            : "bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 hover:border-slate-500 backdrop-blur-sm"
        }`}
      >
        {/* Selected Indicator */}
        {isSelected && (
          <div className="absolute top-2 left-0 z-10">
            <div className="bg-transparent text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <CheckCircle className="h-6 w-6" />
              
            </div>
          </div>
        )}

        {/* Skip Image */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 overflow-hidden flex-shrink-0 my-auto ml-4">
          <img
            src={skip.image}
            alt={`${skip.size} skip`}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 rounded-lg"></div>
          
          {/* Capacity Badge - positioned on image */}
          <div className="absolute top-2 left-2 z-10">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-2 py-1 text-xs">
              {skip.capacity}
            </Badge>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
          {/* Title and Price */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {skip.size} Skip
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">{skip.period}</p>
            </div>
            <div className="text-right ml-4">
              <div className="text-xl sm:text-2xl font-bold text-white">
                £{skip.price}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm mb-2 leading-relaxed flex-1">
            {skip.description}
          </p>

          {/* Size Details */}
          <div className="flex flex-col sm:flex-row gap-1 gap-x-0 mb-4 text-xs sm:text-sm text-slate-200">
            <div className="flex gap-1">
              <span className="text-slate-400">Capacity:</span>
              <span className="font-semibold text-blue-300">{skip.binBags}</span>
            </div>
            <div className="flex gap-1 sm:ml-6">
              <span className="text-slate-400">Dimensions:</span>
              <span className="font-semibold text-blue-300">{skip.dimensions}</span>
            </div>
          </div>

          {/* Road Allowance */}
          <div className="flex items-center gap-2 mb-4">
            {skip.allowedOnRoad ? (
              <div className="flex items-center gap-1 text-green-400 text-xs sm:text-sm">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                Road placement allowed
              </div>
            ) : (
              <div className="flex items-center gap-1 text-orange-400 text-xs sm:text-sm">
                <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4" />
                Private property only
              </div>
            )}
          </div>

          {/* Select Button */}
          <Button
            className={`w-full transition-all duration-300 text-sm ${
              isSelected
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            }`}
            onClick={onSelect}
          >
            {isSelected ? "Selected" : "Select Skip"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
