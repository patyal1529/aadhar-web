import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xl">
                A
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                AADHAR INSTITUTE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Established on 28th June 2010. Himachal Pradesh's leading preparatory institute for IIT-JEE, NEET, Olympiads, and School Board (CBSE & HPBOSE) examinations.
            </p>
            <div className="text-xs text-slate-400 space-y-1 pt-2">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Gandhi Chowk, Hamirpur, Himachal Pradesh - 177001</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Monday – Saturday: 9:00 AM – 10:00 PM</span>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/aadharinstitutehamirpur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-600 hover:via-pink-600 hover:to-purple-600 hover:border-pink-600 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/watch?v=iQK94z9Qtnw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe on YouTube"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Programs</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#courses" className="hover:text-white transition-colors">Target Batch (+1 & +2)</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Dropper's NEET Batch</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Dropper's IIT-JEE Batch</a></li>
              <li><a href="#sankalp30" className="hover:text-white transition-colors">संकल्प-30 Super Batch</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Class 9th & 10th Foundation</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Crash Courses & Test Series</a></li>
            </ul>
          </div>

          {/* Col 4: Important Exam Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Official Portals</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="https://jeemain.nta.nic.in" target="_blank" rel="noreferrer" className="hover:text-white">NTA JEE Mains</a></li>
              <li><a href="https://neet.nta.nic.in" target="_blank" rel="noreferrer" className="hover:text-white">NTA NEET UG</a></li>
              <li><a href="https://hpbose.org" target="_blank" rel="noreferrer" className="hover:text-white">HPBOSE Official</a></li>
              <li><a href="https://cbse.gov.in" target="_blank" rel="noreferrer" className="hover:text-white">CBSE Portal</a></li>
              <li><a href="https://www.iiseradmission.in" target="_blank" rel="noreferrer" className="hover:text-white">IISER Aptitude (IAT)</a></li>
            </ul>
          </div>

          {/* Col 5: Admissions & Contact CTA */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Admission Desk</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <a href="tel:+919418162827" className="block text-emerald-400 font-bold hover:underline">
                +91 9418162827
              </a>
              <a href="tel:+917018224767" className="block text-slate-300 font-semibold hover:underline">
                +91 7018224767
              </a>
              <a href="mailto:info@aadharinstitutehmr.com" className="block text-slate-400 hover:text-white truncate">
                info@aadharinstitutehmr.com
              </a>
            </div>
            <div className="pt-2">
              <a
                href="#admissions-form"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold transition-all"
              >
                Inquire Online
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Aadhar Institute Hamirpur. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Terms of Admission</a>
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Hostel Rules</a>
          </div>
        </div>

      </div>
    </footer>
  );
}