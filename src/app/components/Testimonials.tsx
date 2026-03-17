import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Builder',
      comment: 'खत्री प्लाईवुड से मैं पिछले 10 साल से सामान ले रहा हूं। गुणवत्ता और सेवा दोनों बेहतरीन है।',
      rating: 5,
    },
    {
      name: 'Amit Sharma',
      role: 'Architect',
      comment: 'Best quality plywood and laminates in Kota. Their prices are very competitive and staff is very helpful.',
      rating: 5,
    },
    {
      name: 'Sunita Patel',
      role: 'Homeowner',
      comment: 'मैंने अपने घर के लिए यहां से लेमिनेट और प्लाईवुड लिया था। बहुत अच्छी क्वालिटी मिली।',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'Contractor',
      comment: 'Trusted shop for all hardware needs. They have wide variety and always stock fresh materials.',
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#6B4423] mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-[#6B4423] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            ग्राहक संतुष्टि हमारी प्राथमिकता है
          </p>
        </motion.div>

        <div className="testimonials-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg h-full"
                >
                  <Quote className="w-10 h-10 text-[#6B4423]/20 mb-4" />
                  <p className="text-gray-700 mb-6 min-h-[100px]">{testimonial.comment}</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <h4 className="text-[#6B4423]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
