import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import gsap from "gsap";

const ParallaxSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView && sectionRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2, 
          duration: 0.8,
          ease: "power2.out" 
        }
      );
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-128 bg-fixed bg-center bg-no-repeat bg-cover slide-up"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558449033-2eb28f0092dd?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDZ8fHN1c3RhaW5hYmxlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE2OTg5NDQ0NjB8MA&auto=format&fit=crop&w=1080&q=80')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative z-10 text-center" ref={contentRef}>
        <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-8 text-white">
          Transforming Industries with<br/>Innovation & Sustainability
        </h2>
        <p className="text-xl text-white max-w-3xl mb-10">
          Our integrated approach delivers solutions that combine technological innovation with environmental responsibility.
        </p>
        <button 
          onClick={() => scrollToSection("contact")}
          className="bg-secondary hover:bg-secondary-dark text-white font-medium py-3 px-8 rounded-md transition duration-300"
        >
          Partner With Us
        </button>
      </div>
    </section>
  );
};

export default ParallaxSection;
