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