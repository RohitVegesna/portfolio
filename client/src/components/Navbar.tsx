import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  User,
  Mail,
  Sparkles,
  TestTube2,
  Network,
  GitBranch,
  ArrowUp,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showAdvancedDropdown, setShowAdvancedDropdown] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isScrollingToTop, setIsScrollingToTop] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let rafId: number;

    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafId) cancelAnimationFrame(rafId);

      // Use requestAnimationFrame for smooth updates
      rafId = requestAnimationFrame(() => {
        // Don't update active section while scrolling to top
        if (isScrollingToTop) return;
        
        setShowScrollTop(window.scrollY > 400);

        // Debounce section detection for better performance
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          // Detect active section based on which section is most visible in viewport
          const sections = [
            "about",
            "ai-testing",
            "foundation",
            "advanced-testing",
            "microservices",
            "shift-left",
            "test-strategy",
            "tools",
            "experience",
            "contact",
          ];

          // Check if we're before the first section (About)
          const aboutElement = document.getElementById("about");
          if (aboutElement) {
            const aboutTop = aboutElement.offsetTop;
            const navbarHeight = 100;
            
            // If we haven't reached the About section yet, clear active section
            if (window.scrollY + navbarHeight < aboutTop) {
              setActiveSection("");
              return;
            }
          }

          const viewportMiddle = window.scrollY + window.innerHeight / 3; // Check top third of viewport

          let currentSection = "";

          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              const sectionBottom = offsetTop + offsetHeight;

              if (viewportMiddle >= offsetTop && viewportMiddle < sectionBottom) {
                currentSection = sectionId;
                break;
              }
            }
          }

          setActiveSection(currentSection);
        }, 50); // Debounce by 50ms
      });
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once on mount
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(scrollTimeout);
    };
  }, [isScrollingToTop]);

  const scrollToTop = () => {
    setIsScrollingToTop(true);
    setActiveSection("");
    
    // Force scroll to absolute top
    const scrollToTopPosition = () => {
      window.scrollTo({ 
        top: 0, 
        left: 0,
        behavior: "smooth" 
      });
    };
    
    scrollToTopPosition();
    
    // Re-enable scroll detection after scroll completes (longer timeout for far sections)
    setTimeout(() => {
      setIsScrollingToTop(false);
    }, 2000);
  };

  const scrollToSection = (sectionId: string) => {
    setIsScrollingToTop(true); // Disable scroll detection during section navigation
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Approximate navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setShowAdvancedDropdown(false);
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    
    // Re-enable scroll detection
    setTimeout(() => {
      setIsScrollingToTop(false);
    }, 1000);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setShowAdvancedDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowAdvancedDropdown(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  const links = [
    { name: "About", href: "#about", icon: User },
    { name: "AI Testing", href: "#ai-testing", icon: Sparkles },
    { name: "Foundation", href: "#foundation", icon: TestTube2 },
    { name: "Advanced", href: "#advanced-testing", icon: Network, hasDropdown: true },
    { name: "Tools", href: "#tools", icon: Code2 },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const advancedSubLinks = [
    { name: "Microservices", href: "#microservices" },
    { name: "Shift-Left", href: "#shift-left" },
    { name: "Process & Docs", href: "#test-strategy" },
  ];

  const isAdvancedActive = ["advanced-testing", "microservices", "shift-left", "test-strategy"].includes(activeSection);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="glass rounded-full px-4 md:px-6 py-3 flex items-center gap-4 md:gap-8 shadow-xl shadow-primary/10 bg-background/70 backdrop-blur-xl border border-white/20 overflow-visible scrollbar-hide max-w-full">
        {links.map((link) => {
          const isActive = link.hasDropdown ? isAdvancedActive : activeSection === link.href.substring(1);
          
          if (link.hasDropdown) {
            return (
              <div 
                key={link.name} 
                className="relative flex-shrink-0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className={`text-sm font-medium transition-all hover:scale-110 flex items-center gap-2 group cursor-pointer ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <link.icon
                    className={`w-4 h-4 transition-all group-hover:rotate-12 ${
                      isActive ? "text-primary" : "group-hover:text-primary"
                    }`}
                  />
                  <span className="hidden sm:inline">{link.name}</span>
                  <ChevronDown className={`w-3 h-3 hidden sm:inline transition-transform ${showAdvancedDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showAdvancedDropdown && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 mt-2"
                    style={{ zIndex: 100 }}
                  >
                    <div className="bg-background/98 backdrop-blur-xl border border-white/30 rounded-xl shadow-2xl shadow-primary/20 py-2 min-w-[180px]">
                      {advancedSubLinks.map((subLink) => (
                        <button
                          key={subLink.name}
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToSection(subLink.href.substring(1));
                          }}
                          className={`w-full text-left px-4 py-3 text-sm hover:bg-primary/10 transition-colors cursor-pointer ${
                            activeSection === subLink.href.substring(1)
                              ? "text-primary font-medium bg-primary/5"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {subLink.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          }
          
          return (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href.substring(1))}
              className={`text-sm font-medium transition-all hover:scale-110 flex items-center gap-2 group cursor-pointer flex-shrink-0 ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <link.icon
                className={`w-4 h-4 transition-all group-hover:rotate-12 ${
                  isActive ? "text-primary" : "group-hover:text-primary"
                }`}
              />
              <span className="hidden sm:inline">{link.name}</span>
            </button>
          );
        })}

        <div className="w-px h-6 bg-white/20 flex-shrink-0" />
        <button
          onClick={scrollToTop}
          disabled={!showScrollTop}
          className={`text-sm font-medium transition-all flex items-center gap-2 group flex-shrink-0 ${
            showScrollTop
              ? "text-muted-foreground hover:text-primary hover:scale-110 cursor-pointer"
              : "text-muted-foreground/30 cursor-default"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp
            className={`w-4 h-4 transition-all ${
              showScrollTop
                ? "group-hover:text-primary group-hover:-translate-y-1"
                : ""
            }`}
          />
          <span className="hidden sm:inline">Top</span>
        </button>
      </div>
    </motion.nav>
  );
}
