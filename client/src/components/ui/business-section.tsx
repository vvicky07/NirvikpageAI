import { cn } from "@/lib/utils";

interface BusinessCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const BusinessCard = ({ title, description, image }: BusinessCardProps) => {
  return (
    <div className="card-business bg-white rounded-lg overflow-hidden slide-up shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
        <a href="#" className="text-primary font-medium hover:text-primary-dark flex items-center">
          Learn More 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 text-sm">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

const BusinessSection = () => {
  const businesses = [
    {
      title: "Nirvik Alkaline",
      description: "Revolutionizing hydration with premium alkaline water solutions for better health and wellness.",
      image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGFsa2FsaW5lJTIwd2F0ZXJ8ZW58MHx8fHwxNjk4OTQ0MzMzfDA&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Nirvik Solar",
      description: "Bringing clean, renewable energy solutions to homes and industries for a sustainable future.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDZ8fHNvbGFyJTIwcGFuZWxzfGVufDB8fHx8MTY5ODk0NDM2M3ww&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Vikram Singh & Power",
      description: "Comprehensive electrification and power infrastructure solutions for reliable energy delivery.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fHBvd2VyJTIwZ3JpZHxlbnwwfHx8fDE2OTg5NDQ0MDF8MA&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Nirvik Engineering",
      description: "Innovative engineering solutions addressing modern challenges with cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHxlbmdpbmVlcmluZ3xlbnwwfHx8fDE2OTg5NDQ0MjB8MA&auto=format&fit=crop&w=600&q=80"
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {businesses.map((business, index) => (
            <BusinessCard 
              key={index}
              title={business.title}
              description={business.description}
              image={business.image}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center">
          <a href="#" className="inline-block bg-white border border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 px-8 rounded-md transition duration-300">
            View All Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
