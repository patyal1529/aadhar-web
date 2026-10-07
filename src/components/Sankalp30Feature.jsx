'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, GraduationCap, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

const rotatingExams = ['IIT-JEE', 'NEET', 'IISER', 'NEST', 'KVPY'];

export default function Sankalp30Feature() {
  const [examIndex, setExamIndex] = useState(0);

  // Har 3 second mein exam change hoga
  useEffect(() => {
    const timer = setInterval(() => {
      setExamIndex((prev) => (prev + 1) % rotatingExams.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="sankalp" 
      className="py-20 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-12">
        
        {/* Header with 3-second animated text */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold border border-amber-400/30">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>SPECIAL FLAGSHIP BATCH</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            संकल्प-30 Batch
          </h2>

          {/* 3-Second Text Switcher */}
          <div className="flex items-center justify-center gap-2 text-xl md:text-3xl font-extrabold text-slate-300">
            <span>Targeting:</span>
            <span 
              key={examIndex}
              className="inline-block bg-amber-400 text-slate-950 px-4 py-1 rounded-xl shadow-md transition-all duration-500 animate-pulse"
            >
              {rotatingExams[examIndex]}
            </span>
          </div>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto pt-2">
            A dedicated, high-performance schooling-cum-coaching ecosystem engineered for top national-level competitive exam ranks.
          </p>
        </div>

        {/* Eligibility Criteria Cards */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <GraduationCap className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Eligibility & Selection Procedure of Sankalp-30
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stream 1 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                  Stream 1
                </span>
                <h4 className="text-lg font-black text-white mb-3">
                  SKLP-XI-30
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Students appearing in <strong>Class X</strong> and having a minimum of <strong>85%</strong> (<strong>80%</strong> for SC/ST) marks in aggregate in <strong>Maths & Science</strong> of Class X Board Examination.
                </p>
              </div>
            </div>

            {/* Stream 2 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                  Stream 2
                </span>
                <h4 className="text-lg font-black text-white mb-3">
                  SKLP-XIIA-30
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Students appearing in <strong>Class XI</strong> and having secured a minimum of <strong>85%</strong> (<strong>80%</strong> for SC/ST) marks in aggregate in <strong>Maths & Science</strong> of Class X Board Examination.
                </p>
              </div>
            </div>

            {/* Stream 3 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                  Stream 3
                </span>
                <h4 className="text-lg font-black text-white mb-3">
                  SKLP-XII(B)-30
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Students passed <strong>Class XII</strong> and having secured a minimum of <strong>85%</strong> (<strong>80%</strong> for SC/ST) marks in aggregate of <strong>PCB / PCM</strong> in Class XII standard Board Examination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Procedure of Selection Details */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <FileText className="w-5 h-5 text-amber-400" />
            <h4 className="text-lg md:text-xl font-bold text-white">
              Procedure of Selection
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed">
            <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
              <h5 className="font-bold text-amber-300 text-base mb-2">
                For SKLP-XI-30 & SKLP-XIIA :
              </h5>
              <p>
                Course will be schooling-cum-coaching in which schooling is arranged from the best school of town by the Institute. After receiving application forms, an <strong>Aptitude Test</strong> will be conducted online on different dates, which will be intimated to students well in advance.
              </p>
            </div>

            <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
              <h5 className="font-bold text-amber-300 text-base mb-2">
                For SKLP-XIIB-30 :
              </h5>
              <p>
                <strong>Direct admission</strong> for students scoring more than <strong>80 in JEE</strong> and <strong>300 in NEET</strong>. For other eligible candidates, an aptitude test will be conducted in the Aadhar Institute Sankalp-30 wing during the month of June.
              </p>
            </div>
          </div>

          {/* Action CTA Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strict batch limit of 30 seats per stream</span>
            </div>

            <Link
              href="/register"
              className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2"
            >
              <span>Apply for Sankalp-30</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}