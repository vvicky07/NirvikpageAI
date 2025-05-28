import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { animateValue } from "@/lib/utils";

interface StatItemProps {
  value: number;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView && counterRef.current) {
      animateValue(counterRef.current, 0, value, 2000);
    }
  }, [isInView, value]);
  
  return (
    <div 
      ref={containerRef}
      className="counter-item text-center slide-up hover:transform hover:scale-105 transition-transform duration-300"
    >
      <div 
        ref={counterRef}
        className="counter-value text-5xl font-bold text-primary mb-2"
      >
        0
      </div>
      <p className="text-neutral-800 font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 30, label: "Years of Excellence" },
    { value: 4, label: "Business Verticals" },
    { value: 500, label: "Projects Completed" },
    { value: 1000, label: "Happy Clients" }
  ];
  
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
