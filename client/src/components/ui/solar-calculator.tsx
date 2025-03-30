import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { formatNumber } from '@/lib/utils';

interface CalculatorInputs {
  location: RegionKey;
  roofArea: number;
  monthlyConsumption: number;
  electricityTariff: number;
}

interface CalculatorResults {
  systemSize: number;
  annualGeneration: number;
  annualSavings: number;
  paybackPeriod: number;
  totalCost: number;
  subsidy: number;
  netCost: number;
  co2Reduction: number;
}

// Solar irradiation data by region (kWh/m²/day average)
type RegionKey = 'North India' | 'South India' | 'East India' | 'West India' | 'Central India' | 'North East India';

type RegionData = {
  [key in RegionKey]: {
    irradiation: number;
    tariff: number;
    subsidyPercent: number;
  }
};

const regionData: RegionData = {
  'North India': { irradiation: 5.5, tariff: 7.5, subsidyPercent: 40 },
  'South India': { irradiation: 5.8, tariff: 8.0, subsidyPercent: 40 },
  'East India': { irradiation: 5.2, tariff: 7.0, subsidyPercent: 40 },
  'West India': { irradiation: 5.9, tariff: 8.5, subsidyPercent: 40 },
  'Central India': { irradiation: 5.7, tariff: 7.8, subsidyPercent: 40 },
  'North East India': { irradiation: 4.8, tariff: 6.5, subsidyPercent: 45 },
};

// States by region for the dropdown
type StatesByRegion = {
  [key in RegionKey]: string[];
};

const statesByRegion: StatesByRegion = {
  'North India': ['Delhi', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Ladakh', 'Punjab', 'Rajasthan', 'Uttar Pradesh', 'Uttarakhand'],
  'South India': ['Andhra Pradesh', 'Karnataka', 'Kerala', 'Tamil Nadu', 'Telangana'],
  'East India': ['Bihar', 'Jharkhand', 'Odisha', 'West Bengal'],
  'West India': ['Goa', 'Gujarat', 'Maharashtra'],
  'Central India': ['Chhattisgarh', 'Madhya Pradesh'],
  'North East India': ['Arunachal Pradesh', 'Assam', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura'],
};

const SolarCalculator: React.FC = () => {
  // Input state
  const [inputs, setInputs] = useState<CalculatorInputs>({
    location: 'Central India',
    roofArea: 500,
    monthlyConsumption: 300,
    electricityTariff: 0,
  });

  // Results state
  const [results, setResults] = useState<CalculatorResults | null>(null);
  
  // States dropdown
  const [states, setStates] = useState<string[]>(statesByRegion['Central India']);
  const [selectedState, setSelectedState] = useState<string>('Chhattisgarh');
  
  // Track if calculation has been done
  const [hasCalculated, setHasCalculated] = useState(false);

  // Update tariff based on region selection
  useEffect(() => {
    if (inputs.location && regionData[inputs.location]) {
      setInputs(prev => ({ 
        ...prev, 
        electricityTariff: regionData[inputs.location].tariff
      }));
      setStates(statesByRegion[inputs.location]);
      setSelectedState(statesByRegion[inputs.location][0]);
    }
  }, [inputs.location]);

  // Calculate solar system specifications
  const calculateSolar = () => {
    const region = regionData[inputs.location];
    
    // Convert roof area from sq ft to sq meters
    const roofAreaSqM = inputs.roofArea * 0.092903;
    
    // Calculate system size (kW)
    // Average: 10 sq meters needed per 1 kW of solar capacity
    const potentialSystemSize = roofAreaSqM / 10;
    
    // Calculate system size based on consumption (1 kW system generates ~4 kWh per day on average)
    const consumptionBasedSize = (inputs.monthlyConsumption / 30) / (region.irradiation * 0.75);
    
    // Take the smaller of the two sizes (constrained by either roof space or consumption)
    const systemSize = Math.min(potentialSystemSize, consumptionBasedSize);
    const roundedSystemSize = Math.round(systemSize * 10) / 10; // Round to 1 decimal place
    
    // Calculate annual generation (kWh)
    // Formula: system size (kW) * irradiation (kWh/m²/day) * 0.75 (system efficiency) * 365 days
    const annualGeneration = roundedSystemSize * region.irradiation * 0.75 * 365;
    
    // Calculate annual savings (₹)
    const annualSavings = annualGeneration * inputs.electricityTariff;
    
    // Calculate system cost (₹55,000 per kW is typical in India)
    const costPerKw = 55000;
    const totalCost = roundedSystemSize * costPerKw;
    
    // Calculate subsidy (Central + State)
    // For first 3kW: 40% subsidy, for next 3kW: 20% subsidy
    let subsidy = 0;
    if (roundedSystemSize <= 3) {
      subsidy = totalCost * (region.subsidyPercent / 100);
    } else if (roundedSystemSize > 3 && roundedSystemSize <= 6) {
      subsidy = (3 * costPerKw * (region.subsidyPercent / 100)) + 
                ((roundedSystemSize - 3) * costPerKw * (region.subsidyPercent / 200));
    } else {
      subsidy = (3 * costPerKw * (region.subsidyPercent / 100)) + 
                (3 * costPerKw * (region.subsidyPercent / 200));
    }
    
    // Net cost after subsidy
    const netCost = totalCost - subsidy;
    
    // Payback period (years)
    const paybackPeriod = netCost / annualSavings;
    
    // CO2 reduction (tons/year)
    // Average: 0.85 kg CO2 per kWh of electricity in India
    const co2Reduction = (annualGeneration * 0.85) / 1000;
    
    setResults({
      systemSize: roundedSystemSize,
      annualGeneration: Math.round(annualGeneration),
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10, // Round to 1 decimal
      totalCost: Math.round(totalCost),
      subsidy: Math.round(subsidy),
      netCost: Math.round(netCost),
      co2Reduction: Math.round(co2Reduction * 10) / 10 // Round to 1 decimal
    });
    
    setHasCalculated(true);
  };

  // Handle input changes
  const handleInputChange = (name: keyof CalculatorInputs, value: string | number) => {
    if (name === 'location') {
      // Ensure the value is a valid RegionKey
      const locationValue = value as RegionKey;
      setInputs(prev => ({
        ...prev,
        [name]: locationValue
      }));
    } else {
      setInputs(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Reset calculation when inputs change
    if (hasCalculated) {
      setHasCalculated(false);
    }
  };

  // Generate 25-year savings data for chart
  const generateSavingsData = () => {
    if (!results) return [];
    
    const data = [];
    let cumulativeSavings = 0;
    
    for (let year = 1; year <= 25; year++) {
      cumulativeSavings += results.annualSavings;
      data.push({
        year: year,
        savings: cumulativeSavings,
      });
    }
    
    return data;
  };

  // Generate electricity comparison data
  const generateElectricityComparisonData = () => {
    if (!results) return [];
    
    const annualConsumption = inputs.monthlyConsumption * 12;
    const gridConsumptionAfter = Math.max(0, annualConsumption - results.annualGeneration);
    
    return [
      { name: 'Before Solar', Grid: annualConsumption, Solar: 0 },
      { name: 'After Solar', Grid: gridConsumptionAfter, Solar: Math.min(results.annualGeneration, annualConsumption) }
    ];
  };

  // Generate ROI data
  const generateROIData = () => {
    if (!results) return [];
    
    return [
      { name: 'Investment', value: results.netCost },
      { name: 'Savings (25 years)', value: results.annualSavings * 25 }
    ];
  };

  // Colors for the charts
  const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

  return (
    <div className="solar-calculator w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Panel */}
        <div className="lg:col-span-5">
          <Card className="shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-xl font-bold text-primary">Solar Calculator</CardTitle>
              <CardDescription>
                Estimate your solar installation savings and return on investment
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Your Region</label>
                <Select
                  value={inputs.location}
                  onValueChange={(value) => handleInputChange('location', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(regionData).map((region) => (
                      <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">State</label>
                <Select
                  value={selectedState}
                  onValueChange={setSelectedState}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Roof Area (sq. ft.)</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={inputs.roofArea}
                    onChange={(e) => handleInputChange('roofArea', parseInt(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-sm font-medium bg-primary/10 rounded-md px-2 py-1 min-w-[60px] text-center">
                    {inputs.roofArea}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Monthly Electricity Consumption (kWh)
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="100"
                    max="1000"
                    step="10"
                    value={inputs.monthlyConsumption}
                    onChange={(e) => handleInputChange('monthlyConsumption', parseInt(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-sm font-medium bg-primary/10 rounded-md px-2 py-1 min-w-[60px] text-center">
                    {inputs.monthlyConsumption}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Electricity Tariff (₹/kWh)
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="5"
                    max="12"
                    step="0.5"
                    value={inputs.electricityTariff}
                    onChange={(e) => handleInputChange('electricityTariff', parseFloat(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-sm font-medium bg-primary/10 rounded-md px-2 py-1 min-w-[60px] text-center">
                    {inputs.electricityTariff}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-primary/5 p-4">
              <Button 
                onClick={calculateSolar} 
                className="w-full bg-primary hover:bg-primary/90"
              >
                Calculate Solar Potential
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-7">
          {!hasCalculated ? (
            <div className="h-full flex items-center justify-center bg-neutral-50 rounded-lg p-8 border border-dashed border-neutral-200">
              <div className="text-center space-y-4">
                <div className="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-800">Discover Your Solar Potential</h3>
                <p className="text-neutral-600 max-w-md">
                  Adjust the inputs on the left to estimate how much you could save with rooftop solar panels at your location.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Results Summary */}
              <Card className="shadow-lg">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-xl font-bold text-green-800">Your Solar Potential</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm text-green-700">System Size</div>
                      <div className="text-xl font-bold">{results?.systemSize} kW</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm text-blue-700">Annual Generation</div>
                      <div className="text-xl font-bold">{formatNumber(results?.annualGeneration || 0)} kWh</div>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <div className="text-sm text-amber-700">Annual Savings</div>
                      <div className="text-xl font-bold">₹{formatNumber(results?.annualSavings || 0)}</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-sm text-purple-700">Payback Period</div>
                      <div className="text-xl font-bold">{results?.paybackPeriod} years</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Financial Details */}
                    <div className="border rounded-lg p-4 space-y-3">
                      <h3 className="font-bold text-neutral-800">Financial Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-neutral-600">System Cost:</span>
                          <span className="font-medium">₹{formatNumber(results?.totalCost || 0)}</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                          <span>Government Subsidy:</span>
                          <span className="font-medium">₹{formatNumber(results?.subsidy || 0)}</span>
                        </div>
                        <div className="flex justify-between font-bold border-t pt-2">
                          <span>Net Investment:</span>
                          <span>₹{formatNumber(results?.netCost || 0)}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Environmental Impact */}
                    <div className="border rounded-lg p-4 space-y-3">
                      <h3 className="font-bold text-neutral-800">Environmental Impact</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-neutral-600">CO₂ Reduced:</span>
                          <span className="font-medium">{results?.co2Reduction} tons/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">Equivalent to:</span>
                          <span className="font-medium">{Math.round((results?.co2Reduction || 0) * 50)} trees planted</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-600">25-Year Impact:</span>
                          <span className="font-medium">{(results?.co2Reduction || 0) * 25} tons CO₂</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Savings Over Time Chart */}
                <Card className="shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">25-Year Savings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={generateSavingsData()}
                          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
                          <YAxis tickFormatter={(value) => `₹${(value/1000)}K`} />
                          <Tooltip formatter={(value) => [`₹${formatNumber(value as number)}`, 'Cumulative Savings']} />
                          <Line 
                            type="monotone" 
                            dataKey="savings" 
                            stroke="#3b82f6" 
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Electricity Source Comparison */}
                <Card className="shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Electricity Source</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={generateElectricityComparisonData()}
                          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis label={{ value: 'kWh / Year', angle: -90, position: 'insideLeft' }} />
                          <Tooltip formatter={(value) => [`${formatNumber(value as number)} kWh`, '']} />
                          <Legend />
                          <Bar dataKey="Grid" stackId="a" fill="#ff9800" />
                          <Bar dataKey="Solar" stackId="a" fill="#4caf50" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Return on Investment */}
              <Card className="shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Return on Investment (25 Years)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                    <div className="lg:col-span-1 h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={generateROIData()}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {generateROIData().map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`₹${formatNumber(value as number)}`, '']} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="lg:col-span-2 p-4">
                      <h3 className="text-lg font-bold mb-4">Your 25-Year Solar Benefits</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span>Total Investment:</span>
                          <span className="text-lg font-bold">₹{formatNumber(results?.netCost || 0)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Total Savings (25 years):</span>
                          <span className="text-lg font-bold text-green-600">
                            ₹{formatNumber((results?.annualSavings || 0) * 25)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t">
                          <span>Net Profit:</span>
                          <span className="text-lg font-bold text-green-600">
                            ₹{formatNumber((results?.annualSavings || 0) * 25 - (results?.netCost || 0))}
                          </span>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center mt-4">
                          <div className="text-green-800 font-bold">
                            {((results?.annualSavings || 0) * 25 / (results?.netCost || 1)).toFixed(1)}x Return on Investment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="bg-primary/10 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-primary mb-2">Ready to Switch to Solar?</h3>
                <p className="mb-4 text-neutral-700">
                  Our experts will guide you through the entire process from planning to installation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    Request Free Consultation
                  </Button>
                  <Button variant="outline">
                    Download Detailed Report
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;