import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ExternalLink, ArrowUp } from 'lucide-react';
import { businessData } from '../data/businessData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand & Intro (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-stone-900 text-amber-400 font-display font-bold text-lg flex items-center justify-center border border-stone-700">
                DI
              </span>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                {businessData.name}
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Curtain shop, PVC wall panelling dealer & luxury wallpaper specialist in Uttam Nagar and Dwarka, Delhi. Crafting bespoke residential and commercial spaces with certified materials and 48-hour master fitting.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1 font-mono">
              <div>Google Rating: <span className="text-amber-400 font-semibold">{businessData.googleRating} ★</span> ({businessData.totalReviews} Reviews)</div>
              <div>Metro Landmark: <span className="text-stone-300">{businessData.address.metroPillar}</span></div>
            </div>
          </div>

          {/* Quick Nav (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Collections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Designer 3D Wallpapers & Murals
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Charcoal & WPC Fluted Louvers
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Tailored Blackout Curtains & Sheers
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Day & Night Zebra Window Blinds
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  SPC Waterproof Rigid Core Flooring
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">
                  Room Sq.Ft & Material Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Showroom Address (Cols 8-10) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Experience Center
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  {businessData.address.shop}, {businessData.address.street}, {businessData.address.landmark}, {businessData.address.locality}, {businessData.address.city} – {businessData.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{businessData.openingHours} · {businessData.openDays}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${businessData.phone}`} className="hover:text-white font-mono">
                  {businessData.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={businessData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
              >
                <span>Find Us On Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Action & WhatsApp (Cols 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              Direct Contact
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded-lg text-xs transition-colors text-center"
              >
                Book Home Visit
              </button>

              <a
                href={`https://wa.me/${businessData.whatsapp}?text=Hi%20Delhi%20Interior%2C%20I%20would%20like%20to%20inquire%20about%20wallpapers.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Coverage Tags Bar */}
        <div className="py-6 border-b border-stone-800 text-[11px] text-stone-400">
          <span className="font-semibold text-stone-300 mr-2">Service Coverage:</span>
          {businessData.serviceAreas.map((area, idx) => (
            <span key={idx} className="mr-2">
              {area}{idx < businessData.serviceAreas.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {businessData.name}. All rights reserved. Demo showcase for Google Maps business.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
