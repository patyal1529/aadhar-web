import React from 'react';
import { siteMedia } from '../config/mediaAssets';
import { Trophy, Star, Award, GraduationCap } from 'lucide-react';

export default function ResultsGallery() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Proven Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Our Hall of Fame & Toppers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Real hard work by Himachal students backed by dedicated mentors. Results that speak for themselves.
          </p>
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteMedia.toppers.map((topper) => (
            <div
              key={topper.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col group"
            >
              {/* Student Photo */}
              <div className="relative h-64 bg-slate-100 overflow-hidden">
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-amber-400" />
                  {topper.exam}
                </div>
              </div>

              {/* Topper Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {topper.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-500">Score / Percentile</span>
                    <span className="text-sm font-black text-blue-700">{topper.score}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs font-semibold text-slate-500">Achievement</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">{topper.rank}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-600">
                  <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">{topper.college}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials / Campus Tour Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-black">Want to see student journey videos?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Watch interviews of parents and rankers sharing how Aadhar Institute Hamirpur prepared them from ground zero.
            </p>
          </div>
          <a
            href={siteMedia.hero.youtubeEmbedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-blue-950 font-bold text-sm rounded-xl hover:bg-slate-100 shadow-md transition-all shrink-0"
          >
            Watch Video Testimonials
          </a>
        </div>

      </div>
    </section>
  );
}