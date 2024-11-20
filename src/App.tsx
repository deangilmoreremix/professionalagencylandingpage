import React from 'react';
import Navigation from './components/Navigation';
import WhyVideoMarketing from './components/WhyVideoMarketing';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import SpecialOffer from './components/SpecialOffer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

function App() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Local Business
              <span className="block text-indigo-600">With Stunning Videos</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver Hollywood-quality videos tailored to your business, in a fraction of the time and cost. 
              No hassle, no waiting—just results.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center justify-center">
                Get a Free Video Marketing Consultation Today! <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhyVideoMarketing />
      <Services />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <SpecialOffer />
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">Let's Grow Your Business with Video!</h2>
            <p className="mt-4 text-gray-600">
              Don't let outdated marketing hold your business back. Take the leap into AI-powered video marketing today 
              and watch your engagement, leads, and sales skyrocket.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 max-w-xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Schedule Your Free Consultation Now! <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;