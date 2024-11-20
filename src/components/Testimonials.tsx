import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We saw a 35% increase in foot traffic within the first month of using these video ads! Their AI tools are nothing short of revolutionary.",
    author: "Jane D.",
    role: "Local Restaurant Owner"
  },
  {
    quote: "Our social media engagement tripled after implementing their services. Their videos are stunning!",
    author: "Mark P.",
    role: "Gym Owner"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Client Success Stories</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}