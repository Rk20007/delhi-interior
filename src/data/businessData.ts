export interface BusinessInfo {
  name: string;
  legalTitle: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  address: {
    shop: string;
    street: string;
    landmark: string;
    locality: string;
    city: string;
    pincode: string;
    metroPillar: string;
    nearestMetro: string;
  };
  googleMapsUrl: string;
  googleRating: number;
  totalReviews: number;
  openingHours: string;
  openDays: string;
  serviceAreas: string[];
}

export const businessData: BusinessInfo = {
  name: 'Delhi Interior',
  legalTitle: 'Delhi Interior - Curtain Shop | PVC Panel | Wallpaper Dealer',
  tagline: 'Luxury Designer Wallpapers, Fluted PVC Louvers & Custom Tailored Curtains',
  phone: '+919355095959',
  phoneDisplay: '093550 95959',
  whatsapp: '919355095959',
  address: {
    shop: 'Shop No. 240 Main',
    street: '723, Najafgarh Rd',
    landmark: 'Opposite Metro Pillar 723, Near Kotak Mahindra Bank',
    locality: 'Nawada, Uttam Nagar',
    city: 'Delhi',
    pincode: '110059',
    metroPillar: 'Metro Pillar 723',
    nearestMetro: 'Nawada Metro Station (Blue Line) - 2 min walk',
  },
  googleMapsUrl: 'https://www.google.com/maps?ftid=0x390d053a4c07110b:0xf9ae362cb75ff68e',
  googleRating: 4.8,
  totalReviews: 535,
  openingHours: '10:00 AM – 9:00 PM',
  openDays: 'Open Everyday (Monday to Sunday)',
  serviceAreas: [
    'Uttam Nagar',
    'Dwarka (Sector 1–24)',
    'Janakpuri',
    'Vikaspuri',
    'Tilak Nagar',
    'Najafgarh',
    'Paschim Vihar',
    'Rajouri Garden',
    'Gurgaon',
    'Noida & NCR',
  ],
};

export interface CustomerReview {
  author: string;
  authorType?: string;
  stars: number;
  text: string;
  date: string;
  service: string;
}

export const realReviews: CustomerReview[] = [
  {
    author: 'Aarti cool',
    authorType: 'Verified Customer',
    stars: 5,
    text: 'We got PVC panelling done by Delhi Interior. Mr. Hrishikesh helped us a lot from taking measurements, arranging to finishing of the work. We are very Happy with the work. Staff is very supportive and good at work. Thank You!',
    date: 'Recent Google Review',
    service: 'PVC Wall Panelling',
  },
  {
    author: 'Nemain Charan Panda',
    authorType: 'Repeat Customer',
    stars: 5,
    text: 'Their staff have been supportive enough from the day of visit till the work completed at my home. They have wide range of options for interior wall design and handlooms. I had a very good experience as this is my second time. Thanks Rajeev Ji for your co-operation.',
    date: 'Recent Google Review',
    service: 'Wall Design & Handlooms',
  },
  {
    author: 'Kushal Singh',
    authorType: 'Local Resident',
    stars: 5,
    text: 'They have most of the home decor items like curtains, pillow covers, doormats, bedsheets, carpets and many other items. Service and staff behaviour also very nice and cooperative.',
    date: 'Verified Google Review',
    service: 'Curtains & Home Furnishing',
  },
  {
    author: 'Sushila Sood',
    authorType: 'Verified Homeowner',
    stars: 5,
    text: 'Very good work.. Jo maine dekha tha wo waise he bana hai. Showroom collection is expansive and elegant. And the guy Ankit who came for fitting is very polite, skilled, and took care of every detail.',
    date: 'Verified Google Review',
    service: 'Custom Fitting & Installation',
  },
];

export interface CatalogItem {
  id: string;
  category: 'wallpapers' | 'louvers' | 'curtains' | 'blinds' | 'flooring';
  title: string;
  subtitle: string;
  description: string;
  priceRange: string;
  unit: string;
  specs: {
    material: string;
    durability: string;
    warranty: string;
    installation: string;
  };
  features: string[];
  theme: {
    bgGradient: string;
    accentColor: string;
    textureType: 'fluted' | 'floral' | 'linen' | 'blinds' | 'wood';
  };
}

export const catalogItems: CatalogItem[] = [
  {
    id: 'wp-01',
    category: 'wallpapers',
    title: 'Textured Imperial Damask & Gold Leaf',
    subtitle: 'European Imported Non-Woven Wallpaper',
    description: 'Heavyweight embossed non-woven vinyl wallpaper with subtle metallic foil highlights. Perfect for luxury master bedrooms and living room feature walls.',
    priceRange: '₹1,450 – ₹3,200',
    unit: 'per 57 sq.ft roll',
    specs: {
      material: 'Imported Heavyweight Vinyl / Non-Woven',
      durability: '10+ Years Lifespan, Washable & Stain-Resistant',
      warranty: '5 Years Manufacturer Colorfast Guarantee',
      installation: 'Seamless Edge-to-Edge Joint Paste',
    },
    features: ['100% Washable Surface', 'Anti-Fungal & Odourless', 'Conceals Minor Wall Flaws', 'European Non-Woven Base'],
    theme: {
      bgGradient: 'from-amber-950 via-stone-900 to-amber-900',
      accentColor: '#d97706',
      textureType: 'floral',
    },
  },
  {
    id: 'wp-02',
    category: 'wallpapers',
    title: 'Minimalist Japandi Linen & Textured Fibers',
    subtitle: 'Natural Organic Textured Wallpaper',
    description: 'Raw tactile woven texture mimicking organic Scandinavian and Japanese flax linen. Brings serene warmth, understated elegance, and subtle acoustic softness.',
    priceRange: '₹1,200 – ₹2,400',
    unit: 'per 57 sq.ft roll',
    specs: {
      material: 'Organic Plant Fiber & Embossed Paper',
      durability: 'Scratch-Resistant, Breathable',
      warranty: '3 Years Warranty',
      installation: 'Paste-the-Wall Technique',
    },
    features: ['Zero Plastic Smell', 'Matte Light Diffusing', 'Modern Earthy Tones', 'Seamless Aesthetics'],
    theme: {
      bgGradient: 'from-stone-800 via-stone-700 to-amber-900',
      accentColor: '#b4833e',
      textureType: 'linen',
    },
  },
  {
    id: 'pv-01',
    category: 'louvers',
    title: 'Charcoal Matte Fluted PVC Louver Panels',
    subtitle: 'Interlocking Vertical Slat Wall Cladding',
    description: 'Architectural fluted vertical slats in deep charcoal finish. Designed for modern TV entertainment units, bedroom backdrops, and accent pillars with hidden LED channel support.',
    priceRange: '₹380 – ₹650',
    unit: 'per 8.5ft x 5inch panel',
    specs: {
      material: 'Virgin PVC Composite with UV Hard Coat',
      durability: '100% Waterproof, Termite-Proof, Borer-Proof',
      warranty: '10 Years Replacement Warranty',
      installation: 'Concealed Interlocking Clip System',
    },
    features: ['100% Waterproof & Damp-Proof', 'Termite & Fire Retardant', 'Built-in LED Strip Channel', 'Quick 1-Day Room Install'],
    theme: {
      bgGradient: 'from-zinc-950 via-neutral-900 to-stone-900',
      accentColor: '#71717a',
      textureType: 'fluted',
    },
  },
  {
    id: 'pv-02',
    category: 'louvers',
    title: 'Natural Teak & Smoked Oak WPC Slats',
    subtitle: 'Warm Grain Wood-Polymer Wall Panelling',
    description: 'Hyper-realistic warm wood grain texture with deep tactile grooves. Transforms plain concrete walls into five-star hospitality suites without termite or moisture worries.',
    priceRange: '₹420 – ₹720',
    unit: 'per 9.5ft x 6inch panel',
    specs: {
      material: 'Wood Polymer Composite (WPC)',
      durability: 'Zero Warping, Moisture-Impervious',
      warranty: '10 Years Structural Warranty',
      installation: 'Direct Wall Screw & Silicone Fix',
    },
    features: ['Natural Burma Teak Texture', 'Acoustic Sound Reflection Control', 'Zero Maintenance (No Polish)', 'Damp Wall Solution'],
    theme: {
      bgGradient: 'from-amber-950 via-stone-900 to-yellow-950',
      accentColor: '#c28b3e',
      textureType: 'wood',
    },
  },
  {
    id: 'cur-01',
    category: 'curtains',
    title: 'Tailored Triple-Weave Blackout Drapes',
    subtitle: 'Luxury Hotel Heavyweight Curtain Suite',
    description: '100% room darkening triple-woven fabric that blocks harsh Delhi summer sunlight, reduces street noise by up to 40%, and insulates air-conditioned rooms.',
    priceRange: '₹850 – ₹1,950',
    unit: 'per tailored running meter',
    specs: {
      material: 'High-Density Microfiber Triple Weave',
      durability: 'Fade-Proof dyes, Machine Washable',
      warranty: '5 Years Fabric Integrity',
      installation: 'Custom Eyelet or Pinch Pleat Header',
    },
    features: ['100% Light Blocking', 'Thermal Room Insulation', 'Noise Reduction Factor', 'Anti-Wrinkle Memory Fold'],
    theme: {
      bgGradient: 'from-neutral-900 via-stone-900 to-stone-800',
      accentColor: '#a8a29e',
      textureType: 'linen',
    },
  },
  {
    id: 'cur-02',
    category: 'curtains',
    title: 'Flowing European Voile & Linen Sheers',
    subtitle: 'Architectural Ripple-Fold Sheer Curtains',
    description: 'Featherlight airy linen sheers that softly diffuse natural sunlight into a soft luminous glow while safeguarding daytime privacy for apartments and villas.',
    priceRange: '₹450 – ₹1,100',
    unit: 'per tailored running meter',
    specs: {
      material: 'Fine Gauge Poly-Linen Voile',
      durability: 'Colorfast, Hand/Machine Gentle Wash',
      warranty: '3 Years Warranty',
      installation: 'Ceiling Recessed Ripple Fold Tracks',
    },
    features: ['Soft Diffused Amber Light', 'Daytime Privacy Shield', 'Motorized Track Compatible', 'Dust-Repellent Finish'],
    theme: {
      bgGradient: 'from-stone-900 via-neutral-800 to-amber-950',
      accentColor: '#e7e5e4',
      textureType: 'linen',
    },
  },
  {
    id: 'bl-01',
    category: 'blinds',
    title: 'Dual-Shade Zebra Blinds (Day & Night)',
    subtitle: 'Precision Light Filtration Window Coverings',
    description: 'Alternating sheer and opaque fabric vanes allow you to transition from soft ambient daylight filtering to total privacy with a gentle pull of the stainless chain.',
    priceRange: '₹140 – ₹260',
    unit: 'per sq. ft customized',
    specs: {
      material: 'Antistatic Dust-Proof Polyester',
      durability: 'UV-Stabilized against yellowing',
      warranty: '3 Years Mechanical Mechanism Warranty',
      installation: 'Aluminum Cassette & Heavy-duty brackets',
    },
    features: ['Precision Light Angle Control', 'Smooth Cordless or Chain Op', 'Compact Space-Saving Profile', 'Wipe-Clean Fabric'],
    theme: {
      bgGradient: 'from-stone-900 via-zinc-900 to-neutral-800',
      accentColor: '#cbd5e1',
      textureType: 'blinds',
    },
  },
  {
    id: 'fl-01',
    category: 'flooring',
    title: 'SPC Stone Plastic Core Waterproof Flooring',
    subtitle: 'Zero-Swelling Rigid Core Click-Lock Planks',
    description: 'Next-generation rigid stone plastic composite flooring with authentic embossed wood grain. 100% waterproof, suitable for kitchens, dining halls, and living rooms.',
    priceRange: '₹110 – ₹220',
    unit: 'per sq. ft with underlay',
    specs: {
      material: 'Limestone Composite Core + Wear Layer 0.5mm',
      durability: 'High-Traffic Commercial Grade (AC4)',
      warranty: '15 Years Residential Warranty',
      installation: 'Valinge 2G Click-Lock (No Glue)',
    },
    features: ['100% Waterproof (Zero Swell)', 'Pre-attached IXPE Acoustic Foam', 'High Heel & Pet Scratch Proof', 'Quick 1-Day Clean Install'],
    theme: {
      bgGradient: 'from-amber-950 via-stone-900 to-yellow-950',
      accentColor: '#b4833e',
      textureType: 'wood',
    },
  },
];
