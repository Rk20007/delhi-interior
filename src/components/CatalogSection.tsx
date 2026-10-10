import React, { useState } from 'react';
import { catalogItems, CatalogItem, businessData } from '../data/businessData';
import { Check, MessageCircle, ArrowUpRight, Sparkles, X, Shield, Eye } from 'lucide-react';

interface CatalogSectionProps {
  onOpenBookingForProduct: (productName: string) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onOpenBookingForProduct }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<CatalogItem | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? catalogItems
      : catalogItems.filter((item) => item.category === activeFilter);

  return (
    <section id="collections" className="py-16 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-2">
              Curated Collections
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight [text-wrap:balance]">
              Master collections crafted for modern residences
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed">
              Browse our best-selling wallpapers, architectural PVC louvers, tailored drapery, and acoustic treatments. Each product is inspected for batch quality and installed by trained artisans.
            </p>
          </div>

          {/* Interactive Filter Tabs (Valid functional buttons per Frontend Design Constitution Section 1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-100 rounded-xl border border-stone-200/80 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Items ({catalogItems.length})
            </button>
            <button
              onClick={() => setActiveFilter('wallpapers')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'wallpapers'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Wallpapers
            </button>
            <button
              onClick={() => setActiveFilter('louvers')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'louvers'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              PVC Louvers
            </button>
            <button
              onClick={() => setActiveFilter('curtains')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'curtains'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Curtains
            </button>
            <button
              onClick={() => setActiveFilter('blinds')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'blinds'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Blinds
            </button>
            <button
              onClick={() => setActiveFilter('flooring')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'flooring'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Flooring
            </button>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-stone-400 hover:shadow-md transition-all"
            >
              {/* Product Visual Container (Resilient styled CSS/SVG container per Zero Broken Image Policy) */}
              <div
                className={`relative h-60 w-full bg-gradient-to-br ${item.theme.bgGradient} overflow-hidden flex flex-col justify-between p-5`}
              >
                {/* Texture Overlay */}
                {item.theme.textureType === 'fluted' && (
                  <div className="absolute inset-0 bg-fluted-pattern opacity-60 pointer-events-none" />
                )}
                {item.theme.textureType === 'floral' && (
                  <div className="absolute inset-0 bg-wallpaper-grid opacity-60 pointer-events-none" />
                )}
                {item.theme.textureType === 'wood' && (
                  <div
                    className="absolute inset-0 opacity-60 pointer-events-none"
                    style={{
                      backgroundImage: `repeating-linear-gradient(90deg, rgba(217, 119, 6, 0.15) 0px, rgba(217, 119, 6, 0.15) 16px, rgba(0, 0, 0, 0.3) 16px, rgba(0, 0, 0, 0.3) 22px)`,
                    }}
                  />
                )}
                {item.theme.textureType === 'linen' && (
                  <div
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
                      backgroundSize: '16px 16px',
                    }}
                  />
                )}
                {item.theme.textureType === 'blinds' && (
                  <div
                    className="absolute inset-0 opacity-50 pointer-events-none"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 12px, rgba(0,0,0,0.3) 12px, rgba(0,0,0,0.3) 18px)`,
                    }}
                  />
                )}

                {/* Subtle scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge: Category & Spec */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-semibold bg-stone-900/60 backdrop-blur-md px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="p-1.5 rounded-lg bg-stone-900/70 hover:bg-stone-900 text-stone-200 hover:text-white transition-colors"
                    title="Quick preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Material Title inside thumbnail */}
                <div className="relative z-10">
                  <div className="text-[11px] text-stone-300 uppercase tracking-wide">
                    {item.subtitle}
                  </div>
                  <div className="text-lg font-bold text-white font-display mt-0.5">
                    {item.title}
                  </div>
                </div>
              </div>

              {/* Product Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                
                <div>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Clean Spec list */}
                  <div className="mt-4 space-y-1.5 text-xs text-stone-600 border-t border-stone-100 pt-3">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Material:</span>
                      <span className="font-medium text-stone-800 text-right">{item.specs.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Durability:</span>
                      <span className="font-medium text-stone-800 text-right">{item.specs.durability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Warranty:</span>
                      <span className="font-medium text-stone-800 text-right">{item.specs.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-3 border-t border-stone-100 flex items-end justify-between gap-2">
                  <div>
                    <div className="text-[10px] uppercase font-mono text-stone-400">
                      Showroom Price
                    </div>
                    <div className="text-base font-bold text-stone-900 font-mono">
                      {item.priceRange}
                    </div>
                    <div className="text-[10px] text-stone-500">
                      {item.unit}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onOpenBookingForProduct(item.title)}
                      className="px-3 py-2 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap"
                    >
                      Sample Swatch
                    </button>

                    <a
                      href={`https://wa.me/${businessData.whatsapp}?text=Hi%20Delhi%20Interior%2C%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                      title="Inquire via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal for Swatch Inspection */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
              
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  {selectedProduct.category} · Specification Sheet
                </span>
                <h3 className="text-2xl font-bold font-display text-stone-900">
                  {selectedProduct.title}
                </h3>
                <p className="text-xs text-stone-500">
                  {selectedProduct.subtitle}
                </p>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-xl text-xs">
                <div>
                  <span className="text-stone-400 block">Base Material:</span>
                  <span className="font-semibold text-stone-900">{selectedProduct.specs.material}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Durability & Maintenance:</span>
                  <span className="font-semibold text-stone-900">{selectedProduct.specs.durability}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Warranty Period:</span>
                  <span className="font-semibold text-stone-900">{selectedProduct.specs.warranty}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Installation Method:</span>
                  <span className="font-semibold text-stone-900">{selectedProduct.specs.installation}</span>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase text-stone-900 mb-2">Key Quality Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {selectedProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-stone-500 uppercase font-mono">Price</div>
                  <div className="text-xl font-bold font-mono text-stone-900">
                    {selectedProduct.priceRange} <span className="text-xs font-normal text-stone-500">{selectedProduct.unit}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${businessData.whatsapp}?text=Hi%20Delhi%20Interior%2C%20please%20send%20swatches%20for%20${encodeURIComponent(selectedProduct.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Catalogue</span>
                  </a>

                  <button
                    onClick={() => {
                      const name = selectedProduct.title;
                      setSelectedProduct(null);
                      onOpenBookingForProduct(name);
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors"
                  >
                    Book Home Swatch Visit
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
