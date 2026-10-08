'use client';
import React, { useState } from 'react';
import { siteMedia } from '../config/mediaAssets';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  ArrowUpRight, 
  Send, 
  User, 
  Phone, 
  BookOpen, 
  Layers, 
  Calendar, 
  Award, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    targetExam: 'NEET',
    studentClass: '+1 (11th)',
    applyForScholarshipTest: true,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section 
      id="hero" 
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white py-12 lg:py-20 scroll-mt-24"
    >
      
      {/* Background Decorator Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Institute Authority Copy & Scholarship Test Announcement */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs sm:text-sm font-bold border border-blue-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              Serving Aspirants Since 28th June 2010 (15+ Years)
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Himachal’s Most Trusted Hub for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900">
                IIT-JEE & NEET
              </span> Excellence.
            </h1>

            {/* Sub-headline with secondary competitive exams */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized coaching for IIT-JEE, NEET, IISER, NEST, and Olympiads alongside complete CBSE, ICSE & HPBOSE Board syllabus mastery. Personalized batch sizes, rigorous testing, and hostel facilities.
            </p>

            {/* HIGH-CONVERTING SCHOLARSHIP & ENTRANCE TEST NOTICE BOX */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-blue-900/10 to-blue-700/15 border-2 border-amber-500/40 shadow-md text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100/90 px-2.5 py-1 rounded-md border border-amber-300">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Scholarship Cum Entrance Test (ASCET)
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-950">
                  <Calendar className="w-4 h-4 text-blue-700" />
                  <span>Next Exam: Upcoming Sunday</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                Win up to <strong>90% tuition scholarship</strong> for Sankalp-30 & Target batches (Classes 9th to 12th & Droppers).
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href="#admissions-form"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black shadow transition-all"
                >
                  <Award className="w-4 h-4" />
                  <span>Register for Test Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] text-slate-500">
                  *Direct offline registration available at Gandhi Chowk office.
                </span>
              </div>
            </div>

            {/* Trust Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                Special Super-30 ("संकल्प-30") Batch
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                Core Ex-Aakash & Senior Mentors
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                Integrated Hostel & Residential Campus
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                Live + Recorded Online Backup Classes
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#courses"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-center shadow-lg shadow-blue-700/25 transition-all hover:scale-105"
              >
                Explore Batches & Syllabus
              </a>
              <a
                href="#results"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold border border-slate-200 text-center shadow-sm transition-all hover:border-slate-300 flex items-center justify-center gap-2"
              >
                View 2024-25 Results
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Social Proof Metric Snippet */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-slate-500 text-xs">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center border-2 border-white text-xs">A</div>
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center border-2 border-white text-xs">S</div>
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center border-2 border-white text-xs">N</div>
              </div>
              <div>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>Rated 4.9/5 by 1,200+ Students & Parents across H.P.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Admission & Scholarship Registration Form with Scroll Offset */}
          <div id="admissions-form" className="lg:col-span-5 scroll-mt-28">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8 relative">
              
              {/* Form Card Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                    Admissions Open 2026-27
                  </span>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
                    Scholarship Test
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  Apply for Admission / Test
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Book your test slot or request a direct callback from our senior mentors.
                </p>
              </div>

              {/* Admission Lead Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Student Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Student Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Parent / Student Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Target Exam Selection */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Target Exam
                    </label>
                    <div className="relative">
                      <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={formData.targetExam}
                        onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                        className="w-full pl-9 pr-2 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="NEET">NEET (Medical)</option>
                        <option value="JEE">IIT-JEE (Mains+Adv)</option>
                        <option value="Sankalp-30">संकल्प-30 Batch</option>
                        <option value="Boards">Class 9th-12th Boards</option>
                        <option value="IISER-NEST">IISER / NEST / Agri</option>
                      </select>
                    </div>
                  </div>

                  {/* Present Class */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Class Level
                    </label>
                    <div className="relative">
                      <Layers className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={formData.studentClass}
                        onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                        className="w-full pl-9 pr-2 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      >
                        <option value="9th">Class 9th</option>
                        <option value="10th">Class 10th</option>
                        <option value="+1 (11th)">Class +1 (11th)</option>
                        <option value="+2 (12th)">Class +2 (12th)</option>
                        <option value="Dropper">Dropper / 12th Pass</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Scholarship Test Opt-in Checkbox */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="scholarshipOpt"
                    checked={formData.applyForScholarshipTest}
                    onChange={(e) => setFormData({ ...formData, applyForScholarshipTest: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="scholarshipOpt" className="text-xs text-slate-700 leading-tight cursor-pointer">
                    <span className="font-bold text-slate-900">Register for Scholarship Cum Entrance Test</span>
                    <br />
                    Eligible for up to 90% fee concessions & Sankalp-30 seat allotment.
                  </label>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-lg shadow-blue-700/25 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-4 h-4" />
                  Submit Registration & Get Test Details
                </button>

                {formSubmitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs text-center font-medium animate-fadeIn">
                    Details received! Our academic coordinator will call you shortly to confirm your test slot & admit details.
                  </div>
                )}

                <p className="text-[11px] text-slate-400 text-center leading-normal pt-1">
                  We respect your privacy. No promotional spamming.
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}