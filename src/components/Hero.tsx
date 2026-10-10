import React from 'react';
import { Star, ShieldCheck, Clock, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { businessData } from '../data/businessData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreCollections: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreCollections }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Proposition & Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Clean unboxed proof kicker with typographical separators (Zero-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-700 tracking-wide uppercase">
              <span className="flex items-center gap-1 text-amber-700 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 inline" />
                <span>{businessData.googleRating} Google Rating</span>
              </span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-600 font-medium">535+ Verified Reviews</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-stone-600 font-medium">Uttam Nagar & Dwarka</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-stone-900 tracking-tight leading-[1.12] [text-wrap:balance]">
              Walls that command attention. Interiors crafted to inspire.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Delhi Interior brings you imported luxury wallpapers, waterproof fluted PVC louvers, tailored blackout curtains, and precision blinds. Experience master craftsmanship with free doorstep catalog consultation and laser measurement across Delhi NCR.
            </p>

            {/* Trust Markers Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2 text-xs font-medium text-stone-700 border-y border-stone-200/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>100% Waterproof & Termite-Proof Louvers</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>48-Hour Professional Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Opp. Metro Pillar 723, Nawada</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-sm transition-all inline-flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Book Free Home Measurement</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreCollections}
                className="px-6 py-3.5 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200/80 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>Explore Catalogues</span>
              </button>

              <a
                href={`https://wa.me/${businessData.whatsapp}?text=Hi%20Delhi%20Interior%2C%20I%20saw%20your%20website%20and%20would%20like%20to%20inquire%20about%20wallpapers%20and%20PVC%20panels.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Location Subtext */}
            <p className="text-xs text-stone-500">
              Serving Dwarka, Janakpuri, Vikaspuri, Tilak Nagar, Najafgarh, Paschim Vihar, and all Delhi NCR.
            </p>
          </div>

          {/* Right Column: Architectural Visual Focal Point */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-xl p-1">
              
              {/* Studio Canvas Display */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-xl overflow-hidden bg-stone-950 flex flex-col justify-between p-6">
                
                {/* Visual Texture Background Layer */}
                <div className="absolute inset-0 bg-fluted-pattern opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent pointer-events-none" />

                {/* Simulated Architectural Room Mockup */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                  <div className="w-full flex items-end justify-between gap-4 pb-2">
                    
                    {/* Simulated Fluted Louvers Section */}
                    <div className="w-1/3 h-52 bg-gradient-to-t from-stone-800 to-amber-950/80 rounded-t-lg border-t border-x border-amber-600/30 relative overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-fluted-pattern opacity-60" />
                      <div className="absolute top-2 left-2 text-[10px] font-mono text-amber-300 font-semibold uppercase tracking-wider">
                        Fluted Louvers
                      </div>
                    </div>

                    {/* Simulated Feature Wallpaper Section */}
                    <div className="w-2/3 h-64 bg-gradient-to-t from-stone-900 via-stone-800 to-amber-900/60 rounded-t-lg border-t border-x border-amber-500/40 relative overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-wallpaper-grid opacity-50" />
                      
                      {/* Floating TV unit mock */}
                      <div className="absolute bottom-6 left-4 right-4 h-16 bg-stone-900/90 rounded border border-stone-700 p-2 flex items-center justify-between shadow-lg">
                        <div className="flex flex-col">
                          <span className="text-[11px] font-semibold text-stone-200">Bespoke TV Wall Accent</span>
                          <span className="text-[9px] text-stone-400">Integrated LED Backlit Channel</span>
                        </div>
                        <span className="text-xs font-mono text-amber-400">Delhi Interior</span>
                      </div>

                      <div className="absolute top-2 left-3 text-[10px] font-mono text-amber-300 font-semibold uppercase tracking-wider">
                        3D Textured Wallpaper
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay Header Info */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Real Showroom Collection</span>
                  </div>
                  <span className="text-xs font-mono text-stone-400">
                    Pillar 723 · Najafgarh Rd
                  </span>
                </div>

                {/* Overlay Footer Info Card */}
                <div className="relative z-10 bg-stone-900/90 backdrop-blur-md rounded-xl p-4 border border-stone-700/80 shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Curtain, PVC Panel & Wallpaper Studio
                      </h4>
                      <p className="text-xs text-stone-400 mt-0.5">
                        Touch & feel 1000+ catalog swatches at our Nawada showroom
                      </p>
                    </div>
                    <a
                      href={businessData.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors pt-0.5"
                    >
                      <span>Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
