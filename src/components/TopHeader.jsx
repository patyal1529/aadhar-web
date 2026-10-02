import React from 'react';
import { Phone, Mail, Clock, MapPin, Award } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
        
        {/* Left Side: Accreditation badge and location */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
            <Award className="w-4 h-4 text-amber-400" />
            Himachal's No. 01 Coaching Institute
          </span>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="inline-flex items-center gap-1 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            Gandhi Chowk, Hamirpur, H.P.
          </span>
        </div>

        {/* Right Side: Working hours, phone numbers and email */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            Mon - Sat: 9:00 AM - 10:00 PM
          </span>
          <a 
            href="tel:+919418162827" 
            className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            +91 9418162827
          </a>
          <a 
            href="mailto:info@aadharinstitutehmr.com" 
            className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            info@aadharinstitutehmr.com
          </a>
        </div>

      </div>
    </div>
  );
}