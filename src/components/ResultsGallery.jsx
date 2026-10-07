'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { siteMedia } from '@/config/mediaAssets';

// 14 student photos: public/students/s1.jpeg to s14.jpeg
const studentImages = Array.from({ length: 14 }, (_, index) => ({
  id: index + 1,
  src: `/students/s${index + 1}.jpeg`,
  alt: `Achiever ${index + 1}`
}));

export default function ResultsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Exact 3-second auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % studentImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? studentImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % studentImages.length);
  };

  return (
    <section id="results" className="py-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-3 border border-amber-400/30">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Hall of Fame • NEET & JEE Achievers</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Our Top Performers
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2">
            Celebrating consistent excellence and top ranks from the institute
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-2xl mx-auto bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] flex items-center justify-center bg-black/40">
            <img
              key={currentIndex}
              src={studentImages[currentIndex].src}
              alt={studentImages[currentIndex].alt}
              className="w-full h-full object-contain transition-opacity duration-500 ease-in-out"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Student"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full border border-white/20 transition backdrop-blur-sm cursor-pointer z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Student"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full border border-white/20 transition backdrop-blur-sm cursor-pointer z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Photo Counter */}
          <div className="absolute bottom-3 right-4 bg-slate-950/80 px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-slate-300">
            {currentIndex + 1} / {studentImages.length}
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
                  ? 'w-7 bg-amber-400' 
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Video Testimonials Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-blue-800/40">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-black">Want to see student journey videos?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Watch interviews of parents and rankers sharing how the institute prepared them from ground zero.
            </p>
          </div>
          <a
            href={siteMedia?.hero?.youtubeEmbedUrl || "https://youtube.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-blue-950 font-bold text-sm rounded-xl hover:bg-slate-100 shadow-md transition-all shrink-0 inline-block text-center"
          >
            Watch Video Testimonials
          </a>
        </div>
      </div>
    </section>
  );
}