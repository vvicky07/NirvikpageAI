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
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <nav className="py-3 px-4 sm:px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <a href="#" className="flex items-center" onClick={(e) => {
          e.preventDefault();
          handleNavLinkClick("home");
        }}>
          <div className="h-8 w-8 sm:h-10 sm:w-10 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-base">NG</span>
          </div>
          <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold font-montserrat text-gray-900">NIRVIK GROUP</span>
        </a>
        
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink href="home" label="Home" onClick={handleNavLinkClick} />
          <NavLink href="about" label="About Us" onClick={handleNavLinkClick} />
          <NavLink href="businesses" label="Our Businesses" onClick={handleNavLinkClick} />
          <NavLink href="sustainability" label="Sustainability" onClick={handleNavLinkClick} />
          <NavLink href="contact" label="Contact" onClick={handleNavLinkClick} />
          <a 
            href="#" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Investor Relations
          </a>
        </div>
        
        <button 
          className="lg:hidden text-gray-900 p-2"
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
      <div className={cn("lg:hidden bg-white border-t border-gray-200", isMobileMenuOpen ? "block" : "hidden")}>
        <div className="px-4 py-4 space-y-3 max-w-7xl mx-auto">
          <MobileNavLink href="home" label="Home" onClick={handleNavLinkClick} />
          <MobileNavLink href="about" label="About Us" onClick={handleNavLinkClick} />
          <MobileNavLink href="businesses" label="Our Businesses" onClick={handleNavLinkClick} />
          <MobileNavLink href="sustainability" label="Sustainability" onClick={handleNavLinkClick} />
          <MobileNavLink href="contact" label="Contact" onClick={handleNavLinkClick} />
          <a href="#" className="block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md mt-4 text-center">
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
      className="relative nav-link text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
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
      className="block text-gray-700 font-medium hover:text-blue-600 py-3 transition-colors duration-300 border-b border-gray-100"
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
