import { MapPin, Trash2, Package, User, CreditCard, CheckCircle } from "lucide-react";

interface Step {
  id: number;
  name: string;
  completed: boolean;
  current?: boolean;
  icon: "MapPin" | "Trash2" | "Package" | "User" | "CreditCard";
}

interface ProgressIndicatorProps {
  steps: Step[];
  onStepClick?: (stepIndex: number) => void;
}

const iconMap = {
  MapPin,
  Trash2,
  Package,
  User,
  CreditCard
};

const ProgressIndicator = ({ steps, onStepClick }: ProgressIndicatorProps) => {
  const currentStepIndex = steps.findIndex(step => step.current);

  return (
    <div className="border-2 border-t-0 rounded-t-none border-gray-200 rounded-2xl shadow-lg pt-2 p-3 sm:p-6 mb-8">
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-100">Your Progress</h3>
        <div className="text-xs sm:text-sm text-green-400">
          Step {currentStepIndex + 1} of {steps.length}
        </div>
      </div>
      
      <nav aria-label="Progress">
        <ol className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const isLast = index === steps.length - 1;
            
            return (
              <li key={step.id} className="flex items-center flex-1">
                <button
                  type="button"
                  onClick={() => onStepClick && (step.completed || step.current) && onStepClick(index)}
                  className={`focus:outline-none group flex flex-col items-center bg-transparent border-0 p-0 m-0 ${!(step.completed || step.current) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  tabIndex={0}
                  aria-current={step.current ? "step" : undefined}
                  aria-label={step.name}
                  {...(!(step.completed || step.current) ? { 'aria-disabled': 'true' } : {})}
                  disabled={!(step.completed || step.current)}
                >
                  <div
                    className={`
                      relative flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-sm font-medium transition-all
                      ${step.completed
                        ? 'bg-green-500/70 backdrop-blur-md text-white shadow-lg scale-110'
                        : step.current
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-110 animate-pulse duration-1000'
                        : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                      }
                    `}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    {step.completed && (
                      <div className="absolute -top-1 -right-1 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                      </div>
                    )}
                  </div>
                  <span
                    className={`
                      mt-1 sm:mt-2 text-[10px] sm:text-xs font-medium text-center max-w-20
                      ${step.completed || step.current ? 'text-green-400' : 'text-gray-400'}
                    `}
                  >
                    {step.name}
                  </span>
                </button>
                {!isLast && (
                  <div className="flex-1 mx-2 sm:mx-4">
                    <div
                      className={`
                        h-1 rounded-full transition-all duration-500
                        ${step.completed ? 'bg-gradient-to-r from-green-900 to-emerald-500' : 'bg-gray-400'}
                      `}
                    ></div>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default ProgressIndicator;
