import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, ShieldCheck, Check, MessageSquare } from 'lucide-react';
import { businessData } from '../data/businessData';

interface ShowroomExperienceProps {
  onOpenBooking: () => void;
}

export const ShowroomExperience: React.FC<ShowroomExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section id="showroom" className="py-16 lg:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-2">
            Visit Our Experience Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Touch the textures. Feel the craftsmanship.
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Located directly on Najafgarh Main Road opposite Metro Pillar 723, our Nawada showroom houses over 1,000 physical wallpaper catalogs, live PVC panel feature walls, and tailored drapery displays.
          </p>
        </div>

        {/* 2-Column Showroom Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location Details & Metro Guide */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm space-y-6">
            
            <div className="space-y-5">
              
              {/* Address Header */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-display">
                    {businessData.name} Store & Showroom
                  </h3>
                  <p className="text-xs font-medium text-amber-800 mt-0.5">
                    {businessData.legalTitle}
                  </p>
                  <p className="text-sm text-stone-700 mt-2 leading-relaxed">
                    {businessData.address.shop}, {businessData.address.street}, {businessData.address.landmark}, {businessData.address.locality}, {businessData.address.city} – {businessData.address.pincode}
                  </p>
                </div>
              </div>

              {/* Transit & Landmark Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="font-semibold text-stone-900 block mb-1">
                    Key Landmark
                  </span>
                  <span className="text-stone-600">
                    Directly opposite <strong className="text-stone-900">Metro Pillar 723</strong>, beside Kotak Mahindra Bank branch.
                  </span>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                  <span className="font-semibold text-stone-900 block mb-1">
                    Delhi Metro Access
                  </span>
                  <span className="text-stone-600">
                    <strong className="text-stone-900">Nawada Metro Station</strong> (Blue Line) — 2 minutes walking distance.
                  </span>
                </div>
              </div>

              {/* Store Hours & Contact */}
              <div className="space-y-2.5 border-t border-stone-100 pt-4 text-xs text-stone-700">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                  <div>
                    <span className="font-semibold text-stone-900">Showroom Hours: </span>
                    <span>10:00 AM – 9:00 PM (Open All 7 Days)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                  <div>
                    <span className="font-semibold text-stone-900">Direct Phone: </span>
                    <a href={`tel:${businessData.phone}`} className="text-stone-900 font-mono font-medium hover:underline">
                      {businessData.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Direction CTAs */}
            <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
              <a
                href={businessData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href={`https://wa.me/${businessData.whatsapp}?text=Hi%20Delhi%20Interior%2C%20I%20am%20planning%20to%20visit%20your%20showroom%20today.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Notify Showroom Visit</span>
              </a>
            </div>

          </div>

          {/* Right Column: Showroom Highlights & Doorstep Alternative */}
          <div className="lg:col-span-6 bg-stone-900 text-white rounded-2xl border border-stone-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            
            <div className="space-y-5">
              
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  What You Can Experience In-Store
                </span>
                <span className="text-xs font-mono text-stone-400">Pillar 723</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Comprehensive interior collections under one roof
              </h3>

              <div className="space-y-3 text-xs text-stone-300">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">1,000+ Wallpaper Catalogues:</strong> Browse European textured vinyl, Japandi linens, 3D embossed foils, and custom HD mural prints.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Live Fluted Louver Feature Walls:</strong> Real mockups showing Charcoal, Teak, and White Oak louvers paired with cove lighting.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Curtains & Blinds Gallery:</strong> Test motorized curtain tracks, blackout fabric samples, and day/night Zebra blind mechanisms.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Consultation with Decor Specialists:</strong> Bring your floor plans or photos for free layout recommendations.
                  </span>
                </div>
              </div>

            </div>

            {/* Can't visit? Book Doorstep Service */}
            <div className="bg-stone-800/90 rounded-xl p-5 border border-stone-700/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Can't Visit the Showroom in Person?</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                We bring the showroom to your living room! Our specialist will arrive at your home anywhere in Delhi NCR with selected catalogue albums, material samples, and a precision laser measure.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-lg text-xs font-bold transition-colors"
              >
                Schedule Free Doorstep Catalogue Visit
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
