import React from 'react';
import { TrendingUp, Users, Brain } from 'lucide-react';

const stats = [
  {
    icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
    stat: "87%",
    text: "of businesses say video drives engagement"
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-600" />,
    stat: "93%",
    text: "of marketers say video has landed them new customers"
  },
  {
    icon: <Brain className="h-8 w-8 text-indigo-600" />,
    stat: "95%",
    text: "message retention with video (vs 10% with text)"
  }
];

export default function WhyVideoMarketing() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Video Marketing?</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex justify-center">{item.icon}</div>
                <p className="mt-4 text-2xl font-bold text-indigo-600">{item.stat}</p>
                <p className="mt-2 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg text-gray-700 max-w-3xl mx-auto">
            Your competitors are already using video—don't get left behind! Partner with us to dominate your local market with the most engaging, persuasive video marketing content.
          </p>
        </div>
      </div>
    </section>
  );
}