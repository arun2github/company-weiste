"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '@/lib/store/store';
// import { toggleTheme } from '@/lib/store/features/themeSlice';
// import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

// --- Color Palette (from Hero section for consistency) ---
const BG_PRIMARY_NAV = '#F9F9F9'; // Navbar background when scrolled (very light gray)
const TEXT_PRIMARY_NAV = '#222222'; // Rich Dark Gray for logo and active links
const TEXT_SECONDARY_NAV = '#555555'; // Medium-Dark Gray for nav links
const ACCENT_ELEGANT_NAV = '#004D40'; // Deep Teal for hover/active states

// --- Icons ---
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const pathname = usePathname();
  // const dispatch = useDispatch();
  // const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null); // Added observerRef

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger a bit later for a more noticeable effect
    };
    window.addEventListener('scroll', handleScroll);
    // Close mobile menu if window is resized to a larger screen where it's not needed
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Team', href: '/#team' },
    { name: 'Contact', href: '/#contact' },
  ];

  // New IntersectionObserver logic for activeSection
  useEffect(() => {
    if (pathname === '/') {
      const sections = document.querySelectorAll('section[id]');
      
      // Disconnect previous observer if it exists
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        const intersectingEntry = entries.find(entry => entry.isIntersecting);

        if (intersectingEntry) {
          setActiveSection(`#${intersectingEntry.target.id}`);
        } else {
          // All entries in this batch are for sections that stopped intersecting.
          entries.forEach(entry => { 
            setActiveSection(prevActiveSection => {
              if (prevActiveSection === `#${entry.target.id}`) {
                return ''; // Clear activeSection if it was the one that stopped intersecting
              }
              return prevActiveSection; // Otherwise, keep current state
            });
          });
        }
      };

      observerRef.current = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Section needs to be 50% visible
      });

      if (sections.length > 0) {
        sections.forEach(section => observerRef.current?.observe(section));
      } else {
        // No sections with IDs found on the page, ensure activeSection is cleared.
        setActiveSection('');
      }
      
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    } else { // Not on the homepage
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null; // Clear the ref
      }
      setActiveSection(''); // Clear active section if not on homepage
    }
  }, [pathname]); // Effect runs when pathname changes

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.5 }} // Entrance animation
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? `bg-opacity-80 backdrop-blur-lg shadow-sm`
          : 'bg-transparent'
      }`}
      style={isScrolled ? { backgroundColor: `${BG_PRIMARY_NAV}CC` } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20"> {/* Increased height slightly */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl tracking-tight focus:outline-none" aria-label="WhaleCore Innovations Home">
              <span style={{ color: ACCENT_ELEGANT_NAV, fontWeight: '700' }} className="mr-1.5">WhaleCore</span>
              <span style={{ color: TEXT_PRIMARY_NAV, fontWeight: '400' }}>Innovations</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => {
                const isCurrentPageRoot = pathname === '/';
                let isActive = false;

                if (link.href === '/') {
                  // Home link is active only if current path is '/' AND no section is currently active.
                  isActive = pathname === '/' && activeSection === '';
                } else if (link.href.startsWith('/#')) {
                  // Section link is active if on homepage and its corresponding section is active
                  isActive = isCurrentPageRoot && activeSection === link.href.substring(1);
                } else {
                  // For other pages/links
                  isActive = pathname === link.href;
                }
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-1 py-2 text-sm font-medium group transition-colors duration-200 focus:outline-none"
                    style={{ color: isActive ? ACCENT_ELEGANT_NAV : TEXT_SECONDARY_NAV }}
                    onClick={() => {
                        // If it's a hash link on the same page, manually set activeSection for immediate feedback
                        // The observer will also catch it, but this can make UX feel snappier
                        if (link.href.startsWith('/#') && pathname === '/') {
                            setActiveSection(link.href.substring(1));
                        }
                    }}
                  >
                    {link.name}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 origin-left transform transition-transform duration-300 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      } group-hover:scale-x-100`}
                      style={{ backgroundColor: ACCENT_ELEGANT_NAV }}
                    />
                  </Link>
                );
              })}
              {/* Theme Toggler Placeholder - can be styled later */}
              {/* <button
                // onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-full hover:bg-gray-200/50 transition-colors ml-4"
                aria-label="Toggle theme"
                style={{ color: TEXT_SECONDARY_NAV }}
              >
                <SunIcon className="h-5 w-5" /> 
              </button> */}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md inline-flex items-center justify-center hover:bg-gray-200/50 focus:outline-none transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-panel"
              aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="h-6 w-6" style={{color: TEXT_SECONDARY_NAV}} />
              ) : (
                <MenuIcon className="h-6 w-6" style={{color: TEXT_SECONDARY_NAV}} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-menu-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "circOut" }}
            className="md:hidden absolute top-full left-0 w-full shadow-lg pb-3 pt-2"
            style={{ backgroundColor: `${BG_PRIMARY_NAV}E6` }} // Slight transparency
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isCurrentPageRoot = pathname === '/';
                let isActive = false;
                 if (link.href === '/') {
                  // Home link is active only if current path is '/' AND no section is currently active.
                  isActive = pathname === '/' && activeSection === '';
                } else if (link.href.startsWith('/#')) {
                  // Section link is active if on homepage and its corresponding section is active
                  isActive = isCurrentPageRoot && activeSection === link.href.substring(1);
                } else {
                  // For other pages/links
                  isActive = pathname === link.href;
                }

                return (
                  <Link
                    key={`mobile-${link.name}`}
                    href={link.href}
                    className="block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ease-out focus:outline-none"
                    style={{ color: isActive ? ACCENT_ELEGANT_NAV : TEXT_SECONDARY_NAV, backgroundColor: isActive ? '#004D401A' : 'transparent'}}
                    onClick={() => {
                      if (link.href.startsWith('/#') && pathname === '/') {
                        setActiveSection(link.href.substring(1));
                      }
                      toggleMobileMenu(); // Close menu on click
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 