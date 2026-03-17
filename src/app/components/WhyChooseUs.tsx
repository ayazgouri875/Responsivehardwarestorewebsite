import { motion } from 'motion/react';
import { CheckCircle, Shield, IndianRupee, Package, Award, Headphones } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'High-Quality Materials',
      description: 'Only genuine products from trusted brands with ISI certification',
    },
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      description: 'Competitive prices with flexible payment options',
    },
    {
      icon: Award,
      title: 'Trusted by Locals',
      description: '15+ years of trusted service in Kota community',
    },
    {
      icon: Package,
      title: 'Wide Variety',
      description: 'Extensive range of products for all construction needs',
    },
    {
      icon: Headphones,
      title: 'Expert Guidance',
      description: 'Professional advice from experienced staff',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'All products come with quality guarantee',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F1E8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#6B4423] mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-[#6B4423] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            हमें क्यों चुनें - गुणवत्ता, विश्वास और सेवा
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#6B4423]/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-[#6B4423]" />
                </div>
                <h3 className="text-[#6B4423] mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
