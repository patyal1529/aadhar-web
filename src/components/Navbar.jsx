'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '#courses' },
    { label: '✨ संकल्प-30', href: '#sankalp' },
    { label: 'Results', href: '#results' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Hostel & Residential', href: '#residential' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo + Institute Name Brand Section */}
          <Link href="/" className="flex items-center gap-3 shrink-0 py-2 group">
            <img 
              src="/aadhar-web/logo.jpg" 
              alt="Aadhar Institute Logo" 
              className="h-11 md:h-13 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tight text-blue-950 leading-none">
                AADHAR INSTITUTE
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-amber-600 uppercase mt-0.5">
                HAMIRPUR (H.P.)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <Link
              href="/register"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm shadow-sm transition"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/register"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs shadow-sm transition"
            >
              Register
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 hover:text-blue-900"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 rounded-lg text-sm"
          >
            Register Now
          </Link>
        </div>
      )}
    </nav>
  );
}