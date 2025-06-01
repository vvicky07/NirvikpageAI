# Complete Updated Code Files

## 1. Navbar Component (client/src/components/ui/navbar.tsx)

```typescript
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
```

## 2. Updated Tailwind Config (tailwind.config.ts)

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

## 3. Updated CSS (client/src/index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 142.1 76.2% 36.3%;
    --primary-foreground: 355.7 100% 97.3%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 142.1 76.2% 36.3%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  * {
    @apply border-gray-200;
  }

  body {
    @apply bg-white text-gray-900 font-sans antialiased;
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }
}

@layer components {
  .hero-background-image {
    @apply w-full h-full object-cover;
  }
  
  .shadow-text {
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }
  
  .slide-up {
    @apply opacity-0 translate-y-8;
    animation: slideUp 0.8s ease-out forwards;
  }
  
  @keyframes slideUp {
    to {
      @apply opacity-100 translate-y-0;
    }
  }
}
```

## Key Features Fixed:

1. **Mobile-First Navigation**: Responsive navbar with hamburger menu for mobile devices
2. **Proper Spacing**: Added responsive padding and margins throughout
3. **Color Scheme**: Changed from dark to light theme for better readability
4. **Typography**: Responsive text sizes for different screen sizes
5. **Layout Structure**: Fixed container widths and proper mobile breakpoints
6. **Hero Section**: Improved mobile layout with proper padding top for navbar
7. **CSS Variables**: Properly defined design tokens for consistent styling

The layout now works properly on both desktop and mobile devices with a clean, professional appearance that matches corporate website standards.