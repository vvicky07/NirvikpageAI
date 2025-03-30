import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BusinessCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
  delay?: number;
}

const BusinessCard = ({ title, description, image, onClick }: BusinessCardProps) => {
  return (
    <div 
      className="card-business bg-white rounded-lg overflow-hidden slide-up shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-montserrat font-bold mb-3 text-neutral-900">{title}</h3>
        <p className="text-neutral-700 mb-4">
          {description}
        </p>
        <button className="text-primary font-medium hover:text-primary-dark flex items-center">
          Learn More 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-sm">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

// Define the types for our business details
interface BusinessTab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface BusinessDetail {
  title: string;
  description: string;
  tabs: BusinessTab[];
}

// Detailed content for each business segment
const businessDetails: Record<string, BusinessDetail> = {
  "Nirvik Alkaline": {
    title: "Nirvik Alkaline",
    description: "Premium alkaline water solutions for a healthier lifestyle",
    tabs: [
      {
        id: "overview",
        label: "Overview",
        content: (
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEzfHx3YXRlciUyMGJvdHRsZXxlbnwwfHx8fDE2OTg5NDQzMzN8MA&auto=format&fit=crop&w=600&q=80" 
              alt="Nirvik Alkaline Water Bottle" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold">Premium Alkaline Water</h3>
            <p>
              Nirvik Alkaline delivers premium alkaline water with a pH of 8+ that helps neutralize acidity in the body, 
              promoting better hydration and overall wellness. Our advanced filtration process ensures the highest quality water 
              that's both refreshing and beneficial to your health.
            </p>
          </div>
        )
      },
      {
        id: "why-alkaline",
        label: "Why Alkaline",
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Benefits of Alkaline Water</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><span className="font-medium">Neutralizes Acidity:</span> Helps balance the body's pH levels</li>
                  <li><span className="font-medium">Better Hydration:</span> Smaller water molecule clusters for faster absorption</li>
                  <li><span className="font-medium">Antioxidant Properties:</span> Contains negative oxidation-reduction potential (ORP) to help neutralize free radicals</li>
                  <li><span className="font-medium">Enhanced Recovery:</span> Supports faster recovery after intense physical activity</li>
                  <li><span className="font-medium">Improved Digestion:</span> May help alleviate acid reflux and improve digestive health</li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDl8fHdhdGVyJTIwYm90dGxlfGVufDB8fHx8MTcwMzE0MTQwNnww&auto=format&fit=crop&w=600&q=80" 
                  alt="Alkaline Water Bottles" 
                  className="rounded-lg shadow-lg"
                />
                <div className="bg-blue-50 p-4 rounded-lg mt-4 text-center">
                  <div className="text-blue-500 font-semibold">pH 8.5+</div>
                  <div className="text-sm text-blue-600">Optimum alkalinity for health benefits</div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "why-us",
        label: "Why Us",
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold">The Nirvik Alkaline Difference</h3>
                <p className="mt-3">
                  What sets Nirvik Alkaline apart is our unwavering commitment to quality and innovation. Our water undergoes a 7-stage 
                  filtration process that removes impurities while preserving essential minerals. We use state-of-the-art ionization 
                  technology to produce consistently high-quality alkaline water with a stable pH.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Advanced Filtration</h4>
                    <p>Multi-stage purification process that eliminates contaminants while preserving beneficial minerals</p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Consistent Quality</h4>
                    <p>Rigorous testing ensures every bottle meets our high standards for purity and alkalinity</p>
                  </div>
                </div>
              </div>
              <div className="order-first md:order-last">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1610483832795-4d8e2c76d581?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIzfHx3YXRlciUyMGJvdHRsZXxlbnwwfHx8fDE3MDMxNDE0MDZ8MA&auto=format&fit=crop&w=600&q=80" 
                    alt="Premium Alkaline Water Bottles" 
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 text-primary font-bold py-2 px-4 rounded-full text-sm shadow-md">
                      Premium Quality
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  "Nirvik Solar": {
    title: "Nirvik Solar",
    description: "Harnessing solar energy for a sustainable future",
    tabs: [
      {
        id: "overview",
        label: "Overview",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Powering India with Solar Energy</h3>
            <p>
              Nirvik Solar is committed to accelerating India's transition to clean energy through innovative solar solutions. 
              We provide end-to-end services from consultation and system design to installation and maintenance, helping 
              businesses, homeowners, and government entities harness the power of the sun.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">400+</div>
                <p>Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10 MW+</div>
                <p>Installed Capacity</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "rooftop-mission",
        label: "Rooftop Mission",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Advancing India's Solar Rooftop Mission</h3>
            <p>
              We are proud contributors to India's ambitious National Solar Mission, which aims to establish India as a 
              global leader in solar energy. Nirvik Solar specializes in rooftop solar installations that help reduce 
              dependency on the grid while lowering electricity costs.
            </p>
            <div className="bg-green-50 p-6 rounded-lg mt-4">
              <h4 className="font-bold text-xl mb-2">Government Subsidies and Incentives</h4>
              <p className="mb-4">
                The Indian government offers various incentives to promote solar adoption, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Up to 40% subsidy for residential rooftop installations</li>
                <li>Accelerated depreciation benefits for commercial installations</li>
                <li>Net metering policies in most states</li>
                <li>Tax incentives and reduced loan interest rates</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: "calculator",
        label: "Solar Calculator",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">PM Surya Ghar Yojana Solar Calculator</h3>
            <p className="mb-6">
              Estimate your solar installation costs, subsidies, and savings with our comprehensive calculator based on the PM Surya Ghar Yojana program.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <h4 className="font-bold text-lg mb-2 text-yellow-700">Input Parameters</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Average Monthly Electricity Bill (₹)</label>
                        <input type="text" className="w-full p-2 border rounded" placeholder="e.g., 3000" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Rooftop Type</label>
                        <select className="w-full p-2 border rounded">
                          <option>Flat Concrete Roof</option>
                          <option>Sloped Metal Roof</option>
                          <option>Sloped Tiled Roof</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">State</label>
                        <select className="w-full p-2 border rounded">
                          <option>Chhattisgarh</option>
                          <option>Maharashtra</option>
                          <option>Gujarat</option>
                          <option>Tamil Nadu</option>
                          <option>Karnataka</option>
                          <option>Other States</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">System Capacity (kW)</label>
                        <div className="flex items-center space-x-2">
                          <input type="range" min="1" max="10" step="1" className="w-full" />
                          <span className="font-medium">3 kW</span>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4 bg-primary hover:bg-primary-dark">Calculate</Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h4 className="font-bold text-lg mb-2 text-green-700">Estimated Results</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b border-green-100 pb-2">
                        <span>System Size:</span>
                        <span className="font-bold">3 kW</span>
                      </div>
                      <div className="flex justify-between border-b border-green-100 pb-2">
                        <span>Total System Cost:</span>
                        <span className="font-bold">₹1,65,000</span>
                      </div>
                      <div className="flex justify-between border-b border-green-100 pb-2">
                        <span>Central Subsidy:</span>
                        <span className="font-bold text-green-600">₹60,000</span>
                      </div>
                      <div className="flex justify-between border-b border-green-100 pb-2">
                        <span>State Subsidy:</span>
                        <span className="font-bold text-green-600">₹15,000</span>
                      </div>
                      <div className="flex justify-between border-b border-green-100 pb-2">
                        <span>Net Cost After Subsidy:</span>
                        <span className="font-bold">₹90,000</span>
                      </div>
                      <div className="flex justify-between border-b border-green-100 pb-2">
                        <span>Generation (Annual):</span>
                        <span className="font-bold">4,380 kWh</span>
                      </div>
                      <div className="flex justify-between border-b border-green-100 pb-2">
                        <span>Monthly Savings:</span>
                        <span className="font-bold text-green-600">₹2,865</span>
                      </div>
                      <div className="flex justify-between pb-2">
                        <span>Payback Period:</span>
                        <span className="font-bold">2.5 years</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-bold text-md mb-1 text-blue-700">Environmental Impact</h4>
                    <div className="flex justify-between">
                      <span>CO₂ Reduction:</span>
                      <span className="font-bold">4.2 tons/year</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-neutral-500 mt-2 italic">
                    This is an estimate based on current rates. Contact us for a detailed assessment and proposal tailored to your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  "Vikram Singh & Power": {
    title: "Vikram Singh & Power",
    description: "28 years of excellence in power infrastructure and government contracts",
    tabs: [
      {
        id: "overview",
        label: "Overview",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Leaders in Power Infrastructure</h3>
            <p>
              With 28 years of industry expertise, Vikram Singh & Power has established itself as a trusted partner in power 
              infrastructure projects across India. We specialize in electrification, distribution networks, and power infrastructure 
              development, with particular expertise in executing government contracts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-neutral-100 p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">Government Contract Specialists</h4>
                <p>
                  We have a proven track record of successfully delivering complex government projects on time and within budget, 
                  maintaining the highest standards of quality and compliance.
                </p>
              </div>
              <div className="bg-neutral-100 p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3">End-to-End Solutions</h4>
                <p>
                  From initial design and planning to construction and maintenance, we provide comprehensive solutions 
                  tailored to each project's specific requirements.
                </p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "expertise",
        label: "Expertise",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-neutral-200 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Rural Electrification</h4>
                <p>
                  Bringing power to remote and underserved communities through innovative and cost-effective solutions.
                </p>
              </div>
              <div className="border border-neutral-200 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Transmission & Distribution</h4>
                <p>
                  Design and implementation of reliable power transmission and distribution networks.
                </p>
              </div>
              <div className="border border-neutral-200 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Substation Construction</h4>
                <p>
                  Building and upgrading electrical substations with modern technology and equipment.
                </p>
              </div>
              <div className="border border-neutral-200 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Infrastructure Development</h4>
                <p>
                  Creating the foundation for reliable power delivery through robust infrastructure.
                </p>
              </div>
            </div>
            <p className="mt-4">
              Our 28 years of experience has enabled us to develop specialized knowledge in navigating the complexities of 
              government contracts, ensuring full compliance with regulations while maintaining efficient project execution.
            </p>
          </div>
        )
      },
      {
        id: "projects",
        label: "Key Projects",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Notable Government Projects</h3>
            <p className="mb-4">
              Our extensive portfolio includes successful completion of numerous significant government contracts throughout India.
            </p>
            <div className="space-y-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <h4 className="font-bold">Deen Dayal Upadhyaya Gram Jyoti Yojana (DDUGJY) Implementation</h4>
                  <p className="text-sm text-neutral-500 mb-2">Chhattisgarh, 2019-2021</p>
                  <p>
                    Rural electrification project covering 150+ villages, providing reliable access to electricity 
                    for thousands of households.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <h4 className="font-bold">Integrated Power Development Scheme (IPDS)</h4>
                  <p className="text-sm text-neutral-500 mb-2">Multiple States, 2017-2020</p>
                  <p>
                    Strengthening of sub-transmission and distribution networks in urban areas, including IT enablement 
                    of distribution sector and metering.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <h4 className="font-bold">Saubhagya Scheme Projects</h4>
                  <p className="text-sm text-neutral-500 mb-2">Eastern India, 2018-2019</p>
                  <p>
                    Provided last-mile connectivity and electricity connections to remaining un-electrified households 
                    in several districts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  "Nirvik Engineering": {
    title: "Nirvik Engineering",
    description: "Innovative engineering solutions for modern challenges",
    tabs: [
      {
        id: "overview",
        label: "Overview",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Engineering Excellence</h3>
            <p>
              Nirvik Engineering delivers innovative technical solutions across a range of industries, combining 
              cutting-edge technology with practical expertise. Our multidisciplinary team tackles complex 
              challenges, providing sustainable and efficient engineering solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-neutral-100 p-4 rounded-lg text-center">
                <div className="text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M7 12h10"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                </div>
                <h4 className="font-medium mb-1">Custom Solutions</h4>
                <p className="text-sm">Tailored to specific needs</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg text-center">
                <div className="text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 3 21 3 21 8"></polyline>
                    <line x1="4" y1="20" x2="21" y2="3"></line>
                    <polyline points="21 16 21 21 16 21"></polyline>
                    <line x1="15" y1="15" x2="21" y2="21"></line>
                    <line x1="4" y1="4" x2="9" y2="9"></line>
                  </svg>
                </div>
                <h4 className="font-medium mb-1">Innovation Focus</h4>
                <p className="text-sm">Advanced technical solutions</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg text-center">
                <div className="text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="16 12 12 8 8 12"></polyline>
                    <line x1="12" y1="16" x2="12" y2="8"></line>
                  </svg>
                </div>
                <h4 className="font-medium mb-1">Efficiency</h4>
                <p className="text-sm">Optimized performance</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "services",
        label: "Services",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Engineering Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold mb-2">Structural Engineering</h4>
                <p>
                  Comprehensive structural analysis, design, and verification for buildings, industrial structures, and infrastructure projects.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold mb-2">Mechanical Systems</h4>
                <p>
                  Design and optimization of mechanical components and systems for various industrial applications.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold mb-2">Electrical Engineering</h4>
                <p>
                  Electrical system design, automation, and control solutions for industrial and commercial facilities.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold mb-2">Environmental Engineering</h4>
                <p>
                  Sustainable design practices, waste management solutions, and environmental impact assessments.
                </p>
              </div>
            </div>
            <p className="mt-4">
              Our engineering team combines practical experience with theoretical knowledge to create solutions that 
              are not only technically sound but also practical to implement and maintain.
            </p>
          </div>
        )
      },
      {
        id: "approach",
        label: "Our Approach",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Engineering Methodology</h3>
            <p>
              At Nirvik Engineering, we follow a systematic approach to problem-solving that ensures optimal 
              outcomes for every project.
            </p>
            <div className="relative mt-8">
              <div className="absolute left-6 h-full w-0.5 bg-neutral-200"></div>
              <div className="space-y-8 relative">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary -ml-6 z-10">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-lg">Analysis & Requirements</h4>
                    <p>Thorough assessment of project requirements, constraints, and objectives</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary -ml-6 z-10">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-lg">Conceptual Design</h4>
                    <p>Developing initial concepts and evaluating feasibility</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary -ml-6 z-10">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-lg">Detailed Engineering</h4>
                    <p>Comprehensive technical design with specifications and calculations</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary -ml-6 z-10">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-lg">Implementation Support</h4>
                    <p>Technical guidance during construction or manufacturing phases</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary -ml-6 z-10">
                      <span className="text-white font-bold">5</span>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="font-bold text-lg">Validation & Optimization</h4>
                    <p>Testing, verification, and continuous improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  "Nirvik Agro": {
    title: "Nirvik Agro",
    description: "Organic vegetables and fruits processing for better health and sustainability",
    tabs: [
      {
        id: "overview",
        label: "Overview",
        content: (
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEwfHxvcmdhbmljJTIwZmFybXxlbnwwfHx8fDE2OTg5NDQzMzN8MA&auto=format&fit=crop&w=600&q=80" 
              alt="Nirvik Agro Organic Farming" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold">Organic Food Processing Excellence</h3>
            <p>
              Nirvik Agro specializes in organic vegetable and fruit processing, delivering nutritious and chemical-free 
              food products to health-conscious consumers. Our state-of-the-art processing facilities maintain the 
              nutritional integrity of produce while ensuring the highest standards of food safety.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <p>Certified Organic</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                <p>Product Varieties</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <p>Farmer Partnerships</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "organic-benefits",
        label: "Organic Benefits",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Why Choose Organic?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-green-700">Health Benefits</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Free from harmful pesticides and synthetic fertilizers</li>
                  <li>Higher nutritional value and antioxidant content</li>
                  <li>No artificial preservatives, colors, or flavors</li>
                  <li>Better taste and natural flavors</li>
                  <li>Reduced exposure to antibiotic-resistant bacteria</li>
                </ul>
              </div>
              <div className="bg-green-50 p-5 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-green-700">Environmental Benefits</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Conserves biodiversity and protects ecosystems</li>
                  <li>Reduces pollution from pesticide and fertilizer runoff</li>
                  <li>Builds healthy soil and prevents erosion</li>
                  <li>Conserves water resources</li>
                  <li>Promotes sustainable agricultural practices</li>
                </ul>
              </div>
            </div>
            <p className="mt-4">
              By choosing Nirvik Agro's organic products, you're not only making a healthier choice for yourself and your family, 
              but also supporting sustainable farming practices that benefit our environment and local communities.
            </p>
          </div>
        )
      },
      {
        id: "products",
        label: "Our Products",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Organic Product Range</h3>
            <p className="mb-6">
              Nirvik Agro offers a diverse range of certified organic products processed using methods that preserve nutritional value 
              and enhance shelf life naturally.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGZydWl0JTIwanVpY2V8ZW58MHx8fHwxNjk4OTQ0MzMzfDA&auto=format&fit=crop&w=300&q=80" 
                  alt="Organic Juices" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold">Organic Juices & Concentrates</h4>
                  <p className="text-sm text-neutral-600 mt-1">
                    Cold-pressed juices that retain maximum nutrients and natural flavors.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1599642079192-7c071350e0eb?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI1fHxkcmllZCUyMGZydWl0c3xlbnwwfHx8fDE2OTg5NDQzMzN8MA&auto=format&fit=crop&w=300&q=80" 
                  alt="Organic Dried Fruits" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold">Dried Fruits & Vegetables</h4>
                  <p className="text-sm text-neutral-600 mt-1">
                    Naturally dried without preservatives or added sugars.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fHByZXNlcnZlc3xlbnwwfHx8fDE2OTg5NDQzMzN8MA&auto=format&fit=crop&w=300&q=80" 
                  alt="Organic Preserves" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold">Organic Preserves</h4>
                  <p className="text-sm text-neutral-600 mt-1">
                    Jams, jellies, and preserves made with organic fruit and minimal processing.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEyfHxmcm96ZW4lMjB2ZWdldGFibGVzfGVufDB8fHx8MTY5ODk0NDMzM3ww&auto=format&fit=crop&w=300&q=80" 
                  alt="Frozen Organic Produce" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold">Frozen Organic Produce</h4>
                  <p className="text-sm text-neutral-600 mt-1">
                    Flash-frozen to lock in nutrients and flavor.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509483088453-486496303381?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHxzcGljZXN8ZW58MHx8fHwxNjk4OTQ0MzMzfDA&auto=format&fit=crop&w=300&q=80" 
                  alt="Organic Spices" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold">Organic Spices & Seasonings</h4>
                  <p className="text-sm text-neutral-600 mt-1">
                    Pure, unadulterated spices grown without chemicals.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565549558195-cabc87b26690?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE5fHxzbmFjayUyMGJhcnxlbnwwfHx8fDE2OTg5NDQzMzN8MA&auto=format&fit=crop&w=300&q=80" 
                  alt="Organic Snacks" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-bold">Organic Snack Foods</h4>
                  <p className="text-sm text-neutral-600 mt-1">
                    Healthy snack options made from organic ingredients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  },
  "Nirvik PCC Poles": {
    title: "Nirvik PCC Poles",
    description: "Quality manufacturing of PCC and RCC poles with advanced fabrication capabilities",
    tabs: [
      {
        id: "overview",
        label: "Overview",
        content: (
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE2fHxjb25jcmV0ZSUyMHBvbGV8ZW58MHx8fHwxNjk4OTQ0MzMzfDA&auto=format&fit=crop&w=600&q=80" 
              alt="Nirvik PCC Poles Manufacturing" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold">Leading Manufacturer of Quality Concrete Poles</h3>
            <p>
              Nirvik PCC Poles is a premier manufacturer of Pre-stressed Concrete Cement (PCC) and Reinforced Concrete Cement (RCC) poles 
              that meet the highest quality standards for power transmission, distribution, and telecom networks. Our state-of-the-art 
              manufacturing facility also provides comprehensive fabrication services for various infrastructure applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-neutral-100 p-4 rounded-lg text-center">
                <div className="text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h4 className="font-medium mb-1">Strength</h4>
                <p className="text-sm">Superior load-bearing capacity</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg text-center">
                <div className="text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                </div>
                <h4 className="font-medium mb-1">Durability</h4>
                <p className="text-sm">Resistant to weather conditions</p>
              </div>
              <div className="bg-neutral-100 p-4 rounded-lg text-center">
                <div className="text-primary mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                </div>
                <h4 className="font-medium mb-1">Cost-Effective</h4>
                <p className="text-sm">Long lifespan with minimal maintenance</p>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "products",
        label: "Products",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Product Range</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="h-48 bg-neutral-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0056b3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="2" x2="12" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">PCC Poles</h4>
                  <p className="mb-3">
                    Pre-stressed concrete poles manufactured to exacting specifications for various applications.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>8-13 meter poles for power distribution lines</li>
                    <li>Special grades for high-voltage transmission</li>
                    <li>Poles for telecom and street lighting</li>
                    <li>Railway electrification poles</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="h-48 bg-neutral-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#0056b3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="3" y1="15" x2="21" y2="15"></line>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                    <line x1="15" y1="3" x2="15" y2="21"></line>
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">RCC Poles</h4>
                  <p className="mb-3">
                    Reinforced concrete poles with exceptional strength and durability for demanding environments.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Standard poles for rural electrification</li>
                    <li>Heavy-duty poles for urban infrastructure</li>
                    <li>Custom designs for specific requirements</li>
                    <li>Corrosion-resistant formulations for coastal areas</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden col-span-1 md:col-span-2">
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-3">Fabrication Services</h4>
                  <p className="mb-4">
                    In addition to our core concrete pole products, Nirvik PCC Poles offers comprehensive metal fabrication 
                    services for power infrastructure and industrial applications.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-neutral-200 p-3 rounded">
                      <h5 className="font-medium mb-1">Transmission Towers</h5>
                      <p className="text-sm">Custom fabricated steel structures for power transmission</p>
                    </div>
                    <div className="border border-neutral-200 p-3 rounded">
                      <h5 className="font-medium mb-1">Substation Structures</h5>
                      <p className="text-sm">Fabricated steel components for electrical substations</p>
                    </div>
                    <div className="border border-neutral-200 p-3 rounded">
                      <h5 className="font-medium mb-1">Hardware Accessories</h5>
                      <p className="text-sm">Specialized fixtures and fittings for power infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: "quality",
        label: "Quality Standards",
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Commitment to Quality</h3>
            <p>
              At Nirvik PCC Poles, quality is paramount. Our manufacturing processes adhere to stringent quality control 
              standards at every stage, from raw material selection to final inspection.
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-bold mb-4">Our Quality Assurance Process</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                  <h5 className="font-medium mb-2">Raw Material Testing</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Cement quality verification</li>
                    <li>High-grade steel tensile strength testing</li>
                    <li>Aggregate size and quality control</li>
                    <li>Admixture performance validation</li>
                  </ul>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                  <h5 className="font-medium mb-2">Manufacturing Controls</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Precise concrete mix proportioning</li>
                    <li>Controlled concrete curing environments</li>
                    <li>Automated pre-stressing systems</li>
                    <li>Computer-controlled fabrication processes</li>
                  </ul>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                  <h5 className="font-medium mb-2">Finished Product Testing</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Load testing beyond specification requirements</li>
                    <li>Dimensional accuracy verification</li>
                    <li>Visual inspection for surface defects</li>
                    <li>Random sampling for destructive testing</li>
                  </ul>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                  <h5 className="font-medium mb-2">Certifications & Compliance</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>BIS (Bureau of Indian Standards) certification</li>
                    <li>ISO 9001:2015 Quality Management System</li>
                    <li>Compliance with REC specifications</li>
                    <li>Power utility approved vendor status</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }
    ]
  }
};

const BusinessSection = () => {
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");
  
  const businesses = [
    {
      title: "Nirvik Alkaline",
      description: "Revolutionizing hydration with premium alkaline water solutions for better health and wellness.",
      image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEzfHx3YXRlciUyMGJvdHRsZXxlbnwwfHx8fDE2OTg5NDQzMzN8MA&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Nirvik Solar",
      description: "Bringing clean, renewable energy solutions to homes and industries for a sustainable future.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDZ8fHNvbGFyJTIwcGFuZWxzfGVufDB8fHx8MTY5ODk0NDM2M3ww&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Vikram Singh & Power",
      description: "28 years of excellence in electrification and power infrastructure solutions for government projects.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fHBvd2VyJTIwZ3JpZHxlbnwwfHx8fDE2OTg5NDQ0MDF8MA&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Nirvik Engineering",
      description: "Innovative engineering solutions addressing modern challenges with cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHxlbmdpbmVlcmluZ3xlbnwwfHx8fDE2OTg5NDQ0MjB8MA&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Nirvik Agro",
      description: "Organic vegetables and fruits processing for healthier food choices and sustainable agriculture.",
      image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEwfHxvcmdhbmljJTIwZmFybXxlbnwwfHx8fDE2OTg5NDQ1MDB8MA&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Nirvik PCC Poles",
      description: "Manufacturing high-quality PCC and RCC poles with advanced fabrication capabilities for infrastructure projects.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE2fHxjb25jcmV0ZSUyMHBvbGV8ZW58MHx8fHwxNjk4OTQ0NTIwfDA&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const handleBusinessClick = (title: string) => {
    setSelectedBusiness(title);
    setActiveTab("overview");
  };

  return (
    <section id="businesses" className="py-20 md:py-28 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-neutral-900">
            Our <span className="text-primary">Business Segments</span>
          </h2>
          <p className="text-lg text-neutral-700">
            We operate across multiple industries with a focus on sustainable solutions 
            that address today's challenges while preserving tomorrow's resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {businesses.map((business, index) => (
            <BusinessCard 
              key={index}
              title={business.title}
              description={business.description}
              image={business.image}
              onClick={() => handleBusinessClick(business.title)}
            />
          ))}
        </div>
        
        <div className="text-center">
          <a href="#" className="inline-block bg-white border border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-md transition duration-300">
            View All Our Solutions
          </a>
        </div>
      </div>

      {/* Business Detail Dialog */}
      {selectedBusiness && businessDetails[selectedBusiness] && (
        <Dialog open={!!selectedBusiness} onOpenChange={(open) => !open && setSelectedBusiness(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{businessDetails[selectedBusiness].title}</DialogTitle>
              <DialogDescription>{businessDetails[selectedBusiness].description}</DialogDescription>
            </DialogHeader>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
              <TabsList className="w-full flex justify-start border-b mb-6">
                {businessDetails[selectedBusiness].tabs.map((tab: BusinessTab) => (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className="py-2 px-4 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {businessDetails[selectedBusiness].tabs.map((tab: BusinessTab) => (
                <TabsContent key={tab.id} value={tab.id}>
                  {tab.content}
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="flex justify-end mt-4">
              <Button 
                variant="outline" 
                onClick={() => setSelectedBusiness(null)}
                className="mr-2"
              >
                Close
              </Button>
              <Button className="bg-primary hover:bg-primary-dark">
                Contact Us
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default BusinessSection;
