/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InteractiveVisualizer } from './components/InteractiveVisualizer';
import { CatalogSection } from './components/CatalogSection';
import { CostEstimator } from './components/CostEstimator';
import { ShowroomExperience } from './components/ShowroomExperience';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MessageCircle, Phone } from 'lucide-react';
import { businessData } from './data/businessData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [estimateDetails, setEstimateDetails] = useState<{
    material: string;
    dimensions: string;
    area: number;
    estimatedCost: string;
  } | null>(null);

  const handleOpenBooking = () => {
    setPrefilledService('General Interior Decor & Measurement');
    setEstimateDetails(null);
    setIsBookingOpen(true);
  };

  const handleOpenBookingForProduct = (productName: string) => {
    setPrefilledService(productName);
    setEstimateDetails(null);
    setIsBookingOpen(true);
  };

  const handleBookWithEstimate = (details: {
    material: string;
    dimensions: string;
    area: number;
    estimatedCost: string;
  }) => {
    setPrefilledService(details.material);
    setEstimateDetails(details);
    setIsBookingOpen(true);
  };

  const handleSelectForEstimate = (category: string) => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCollections = () => {
    const el = document.getElementById('collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* 3-Zone Top Bar */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Claim-to-Proof Adjacency */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreCollections={handleExploreCollections}
        />

        {/* Interactive Wall Visualizer Studio */}
        <InteractiveVisualizer
          onSelectForEstimate={handleSelectForEstimate}
          onOpenBooking={handleOpenBooking}
        />

        {/* Curated Materials & Product Catalog with Filters */}
        <CatalogSection
          onOpenBookingForProduct={handleOpenBookingForProduct}
        />

        {/* Room Cost & Material Estimator */}
        <CostEstimator
          onBookWithEstimate={handleBookWithEstimate}
        />

        {/* Showroom Experience & Metro Guide */}
        <ShowroomExperience
          onOpenBooking={handleOpenBooking}
        />

        {/* Google Reviews & Real Testimonials */}
        <ReviewsSection
          onOpenBooking={handleOpenBooking}
        />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Doorstep Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefilledService={prefilledService}
        estimateDetails={estimateDetails}
      />

      {/* Floating Quick WhatsApp Button on Mobile/Desktop */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <a
          href={`tel:${businessData.phone}`}
          className="sm:hidden p-3 bg-stone-900 text-amber-400 rounded-full shadow-lg border border-stone-800 transition-transform active:scale-95"
          aria-label="Call Delhi Interior"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href={`https://wa.me/${businessData.whatsapp}?text=Hi%20Delhi%20Interior%2C%20I%20am%20interested%20in%20wallpapers%20and%20PVC%20louvers.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center border border-emerald-500"
          aria-label="WhatsApp Delhi Interior"
          title="Chat with Delhi Interior on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
