import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Products() {
  const products = [
    {
      title: 'Premium Plywood',
      description: 'High-quality plywood from top brands like Century, Greenply, and Kitply',
      image: 'https://images.unsplash.com/photo-1546674064-c27b59d577e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      features: ['BWP & BWR Grade', 'Termite Resistant', 'ISI Certified'],
    },
    {
      title: 'Designer Laminates',
      description: 'Wide range of decorative laminates in various textures and patterns',
      image: 'https://images.unsplash.com/photo-1617262869522-6740e6450f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      features: ['Matt & Glossy Finish', '1000+ Designs', 'Scratch Resistant'],
    },
    {
      title: 'Hardware Tools',
      description: 'Complete range of hardware tools and accessories for construction',
      image: 'https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      features: ['Power Tools', 'Hand Tools', 'Measuring Tools'],
    },
    {
      title: 'Construction Materials',
      description: 'Essential construction materials including adhesives, nails, and more',
      image: 'https://images.unsplash.com/photo-1661338148448-c12887abcd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      features: ['Adhesives & Glue', 'Nails & Screws', 'Paints & Varnish'],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#6B4423] mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-[#6B4423] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Explore our comprehensive range of premium quality products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#6B4423] mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#6B4423] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
