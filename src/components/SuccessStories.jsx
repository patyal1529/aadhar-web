'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Award, Compass, HeartPulse, GraduationCap, Trophy } from 'lucide-react';

const statsData = [
  {
    target: 871,
    label: 'Engineers',
    subLabel: 'IITs, NITs & Top Engineering Colleges',
    icon: Compass,
    color: 'from-blue-500 to-cyan-400',
    borderGlow: 'border-blue-500/30',
  },
  {
    target: 393,
    label: 'MBBS',
    subLabel: 'Govt Medical Colleges & AIIMS',
    icon: HeartPulse,
    color: 'from-emerald-500 to-teal-400',
    borderGlow: 'border-emerald-500/30',
  },
  {
    target: 86,
    label: 'IISER & NEST',
    subLabel: 'Premier Science & Research Institutes',
    icon: Trophy,
    color: 'from-amber-500 to-orange-400',
    borderGlow: 'border-amber-500/30',
  },
  {
    target: 1999,
    label: 'Other Courses',
    subLabel: 'State Entrances & Professional Programs',
    icon: GraduationCap,
    color: 'from-purple-500 to-indigo-400',
    borderGlow: 'border-purple-500/30',
  },
];

// Single Rolling Counter Component
function CounterItem({ target, label, subLabel, icon: Icon, color, borderGlow, startAnimation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime = null;
    const duration = 2000; // 2 seconds animation duration

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutQuad) for smooth slow-down at the end
      const easeOut = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [startAnimation, target]);

  return (
    <div className={`relative bg-slate-900/90 border ${borderGlow} rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl hover:scale-[1.02] transition-transform duration-300`}>
      <div className="flex items-center justify-between mb-6">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} p-0.5`}>
          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
            <Icon className="w-6 h-6" />
          </div>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md">
          Proven Track Record
        </span>
      </div>

      <div>
        <div className="text-4xl md:text-5xl font-black tracking-tight text-white mb-1 flex items-baseline">
          <span>{count}</span>
          <span className="text-amber-400 ml-1">+</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-slate-100">{label}</h3>
        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{subLabel}</p>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ek baar trigger hone ke baad disconnect
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="success-stories" 
      className="py-20 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold border border-amber-400/30">
            <Award className="w-4 h-4 text-amber-400" />
            <span>LEGACY OF EXCELLENCE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Success Stories <span className="text-slate-400 text-2xl md:text-4xl font-normal">(2010 - 2025)</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            More than a decade of consistent results producing top doctors, research scholars, and engineers from Hamirpur.
          </p>
        </div>

        {/* 4 Stats Grid with Counter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item, idx) => (
            <CounterItem 
              key={idx} 
              {...item} 
              startAnimation={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}