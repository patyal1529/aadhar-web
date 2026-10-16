'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  User, 
  Phone, 
  BookOpen, 
  Layers, 
  Calendar, 
  Sparkles, 
  Send,
  CheckCircle2,
  Lock
} from 'lucide-react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    targetExam: 'NEET',
    studentClass: '+1 (11th)',
    applyForScholarshipTest: true,
  });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Formspree / Admission Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xyekbevo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          formType: "Hero Registration / Scholarship",
          ...formData,
        }),
      });

      if (res.ok) {
        setFormSubmitted(true);
        setFormData({
          fullName: '',
          phone: '',
          targetExam: 'NEET',
          studentClass: '+1 (11th)',
          applyForScholarshipTest: true,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative overflow-hidden bg-slate-950 py-12 lg:py-20 scroll-mt-20"
    >
      {/* 1. Direct Background Image Tag */}
      <img
        src="/hero-bg.jpg"
        alt="Aadhar Institute Background"
        className="absolute inset-0 w-full h-full object-cover opacity-75 pointer-events-none z-0"
      />

      {/* 2. Soft Dark Vignette Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50 pointer-events-none z-0" />

      {/* 3. Main Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Value Props & ASCET Box (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs sm:text-sm font-semibold border border-blue-500/20 backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>15+ Years of Educational Excellence in Hamirpur</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black text-white tracking-tight leading-[1.15]">
              Your Dream. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
                Our Mission.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized coaching for IIT-JEE, NEET, and Foundation batches. Rigorous academic guidance, personalized mentorship, and proven results in Himachal Pradesh.
            </p>

            {/* Scholarship Announcement Strip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-400/25 text-left backdrop-blur-md shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-md border border-amber-300/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  ASCET Scholarship Test
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Next Exam: Upcoming Sunday</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                Avail up to <strong className="text-amber-300">90% tuition fee waiver</strong> for Sankalp-30 & Target batches.
              </p>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>("संकल्प-30") Batch</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>FIITJEE VEDANTU & Senior Mentors</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dedicated Hostel & Residential Campus</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Regular Mock Tests & Performance Reports</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Comprehensive Residential Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02]"
              >
                <span>Explore Our Courses</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#results"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold border border-white/20 text-center text-sm backdrop-blur-sm transition hover:border-white/40"
              >
                View Hall of Fame
              </a>
            </div>

          </div>

          {/* Right Column: Admission & Test Registration Form (5 Cols) */}
          <div id="admissions-form" className="lg:col-span-5 scroll-mt-24">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/40 border border-white/30 p-6 sm:p-7 relative">
              
              {/* Form Header */}
              <div className="mb-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    Admissions 2026-27
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    Direct Counseling
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  Register for Admission / Test
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Leave your details for counseling & entrance test slot booking.
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Student Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition bg-white"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Contact / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition bg-white"
                    />
                  </div>
                </div>

                {/* Target Exam & Class Level */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Target Exam
                    </label>
                    <div className="relative">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                      <select
                        name="targetExam"
                        value={formData.targetExam}
                        onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                        className="w-full pl-8 pr-2 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="NEET">NEET (Medical)</option>
                        <option value="JEE">IIT-JEE (Mains+Adv)</option>
                        <option value="Sankalp-30">संकल्प-30 Batch</option>
                        <option value="Foundation">Class 9th-10th</option>
                        <option value="Boards">Class 11th-12th Boards</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Current Class
                    </label>
                    <div className="relative">
                      <Layers className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3.5" />
                      <select
                        name="studentClass"
                        value={formData.studentClass}
                        onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                        className="w-full pl-8 pr-2 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="9th">Class 9th</option>
                        <option value="10th">Class 10th</option>
                        <option value="+1 (11th)">Class 11th</option>
                        <option value="+2 (12th)">Class 12th</option>
                        <option value="Dropper">Dropper Batch</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Scholarship Opt-in */}
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="scholarshipOpt"
                    name="scholarshipOpt"
                    checked={formData.applyForScholarshipTest}
                    onChange={(e) => setFormData({ ...formData, applyForScholarshipTest: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="scholarshipOpt" className="text-[11px] text-slate-600 leading-snug cursor-pointer select-none">
                    <span className="font-bold text-slate-900">Include ASCET Scholarship Test</span>
                    <br />
                    Eligible for fee waiver & Sankalp-30 shortlisting.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Submitting Details..." : "Submit Registration Request"}</span>
                </button>

                {/* Success Notification */}
                {formSubmitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs text-center font-medium animate-fadeIn">
                    ✓ Registration received! Our Hamirpur desk will call you shortly.
                  </div>
                )}

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <Lock className="w-3 h-3" />
                  <span>Direct submission to Aadhar Institute desk</span>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}