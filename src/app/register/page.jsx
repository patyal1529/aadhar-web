'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, CheckCircle, UploadCloud } from 'lucide-react';

export default function RegisterPage() {
  // Yahan apna Formspree form ID / URL daalein
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID_HERE";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Kripya details dubara check karein.");
      }
    } catch (error) {
      alert("Koi issue aaya. Kripya baad mein try karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-700 transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white rounded-t-2xl p-6 md:p-8 shadow-md">
          <span className="inline-block bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Official Admission Form
          </span>
          <h1 className="text-2xl md:text-3xl font-black">
            Aadhar Institute Hamirpur
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-1">
            Academic Session 2025–26 • Direct Student Registration
          </p>
        </div>

        {/* Form Body */}
        <div className="bg-white rounded-b-2xl p-6 md:p-8 shadow-md border border-t-0 border-slate-200">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto" />
              <h2 className="text-2xl font-bold text-slate-900">Registration Successful!</h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Aapki application successfully receive ho gayi hai. Institute ki team jald hi aapse contact karegi.
              </p>
              <Link
                href="/"
                className="inline-block mt-4 px-6 py-2.5 bg-blue-900 text-white font-bold text-sm rounded-lg hover:bg-blue-800 transition"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
              
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Student ka poora naam"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                />
              </div>

              {/* Date Of Birth */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Date Of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
                />
              </div>

              {/* Applying For */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Applying For <span className="text-red-500">*</span>
                </label>
                <select
                  name="course"
                  required
                  defaultValue=""
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm bg-white"
                >
                  <option value="" disabled>Select Course</option>
                  <option value="Residential Coaching">Residential Coaching</option>
                  <option value="Sankalp -30">Sankalp -30</option>
                  <option value="Online Live + Offline Hybrid">Online Live + Offline Hybrid</option>
                  <option value="Online Live">Online Live</option>
                </select>
              </div>

              {/* Recent Photograph */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Recent Photograph <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-blue-500 transition">
                  <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <input
                    type="file"
                    name="photograph"
                    accept="image/*"
                    required
                    className="text-xs text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Upload JPG or PNG passport size photo</p>
                </div>
              </div>

              {/* Class X Marksheet */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Class X Marksheet
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-blue-500 transition">
                  <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <input
                    type="file"
                    name="marksheet"
                    accept="image/*,application/pdf"
                    className="text-xs text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">Upload clear photo or PDF</p>
                </div>
              </div>

              {/* Declaration */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="declaration"
                    required
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-900 focus:ring-blue-600"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    <strong>Declaration:</strong> All The Information Given Above is True and I will be Responsible for any false information given. Institute can use My details and photograph for Promotion purpose if needed. I have no objection. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? 'Submitting Application...' : (
                  <>
                    <Send className="w-4 h-4" /> Submit Application
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}