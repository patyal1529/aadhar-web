'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Sparkles, X, Send, Lock, User, Phone, Layers } from 'lucide-react';

export default function CoursesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: '',
    phone: '',
    studentClass: '+1 (11th)',
  });

  const courseList = [
    {
      id: 'course-target',
      badge: 'Flagship Batch',
      title: 'Target Batches (+1 & +2)',
      targetExams: 'IIT-JEE | NEET | Board Examinations',
      description: 'Comprehensive 2-year integrated course for Class 11th and 12th covering HPBOSE & CBSE syllabus alongside deep entrance concepts.',
      features: ['Daily 4-hour rigorous lectures', 'Weekly OMR-based test series', 'Complete module package & DPPS'],
      duration: '1 to 2 Academic Years',
      mode: 'Offline Classroom + Live Hybrid'
    },
    {
      id: 'course-dropper',
      badge: 'High Selection Rate',
      title: "Dropper's / Repeater's Batch",
      targetExams: 'JEE Mains & Adv | NEET UG | AIIMS | PGI',
      description: 'Specially structured intensive repeaters batch for +2 pass-out students targeting 650+ in NEET and 99 percentile in JEE.',
      features: ['Syllabus completion in 6 months', 'Daily 2-hour doubt counter session', '100+ full-length mock tests'],
      duration: '1 Year Full Time',
      mode: 'Residential / Day-Scholar'
    },
    {
      id: 'course-foundation',
      badge: 'Early Edge',
      title: 'Foundation Batch (9th & 10th)',
      targetExams: 'NTSE | Olympiads | IACS | CMI | Boards',
      description: 'Strengthening mental ability, science fundamentals, and mathematics for building a solid runway for future medical/engineering goals.',
      features: ['School curriculum synched classes', 'Olympiad oriented workshops', 'Analytical problem solving focus'],
      duration: '1 Year / 2 Year Programs',
      mode: 'Evening & Weekend Batches'
    },
    {
      id: 'course-crash',
      badge: 'Fast Track Revision',
      title: 'Exam Crash Courses',
      targetExams: 'JEE NEET | HP Agri / Vet / Horti | Paramedical',
      description: '45 to 60 days fast-track crash course focused on high-weightage topics, short tricks, and past 15-year entrance problem solving.',
      features: ['Formula cheat sheets & summaries', 'Daily full syllabus speed tests', 'Rank booster question banks'],
      duration: '30 - 60 Days',
      mode: 'Intensive Offline / Online'
    },
    {
      id: 'course-tuition',
      badge: 'Subject Mastery',
      title: 'Individual & Group Tuitions (9th-12th)',
      targetExams: 'Physics | Chemistry | Maths | Biology',
      description: 'Focused subject-wise tuition classes for students wanting special focus on single subjects like Physics or Chemistry to score 95%+ in boards.',
      features: ['Chapter-wise question practice', 'Personalized mentor monitoring', 'Flexible batch timings'],
      duration: 'Continuous Session',
      mode: 'Offline & Home Tuitions'
    },
    {
      id: 'course-test-series',
      badge: 'All India Benchmark',
      title: 'Test Series (JEE / NEET / Boards)',
      targetExams: 'Latest NTA Pattern Mock Tests',
      description: 'Detailed analytics-based test series with all-Himachal ranking to benchmark speed, accuracy, and negative marking elimination.',
      features: ['OMR & Computer Based Test modes', 'Detailed video solutions', 'State-level rank predictor'],
      duration: 'Seasonal Subscription',
      mode: 'Online & Center-Based'
    }
  ];

  const handleOpenEnquiry = (title) => {
    setSelectedCourse(title);
    setSubmitted(false);
    setModalOpen(true);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // NOTE: Replace with your actual Formspree endpoint ID
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          source: "Course Card Enquiry Button",
          courseInterested: selectedCourse,
          ...enquiryForm,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setEnquiryForm({ fullName: '', phone: '', studentClass: '+1 (11th)' });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="courses" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-200/50">
            Targeted Academic Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Programs Designed for Rank Holders
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Explore our specialized batches for IIT-JEE, NEET, Board Preparation, and Foundation in Hamirpur.
          </p>
        </div>

        {/* 6 Courses Cards Grid - Exactly Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {courseList.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-blue-300 h-full"
            >
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                
                {/* Badge & Mode */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/50">
                    <Sparkles className="w-3 h-3 text-blue-600" />
                    {course.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {course.mode}
                  </span>
                </div>

                {/* Course Title & Target */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs font-bold text-amber-600 mt-1 uppercase tracking-wide">
                  {course.targetExams}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed flex-grow">
                  {course.description}
                </p>

                {/* Feature Checkpoints */}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {course.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Duration & Enquiry Trigger Button */}
              <div className="p-4 sm:px-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {course.duration}
                </span>
                
                <button
                  type="button"
                  onClick={() => handleOpenEnquiry(course.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm shadow-blue-700/20"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Embedded Glassmorphism Modal (No external file needed) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Selected: {selectedCourse}</span>
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Quick Course Enquiry
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    Fill in your details for batch schedules and direct guidance.
                  </p>
                </div>

                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Student Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aryan Sharma"
                        value={enquiryForm.fullName}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, fullName: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Current Class / Target Level
                    </label>
                    <div className="relative">
                      <Layers className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <select
                        value={enquiryForm.studentClass}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, studentClass: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="9th">Class 9th</option>
                        <option value="10th">Class 10th</option>
                        <option value="+1 (11th)">Class +1 (11th)</option>
                        <option value="+2 (12th)">Class +2 (12th)</option>
                        <option value="Dropper">Dropper / 12th Pass</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-sm shadow-lg shadow-blue-700/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-4 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending Details..." : "Request Call Back"}</span>
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-500" />
                      100% Free Counseling
                    </span>
                    <span>Hamirpur Campus Desk</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h4 className="text-2xl font-black text-slate-900">Enquiry Received!</h4>
                <p className="text-slate-600 text-sm mt-2 max-w-sm mx-auto leading-relaxed">
                  Details for <strong>{selectedCourse}</strong> received. Our faculty coordinator will call you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="mt-6 px-6 py-2.5 bg-slate-900 text-white font-bold text-sm rounded-xl hover:bg-slate-800 transition"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}