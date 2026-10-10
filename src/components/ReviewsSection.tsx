import React from 'react';
import { Star, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';
import { businessData, realReviews } from '../data/businessData';

interface ReviewsSectionProps {
  onOpenBooking: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Summary Banner */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Verified Google Profile</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
              Trusted by 535+ Delhi NCR Homeowners
            </h2>
            
            {/* Unboxed metadata per Frontend Design Constitution Section 1.A */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600 pt-1">
              <span className="font-semibold text-stone-900">4.8 Rating</span>
              <span aria-hidden="true">·</span>
              <span>535+ Verified Google Reviews</span>
              <span aria-hidden="true">·</span>
              <span>Dwarka, Uttam Nagar & West Delhi</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="flex items-center gap-1 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-mono text-stone-500 mt-1">
                4.8 out of 5.0
              </div>
            </div>

            <a
              href={businessData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl text-xs font-semibold text-stone-800 transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>View All Reviews on Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            </a>
          </div>
        </div>

        {/* Real Customer Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {realReviews.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Author row & rating */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">
                      {review.author}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                      <span>{review.authorType}</span>
                      <span aria-hidden="true">·</span>
                      <span>{review.service}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 shrink-0">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Footer row */}
              <div className="border-t border-stone-100 pt-3 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Google Maps Experience</span>
                </span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Owner's Quality Assurance Commitment */}
        <div className="mt-12 bg-stone-900 text-white rounded-2xl p-6 sm:p-8 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
              The Delhi Interior Assurance
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              Strict batch-matching and master artisan installation
            </h3>
            <p className="text-xs text-stone-400 max-w-xl leading-relaxed">
              Every roll of wallpaper and each batch of fluted PVC panel is dye-lot verified before reaching your doorstep. We guarantee flawless alignment, zero peeling joints, and clean post-work cleanup.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="py-3 px-5 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-xl text-xs font-bold transition-colors whitespace-nowrap shadow-md"
            >
              Book Home Measurement
            </button>

            <a
              href={`https://wa.me/${businessData.whatsapp}?text=Hi%20Delhi%20Interior%2C%20I%20have%20a%20question%20about%20my%20wall%20decor.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 bg-stone-800 hover:bg-stone-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 whitespace-nowrap border border-stone-700"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Talk to Specialist</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
