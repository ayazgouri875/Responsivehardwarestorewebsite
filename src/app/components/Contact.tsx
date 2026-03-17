import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm ${formData.name}. ${formData.message}. Please call me at ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/919929449401?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#6B4423] mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[#6B4423] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            हमसे संपर्क करें - We're here to help
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#6B4423]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#6B4423]" />
                </div>
                <div>
                  <h3 className="text-[#6B4423] mb-2">Visit Our Store</h3>
                  <p className="text-gray-600">Borkhera, Kota, Rajasthan, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#6B4423]/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#6B4423]" />
                </div>
                <div>
                  <h3 className="text-[#6B4423] mb-2">Call Us</h3>
                  <a href="tel:+919929449401" className="text-gray-600 hover:text-[#6B4423] transition-colors">
                    +91 99294 49401
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#6B4423]/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#6B4423]" />
                </div>
                <div>
                  <h3 className="text-[#6B4423] mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.57403068018!2d75.6380!3d25.1822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9b4b77697d71%3A0xb5d5d6f9d5e4f5e9!2sBorkhera%2C%20Kota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#F5F1E8] p-8 rounded-xl shadow-lg">
              <h3 className="text-[#6B4423] mb-6">Send us a message</h3>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#6B4423] focus:outline-none focus:ring-2 focus:ring-[#6B4423]/20 transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#6B4423] focus:outline-none focus:ring-2 focus:ring-[#6B4423]/20 transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-[#6B4423] focus:outline-none focus:ring-2 focus:ring-[#6B4423]/20 transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6B4423] text-white px-8 py-4 rounded-lg hover:bg-[#8B6F47] transition-all duration-300 hover:shadow-lg"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
