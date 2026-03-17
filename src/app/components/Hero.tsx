import { motion } from 'motion/react';
import { Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onGetQuoteClick: () => void;
}

export function Hero({ onGetQuoteClick }: HeroProps) {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1564691848938-d0fc26235733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Plywood and Wood Materials"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl text-white mb-4"
          >
            Your Trusted Partner for Quality Plywood & Hardware
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-6"
          >
            खत्री प्लाईवुड & हार्डवेयर - गुणवत्ता और विश्वास का नाम
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-300 mb-8"
          >
            Premium quality plywood, laminates, hardware tools, and construction materials in Borkhera, Kota
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href="tel:+919929449401"
              className="flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Now: +91 99294 49401
            </a>
            <button
              onClick={onGetQuoteClick}
              className="flex items-center justify-center gap-3 bg-[#6B4423] text-white px-8 py-4 rounded-lg hover:bg-[#8B6F47] transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Get Free Quote
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-2 text-gray-300"
          >
            <MapPin className="w-5 h-5" />
            <span>Borkhera, Kota, Rajasthan, India</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
