'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, BookOpen, Sparkles } from 'lucide-react';

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('all');

  const courseList = [
    {
      id: 'course-target',
      category: 'target',
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
      category: 'dropper',
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
      category: 'foundation',
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
      category: 'short-term',
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
      category: 'foundation',
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
      category: 'short-term',
      badge: 'All India Benchmark',
      title: 'Test Series (JEE / NEET / Boards)',
      targetExams: 'Latest NTA Pattern Mock Tests',
      description: 'Detailed analytics-based test series with all-Himachal ranking to benchmark speed, accuracy, and negative marking elimination.',
      features: ['OMR & Computer Based Test modes', 'Detailed video solutions', 'State-level rank predictor'],
      duration: 'Seasonal Subscription',
      mode: 'Online & Center-Based'
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courseList 
    : courseList.filter(c => c.category === activeTab);

  return (
    <section id="courses" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
            Targeted Academic Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Programs Designed for Rank Holders
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            From foundational school board excellence to high-pressure entrance ranks, explore our custom crafted batches in Hamirpur.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'target', label: '+1 & +2 Target Batches' },
              { id: 'dropper', label: "Droppers (NEET / JEE)" },
              { id: 'foundation', label: 'Class 9th & 10th Foundation' },
              { id: 'short-term', label: 'Crash Courses & Test Series' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-blue-300"
            >
              <div className="p-6">
                
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
                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
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

              {/* Card Footer: Duration & CTA */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </span>
                <a
                  href="#admissions-form"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 group-hover:translate-x-0.5 transition-all"
                >
                  Enroll Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}