import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  image: string;
  isActive: boolean;
}

const Testimonial = ({ quote, name, position, image, isActive }: TestimonialProps) => {
  return (
    <div className={cn(
      "bg-neutral-800 rounded-lg p-8 slide-up transition-opacity duration-500",
      isActive ? "opacity-100" : "opacity-0 hidden md:block md:opacity-50"
    )}>
      <div className="flex items-center mb-4">
        <div className="text-secondary text-4xl mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#00a650" stroke="none">
            <path d="M11 7.5v-3c0-.8-.7-1.5-1.5-1.5h-6C2.7 3 2 3.7 2 4.5v6C2 12.4 3.6 14 5.5 14H7v2c0 1.1-.9 2-2 2H4c-.6 0-1 .4-1 1s.4 1 1 1h1c2.2 0 4-1.8 4-4v-6.5c0-.3-.2-.5-.5-.5H5c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h4c.3 0 .5.2.5.5v2.5H8c-.6 0-1 .4-1 1s.4 1 1 1h3zm10 0v-3c0-.8-.7-1.5-1.5-1.5h-6c-.8 0-1.5.7-1.5 1.5v6c0 1.9 1.6 3.5 3.5 3.5H17v2c0 1.1-.9 2-2 2h-1c-.6 0-1 .4-1 1s.4 1 1 1h1c2.2 0 4-1.8 4-4v-6.5c0-.3-.2-.5-.5-.5H15c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h4c.3 0 .5.2.5.5v2.5H18c-.6 0-1 .4-1 1s.4 1 1 1h3z"/>
          </svg>
        </div>
      </div>
      <p className="text-neutral-200 mb-6">
        {quote}
      </p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={`${name} portrait`} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-neutral-400 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const testimonials = [
    {
      quote: "Nirvik Group's innovative solutions have significantly improved our operational efficiency while reducing our environmental impact. A truly forward-thinking partner.",
      name: "Rajiv Mehta",
      position: "CEO, GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDV8fGJ1c2luZXNzJTIwbWFufGVufDB8fHx8MTY5ODk0NDYxOXww&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "The team at Nirvik Solar delivered our project on time and within budget. Their expertise in renewable energy solutions is unmatched in the industry.",
      name: "Priya Singh",
      position: "Operations Director, Horizon Industries",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGJ1c2luZXNzJTIwd29tYW58ZW58MHx8fHwxNjk4OTQ0NjUzfDA&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Working with Nirvik Engineering has transformed our manufacturing processes. Their sustainable engineering solutions have helped us reduce waste by 35%.",
      name: "Arun Kapoor",
      position: "Head of Manufacturing, Precision Products",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIwfHxidXNpbmVzcyUyMG1hbnxlbnwwfHx8fDE2OTg5NDQ2MTl8MA&auto=format&fit=crop&w=100&q=80"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  // Pause rotation when user interacts with dots
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false);
    
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            What Our <span className="text-secondary">Partners Say</span>
          </h2>
          <p className="text-lg text-neutral-200">
            We collaborate with leading organizations across industries to deliver exceptional results.
          </p>
        </div>
        
        {/* Mobile view: show only active testimonial */}
        <div className="block md:hidden mb-12">
          <Testimonial
            key={activeIndex}
            quote={testimonials[activeIndex].quote}
            name={testimonials[activeIndex].name}
            position={testimonials[activeIndex].position}
            image={testimonials[activeIndex].image}
            isActive={true}
          />
        </div>

        {/* Desktop view: grid of testimonials */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              image={testimonial.image}
              isActive={index === activeIndex}
            />
          ))}
        </div>
        
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors duration-300",
                index === activeIndex ? "bg-secondary" : "bg-neutral-700 hover:bg-neutral-500"
              )}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
