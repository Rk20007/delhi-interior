import React, { useState } from 'react';
import { Sun, Moon, Check, Sparkles, ArrowRight } from 'lucide-react';
import { businessData } from '../data/businessData';

interface VisualizerStyle {
  id: string;
  name: string;
  category: string;
  priceTag: string;
  description: string;
  benefits: string[];
  roomType: string;
  previewBg: string;
  patternType: 'fluted-charcoal' | 'fluted-teak' | 'wallpaper-damask' | 'wallpaper-linen' | 'curtains-ripple';
}

const stylesList: VisualizerStyle[] = [
  {
    id: 'charcoal-louvers',
    name: 'Charcoal Matte Fluted Louvers',
    category: 'PVC Wall Cladding',
    priceTag: '₹380 - ₹650 / panel',
    description: 'High-density interlocking vertical slats with architectural fluting. Creates striking depth, especially behind wall-mounted TVs and accent consoles.',
    benefits: ['100% Waterproof & Termite-Proof', 'Conceals wiring & uneven walls', 'Integrated LED cove channel'],
    roomType: 'TV Unit & Living Lounge',
    previewBg: 'bg-zinc-950',
    patternType: 'fluted-charcoal',
  },
  {
    id: 'teak-louvers',
    name: 'Natural Teak Wood Fluted Panels',
    category: 'WPC Wall Panelling',
    priceTag: '₹420 - ₹720 / panel',
    description: 'Authentic deep teak wood grain with warm honey undertones. Adds rich organic luxury without warping, polishing, or damp decay.',
    benefits: ['Termite & Borer proof', 'Zero Polish maintenance', 'Acoustic dampening slats'],
    roomType: 'Master Bedroom & Foyer',
    previewBg: 'bg-amber-950',
    patternType: 'fluted-teak',
  },
  {
    id: 'damask-gold',
    name: 'Imperial Damask & Metallic Leaf',
    category: 'Designer Wallpaper',
    priceTag: '₹1,450 - ₹3,200 / roll (57 sq.ft)',
    description: 'Heavyweight European non-woven textured vinyl wallpaper with subtle metallic foil illumination that shimmers under warm cove lighting.',
    benefits: ['Washable vinyl coating', 'Seamless invisible joints', '10+ years durability'],
    roomType: 'Dining & Accent Feature Wall',
    previewBg: 'bg-stone-900',
    patternType: 'wallpaper-damask',
  },
  {
    id: 'japandi-linen',
    name: 'Japandi Minimalist Textured Linen',
    category: 'Organic Wallcovering',
    priceTag: '₹1,200 - ₹2,400 / roll (57 sq.ft)',
    description: 'Understated tactile organic linen weave that gently absorbs room reverberation and gives a calm, spa-like sanctuary feel.',
    benefits: ['Matte glare-free finish', 'Breathable plant fibers', 'Timeless organic palette'],
    roomType: 'Bedrooms & Study Rooms',
    previewBg: 'bg-stone-800',
    patternType: 'wallpaper-linen',
  },
  {
    id: 'ripple-curtains',
    name: 'Ripple-Fold Sheers & Blackout Drapes',
    category: 'Custom Window Treatments',
    priceTag: '₹850 - ₹1,950 / meter',
    description: 'Floor-to-ceiling double-track system with dreamy airy linen sheers in front and 100% thermal blackout drapes behind.',
    benefits: ['100% Room darkening', 'Thermal climate insulation', 'Motorized track compatible'],
    roomType: 'Large Living Balconies & Bedrooms',
    previewBg: 'bg-neutral-900',
    patternType: 'curtains-ripple',
  },
];

interface InteractiveVisualizerProps {
  onSelectForEstimate: (category: string) => void;
  onOpenBooking: () => void;
}

export const InteractiveVisualizer: React.FC<InteractiveVisualizerProps> = ({
  onSelectForEstimate,
  onOpenBooking,
}) => {
  const [selectedStyle, setSelectedStyle] = useState<VisualizerStyle>(stylesList[0]);
  const [isEveningMode, setIsEveningMode] = useState(true);

  return (
    <section id="visualizer" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-2">
            Interactive Room Studio
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Visualize your walls before installation
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Switch between Delhi Interior's signature wall treatments and test ambient day versus evening cove lighting to see how textures come alive in real homes.
          </p>
        </div>

        {/* Visualizer Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Canvas: Interactive Architectural Viewport */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            
            {/* Viewport Box */}
            <div
              className={`relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-stone-800 transition-colors duration-500 shadow-xl flex flex-col justify-between p-6 ${selectedStyle.previewBg}`}
            >
              {/* Pattern simulation overlay */}
              {selectedStyle.patternType === 'fluted-charcoal' && (
                <div className="absolute inset-0 bg-fluted-pattern opacity-70 pointer-events-none" />
              )}
              {selectedStyle.patternType === 'fluted-teak' && (
                <div
                  className="absolute inset-0 opacity-80 pointer-events-none"
                  style={{
                    backgroundImage: `repeating-linear-gradient(90deg, #78350f 0px, #78350f 12px, #451a03 12px, #451a03 18px)`,
                  }}
                />
              )}
              {selectedStyle.patternType === 'wallpaper-damask' && (
                <div className="absolute inset-0 bg-wallpaper-grid opacity-60 pointer-events-none" />
              )}
              {selectedStyle.patternType === 'wallpaper-linen' && (
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#d6d3d1 1px, transparent 1px)`,
                    backgroundSize: '16px 16px',
                  }}
                />
              )}
              {selectedStyle.patternType === 'curtains-ripple' && (
                <div
                  className="absolute inset-0 opacity-60 pointer-events-none"
                  style={{
                    backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 28px, rgba(0,0,0,0.35) 28px, rgba(0,0,0,0.35) 44px)`,
                  }}
                />
              )}

              {/* Lighting Glow Scrim */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                  isEveningMode
                    ? 'bg-gradient-to-t from-amber-950/70 via-stone-900/30 to-amber-500/20'
                    : 'bg-gradient-to-t from-stone-900/40 via-transparent to-sky-100/10'
                }`}
              />

              {/* Cove Ceiling Lighting Strip (Top) */}
              <div
                className={`absolute top-0 left-0 right-0 h-4 transition-all duration-500 ${
                  isEveningMode
                    ? 'bg-gradient-to-b from-amber-400/50 to-transparent blur-sm'
                    : 'bg-gradient-to-b from-stone-200/30 to-transparent'
                }`}
              />

              {/* Top Viewport Toolbar */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-700/60 text-xs font-medium text-stone-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{selectedStyle.name}</span>
                </div>

                {/* Day / Evening Lighting Toggle (Functional segmented control) */}
                <div className="flex items-center gap-1 bg-stone-900/90 backdrop-blur-md p-1 rounded-lg border border-stone-700">
                  <button
                    onClick={() => setIsEveningMode(false)}
                    className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      !isEveningMode
                        ? 'bg-stone-800 text-amber-300 shadow-sm'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span>Daylight</span>
                  </button>
                  <button
                    onClick={() => setIsEveningMode(true)}
                    className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-all ${
                      isEveningMode
                        ? 'bg-amber-950 text-amber-300 border border-amber-700/60 shadow-sm'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span>Evening Cove</span>
                  </button>
                </div>
              </div>

              {/* Simulated Room Living Perspective */}
              <div className="relative z-10 flex items-end justify-between">
                
                {/* Simulated Floating Credenza */}
                <div className="w-full max-w-lg bg-stone-900/95 backdrop-blur-md border border-stone-700/80 rounded-xl p-4 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                      Ideal Application
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {selectedStyle.roomType}
                    </div>
                    <div className="text-xs text-stone-400 mt-0.5">
                      Estimated: {selectedStyle.priceTag}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectForEstimate(selectedStyle.category)}
                      className="px-3.5 py-2 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
                    >
                      Estimate Room Cost
                    </button>
                  </div>
                </div>

                {/* Metro pillar watermark reminder */}
                <div className="hidden sm:block text-right">
                  <div className="text-[11px] font-mono text-stone-400">
                    Live Display at Showroom
                  </div>
                  <div className="text-xs font-semibold text-stone-300">
                    Pillar 723, Nawada Metro
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Caption */}
            <p className="text-xs text-stone-500 flex items-center justify-between">
              <span>*Physical touch swatches and catalogs available during free doorstep visit or at store.</span>
              <span className="font-medium text-stone-700">Delhi Interior Guarantee</span>
            </p>
          </div>

          {/* Right Column: Style Selector Cards */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-1">
              Select Material Finish:
            </h3>

            {stylesList.map((style) => {
              const isSelected = selectedStyle.id === style.id;
              return (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-amber-600 bg-amber-50/40 shadow-sm ring-1 ring-amber-600/30'
                      : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-xs font-semibold text-amber-800">
                        {style.category}
                      </div>
                      <h4 className="text-sm font-bold text-stone-900 mt-0.5">
                        {style.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-medium text-stone-600 whitespace-nowrap">
                      {style.priceTag.split(' / ')[0]}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {style.description}
                  </p>

                  <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-stone-600">
                    {style.benefits.slice(0, 2).map((b, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-amber-700 shrink-0" />
                        <span>{b}</span>
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Swatches at Your Doorstep</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-700" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
