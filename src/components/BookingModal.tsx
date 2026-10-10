import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { businessData } from '../data/businessData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  estimateDetails?: {
    material: string;
    dimensions: string;
    area: number;
    estimatedCost: string;
  } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
  estimateDetails,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('Dwarka (Sector 1–24)');
  const [address, setAddress] = useState('');
  const [service, setService] = useState(prefilledService || 'Designer Wallpapers & PVC Louvers');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM – 2:00 PM (Morning Slot)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || phone.trim().length < 10) {
      return;
    }

    const generatedId = `DI-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const waMessage = `Hi Delhi Interior! I booked a Free Doorstep Measurement Visit.
Booking ID: ${bookingId}
Name: ${name}
Phone: ${phone}
Locality: ${locality}
Service: ${service}
Preferred Time: ${timeSlot} ${date ? `on ${date}` : ''}
${estimateDetails ? `Estimate Area: ${estimateDetails.area} sq.ft (${estimateDetails.estimatedCost})` : ''}
Please confirm my appointment!`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-8 my-8 text-stone-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="space-y-1 mb-6">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Delhi NCR Doorstep Service</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-stone-900">
                Book Free Home Measurement
              </h3>
              <p className="text-xs text-stone-600">
                We bring 1000+ wallpaper books & PVC samples directly to your residence with zero travel charges.
              </p>
            </div>

            {/* If estimate attached */}
            {estimateDetails && (
              <div className="mb-5 p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-stone-800 space-y-1">
                <div className="font-semibold text-amber-900 flex justify-between">
                  <span>Attached Estimate: {estimateDetails.material}</span>
                  <span className="font-mono font-bold">{estimateDetails.estimatedCost}</span>
                </div>
                <div className="text-stone-600">
                  Wall Dimensions: {estimateDetails.dimensions} ({estimateDetails.area} sq.ft)
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  WhatsApp / Contact Phone Number *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-sm font-medium text-stone-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full pl-12 pr-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 font-mono"
                  />
                </div>
                <span className="text-[10px] text-stone-400 mt-0.5 block">
                  10-digit mobile number for appointment confirmation.
                </span>
              </div>

              {/* Locality Dropdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Locality / Area *
                  </label>
                  <select
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 bg-white"
                  >
                    {businessData.serviceAreas.map((area, idx) => (
                      <option key={idx} value={area}>
                        {area}
                      </option>
                    ))}
                    <option value="Other Delhi NCR Location">Other Delhi NCR Location</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Primary Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 bg-white"
                  >
                    <option value="Designer Wallpapers & 3D Murals">Designer Wallpapers & 3D Murals</option>
                    <option value="PVC Fluted Louver Panels">PVC Fluted Louver Panels</option>
                    <option value="Custom Curtains & Sheers">Custom Curtains & Sheers</option>
                    <option value="Window Blinds (Zebra / Roller)">Window Blinds (Zebra / Roller)</option>
                    <option value="SPC Waterproof Flooring">SPC Waterproof Flooring</option>
                    <option value="Full Home Complete Decor Package">Full Home Complete Decor Package</option>
                  </select>
                </div>
              </div>

              {/* House Address / Landmark */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Apartment / Society / Street Address
                </label>
                <input
                  type="text"
                  placeholder="e.g. Flat 402, Sector 12 Dwarka / Nawada"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
                />
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 bg-white"
                  >
                    <option value="10:00 AM – 1:00 PM (Morning)">10:00 AM – 1:00 PM (Morning)</option>
                    <option value="1:00 PM – 5:00 PM (Afternoon)">1:00 PM – 5:00 PM (Afternoon)</option>
                    <option value="5:00 PM – 8:00 PM (Evening)">5:00 PM – 8:00 PM (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-xl text-sm transition-all shadow-md"
                >
                  Confirm Free Doorstep Visit
                </button>
                <p className="text-[11px] text-center text-stone-500 mt-2">
                  Zero obligation. Laser measurement and physical catalogs are 100% complimentary.
                </p>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-amber-700">
                Booking ID: {bookingId}
              </span>
              <h3 className="text-2xl font-bold font-display text-stone-900">
                Appointment Requested!
              </h3>
              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                Thank you, <strong>{name}</strong>! Our decorator will contact you shortly at <strong>+91 {phone}</strong> to confirm the exact arrival time.
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-500">Service:</span>
                <span className="font-semibold text-stone-800">{service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Area:</span>
                <span className="font-semibold text-stone-800">{locality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Preferred Slot:</span>
                <span className="font-semibold text-stone-800">{timeSlot}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href={`https://wa.me/${businessData.whatsapp}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instantly Confirm on WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-xl text-xs transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
