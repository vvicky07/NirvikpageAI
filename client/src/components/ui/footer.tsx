import { scrollToSection } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // In a real implementation, this would handle the newsletter subscription
    toast({
      title: "Success",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    setEmail("");
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center mb-6" onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}>
              <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">NG</span>
              </div>
              <span className="ml-3 text-xl font-bold font-montserrat text-white">NIRVIK GROUP</span>
            </a>
            <p className="text-neutral-400 mb-6">
              Powering a Sustainable Future with Innovation & Resilience.
            </p>
            <div className="flex space-x-4">
              <FooterSocialIcon href="#" network="linkedin" />
              <FooterSocialIcon href="#" network="twitter" />
              <FooterSocialIcon href="#" network="facebook" />
              <FooterSocialIcon href="#" network="instagram" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <FooterLink href="home" text="Home" onClick={handleNavClick} />
              </li>
              <li>
                <FooterLink href="about" text="About Us" onClick={handleNavClick} />
              </li>
              <li>
                <FooterLink href="businesses" text="Our Businesses" onClick={handleNavClick} />
              </li>
              <li>
                <FooterLink href="sustainability" text="Sustainability" onClick={handleNavClick} />
              </li>
              <li>
                <FooterLink href="contact" text="Contact" onClick={handleNavClick} />
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition duration-300">Careers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Our Businesses</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">Nirvik Alkaline</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">Nirvik Solar</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">Vikram Singh & Power</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition duration-300">Nirvik Engineering</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-neutral-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mb-4">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-l-md focus:outline-none text-neutral-800 border-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-md transition duration-300 border-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </Button>
              </div>
            </form>
            <p className="text-neutral-400 text-sm">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Nirvik Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
  onClick: (id: string) => void;
}

const FooterLink = ({ href, text, onClick }: FooterLinkProps) => {
  return (
    <a 
      href={`#${href}`} 
      className="text-neutral-400 hover:text-white transition duration-300"
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
    >
      {text}
    </a>
  );
};

interface FooterSocialIconProps {
  href: string;
  network: "linkedin" | "twitter" | "facebook" | "instagram";
}

const FooterSocialIcon = ({ href, network }: FooterSocialIconProps) => {
  const renderIcon = () => {
    switch (network) {
      case "linkedin":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        );
      case "twitter":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        );
      case "facebook":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        );
      case "instagram":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a href={href} className="text-neutral-400 hover:text-white transition duration-300" aria-label={`Follow us on ${network}`}>
      {renderIcon()}
    </a>
  );
};

export default Footer;
