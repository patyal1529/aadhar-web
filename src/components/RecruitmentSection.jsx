'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  FileText,
  PhoneCall
} from 'lucide-react';

const academicPosts = [
  'Physics Faculty (JEE / NEET)',
  'Chemistry Faculty (JEE / NEET)',
  'Mathematics Faculty (JEE / Boards)',
  'Biology Faculty (NEET / Boards)',
  'English Teacher',
  'Social Studies (SST) Teacher',
  'Hindi Teacher',
];

const supportPosts = [
  'Telecounsellor / Admission Counselor',
  'Marketing Executive',
  'Driver',
  'Office Peon / Support Staff',
  'Others',
];

export default function RecruitmentSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    appliedPost: '',
    experience: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // WhatsApp direct application link build karna
    const textMessage = `*New Job Application - Aadhar Institute*%0A%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*Applied For:* ${formData.appliedPost}%0A` +
      `*Experience:* ${formData.experience}%0A` +
      `*Note:* ${formData.message || 'None'}`;

    // Yahan institute ka official HR / Management WhatsApp number add kar sakte ho
    const whatsappUrl = `https://wa.me/917018224767?text=${textMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="careers" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-bold border border-amber-300">
            <Briefcase className="w-4 h-4 text-amber-600" />
            <span>WE ARE HIRING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Join the Premier Team at <span className="text-amber-600">Aadhar Institute</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Work with Himachal’s top faculty and dynamic team in Hamirpur. Explore our open positions below.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Job Vacancies List */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Academic Positions */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Teaching & Academic Faculty</h3>
                  <p className="text-xs text-slate-500">Competitive packages for experienced educators</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {academicPosts.map((post, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 p-3 bg-slate-50 hover:bg-amber-50/60 rounded-xl border border-slate-100 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{post}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support & Administrative Positions */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Administrative & Support Roles</h3>
                  <p className="text-xs text-slate-500">Full-time opportunities at our Hamirpur campus</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {supportPosts.map((post, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 p-3 bg-slate-50 hover:bg-amber-50/60 rounded-xl border border-slate-100 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{post}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Benefits Banner */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-wrap gap-6 items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                  <MapPin className="w-4 h-4" /> Location: Gandhi Chowk, Hamirpur (H.P.)
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Clock className="w-4 h-4" /> Timings: Full-time / Regular Shifts
                </div>
              </div>
              <div className="text-xs text-slate-400 max-w-xs">
                Candidates with prior coaching experience given high priority.
              </div>
            </div>

          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200 shadow-lg sticky top-24">
            <div className="mb-6 space-y-1">
              <h3 className="text-2xl font-bold text-slate-900">Apply Instantly</h3>
              <p className="text-sm text-slate-500">Fill your details and submit directly to HR.</p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Application Initiated!</h4>
                <p className="text-xs text-emerald-700">
                  Your details have been pre-filled for our recruitment desk. We will review and reach out soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-emerald-800 underline"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@email.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Applying For Post *
                  </label>
                  <select
                    name="appliedPost"
                    required
                    value={formData.appliedPost}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="">-- Select Post --</option>
                    <optgroup label="Academic Faculty">
                      {academicPosts.map((p, i) => (
                        <option key={`opt-ac-${i}`} value={p}>{p}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Support Staff">
                      {supportPosts.map((p, i) => (
                        <option key={`opt-sp-${i}`} value={p}>{p}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Total Experience *
                  </label>
                  <input
                    type="text"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g. Fresher / 2 Years in NEET coaching"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Brief Note / Message
                  </label>
                  <textarea
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about qualifications or subject specialization..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Application via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Prefer direct call? Reach management at our Gandhi Chowk center.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}