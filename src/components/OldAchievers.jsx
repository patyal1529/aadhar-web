'use client';

import React from 'react';
import { Trophy } from 'lucide-react';

const totalStudents = 66;

// Direct /achievers/ path from public folder
const allStudents = Array.from({ length: totalStudents }, (_, i) => ({
  id: i + 1,
  image: `/achievers/r${i + 1}.jpg`,
}));

const row1Students = allStudents.slice(0, 33);
const row2Students = allStudents.slice(33, 66);

export default function OldAchievers() {
  return (
    <section 
      id="results" 
      className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800"
    >
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-14 relative z-10 space-y-3">
        <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold border border-amber-400/30">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span>PROUD ALUMNI & TOPPERS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          Our Star Achievers <span className="text-amber-400">Wall of Fame</span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
          Over 66+ stellar ranks produced in IIT-JEE, NEET-UG, AIIMS, and leading national colleges.
        </p>
      </div>

      {/* Side Blur Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />

      {/* Auto-sliding Carousel */}
      <div className="space-y-8 relative z-10">
        
        {/* ROW 1: Slides Left */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-6 shrink-0 animate-slide-left group-hover:[animation-play-state:paused]">
            {[...row1Students, ...row1Students].map((student, idx) => (
              <div 
                key={`r1-${idx}`} 
                className="flex flex-col items-center justify-center shrink-0"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-amber-500/80 via-amber-300/40 to-slate-800 shadow-xl shadow-amber-500/10 hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-950">
                    <img
                      src={student.image}
                      alt={`Achiever ${student.id}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Slides Right */}
        <div className="flex overflow-hidden group">
          <div className="flex gap-6 shrink-0 animate-slide-right group-hover:[animation-play-state:paused]">
            {[...row2Students, ...row2Students].map((student, idx) => (
              <div 
                key={`r2-${idx}`} 
                className="flex flex-col items-center justify-center shrink-0"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-cyan-500/80 via-blue-400/40 to-slate-800 shadow-xl shadow-cyan-500/10 hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-950">
                    <img
                      src={student.image}
                      alt={`Achiever ${student.id}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slideLeft 100s linear infinite;
        }
        .animate-slide-right {
          animation: slideRight 100s linear infinite;
        }
      `}</style>
    </section>
  );
}