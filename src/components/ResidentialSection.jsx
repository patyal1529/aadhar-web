'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Home, 
  Clock, 
  Eye, 
  HeartHandshake, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight 
} from 'lucide-react';

export default function ResidentialSection() {
  const safetyFeatures = [
    {
      icon: <Eye className="w-6 h-6 text-amber-400" />,
      title: '24/7 CCTV & Campus Security',
      description: 'Continuous surveillance across residential corridors, common areas, and entry gates with dedicated security personnel.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Resident Wardens & Personal Care',
      description: 'Full-time resident wardens present on premises to monitor health, hygiene, discipline, and emotional well-being of Class 11th & 12th students.'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-400" />,
      title: 'Strict Routine & Digital Regulation',
      description: 'Fixed morning wake-up calls, supervised evening self-study hours, and strictly regulated smartphone usage to prevent distractions.'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-400" />,
      title: 'Parent Regular Updates & Doctor on Call',
      description: 'Biometric attendance logs, periodic parent-warden updates, hygienic nutritious home-style meals, and immediate medical assistance on call.'
    }
  ];

  return (
    <section 
      id="residential" 
      className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800"
    >
      {/* Background Accent Glow */}
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-500/30">
            <Home className="w-4 h-4 text-emerald-400" />
            <span>CAMPUS HOSTEL & CARE</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Hostel & Residential Care
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            A secure, disciplined, and home-like residential environment designed specifically for Class 11th, 12th & Dropper students focusing on national exams.
          </p>
        </div>

        {/* Safety & Security Concern Highlight Box */}
        <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border border-blue-800/40 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-8">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-widest mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Parent Peace of Mind</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Safety, Security & Daily Resident Care Protocol
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Dedicated Boys & Girls Wings</span>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyFeatures.map((item, index) => (
              <div 
                key={index} 
                className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-5 hover:border-slate-700 transition-colors flex gap-4"
              >
                <div className="shrink-0 p-2.5 bg-slate-900 rounded-lg h-fit border border-slate-800">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Daily Schedule Summary */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Scheduled library access • Supervised evening doubts • Hygienic vegetarian mess
            </div>
            <a 
              href="tel:+919816000000" 
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-xs font-bold transition"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Enquire About Hostel Availability</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}