import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onGetQuoteClick: () => void;
}

export function Header({ onGetQuoteClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="cursor-pointer" onClick={() => scrollToSection('home')}>
              <h2 className="text-[#6B4423]">KHATRI PLYWOOD & HARDWARE</h2>
              <p className="text-sm text-[#8B6F47]">खत्री प्लाईवुड & हार्डवेयर</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#6B4423] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#6B4423] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-[#6B4423] transition-colors">
              Products
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#6B4423] transition-colors">
              Contact
            </button>
            <button
              onClick={onGetQuoteClick}
              className="bg-[#6B4423] text-white px-6 py-2 rounded-lg hover:bg-[#8B6F47] transition-all duration-300 hover:shadow-lg"
            >
              Get Quote
            </button>
            <a
              href="tel:+919929449401"
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#6B4423] transition-colors text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#6B4423] transition-colors text-left">
                  About
                </button>
                <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-[#6B4423] transition-colors text-left">
                  Products
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#6B4423] transition-colors text-left">
                  Contact
                </button>
                <button
                  onClick={() => {
                    onGetQuoteClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-[#6B4423] text-white px-6 py-2 rounded-lg hover:bg-[#8B6F47] transition-all duration-300 text-left"
                >
                  Get Quote
                </button>
                <a
                  href="tel:+919929449401"
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 w-fit"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
