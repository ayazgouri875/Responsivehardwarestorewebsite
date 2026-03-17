import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#3D2817] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="mb-4">KHATRI PLYWOOD & HARDWARE</h3>
            <p className="text-gray-300 mb-2">खत्री प्लाईवुड & हार्डवेयर</p>
            <p className="text-gray-400 text-sm">
              Your trusted partner for quality plywood, laminates, and hardware materials in Kota.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-white transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Premium Plywood</li>
              <li>Designer Laminates</li>
              <li>Hardware Tools</li>
              <li>Construction Materials</li>
              <li>Adhesives & Glue</li>
              <li>Paints & Varnish</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8B6F47] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">Borkhera, Kota, Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8B6F47] flex-shrink-0" />
                <a href="tel:+919929449401" className="text-gray-400 text-sm hover:text-white transition-colors">
                  +91 99294 49401
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} KHATRI PLYWOOD & HARDWARE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
