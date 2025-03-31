import { useEffect, useRef } from "react";
import { scrollToSection } from "@/lib/utils";
import gsap from "gsap";

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
        {/* Video Background */}
        <div className="hidden md:block w-full h-full object-cover">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source 
              src="https://player.vimeo.com/external/517088068.hd.mp4?s=4e82bed408a54fe1a0c8dc8519455d10b0a2f815&profile_id=175" 
              type="video/mp4" 
            />
          </video>
        </div>
        
        {/* Fallback image for mobile */}
        <img 
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
          alt="Nirvik Group Industrial Infrastructure" 
          className="object-cover w-full h-full md:hidden"
        />
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-black/30"></div>
      </div>
      
      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-6">
        <div className="max-w-5xl slide-up" ref={heroContentRef}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-montserrat leading-tight shadow-text">
            Powering a Sustainable Future with Innovation & Resilience
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto shadow-text">
            Building tomorrow's infrastructure with today's responsibility
          </p>
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
