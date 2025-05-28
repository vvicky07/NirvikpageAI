import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("mission");
  
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-neutral-900">
              About <span className="text-primary">Nirvik Group</span>
            </h2>
            <p className="text-lg text-neutral-800 mb-6">
              Nirvik Group is a multi-industry conglomerate with a diverse portfolio across Alkaline Water, 
              Solar Energy, Electrification & Engineering Solutions. With a commitment to innovation and 
              sustainability, we deliver transformative solutions that meet the evolving needs of our 
              customers and communities.
            </p>
            <p className="text-lg text-neutral-800 mb-8">
              Our journey began with a vision to create sustainable business models that contribute 
              positively to society while delivering exceptional value to stakeholders.
            </p>
            
            {/* Mission, Vision, Values Tabs */}
            <div className="mb-10">
              <Tabs defaultValue="mission" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="border-b border-neutral-200 mb-6 bg-transparent">
                  <TabsTrigger 
                    value="mission"
                    className={`py-3 px-5 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none`}
                  >
                    Mission
                  </TabsTrigger>
                  <TabsTrigger 
                    value="vision"
                    className={`py-3 px-5 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none`}
                  >
                    Vision
                  </TabsTrigger>
                  <TabsTrigger 
                    value="values"
                    className={`py-3 px-5 border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary font-medium data-[state=active]:bg-transparent data-[state=active]:shadow-none`}
                  >
                    Values
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="mission" className="text-neutral-800 mt-0">
                  <p>
                    To drive sustainable progress through innovative solutions, while positively impacting 
                    communities and preserving the environment for future generations.
                  </p>
                </TabsContent>
                
                <TabsContent value="vision" className="text-neutral-800 mt-0">
                  <p>
                    To become a global leader in sustainable business practices, setting industry standards 
                    for innovation, reliability, and environmental stewardship.
                  </p>
                </TabsContent>
                
                <TabsContent value="values" className="text-neutral-800 mt-0">
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-medium">Innovation:</span> Continuously seeking better ways to solve challenges</li>
                    <li><span className="font-medium">Sustainability:</span> Considering environmental impact in all decisions</li>
                    <li><span className="font-medium">Integrity:</span> Maintaining the highest ethical standards</li>
                    <li><span className="font-medium">Excellence:</span> Delivering superior quality in everything we do</li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
            
            <a 
              href="#businesses" 
              className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("businesses");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Discover Our Businesses
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          
          <div className="relative h-full min-h-[400px] slide-up">
            <div className="absolute w-5/6 h-4/5 top-0 right-0 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIxfHxjb3Jwb3JhdGUlMjB0ZWFtfGVufDB8fHx8MTY5ODk0NDI2Mnww&auto=format&fit=crop&w=1080&q=80" 
                alt="Nirvik Group Leadership" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-5/6 h-4/5 bottom-0 left-0 bg-primary rounded-lg overflow-hidden z-0">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fGNvcnBvcmF0ZSUyMGJ1aWxkaW5nfGVufDB8fHx8MTY5ODk0NDI4OXww&auto=format&fit=crop&w=1080&q=80" 
                alt="Nirvik Group Headquarters" 
                className="w-full h-full object-cover mix-blend-soft-light opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
