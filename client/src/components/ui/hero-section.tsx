import { useEffect, useRef, useState } from "react";
import { scrollToSection } from "../../lib/utils";
import gsap from "gsap";
// Import Swiper and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
// Use placeholder images for now - will work in production
const nirvikImage1 = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const nirvikImage2 = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
const pccPolesImage = "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

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
        {/* Background Image Slider */}
        <div className="hidden md:block w-full h-full object-cover">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img 
                  src={nirvikImage2} 
                  alt="Nirvik Group Corporate Background"
                  className="hero-background-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Nirvik Solar"
                  className="hero-background-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80" 
                  alt="Nirvik Engineering"
                  className="hero-background-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80&fit=crop&crop=edges" 
                  alt="Nirvik Agro"
                  className="hero-background-image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img 
                  src={pccPolesImage} 
                  alt="Nirvik PCC Poles"
                  className="hero-background-image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-black/60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-6 z-10">
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
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-montserrat leading-tight shadow-text drop-shadow-lg">
            Powering a Sustainable Future with Innovation & Resilience
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto shadow-text drop-shadow-lg">
            Building tomorrow's infrastructure with today's responsibility
          </p>
          
          {/* Business Segments Preview - Slider */}
          <div className="mb-10 max-w-5xl mx-auto">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={8}
              slidesPerView="auto"
              centeredSlides={true}
              loop={false}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="w-full"
            >
              {[
                {name: "Alkaline", image: nirvikImage2},
                {name: "Solar", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=188&q=80"},
                {name: "Vikram Singh & Power", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fHBvd2VyJTIwZ3JpZHxlbnwwfHx8fDE2OTg5NDQ0MDF8MA&auto=format&fit=crop&w=188&q=80"},
                {name: "Engineering", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=188&q=80"},
                {name: "Agro", image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=188&q=80&fit=crop&crop=edges"},
                {name: "PCC Poles", image: pccPolesImage}
              ].map((segment, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <div 
                    className="relative group cursor-pointer mx-2"
                    onClick={() => scrollToSection("businesses")}
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/40 shadow-lg transition-all group-hover:border-primary/70 group-hover:scale-105">
                      <img 
                        src={segment.image} 
                        alt={`${segment.name} Business`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-full"></div>
                    </div>
                    <div className="absolute bottom-1 left-0 right-0 text-center">
                      <span className="text-white text-xs font-medium bg-black/40 px-2 py-1 rounded-full">{segment.name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
