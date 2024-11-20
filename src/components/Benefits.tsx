import React from 'react';
import { Building2, Briefcase, Store } from 'lucide-react';

const benefits = [
  {
    icon: <Building2 className="h-12 w-12 text-indigo-600" />,
    title: "Local Businesses",
    description: "Restaurants, gyms, salons, real estate agents, and more. Drive foot traffic and online engagement effortlessly."
  },
  {
    icon: <Briefcase className="h-12 w-12 text-indigo-600" />,
    title: "Service Providers",
    description: "Medical practices, law firms, financial advisors. Educate and inform with authority and professionalism."
  },
  {
    icon: <Store className="h-12 w-12 text-indigo-600" />,
    title: "Retail Stores",
    description: "Boost product sales with persuasive promo videos. Showcase your best products with flair."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Who Benefits from Our Services?</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex justify-center">{benefit.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}