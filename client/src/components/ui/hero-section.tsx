import { useEffect, useRef } from "react";
import { scrollToSection } from "@/lib/utils";
import gsap from "gsap";
// Import uploaded images
import nirvikImage1 from "@assets/Screenshot_28-1-2025_12732_.jpeg";
import nirvikImage2 from "@assets/Screenshot_31-3-2025_114115_chatgpt.com.jpeg";

const HeroSection = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    if (heroContentRef.current) {
      tl.fromTo(
        heroContentRef.current.children,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2, 
          duration: 0.8,
          ease: "power2.out" 
        }
      );
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-neutral-900">
        {/* Background Image for desktop */}
        <div className="hidden md:block w-full h-full object-cover">
          <img 
            src={nirvikImage2} 
            alt="Nirvik Group Corporate Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Fallback image for mobile */}
        <img 
          src={nirvikImage1} 
          alt="Nirvik Group Industrial Infrastructure" 
          className="object-cover w-full h-full md:hidden"
        />
        
        {/* Corporate Visual Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-blue-600/20 blur-3xl -bottom-20 -left-20"></div>
          <svg className="absolute top-10 right-10 w-96 h-96 opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-black/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-6">
        <div className="max-w-5xl slide-up" ref={heroContentRef}>
          {/* Animated Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Glowing Background */}
              <div className="absolute w-full h-full rounded-full bg-primary/20 animate-pulse blur-md"></div>
              
              {/* Circular Motion */}
              <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
                <circle cx="50" cy="10" r="3" fill="#60a5fa" />
              </svg>
              
              {/* Core Logo */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="35" fill="url(#logoGradient)" fillOpacity="0.9" />
                <polygon points="40,40 60,40 65,50 50,70 35,50" fill="white" fillOpacity="0.8" />
                <text x="50" y="35" fontFamily="Arial" fontSize="10" textAnchor="middle" fontWeight="bold" fill="white" letterSpacing="1">NIRVIK</text>
                <text x="50" y="45" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="white" letterSpacing="1">GROUP</text>
              </svg>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-montserrat leading-tight shadow-text">
            Powering a Sustainable Future with Innovation & Resilience
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto shadow-text">
            Building tomorrow's infrastructure with today's responsibility
          </p>
          
          {/* Business Segments Preview */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2 max-w-4xl mx-auto">
            <div className="flex space-x-2 md:space-x-4">
              {["Alkaline", "Solar", "Engineering", "Agro", "PCC Poles"].map((segment, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white text-sm whitespace-nowrap hover:bg-primary/70 transition-all cursor-pointer"
                  onClick={() => scrollToSection("businesses")}
                >
                  {segment}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection("businesses")}
              className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition duration-300"
            >
              Explore Our Businesses
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-medium py-3 px-8 rounded-md transition duration-300"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <button 
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center opacity-80 hover:opacity-100"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
