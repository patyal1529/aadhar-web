'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '#', isHome: true },
    { label: 'Courses', href: '#courses' },
    { label: '✨ संकल्प-30', href: '#sankalp' },
    { label: 'Results', href: '#results' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Hostel & Residential', href: '#residential' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo + Institute Branding */}
          <a 
            href="#" 
            onClick={scrollToTop} 
            className="flex items-center gap-3 shrink-0 py-1 group cursor-pointer"
          >
            <img 
              src="/aadhar-web/logo.jpg" 
              alt="Aadhar Institute Logo" 
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none">
                AADHAR INSTITUTE
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-amber-600 uppercase mt-1">
                HAMIRPUR (H.P.)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={link.isHome ? scrollToTop : undefined}
                  className="text-[14px] font-semibold text-slate-600 hover:text-blue-900 transition-colors py-1 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2.5">
            <Link
              href="/register"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-3.5 py-1.5 rounded-full text-xs shadow-sm transition"
            >
              Register
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={link.isHome ? scrollToTop : () => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-900 transition cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 rounded-xl text-sm shadow-md transition"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}