import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";

interface SustainabilityCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  achievement: string;
  delay?: number;
}

const SustainabilityCard = ({ title, description, image, icon, achievement, delay = 0 }: SustainabilityCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          delay: delay,
          ease: "power2.out" 
        }
      );
    }
  }, [isInView, delay]);

  return (
    <div ref={cardRef} className="bg-white rounded-lg shadow-md overflow-hidden slide-up">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-montserrat font-semibold mb-4">{title}</h3>
        <p className="text-neutral-700 mb-4">
          {description}
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
            {icon}
          </div>
          <span className="text-neutral-900 font-medium">{achievement}</span>
        </div>
      </div>
    </div>
  );
};

const SustainabilitySection = () => {
  const initiatives = [
    {
      title: "Eco-friendly Initiatives",
      description: "Our operations are designed to minimize environmental impact through waste reduction, energy efficiency, and sustainable resource management.",
      image: "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGVudmlyb25tZW50JTIwZ3JlZW58ZW58MHx8fHwxNjk4OTQ0NTA1fDA&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00a650" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22c1.25-1.25 2.5-2.5 3.5-2.5 1.5 0 2 1.5 3 1.5s1.5-1.5 3-1.5 2 1.5 3 1.5 1.5-1.5 3-1.5 2 1.5 3 1.5 1.5-1.5 3-1.5c1 0 2.25 1.25 3.5 2.5"></path>
          <path d="M19.25 11.5 17.5 10l-1.75 1.5c-2 1.5-5.25 1.5-7.25 0L6.75 10 5 11.5"></path>
          <path d="M22 9a8 8 0 0 0-8.5-7.6c-4 .4-7 3.8-7 8"></path>
          <path d="M20 13a5 5 0 0 0-10 0"></path>
          <path d="M2 16.5h1.5"></path>
          <path d="M2 13.5h3"></path>
          <path d="M5 19.5h12"></path>
        </svg>
      ),
      achievement: "Green operations across all facilities"
    },
    {
      title: "Carbon Reduction Strategies",
      description: "We implement comprehensive carbon reduction plans across our business segments, from manufacturing to supply chain management.",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 22a5 5 0 0 1-5-5"></path>
          <path d="M7 17v-3.6a7 7 0 0 1 .5-2.8l.9-1.8A2 2 0 0 0 7 6.3V2"></path>
          <path d="M11.5 12.5a3 3 0 1 1-3-3"></path>
          <path d="M14 19c1.1-1.7 2-3.3 2-6 0-3-1.5-5.7-4-7-2.2-1.1-5-1.1-7 0l-.9.7"></path>
          <path d="M13 22a6 6 0 0 0 9-9"></path>
          <path d="M19 16v.1"></path>
          <path d="M15 13v.1"></path>
        </svg>
      ),
      achievement: "On track for carbon neutrality by 2030"
    },
    {
      title: "Community Projects",
      description: "We engage with local communities through education initiatives, infrastructure development, and employment opportunities.",
      image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGNvbW11bml0eSUyMHByb2plY3R8ZW58MHx8fHwxNjk4OTQ0NTgxfDA&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 16v-8"></path>
          <path d="M12 19v-7"></path>
          <path d="M8 12v4"></path>
          <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10z"></path>
        </svg>
      ),
      achievement: "Over 100 community projects completed"
    }
  ];

  return (
    <section id="sustainability" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6 text-neutral-900">
            Sustainability & <span className="text-secondary">CSR</span>
          </h2>
          <p className="text-lg text-neutral-700">
            We are committed to responsible business practices that create positive environmental and social impact while ensuring long-term value creation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <SustainabilityCard
              key={index}
              title={initiative.title}
              description={initiative.description}
              image={initiative.image}
              icon={initiative.icon}
              achievement={initiative.achievement}
              delay={index * 0.15}
            />
          ))}
        </div>
        
        <div className="bg-neutral-100 rounded-lg p-8 slide-up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-montserrat font-bold mb-3">Our Sustainability Report</h3>
              <p className="text-neutral-700">
                Learn more about our commitment to sustainable development and progress on our environmental goals.
              </p>
            </div>
            <a href="#" className="bg-secondary hover:bg-secondary-dark text-white font-medium py-3 px-6 rounded-md transition duration-300 whitespace-nowrap">
              Download Report
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
