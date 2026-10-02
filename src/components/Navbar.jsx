'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Courses', href: '#courses' },
    { label: 'संकल्प-30', href: '#sankalp30', highlight: true },
    { label: 'Results', href: '#results' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Hostel & Residential', href: '#residential' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Identity / Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center text-white font-extrabold text-2xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="block font-black text-xl tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                AADHAR INSTITUTE
              </span>
              <span className="block text-xs font-semibold tracking-wider text-blue-700 uppercase">
                Hamirpur, Himachal Pradesh
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  link.highlight
                    ? 'text-amber-600 hover:text-amber-700 flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 shadow-sm'
                    : 'text-slate-700 hover:text-blue-700'
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#admissions-form"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold shadow-md shadow-blue-600/30 transition-all hover:translate-y-[-1px]"
            >
              Apply Online
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-slate-700 hover:text-blue-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-semibold ${
                link.highlight 
                  ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                  : 'text-slate-800 hover:bg-slate-50 hover:text-blue-700'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#admissions-form"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-700 text-white font-bold shadow-md shadow-blue-600/30"
            >
              Book Free Demo & Counseling
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}