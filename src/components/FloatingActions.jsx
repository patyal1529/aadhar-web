'use client';
import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActions() {
  const whatsappNumber = "919418162827";
  const defaultMessage = encodeURIComponent("Hello Aadhar Institute Hamirpur, I want to inquire about admissions for 2026-27 batches.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
      {/* Direct Phone Dial Button */}
      <a
        href="tel:+919418162827"
        className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-xl hover:bg-blue-800 transition-all hover:scale-110 focus:outline-none"
        aria-label="Direct Call to Institute"
        title="Call Institute Desk"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Chat Floating Trigger */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:bg-emerald-600 transition-all hover:scale-110 focus:outline-none"
        aria-label="Chat on WhatsApp"
        title="Chat with Counseling Desk"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
      </a>

    </div>
  );
}