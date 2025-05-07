
import { Button } from '@/components/ui/button';

interface TimeTemperatureDisplayProps {
  food: string;
  originalTime: number;
  originalTemp: number;
  calculatedTime: number;
  calculatedTemp: number;
  weight: number;
  isMetric: boolean;
}

const TimeTemperatureDisplay = ({ 
  food, 
  originalTime, 
  originalTemp, 
  calculatedTime, 
  calculatedTemp,
  weight,
  isMetric
}: TimeTemperatureDisplayProps) => {
  // Round to nearest whole number for display
  const displayTime = Math.round(calculatedTime);
  const displayTemp = Math.round(calculatedTemp);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-orange-100 w-full max-w-md mx-auto animate-fade-in">
      <div className="text-center mb-6">
        <span className="inline-block bg-orange-100 text-orange-800 rounded-full px-3 py-1 text-sm font-semibold mb-2">
          Cooking Instructions
        </span>
        <h3 className="text-2xl font-bold text-gray-800 capitalize">{food}</h3>
        <p className="text-gray-500 text-sm mt-1">
          {weight} {isMetric ? 'grams' : 'oz'} adjusted
        </p>
      </div>
      
      <div className="flex justify-between mb-8">
        <div className="text-center">
          <div className="text-5xl font-bold text-orange-600">{displayTemp}°</div>
          <div className="text-sm text-gray-600 mt-2">{isMetric ? 'Celsius' : 'Fahrenheit'}</div>
        </div>
        
        <div className="text-center">
          <div className="text-5xl font-bold text-orange-600">{displayTime}</div>
          <div className="text-sm text-gray-600 mt-2">minutes</div>
        </div>
      </div>
      
      <div className="bg-orange-50 p-4 rounded-md text-sm mb-6">
        <div className="font-medium text-gray-800 mb-2">Original Recipe:</div>
        <div className="flex justify-between text-gray-700">
          <span>Temperature: {originalTemp}° {isMetric ? 'C' : 'F'}</span>
          <span>Time: {originalTime} minutes</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <Button className="w-full bg-orange-500 hover:bg-orange-600">
          Print Instructions
        </Button>
        <Button variant="outline" className="w-full border-orange-200 hover:bg-orange-50 text-orange-700">
          Save to Recipe Book
        </Button>
      </div>
    </div>
  );
};

export default TimeTemperatureDisplay;
