'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Sparkles, Play, X } from 'lucide-react';

// 14 student photos: public/students/s1.jpeg to s14.jpeg
const studentImages = Array.from({ length: 14 }, (_, index) => ({
  id: index + 1,
  src: `/aadhar-web/students/s${index + 1}.jpeg`,
  alt: `Achiever ${index + 1}`
}));

export default function ResultsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Provided YouTube Video ID
  const youtubeVideoId = "iQK94z9Qtnw";

  // Exact 3.5-second auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % studentImages.length);
    }, 3500); // 3.5 seconds for a smoother transition

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? studentImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % studentImages.length);
  };

  return (
    <section id="results" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-3 border border-amber-400/30">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Hall of Fame • NEET & JEE Achievers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Our Top Performers
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl mx-auto">
            Celebrating consistent excellence, top ranks, and dream college selections from Aadhar Institute.
          </p>
        </div>

        {/* Studio-Styled Carousel Card */}
        <div className="relative max-w-3xl mx-auto bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-3xl overflow-hidden border border-slate-800/90 shadow-2xl p-3 sm:p-5">
          
          {/* Top Badge on Card */}
          <div className="flex items-center justify-between px-3 pb-3 border-b border-slate-800/80 mb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Verified Ranker Record</span>
            </div>
            <span className="text-[11px] text-slate-400 font-semibold bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
              Session 2024-25
            </span>
          </div>

          {/* Photo Display Viewport with Dual-Layer Studio Background */}
          <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-950 border border-slate-800/60">
            
            {/* Ambient Blurred Background of the same image */}
            <img
              key={`bg-${currentIndex}`}
              src={studentImages[currentIndex].src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110 pointer-events-none transition-all duration-700"
            />

            {/* Gradient Overlay for Studio Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60 pointer-events-none" />

            {/* Main Featured Photo (Framed & Centered) */}
            <img
              key={currentIndex}
              src={studentImages[currentIndex].src}
              alt={studentImages[currentIndex].alt}
              className="relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl transition-all duration-500 rounded-lg"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Student"
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white p-3 rounded-full border border-slate-700/80 transition-all shadow-xl backdrop-blur-md cursor-pointer z-20 group"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Student"
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white p-3 rounded-full border border-slate-700/80 transition-all shadow-xl backdrop-blur-md cursor-pointer z-20 group"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Bottom Card Bar: Counter */}
          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between px-3 text-xs text-slate-400">
            <span>Aadhar Institute Hamirpur Achievers</span>
            <div className="bg-slate-800/80 px-3 py-1 rounded-full font-bold text-amber-400 border border-slate-700">
              {currentIndex + 1} / {studentImages.length}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-6 max-w-xl mx-auto">
          {studentImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx 
                  ? 'w-8 bg-amber-400 shadow-md shadow-amber-400/30' 
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Video Testimonials Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-950 rounded-2xl p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-blue-800/40">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-black">Want to see student journey videos?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Watch interviews of parents and rankers sharing how the institute prepared them from ground zero.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsVideoOpen(true)}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>Watch Video Testimonials</span>
          </button>
        </div>

      </div>

      {/* In-Site Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 bg-slate-900/80 hover:bg-red-600 text-white p-2 rounded-full border border-white/20 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embedded YouTube Player */}
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="Aadhar Institute Video Testimonials"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}