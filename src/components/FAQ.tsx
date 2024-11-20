import React from 'react';

const faqs = [
  {
    question: "How fast is the turnaround?",
    answer: "Most videos are ready in just 48 hours!"
  },
  {
    question: "What types of videos can you create?",
    answer: "Social media ads, explainer videos, promos, testimonials, and more."
  },
  {
    question: "Do you offer revisions?",
    answer: "Absolutely! Your satisfaction is our priority."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-12 grid gap-8 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}