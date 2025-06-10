import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import SkipCard from "@/components/SkipCard";
import ProgressIndicator from "@/components/ProgressIndicator";
import SkipComparison from "@/components/SkipComparison";
import PriceBreakdown from "@/components/PriceBreakdown";
import { Header } from "@/components/Header";
import { useNavigate } from "react-router-dom";

interface Step {
  id: number;
  name: string;
  completed: boolean;
  current?: boolean;
  icon: "MapPin" | "Trash2" | "Package" | "User" | "CreditCard";
}

const skipSizes = [
  {
    id: 17933,
    size: "4 Yard",
    capacity: "4 Yards",
    price: Math.round(278 * 1.2),
    price_before_vat: 278,
    vat: 20,
    transport_cost: null,
    period: "14 day hire period",
    image: "/images/4-yarder-skip.png",
    allowedOnRoad: true,
    description: "Perfect for small home projects and garden clearances",
    binBags: "30-40 bin bags",
    dimensions: "6ft x 4ft x 3ft"
  },
  {
    id: 17934,
    size: "6 Yard",
    capacity: "6 Yards",
    price: Math.round(305 * 1.2),
    price_before_vat: 305,
    vat: 20,
    transport_cost: null,
    period: "14 day hire period",
    image: "/images/4-yarder-skip.png",
    allowedOnRoad: true,
    description: "Great for larger home clearouts and small construction",
    binBags: "50-60 bin bags",
    dimensions: "8ft x 5ft x 3ft"
  },
  {
    id: 17935,
    size: "8 Yard",
    capacity: "8 Yards",
    price: Math.round(375 * 1.2),
    price_before_vat: 375,
    vat: 20,
    transport_cost: null,
    period: "14 day hire period",
    image: "/images/4-yarder-skip.png",
    allowedOnRoad: true,
    description: "Suitable for major home renovations",
    binBags: "60-80 bin bags",
    dimensions: "10ft x 6ft x 4ft"
  },
  {
    id: 17936,
    size: "10 Yard",
    capacity: "10 Yards",
    price: Math.round(400 * 1.2),
    price_before_vat: 400,
    vat: 20,
    transport_cost: null,
    period: "14 day hire period",
    image: "/images/4-yarder-skip.png",
    allowedOnRoad: false,
    description: "Perfect for large construction projects",
    binBags: "80-100 bin bags",
    dimensions: "12ft x 6ft x 4ft"
  },
  {
    id: 17937,
    size: "12 Yard",
    capacity: "12 Yards",
    price: Math.round(439 * 1.2),
    price_before_vat: 439,
    vat: 20,
    transport_cost: null,
    period: "14 day hire period",
    image: "/images/4-yarder-skip.png",
    allowedOnRoad: false,
    description: "Ideal for major commercial waste disposal",
    binBags: "90-110 bin bags",
    dimensions: "12ft x 6ft x 4.5ft"
  },
  {
    id: 17938,
    size: "14 Yard",
    capacity: "14 Yards",
    price: Math.round(470 * 1.2),
    price_before_vat: 470,
    vat: 20,
    transport_cost: null,
    period: "14 day hire period",
    image: "/images/4-yarder-skip.png",
    allowedOnRoad: false,
    description: "Perfect for large-scale commercial projects",
    binBags: "100-120 bin bags",
    dimensions: "13ft x 6.5ft x 5ft"
  },
  {
    id: 17939,
    size: "16 Yard",
    capacity: "16 Yards",
    price: Math.round(496 * 1.2),
    price_before_vat: 496,
    vat: 20,
    transport_cost: null,
    period: "14 day hire period",
    image: "/images/4-yarder-skip.png",
    allowedOnRoad: false,
    description: "Ideal for major construction and demolition",
    binBags: "120-140 bin bags",
    dimensions: "14ft x 6.5ft x 6ft"
  },
  {
    id: 15124,
    size: "20 Yard",
    capacity: "20 Yards",
    price: Math.round(992 * 1.2),
    price_before_vat: 992,
    vat: 20,
    transport_cost: 248,
    period: "14 day hire period",
    image: "/images/20-yarder-skip.png",
    allowedOnRoad: false,
    description: "Perfect for large-scale industrial waste disposal",
    binBags: "150-200 bin bags",
    dimensions: "16ft x 8ft x 7ft"
  },
  {
    id: 15125,
    size: "40 Yard",
    capacity: "40 Yards",
    price: Math.round(992 * 1.2),
    price_before_vat: 992,
    vat: 20,
    transport_cost: 248,
    period: "14 day hire period",
    image: "/images/20-yarder-skip.png",
    allowedOnRoad: false,
    description: "Maximum capacity for industrial and construction waste",
    binBags: "300-400 bin bags",
    dimensions: "20ft x 8ft x 8.5ft"
  }
];

const Index = () => {
  const [selectedSkip, setSelectedSkip] = useState<number>(0); // No skip selected initially
  const [progressSteps, setProgressSteps] = useState<Step[]>([
    { id: 1, name: "Postcode", completed: true, icon: "MapPin" as const },
    { id: 2, name: "Waste Type", completed: true, icon: "Trash2" as const },
    { id: 3, name: "Select Skip", completed: false, current: true, icon: "Package" as const },
    { id: 4, name: "Permit Check", completed: false, icon: "User" as const },
    { id: 5, name: "Choose Date", completed: false, icon: "User" as const },
    { id: 6, name: "Payment", completed: false, icon: "CreditCard" as const }
  ]);

  const navigate = useNavigate();

  const handleStepClick = (stepIndex: number) => {
    if (progressSteps[stepIndex].completed && !progressSteps[stepIndex].current) {
      navigate("/this-route-does-not-exist");
    }
    // Do nothing if current step or not completed
  };

  const selectedSkipData = skipSizes.find(skip => skip.id === selectedSkip);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-[#0f0c29]/95 via-black to-black">
      {/* Header */}
      <Header/>
      {/* Progress Indicator */}
      <div className="relative overflow-hidden bg-transparent pb-8">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgressIndicator steps={progressSteps} onStepClick={handleStepClick} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Skip Size
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Select the skip size that best suits your needs. All skips come with their respective hire period.
          </p>
        </div>

        {/* Skip Selection Grid - Updated for horizontal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {skipSizes.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip === skip.id}
              onSelect={() => setSelectedSkip(selectedSkip === skip.id ? 0 : skip.id)}
            />
          ))}
        </div>

        {/* Skip Comparison */}
        <SkipComparison skips={skipSizes} selectedSkip={selectedSkip} />

        {/* Price Breakdown */}
        {selectedSkipData && (
          <PriceBreakdown skip={selectedSkipData} />
        )}

        {/* Selection Summary */}
        {selectedSkipData && (
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <CheckCircle className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {selectedSkipData.size} Skip Selected
                  </h3>
                  <p className="text-slate-300">{selectedSkipData.period}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">
                  £{selectedSkipData.price}
                </div>
                <div className="text-sm text-slate-300">14 day hire</div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            className="bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50 hover:text-white/80 px-8 py-3"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          
          {selectedSkip !== 0 && (
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400 max-w-4xl mx-auto">
            Imagery and information shown throughout this website may not reflect the exact shape or size specification, 
            colours may vary, options and/or accessories may be featured at additional cost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
