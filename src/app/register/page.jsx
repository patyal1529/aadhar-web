'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Send, 
  CheckCircle, 
  Award, 
  GraduationCap, 
  User, 
  Phone, 
  Calendar, 
  Building2, 
  MessageSquare,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function RegisterPage() {
  // Aapka Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyekbevo";
  // Aadhar Institute Official WhatsApp Number (Isse zaroorat ke hisaab se update kar lena)
  const OFFICIAL_WHATSAPP = "917018224767"; // Replace with actual number

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    phone: '',
    whatsapp: '',
    dob: '',
    city: '',
    course: 'Sankalp -30',
    currentClass: 'Class 10th Appearing / Passed',
    schoolName: '',
    marks10th: '',
    marks11th: '',
    marks12th: '',
    needHostel: 'No',
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 1. WhatsApp Structured Message Builder
  const triggerWhatsApp = () => {
    const text = 
      `*🏛️ AADHAR INSTITUTE - ADMISSION DOSSIER*%0A%0A` +
      `*--- STUDENT PROFILE ---*%0A` +
      `• *Name:* ${formData.fullName}%0A` +
      `• *Father's Name:* ${formData.fatherName || 'N/A'}%0A` +
      `• *Phone:* ${formData.phone}%0A` +
      `• *WhatsApp:* ${formData.whatsapp || formData.phone}%0A` +
      `• *DOB:* ${formData.dob}%0A` +
      `• *City:* ${formData.city}%0A%0A` +
      `*--- ACADEMIC PERFORMANCE ---*%0A` +
      `• *Current Class:* ${formData.currentClass}%0A` +
      `• *School/Board:* ${formData.schoolName || 'N/A'}%0A` +
      `• *10th Marks / %:* ${formData.marks10th}%0A` +
      (formData.marks11th ? `• *11th Marks / %:* ${formData.marks11th}%0A` : '') +
      (formData.marks12th ? `• *12th Marks / %:* ${formData.marks12th}%0A` : '') +
      `%0A*--- TARGET & HOSTEL ---*%0A` +
      `• *Target Course:* ${formData.course}%0A` +
      `• *Hostel Needed:* ${formData.needHostel}%0A%0A` +
      `_Application submitted via Aadhar Institute Online Portal._`;

    window.open(`https://wa.me/${OFFICIAL_WHATSAPP}?text=${text}`, '_blank');
  };

  // 2. Formspree Submission (Zero Files, 100% Reliable JSON)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.declaration) {
      alert("Kripya declaration confirm karein.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          fatherName: formData.fatherName,
          phone: formData.phone,
          whatsapp: formData.whatsapp || formData.phone,
          dob: formData.dob,
          city: formData.city,
          course: formData.course,
          currentClass: formData.currentClass,
          schoolName: formData.schoolName,
          marks10th: formData.marks10th,
          marks11th: formData.marks11th || 'N/A',
          marks12th: formData.marks12th || 'N/A',
          needHostel: formData.needHostel,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Kripya details dubara check karein.");
      }
    } catch (error) {
      alert("Koi network issue aaya. Aap direct WhatsApp option bhi use kar sakte hain.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 py-8 px-4 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Top Back Action */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-950 hover:text-amber-600 transition mb-5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Portal Header */}
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-t-2xl p-6 sm:p-8 shadow-xl border-b-4 border-amber-500">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> OFFICIAL ADMISSION DESK
            </span>
            <span className="text-slate-400 text-xs hidden sm:inline">Session 2026–27</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Aadhar Institute Hamirpur
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Direct Student Merit Registration for IIT-JEE, NEET-UG & Sankalp-30 Batches
          </p>
        </div>

        {/* Form Main Body */}
        <div className="bg-white rounded-b-2xl p-6 sm:p-8 shadow-xl border border-t-0 border-slate-200">
          
          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-200">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Application Successfully Submitted!</h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Aapki academic details admission cell ko bhej di gayi hain. Hamari counseling team aapse jaldi sampark karegi.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={triggerWhatsApp}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp</span>
                </button>

                <Link
                  href="/"
                  className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition text-center"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* SECTION 1: Personal & Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200 text-blue-950 font-bold text-xs tracking-wider uppercase">
                  <User className="w-4 h-4 text-amber-500" /> 1. Personal & Contact Profile
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student's Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Student ka poora naam"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Father's / Guardian's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      required
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="Sh. Father Name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Calling Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Same as calling if blank"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Date Of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dob"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City / Town / Tehsil <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Hamirpur, Nadaun, Bilaspur, Mandi, Kangra"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                  />
                </div>
              </div>

              {/* SECTION 2: Academic Record (Replaces File Uploads) */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200 text-blue-950 font-bold text-xs tracking-wider uppercase">
                  <Award className="w-4 h-4 text-amber-500" /> 2. Academic Performance Metrics
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Academic Status <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="currentClass"
                      value={formData.currentClass}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    >
                      <option>Class 10th Appearing / Passed</option>
                      <option>Class 11th (Moving to 12th)</option>
                      <option>Class 12th Appearing</option>
                      <option>Class 12th Passed (Dropper / Repeater)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      School / College & Board Name
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      placeholder="e.g. CBSE / HP Board / Private School"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Class 10th Marks / % <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="marks10th"
                      required
                      value={formData.marks10th}
                      onChange={handleChange}
                      placeholder="e.g. 91% ya 455/500"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Class 11th Marks / %
                    </label>
                    <input
                      type="text"
                      name="marks11th"
                      value={formData.marks11th}
                      onChange={handleChange}
                      placeholder="e.g. 85% ya N/A"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Class 12th Marks / %
                    </label>
                    <input
                      type="text"
                      name="marks12th"
                      value={formData.marks12th}
                      onChange={handleChange}
                      placeholder="e.g. 88% ya Appearing"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <span>
                    <strong>Verification Notice:</strong> Physical documents, original mark sheets aur photographs offline counseling ke dauran Aadhar Institute, Gandhi Chowk Hamirpur campus par verify kiye jayenge.
                  </span>
                </div>
              </div>

              {/* SECTION 3: Course & Preferences */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200 text-blue-950 font-bold text-xs tracking-wider uppercase">
                  <GraduationCap className="w-4 h-4 text-amber-500" /> 3. Target Batch & Hostel Preference
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Applying For <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    >
                      <option value="Sankalp -30">Sankalp -30 (Exclusive Merit Batch)</option>
                      <option value="NEET Target Batch">NEET-UG 1-Year Dropper/Target Batch</option>
                      <option value="JEE Target Batch">IIT-JEE (Main + Adv) Target Batch</option>
                      <option value="Residential Coaching">Residential Coaching (Hostel + Study)</option>
                      <option value="Foundation Batch">Foundation (Class 9th, 10th, 11th, 12th)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Hostel & Food Accommodation Required? <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="needHostel"
                      value={formData.needHostel}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm bg-white"
                    >
                      <option value="No">No (Day Scholar / Local)</option>
                      <option value="Yes - Boys Hostel">Yes - Boys Residential Hostel</option>
                      <option value="Yes - Girls Hostel">Yes - Girls Residential Hostel</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION 4: Declaration */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="declaration"
                    required
                    checked={formData.declaration}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-900 focus:ring-amber-500"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    <strong>Declaration:</strong> Main certify karta/karti hoon ki upar di gayi saari academic aur personal jankari sahi hai. Batch allotment offline counselling ke baad institute rules ke anusaar hoga. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              {/* SECTION 5: Double Action Buttons (Formspree Email + WhatsApp Direct) */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Formspree Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      'Submitting Application...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Submit via Email Portal
                      </>
                    )}
                  </button>

                  {/* Instant WhatsApp Submit */}
                  <button
                    type="button"
                    onClick={triggerWhatsApp}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" /> Instant Submit on WhatsApp
                  </button>

                </div>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 Aapka application data directly Aadhar Institute Admissions Desk par transfer hoga.
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}