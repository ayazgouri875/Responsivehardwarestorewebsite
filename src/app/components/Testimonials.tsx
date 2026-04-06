import React from 'react';
import { motion } from 'framer-motion'; 
import { Star, Quote } from 'lucide-react';
import Slider from 'react-slick';

// Import the CSS files
import '../styles/carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Moinuddin Gouri',
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
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    cssEase: "linear", // Smooths out the transition
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Essential for mobile width
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-[#F5F1E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Keep the Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#6B4423] mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-[#6B4423] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 font-medium">
            ग्राहक संतुष्टि हमारी प्राथमिकता है
          </p>
        </motion.div>

        <div className="testimonials-slider max-w-full">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="outline-none">
                {/* Standard DIV here (No motion.div) to prevent overlapping */}
                <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col justify-between min-h-[360px] h-full border border-gray-100 mx-2 mb-10">
                  <div>
                    <Quote className="w-10 h-10 text-[#6B4423]/10 mb-4" />
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                      "{testimonial.comment}"
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="text-[#6B4423] font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}