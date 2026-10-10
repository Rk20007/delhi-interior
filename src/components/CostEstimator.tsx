import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { businessData } from '../data/businessData';

interface MaterialOption {
  id: string;
  name: string;
  category: string;
  ratePerSqFt: number; // in INR
  unitDesc: string;
  calcUnit: (sqft: number) => string;
  installTime: string;
  badge: string;
}

const materialOptions: MaterialOption[] = [
  {
    id: 'wallpaper',
    name: 'Designer 3D Textured Wallpaper',
    category: 'Wallpaper',
    ratePerSqFt: 55,
    unitDesc: 'Rolls (57 sq.ft per roll)',
    calcUnit: (sqft) => `${Math.ceil((sqft * 1.15) / 50)} Rolls (with pattern repeat margin)`,
    installTime: '3 – 5 Hours (Same Day)',
    badge: 'Most Popular for Bedroom & TV Walls',
  },
  {
    id: 'pvc_louvers',
    name: 'Charcoal / Wood Fluted PVC Louvers',
    category: 'PVC Louvers',
    ratePerSqFt: 145,
    unitDesc: 'Fluted Panels (8.5ft x 5inch)',
    calcUnit: (sqft) => `${Math.ceil(sqft / 3.5)} Interlocking Slat Panels`,
    installTime: '1 Day Professional Fit',
    badge: '100% Waterproof & Termite-Proof',
  },
  {
    id: 'curtains',
    name: 'Custom Tailored Blackout Curtains',
    category: 'Curtains',
    ratePerSqFt: 95,
    unitDesc: 'Tailored Running Meters',
    calcUnit: (sqft) => `${Math.ceil(sqft / 25)} Window / Balcony Drapery Panels`,
    installTime: '48 Hours Delivery & Hanging',
    badge: 'Includes Ripple-Fold Header',
  },
  {
    id: 'zebra_blinds',
    name: 'Day & Night Dual Zebra Blinds',
    category: 'Blinds',
    ratePerSqFt: 165,
    unitDesc: 'Custom Sized Window Cassette',
    calcUnit: (sqft) => `${Math.ceil(sqft / 20)} Custom Made Window Sets`,
    installTime: '24 – 48 Hours',
    badge: 'Aluminum Powder-Coated Cassette',
  },
  {
    id: 'spc_flooring',
    name: 'SPC Waterproof Click-Lock Flooring',
    category: 'Flooring',
    ratePerSqFt: 135,
    unitDesc: 'Boxes with Acoustic Underlay',
    calcUnit: (sqft) => `${Math.ceil((sqft * 1.1) / 24)} Boxes (with 10% cutting wastage)`,
    installTime: '1 – 2 Days',
    badge: 'Zero Glue, Click-Lock Planks',
  },
];

interface CostEstimatorProps {
  onBookWithEstimate: (details: {
    material: string;
    dimensions: string;
    area: number;
    estimatedCost: string;
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onBookWithEstimate }) => {
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('wallpaper');
  const [wallWidth, setWallWidth] = useState<number>(12); // feet
  const [wallHeight, setWallHeight] = useState<number>(9.5); // feet
  const [includeInstallation, setIncludeInstallation] = useState<boolean>(true);

  const selectedMaterial =
    materialOptions.find((m) => m.id === selectedMaterialId) || materialOptions[0];

  const totalSqFt = Math.round(wallWidth * wallHeight);
  const baseMaterialCost = Math.round(totalSqFt * selectedMaterial.ratePerSqFt);
  const installationFee = includeInstallation ? Math.round(totalSqFt * 15) : 0;
  const totalEstimatedCost = baseMaterialCost + installationFee;
  const quantityEstimate = selectedMaterial.calcUnit(totalSqFt);

  const formattedCostRange = `₹${(totalEstimatedCost * 0.92).toLocaleString('en-IN', {
    maximumFractionDigits: 0,
  })} – ₹${(totalEstimatedCost * 1.12).toLocaleString('en-IN', {
    maximumFractionDigits: 0,
  })}`;

  const handleBookEstimate = () => {
    onBookWithEstimate({
      material: selectedMaterial.name,
      dimensions: `${wallWidth} ft × ${wallHeight} ft`,
      area: totalSqFt,
      estimatedCost: formattedCostRange,
    });
  };

  return (
    <section id="estimator" className="py-16 lg:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-2">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Instant Room Cost & Material Estimator
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Get an instant, transparent cost estimation based on standard Delhi NCR residential room measurements. All prices include authentic material batches, primer, and optional master installation.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Dimensions & Material Selection */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            
            {/* Step 1: Select Material */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
                1. Select Wall / Decor Treatment
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {materialOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedMaterialId(opt.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selectedMaterialId === opt.id
                        ? 'border-stone-900 bg-stone-900 text-white shadow-sm'
                        : 'border-stone-200 bg-white text-stone-800 hover:border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="text-xs font-semibold leading-snug">
                      {opt.name}
                    </div>
                    <div className={`text-[11px] mt-1 ${selectedMaterialId === opt.id ? 'text-amber-300' : 'text-stone-500'}`}>
                      Starts ~₹{opt.ratePerSqFt}/sq.ft
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Wall Dimensions */}
            <div className="pt-4 border-t border-stone-100">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-4">
                2. Enter Wall / Window Dimensions (in Feet)
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Width */}
                <div>
                  <div className="flex justify-between items-center text-sm font-medium text-stone-800 mb-1.5">
                    <span>Width (Horizontal)</span>
                    <span className="font-mono font-bold text-stone-900 text-base">{wallWidth} ft</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="30"
                    step="0.5"
                    value={wallWidth}
                    onChange={(e) => setWallWidth(parseFloat(e.target.value))}
                    className="w-full accent-stone-900 cursor-pointer h-2 bg-stone-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>4 ft</span>
                    <span>12 ft (Standard Wall)</span>
                    <span>30 ft</span>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <div className="flex justify-between items-center text-sm font-medium text-stone-800 mb-1.5">
                    <span>Height (Vertical Ceiling)</span>
                    <span className="font-mono font-bold text-stone-900 text-base">{wallHeight} ft</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="14"
                    step="0.5"
                    value={wallHeight}
                    onChange={(e) => setWallHeight(parseFloat(e.target.value))}
                    className="w-full accent-stone-900 cursor-pointer h-2 bg-stone-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1">
                    <span>4 ft</span>
                    <span>9.5 ft (Typical Ceiling)</span>
                    <span>14 ft</span>
                  </div>
                </div>
              </div>

              {/* Quick Preset Buttons */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-stone-500 font-medium">Quick Presets:</span>
                <button
                  type="button"
                  onClick={() => { setWallWidth(10); setWallHeight(9.5); }}
                  className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-xs"
                >
                  Bedroom Wall (10×9.5 ft)
                </button>
                <button
                  type="button"
                  onClick={() => { setWallWidth(14); setWallHeight(10); }}
                  className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-xs"
                >
                  Living Room TV Wall (14×10 ft)
                </button>
                <button
                  type="button"
                  onClick={() => { setWallWidth(6); setWallHeight(7); }}
                  className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-xs"
                >
                  Balcony Window (6×7 ft)
                </button>
              </div>
            </div>

            {/* Step 3: Installation Option */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-stone-900 block">
                  Include Professional Installation by Delhi Interior Team
                </span>
                <span className="text-[11px] text-stone-500">
                  Clean fitting, laser alignment, joint pasting & 1-year service support
                </span>
              </div>
              <input
                type="checkbox"
                checked={includeInstallation}
                onChange={(e) => setIncludeInstallation(e.target.checked)}
                className="w-5 h-5 accent-stone-900 rounded cursor-pointer"
              />
            </div>

          </div>

          {/* Right Column: Live Calculation Summary Card */}
          <div className="lg:col-span-5 bg-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-800 space-y-6">
            
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Estimate Breakdown
                </span>
              </div>
              <span className="text-xs font-mono text-stone-400">Delhi Interior</span>
            </div>

            {/* Big Sq Ft Display */}
            <div className="space-y-1">
              <span className="text-xs text-stone-400">Total Surface Area</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-bold text-white tabular-nums">
                  {totalSqFt}
                </span>
                <span className="text-base text-stone-300 font-medium">sq. ft.</span>
                <span className="text-xs text-stone-500 ml-auto">
                  ({wallWidth}′ × {wallHeight}′)
                </span>
              </div>
            </div>

            {/* Estimated Material Units */}
            <div className="bg-stone-800/80 rounded-xl p-4 border border-stone-700/80 space-y-2">
              <div className="text-xs text-stone-400">Estimated Material Quantity</div>
              <div className="text-base font-semibold text-amber-300 font-mono">
                {quantityEstimate}
              </div>
              <div className="text-[11px] text-stone-400">
                Installation Lead Time: <span className="text-stone-200">{selectedMaterial.installTime}</span>
              </div>
            </div>

            {/* Price Total */}
            <div className="border-t border-stone-800 pt-4 space-y-1">
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>Estimated Cost Range (incl. taxes)</span>
                <span className="text-[10px] text-emerald-400">Doorstep Sample Free</span>
              </div>
              <div className="text-3xl font-display font-bold text-amber-400 tabular-nums">
                {formattedCostRange}
              </div>
              <p className="text-[11px] text-stone-400 pt-1">
                *Final exact quotation provided after on-site laser measurement to account for window cutouts, electrical points, and pattern matches.
              </p>
            </div>

            {/* Trust Assurances */}
            <div className="space-y-1.5 text-xs text-stone-300 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero obligation free site measurement in Delhi NCR</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Genuine showroom materials & batch consistency</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleBookEstimate}
              className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2 group shadow-lg shadow-amber-950/40"
            >
              <span>Book Free Measurement with this Estimate</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
