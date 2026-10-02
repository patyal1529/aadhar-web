import React from 'react';
import { Award, Users, Trophy, BookCheck } from 'lucide-react';

export default function StatsTicker() {
  const metrics = [
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      value: "15+ Years",
      label: "Legacy of Coaching in H.P.",
      description: "Founded on 28th June 2010"
    },
    {
      icon: <Trophy className="w-6 h-6 text-blue-600" />,
      value: "1,200+",
      label: "Medical & Engineering Selections",
      description: "NEET, IIT-JEE, NITs & State GMCs"
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      value: "1:25",
      label: "Strict Student-Teacher Ratio",
      description: "Individual attention for every child"
    },
    {
      icon: <BookCheck className="w-6 h-6 text-indigo-600" />,
      value: "98.4%",
      label: "Board Pass Percentage",
      description: "Consistent HPBOSE & CBSE Merit lists"
    },
  ];

  return (
    <div className="bg-slate-900 border-y border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="p-2.5 rounded-lg bg-slate-800/80 mb-3">
                {metric.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-0.5">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}