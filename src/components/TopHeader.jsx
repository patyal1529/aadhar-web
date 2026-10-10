import React from 'react';
import { Phone, Mail, Clock, MapPin, Award } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="bg-[#0b1b36] text-slate-200 text-xs border-b border-slate-800/60 select-none">
      {/* Container aligned exactly with Navbar (px-4 sm:px-6 lg:px-8) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row justify-between items-center gap-2">
        
        {/* Left Side: Tagline & Institute Accreditation */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
          <span className="text-slate-300 font-medium tracking-wide">
            Dream <span className="text-slate-500">|</span> Prepare <span className="text-slate-500">|</span> Achieve
          </span>
          <span className="hidden md:inline-block text-slate-700">|</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-amber-400">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            Himachal's Premier Coaching
          </span>
        </div>

        {/* Right Side: Contact, Location & Social */}
        <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center text-slate-300">
          
          {/* Location */}
          <span className="inline-flex items-center gap-1.5 hover:text-white transition">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Hamirpur, Himachal Pradesh</span>
          </span>

          <span className="hidden sm:inline-block text-slate-700">|</span>

          {/* Direct Calling */}
          <a 
            href="tel:+919418162827" 
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+91 9418162827</span>
          </a>

          {/* WhatsApp Direct link */}
          <a
            href="https://wa.me/919418162827"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            WhatsApp
          </a>

          {/* Social Links Divider & Icons */}
          <span className="hidden md:inline-block text-slate-700">|</span>
          <div className="hidden md:flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/aadharinstitutehamirpur/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/watch?v=iQK94z9Qtnw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}