
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import TimeTemperatureDisplay from './TimeTemperatureDisplay';

// Form schema
const formSchema = z.object({
  food: z.string().min(1, { message: "Please select a food type" }),
  weight: z.coerce.number().min(1, { message: "Weight must be at least 1" }),
  isMetric: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

// Food presets (standard recipe amounts and cooking settings)
const foodPresets = {
  'chicken wings': { baseWeight: 16, weightMetric: 450, time: 20, temp: 380, tempMetric: 190 },
  'french fries': { baseWeight: 14, weightMetric: 400, time: 15, temp: 400, tempMetric: 200 },
  'chicken breast': { baseWeight: 8, weightMetric: 225, time: 18, temp: 375, tempMetric: 190 },
  'salmon fillet': { baseWeight: 6, weightMetric: 170, time: 12, temp: 380, tempMetric: 190 },
  'pork chops': { baseWeight: 8, weightMetric: 225, time: 15, temp: 375, tempMetric: 190 },
  'shrimp': { baseWeight: 8, weightMetric: 225, time: 8, temp: 380, tempMetric: 190 },
  'frozen pizza': { baseWeight: 14, weightMetric: 400, time: 10, temp: 400, tempMetric: 200 },
  'vegetables': { baseWeight: 12, weightMetric: 340, time: 12, temp: 375, tempMetric: 190 },
  'mozzarella sticks': { baseWeight: 10, weightMetric: 280, time: 8, temp: 390, tempMetric: 200 },
  'fish sticks': { baseWeight: 12, weightMetric: 340, time: 10, temp: 400, tempMetric: 200 },
};

type FoodType = keyof typeof foodPresets;

const CalculatorForm = () => {
  const [calculationResult, setCalculationResult] = useState<{
    food: string;
    originalTime: number;
    originalTemp: number;
    calculatedTime: number;
    calculatedTemp: number;
    weight: number;
    isMetric: boolean;
  } | null>(null);
  
  const { toast } = useToast();
  
  // Form setup with validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      food: '',
      weight: 0,
      isMetric: false,
    },
  });
  
  const isMetric = form.watch('isMetric');
  
  const calculateResults = (data: FormValues) => {
    const food = data.food as FoodType;
    const preset = foodPresets[food];
    
    if (!preset) {
      toast({
        title: "Error",
        description: "Could not find preset for selected food",
        variant: "destructive",
      });
      return;
    }
    
    // Determine the base weight to use based on metric setting
    const baseWeight = isMetric ? preset.weightMetric : preset.baseWeight;
    const baseTemp = isMetric ? preset.tempMetric : preset.temp;
    
    // Calculate ratio of input weight to base weight
    const ratio = data.weight / baseWeight;
    
    // Calculate adjusted cooking time based on weight ratio (using square root for non-linear scaling)
    // This gives a more realistic adjustment as doubling weight doesn't double cooking time
    const timeAdjustment = Math.sqrt(ratio);
    const adjustedTime = preset.time * timeAdjustment;
    
    // Temperature adjustments are smaller - only minor increases for larger portions
    // Use a logarithmic scale to make small adjustments to temperature
    const tempAdjustment = Math.log10(ratio * 9 + 1); // +1 to avoid negative values, *9 to scale appropriately
    const adjustedTemp = baseTemp * tempAdjustment;
    
    setCalculationResult({
      food: data.food,
      originalTime: preset.time,
      originalTemp: baseTemp,
      calculatedTime: adjustedTime,
      calculatedTemp: adjustedTemp,
      weight: data.weight,
      isMetric: data.isMetric,
    });
    
    toast({
      title: "Calculation Complete",
      description: "Your cooking instructions are ready!",
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Air Fryer Calculator</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(calculateResults)} className="space-y-6">
              <FormField
                control={form.control}
                name="food"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food Type</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-orange-200 focus:ring-orange-500">
                          <SelectValue placeholder="Select a food" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.keys(foodPresets).map((food) => (
                          <SelectItem key={food} value={food} className="capitalize">
                            {food}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="isMetric"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 border-orange-200">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        {isMetric ? 'Metric (g, °C)' : 'Imperial (oz, °F)'}
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-orange-500"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight ({isMetric ? 'grams' : 'ounces'})</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder={`Enter weight in ${isMetric ? 'grams' : 'ounces'}`}
                        className="border-orange-200 focus:ring-orange-500"
                        {...field}
                        onChange={(e) => {
                          const value = e.target.value === '' ? '0' : e.target.value;
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600"
              >
                Calculate
              </Button>
            </form>
          </Form>
        </div>
        
        <div className="flex items-center justify-center">
          {calculationResult ? (
            <TimeTemperatureDisplay {...calculationResult} />
          ) : (
            <div className="bg-orange-50 rounded-lg p-8 text-center w-full max-w-md">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">How It Works</h3>
              <p className="text-gray-600 mb-4">
                Select a food type, enter the weight, and our calculator will determine the perfect 
                air fryer cooking time and temperature for perfect results every time!
              </p>
              <div className="text-orange-700 text-sm">
                <p>✓ Adjusts for portion size</p>
                <p>✓ Optimizes temperature for even cooking</p>
                <p>✓ Based on test kitchen results</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculatorForm;
