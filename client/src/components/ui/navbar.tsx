import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { scrollToSection } from "../../lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-neutral-900/95 backdrop-blur-sm" : "bg-neutral-900/20 backdrop-blur-sm"
      )}
    >
      <nav className="py-4 px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center" onClick={(e) => {
          e.preventDefault();
          handleNavLinkClick("home");
        }}>
          <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold">NG</span>
          </div>
          <span className="ml-3 text-xl font-bold font-montserrat text-white">NIRVIK GROUP</span>
        </a>
        
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink href="home" label="Home" onClick={handleNavLinkClick} />
          <NavLink href="about" label="About Us" onClick={handleNavLinkClick} />
          <NavLink href="businesses" label="Our Businesses" onClick={handleNavLinkClick} />
          <NavLink href="sustainability" label="Sustainability" onClick={handleNavLinkClick} />
          <NavLink href="contact" label="Contact" onClick={handleNavLinkClick} />
          <a 
            href="#" 
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Investor Relations
          </a>
        </div>
        
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-2xl">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-2xl">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn("lg:hidden bg-neutral-900", isMobileMenuOpen ? "block" : "hidden")}>
        <div className="px-6 py-4 space-y-3">
          <MobileNavLink href="home" label="Home" onClick={handleNavLinkClick} />
          <MobileNavLink href="about" label="About Us" onClick={handleNavLinkClick} />
          <MobileNavLink href="businesses" label="Our Businesses" onClick={handleNavLinkClick} />
          <MobileNavLink href="sustainability" label="Sustainability" onClick={handleNavLinkClick} />
          <MobileNavLink href="contact" label="Contact" onClick={handleNavLinkClick} />
          <a href="#" className="block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md mt-4 text-center">
            Investor Relations
          </a>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  onClick: (id: string) => void;
}

const NavLink = ({ href, label, onClick }: NavLinkProps) => {
  return (
    <a 
      href={`#${href}`} 
      className="relative nav-link text-white font-medium hover:text-green-400 transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
    >
      {label}
    </a>
  );
};

const MobileNavLink = ({ href, label, onClick }: NavLinkProps) => {
  return (
    <a 
      href={`#${href}`} 
      className="block text-white font-medium hover:text-green-400 py-2 transition-colors duration-300"
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
    >
      {label}
    </a>
  );
};

export default Navbar;
