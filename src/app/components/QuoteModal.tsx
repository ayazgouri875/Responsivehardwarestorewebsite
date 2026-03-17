import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Quote Request:
Name: ${formData.name}
Phone: ${formData.phone}
Product: ${formData.product}
Quantity: ${formData.quantity}
Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919929449401?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', phone: '', product: '', quantity: '', message: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
            >
              <div className="sticky top-0 bg-[#6B4423] text-white p-6 rounded-t-2xl flex items-center justify-between">
                <h2>Get Free Quote</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-[#6B4423] focus:outline-none focus:ring-2 focus:ring-[#6B4423]/20 transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-[#6B4423] focus:outline-none focus:ring-2 focus:ring-[#6B4423]/20 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Product Type *</label>
                  <select
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-[#6B4423] focus:outline-none focus:ring-2 focus:ring-[#6B4423]/20 transition-all"
                  >
                    <option value="">Select Product</option>
                    <option value="Plywood">Plywood</option>
                    <option value="Laminates">Laminates</option>
                    <option value="Hardware Tools">Hardware Tools</option>
                    <option value="Construction Materials">Construction Materials</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Quantity</label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-[#6B4423] focus:outline-none focus:ring-2 focus:ring-[#6B4423]/20 transition-all"
                    placeholder="e.g., 10 sheets, 5 boxes"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Additional Details</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-[#6B4423] focus:outline-none focus:ring-2 focus:ring-[#6B4423]/20 transition-all resize-none"
                    placeholder="Any specific requirements or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6B4423] text-white px-8 py-4 rounded-lg hover:bg-[#8B6F47] transition-all duration-300 hover:shadow-lg"
                >
                  Send Quote Request
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
