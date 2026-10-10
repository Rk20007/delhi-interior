import React, { useState } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { businessData } from '../data/businessData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element in display face, no pill clutter) */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <span className="w-10 h-10 rounded-lg bg-stone-900 text-amber-500 font-display font-bold text-xl flex items-center justify-center border border-stone-800 transition-transform group-hover:scale-105">
              DI
            </span>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-display font-bold tracking-tight text-stone-900 whitespace-nowrap">
                {businessData.name}
              </span>
              <span className="text-[11px] font-medium tracking-wide uppercase text-amber-700/90 hidden sm:block">
                Studio & Showroom · Delhi NCR
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#collections" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Collections
            </a>
            <a href="#visualizer" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Wall Studio
            </a>
            <a href="#estimator" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Cost Estimator
            </a>
            <a href="#showroom" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Showroom Visit
            </a>
            <a href="#reviews" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
              Google Reviews
            </a>
          </nav>

          {/* Zone 3: 1 primary action + quick call */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${businessData.phone}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-900 px-3 py-2 rounded-lg hover:bg-stone-100 transition-colors whitespace-nowrap"
              title="Call Delhi Interior"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>{businessData.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 active:scale-98 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book Home Visit</span>
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-4 pb-6 space-y-3">
          <a
            href="#collections"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-50 rounded-md"
          >
            Collections & Materials
          </a>
          <a
            href="#visualizer"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-50 rounded-md"
          >
            Interactive Wall Studio
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-50 rounded-md"
          >
            Room Cost & Sq.Ft Estimator
          </a>
          <a
            href="#showroom"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-50 rounded-md"
          >
            Showroom Location & Metro Guide
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-stone-50 rounded-md"
          >
            Google Reviews (4.8 ★)
          </a>
          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <a
              href={`tel:${businessData.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-stone-800 bg-stone-100 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call: {businessData.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
