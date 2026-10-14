'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  Stethoscope, 
  Cpu, 
  Target 
} from 'lucide-react';

const rotatingExams = ['IIT-JEE', 'NEET-UG', 'IISER', 'NEST'];

export default function Sankalp30Feature() {
  const [examIndex, setExamIndex] = useState(0);

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
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold border border-amber-400/30">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>EXCLUSIVE DROPPER / TARGET BATCH</span>
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
            Specially engineered for dedicated repeaters & droppers with rigorous testing, daily DPPs, and comprehensive concept drills.
          </p>
        </div>

        {/* 15 Medical + 15 Non-Medical Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Medical Wing */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-7 relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black px-3 py-1 rounded-full">
                  30 SEATS ONLY
                </span>
              </div>
              
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  Medical (NEET-UG Droppers)
                </span>
                <h3 className="text-2xl font-black text-white mt-1">Sankalp Medical 30</h3>
              </div>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                NCERT microscopic line-by-line coverage, high-yield question solving, and weekly OMR pattern test analysis.
              </p>

              <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="text-slate-300">
                  <strong className="text-emerald-400">Entrance Test Route:</strong> Minimum 360+ marks in entrance test
                </div>
                <div className="text-slate-300">
                  <strong className="text-emerald-400">Direct Exemption (Droppers):</strong> Minimum 360+ Marks in NEET-UG
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span>Goal: Govt Medical Colleges (AIIMS / GMC)</span>
              <span>30 Droppers</span>
            </div>
          </div>

          {/* Non-Medical Wing */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-7 relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-black px-3 py-1 rounded-full">
                  30 SEATS ONLY
                </span>
              </div>
              
              <div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                  Engineering (JEE Droppers)
                </span>
                <h3 className="text-2xl font-black text-white mt-1">Sankalp Non-Medical 30</h3>
              </div>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Advanced level problem solving, multi-concept physics sessions, and full-length CBT mock drills.
              </p>

              <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="text-slate-300">
                  <strong className="text-blue-400">Entrance Test Route:</strong> Minimum 150+ marks in entrance test
                </div>
                <div className="text-slate-300">
                  <strong className="text-blue-400">Direct Exemption (Droppers):</strong> Minimum 75 Percentile in JEE Main
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-400">
              <span>Goal: Top IITs, NITs & IIITs</span>
              <span>30 Droppers</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA Bar */}
        <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-amber-400 shrink-0" />
            <p className="text-sm text-slate-300">
              Strict aggregate cap of <strong>30 Droppers only</strong> (30 Medical + 30 Non-Medical) to maintain quality.
            </p>
          </div>
          <Link
            href="/register"
            className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2"
          >
            <span>Apply for Sankalp-30</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}