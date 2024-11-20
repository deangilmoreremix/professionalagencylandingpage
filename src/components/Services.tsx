import React from 'react';
import { Video, Wand2, Volume2, Subtitles, Layout, Palette, Film, Globe, Share2 } from 'lucide-react';

const services = [
  {
    icon: <Video className="h-8 w-8 text-indigo-600" />,
    title: "Automated Video Editing",
    description: "Say goodbye to tedious editing! We create professional-grade videos with AI precision."
  },
  {
    icon: <Wand2 className="h-8 w-8 text-indigo-600" />,
    title: "Intelligent Scene Detection",
    description: "Every scene is analyzed, segmented, and optimized for maximum impact. Perfect for storytelling that keeps viewers hooked."
  },
  {
    icon: <Volume2 className="h-8 w-8 text-indigo-600" />,
    title: "Audio Enhancement",
    description: "Crystal-clear sound with noise reduction and sound balancing. Your message deserves to be heard loud and clear."
  },
  {
    icon: <Subtitles className="h-8 w-8 text-indigo-600" />,
    title: "Custom Subtitles & Captions",
    description: "Captions auto-generated for accessibility and SEO. Reach more people and rank higher on search engines."
  },
  {
    icon: <Layout className="h-8 w-8 text-indigo-600" />,
    title: "Customizable Templates",
    description: "Fully branded video templates for social media, ads, and websites. Consistent, professional designs tailored to your business."
  },
  {
    icon: <Palette className="h-8 w-8 text-indigo-600" />,
    title: "AI-Driven Color Grading",
    description: "Vibrant visuals that catch attention. Every video is optimized for stunning aesthetic appeal."
  },
  {
    icon: <Film className="h-8 w-8 text-indigo-600" />,
    title: "Dynamic Transitions & Motion Graphics",
    description: "Keep your audience engaged with eye-catching transitions. Includes lower-thirds, title cards, and more!"
  },
  {
    icon: <Globe className="h-8 w-8 text-indigo-600" />,
    title: "Multilingual Subtitles",
    description: "Reach global audiences with subtitles in any language. Perfect for international or diverse markets."
  },
  {
    icon: <Share2 className="h-8 w-8 text-indigo-600" />,
    title: "Social Media Optimization",
    description: "Videos tailored for Instagram, TikTok, Facebook, and YouTube. Designed for high engagement and sharing."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our AI-Powered Services</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}