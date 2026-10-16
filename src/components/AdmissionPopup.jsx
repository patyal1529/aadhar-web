"use client";

import { useState, useEffect } from "react";

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Centered Modal Container */}
      <div className="relative z-10 flex flex-col items-center justify-center max-h-[90vh]">
        
        {/* Floating Close Button outside image */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="self-end mb-2 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-all text-sm font-bold shadow-lg"
        >
          ✕
        </button>

        {/* Poster Wrapper */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
          <img
            src="/popup-banner.png"
            alt="Admission Open"
            className="w-auto h-auto max-h-[78vh] max-w-[90vw] sm:max-w-md object-contain block"
          />
        </div>
      </div>
    </div>
  );
}