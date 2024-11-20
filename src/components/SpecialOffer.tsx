import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';

export default function SpecialOffer() {
  return (
    <section className="py-16 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <Gift className="h-12 w-12 mx-auto text-white opacity-90" />
          <h2 className="mt-4 text-3xl font-bold">Special Offer: LIMITED TIME ONLY</h2>
          <p className="mt-4 text-xl">
            🎁 Get Your First AI-Generated Marketing Video for FREE!
          </p>
          <p className="mt-2 text-indigo-100">
            No obligation, no risk—just results.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            Claim Your Free Video <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}