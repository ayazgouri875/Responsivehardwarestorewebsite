import { motion } from 'motion/react';
import { Award, Users, TrendingUp, Clock } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Clock, label: 'Years of Service', value: '15+' },
    { icon: Users, label: 'Happy Customers', value: '5000+' },
    { icon: Award, label: 'Quality Products', value: '100%' },
    { icon: TrendingUp, label: 'Customer Satisfaction', value: '98%' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#6B4423] mb-4">About Us</h2>
          <div className="w-24 h-1 bg-[#6B4423] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            KHATRI PLYWOOD & HARDWARE has been serving the Kota community for over 15 years with premium quality
            plywood, laminates, hardware tools, and construction materials. We pride ourselves on offering authentic
            products at competitive prices with exceptional customer service.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            हम अपने ग्राहकों को सर्वोत्तम गुणवत्ता वाले उत्पाद और सेवाएं प्रदान करने के लिए प्रतिबद्ध हैं।
            विश्वास और गुणवत्ता हमारी पहचान है।
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#6B4423]/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-[#6B4423]" />
                </div>
                <h3 className="text-[#6B4423] mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
