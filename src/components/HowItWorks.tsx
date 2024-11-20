import React from 'react';
import { CalendarCheck, Video, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <CalendarCheck className="h-12 w-12 text-indigo-600" />,
    title: "Book a Free Consultation",
    description: "Share your goals, and we'll create a custom video marketing strategy."
  },
  {
    icon: <Video className="h-12 w-12 text-indigo-600" />,
    title: "Video Creation & Editing",
    description: "Our AI-powered tools turn your vision into reality—fast and flawless."
  },
  {
    icon: <Rocket className="h-12 w-12 text-indigo-600" />,
    title: "Launch & Dominate",
    description: "We'll optimize your videos for social media, ads, and more. Watch your business grow!"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex justify-center">{step.icon}</div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-0.5 bg-indigo-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}