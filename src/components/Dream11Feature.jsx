'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Flame, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Stethoscope, 
  Cpu, 
  Users 
} from 'lucide-react';

export default function Dream11Feature() {
  return (
    <section 
      id="dream11" 
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold border border-cyan-500/30">
            <Flame className="w-4 h-4 text-cyan-400" />
            <span>SUPER-SELECT PINNACLE BATCH</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Dream 11 Dropper Batch
          </h2>

          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto pt-2">
            Our most exclusive droppers group. Limited strictly to 11 Medical and 11 Non-Medical top rank aspirants with 1-on-1 faculty mentoring.
          </p>
        </div>

        {/* 11 Medical + 11 Non-Medical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Medical Wing - Dream 11 */}
          <div className="bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 rounded-2xl p-7 relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-black px-3 py-1 rounded-full">
                  11 SEATS ONLY
                </span>
              </div>
              
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                  Medical (NEET-UG Droppers)
                </span>
                <h3 className="text-2xl font-black text-white mt-1">Dream 11 Medical</h3>
              </div>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Supervised personalized revision modules, 24/7 doubt access, and targeted rank booster routines for top percentiles.
              </p>

              {/* Admission Criteria Box */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="text-slate-300">
                  <strong className="text-cyan-400">Direct Admission:</strong> 400+ Score in NEET-UG
                </div>
                <div className="text-slate-300">
                  <strong className="text-cyan-400">Board Track:</strong> 90%+ aggregate in Class 10 / 12
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-cyan-400">
              <span>Goal: Top 1000 All India Rank</span>
              <span>Strictly 11 Seats</span>
            </div>
          </div>

          {/* Non-Medical Wing - Dream 11 */}
          <div className="bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 rounded-2xl p-7 relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-black px-3 py-1 rounded-full">
                  11 SEATS ONLY
                </span>
              </div>
              
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                  Engineering (JEE Droppers)
                </span>
                <h3 className="text-2xl font-black text-white mt-1">Dream 11 Non-Medical</h3>
              </div>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                Advanced problem sheets, error-pattern tracking, and personalized test strategies with senior Kota mentors.
              </p>

              {/* Admission Criteria Box */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="text-slate-300">
                  <strong className="text-cyan-400">Direct Admission:</strong> 80+ Percentile in JEE Main
                </div>
                <div className="text-slate-300">
                  <strong className="text-cyan-400">Board Track:</strong> 90%+ aggregate in Class 10 / 12
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-cyan-400">
              <span>Goal: Top Tier IITs / NITs</span>
              <span>Strictly 11 Seats</span>
            </div>
          </div>

        </div>

        {/* Highlights & Direct CTA */}
        <div className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-cyan-400 shrink-0" />
            <p className="text-sm text-slate-300">
              Total <strong>22 Students Only</strong> (11 Medical + 11 Non-Medical) admitted via direct merit criteria.
            </p>
          </div>
          <Link
            href="/register"
            className="w-full sm:w-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm rounded-xl transition shadow-lg flex items-center justify-center gap-2"
          >
            <span>Qualify for Dream 11</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}