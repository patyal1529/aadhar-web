import React from 'react';
import { siteMedia } from '../config/mediaAssets';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function FacultySection() {
  return (
    <section id="faculty" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-full">
            Core Academic Pillar
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Learn Directly from Senior Subject Mentors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            No novice faculty. Every batch at Aadhar Institute is personally mentored by veterans with up to 15+ years of entrance coaching pedigree.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteMedia.faculty.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Teacher Image */}
              <div className="h-60 bg-slate-200 overflow-hidden relative">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Bio Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {mentor.name}
                  </h3>
                  <div className="text-xs font-bold text-blue-700 uppercase mt-0.5">
                    {mentor.subject}
                  </div>
                  <div className="inline-block mt-2 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                    {mentor.experience}
                  </div>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                    {mentor.expertise}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  Full-Time Hamirpur Campus Mentor
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}