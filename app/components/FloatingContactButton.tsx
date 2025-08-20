"use client";

import { useEffect, useState } from "react";
import EmailIcon from "~/icons/EmailIcon";

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (!contactSection) return;

      const contactRect = contactSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hide button when contact section is visible (even partially)
      const isContactVisible = contactRect.top < windowHeight && contactRect.bottom > 0;
      
      // Also hide if we're at the very top of the page
      const isAtTop = false;//window.scrollY < 100;
      
      setIsVisible(!isContactVisible && !isAtTop);
    };

    // Check on mount
    handleScroll();
    
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 btn btn-primary btn-circle btn-lg shadow-2xl z-50 transition-all duration-300 hover:scale-110 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Contattami"
      style={{
        // Ensure button stays within viewport on mobile
        maxWidth: 'calc(100vw - 2rem)',
        maxHeight: 'calc(100vh - 2rem)'
      }}
    >
      <EmailIcon className="h-5 w-5 sm:h-6 sm:w-6" />
    </button>
  );
}