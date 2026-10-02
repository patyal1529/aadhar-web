import React from 'react';
import { Target, Users, BookMarked, Award, CheckCircle, Flame } from 'lucide-react';

export default function Sankalp30Feature() {
  return (
    <section id="sankalp30" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Presentation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-black uppercase tracking-widest">
              <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
              Special Super Batch
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              संकल्प - 30 (Sankalp-30) <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
                Hamirpur's Premier 30-Seat Batch
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              An exclusive mentoring cocoon limited to strictly 30 high-potential aspirants selected through a rigorous entrance screening test. Geared exclusively for under AIR-1000 in NEET & JEE Advanced.
            </p>

            {/* Program Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Daily 1-on-1 Faculty Mentorship</h4>
                  <p className="text-xs text-slate-400 mt-1">Direct daily review of performance by Founder & Senior Ex-Aakash Mentors.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Dedicated Study Library & Hostel</h4>
                  <p className="text-xs text-slate-400 mt-1">Distraction-free environment with 24/7 faculty doubt supervision.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                <BookMarked className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Custom Specialized Curriculum</h4>
                  <p className="text-xs text-slate-400 mt-1">Advanced multi-concept problem sheets beyond typical coaching modules.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Up to 100% Scholarship</h4>
                  <p className="text-xs text-slate-400 mt-1">Deserving and economically weaker students get fee waivers.</p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-2">
              <a
                href="#admissions-form"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/25 transition-all"
              >
                Apply for Sankalp-30 Screening Test
              </a>
            </div>
          </div>

          {/* Right Card: Selection Criteria Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl relative shadow-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                Batch Eligibility & Protocol
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Selection Process 2026-27
              </h3>
              
              <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Phase 1:</strong> Written Entrance Test (PCM / PCB syllabus of previous class).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Phase 2:</strong> Personal academic aptitude interview with Institute Director.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Strict Capacity:</strong> Maximum 30 students only. No seat expansion after lock date.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Test Venue:</strong> Aadhar Institute Campus, Gandhi Chowk Hamirpur (H.P.).</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-800 text-center">
                <span className="block text-xs text-slate-400">Next Screening Test Date:</span>
                <span className="block text-lg font-black text-amber-400 mt-1">Every Sunday at 10:00 AM</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}