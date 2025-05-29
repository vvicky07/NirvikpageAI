import { useEffect } from "react";
import Navbar from "../components/ui/navbar";
import HeroSection from "../components/ui/hero-section";
import StatsSection from "../components/ui/stats-section";
import AboutSection from "../components/ui/about-section";
import BusinessSection from "../components/ui/business-section";
import ParallaxSection from "../components/ui/parallax-section";
import SustainabilitySection from "../components/ui/sustainability-section";
import TestimonialsSection from "../components/ui/testimonials-section";
import ContactSection from "../components/ui/contact-section";

import Footer from "../components/ui/footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate slide-up elements
    const slideUpElements = document.querySelectorAll('.slide-up');
    slideUpElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Clean up GSAP animations on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-inter text-neutral-800 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <BusinessSection />
        <ParallaxSection />
        <SustainabilitySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
