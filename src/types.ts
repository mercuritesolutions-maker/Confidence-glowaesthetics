export interface Treatment {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  duration: string;
  iconName: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  quote: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface WorkingHour {
  day: string;
  hours: string;
  closed: boolean;
}

export const TREATMENTS: Treatment[] = [
  {
    id: "anti-wrinkle",
    title: "Anti-Wrinkle Treatments",
    description: "Premium, precise injections targeting lines and wrinkles for a smooth, naturally youthful expression.",
    priceRange: "From £150",
    duration: "20 - 30 mins",
    iconName: "Sparkles",
    benefits: ["Smoothes forehead, frown lines & crow's feet", "Natural, movement-retaining results", "Virtually painless with fine gauge needles"]
  },
  {
    id: "skin-boosters",
    title: "Skin Booster",
    description: "Deeply hydrating micro-injections (Seventy Hyal / Profhilo) that drench skin in hyaluronic acid for a soft, dewy glow.",
    priceRange: "From £180",
    duration: "30 - 45 mins",
    iconName: "Droplet",
    benefits: ["Intense hydration from within", "Improves skin elasticity & fine lines", "Stimulates natural collagen & elastin production"]
  },
  {
    id: "microneedling",
    title: "Microneedling",
    description: "Collagen induction therapy utilizing medicalgrade microneedles to improve scarring, texture, and pore size.",
    priceRange: "From £95",
    duration: "45 - 60 mins",
    iconName: "Grid",
    benefits: ["Reduces appearance of acne scars & pigmentation", "Boosts cellular turnover", "Includes deeply soothing recovery complex"]
  },
  {
    id: "chemical-peels",
    title: "Chemical Peel",
    description: "Advanced medical-grade exfoliating acids tailored to your skin concerns to lift dead cells and pigmentation.",
    priceRange: "From £70",
    duration: "30 - 45 mins",
    iconName: "Layers",
    benefits: ["Clears congested pores & blemishes", "Brightens skin tone & evens texture", "No harsh downtime or peeling lines"]
  },
  {
    id: "skin-tag-removal",
    title: "Skin Tag Removal",
    description: "Safe, rapid, and hygienic clinical removal of skin tags, lesions, or milia with minimal healing times.",
    priceRange: "From £50",
    duration: "15 - 30 mins",
    iconName: "ShieldCheck",
    benefits: ["Conducted using sterile clinical protocols", "Minimal skin disturbance", "Promotes flawless, comfortable results"]
  },
  {
    id: "prescriptive-facial",
    title: "Prescriptive Facial",
    description: "Bespoke clinical facial designed around your specific skin goals, incorporating medical serums and massage.",
    priceRange: "From £65",
    duration: "60 mins",
    iconName: "Smile",
    benefits: ["Custom-selected active ingredients", "Promotes lymphatic drainage & circulation", "A highly relaxing, sensorial experience"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Sarah Jenkins",
    location: "Morley, Leeds",
    rating: 5,
    treatment: "Anti-Wrinkle & Skin Booster",
    quote: "I can't recommend Confidence & Glow enough! Being treated by an NHS-trained professional made me feel so incredibly safe. She explained everything beautifully and my results are so soft and natural. Absolute 5-star experience!",
    date: "May 2026"
  },
  {
    id: "rev-2",
    name: "Rebecca Thorne",
    location: "Gildersome, Leeds",
    rating: 5,
    treatment: "Microneedling Session",
    quote: "My skin has never looked this radiant or healthy! The clinic in Morley is stunning, exceptionally clean, and so relaxing. The microneedling has virtually erased my old acne marks. Simply the best aesthetics clinic in Leeds.",
    date: "June 2026"
  },
  {
    id: "rev-3",
    name: "James Radcliffe",
    location: "Churwell, Morley",
    rating: 5,
    treatment: "Chemical Peel & Skin Tag Removal",
    quote: "Professional, hygienic, and highly skilled treatment. I had a skin tag removed and a chemical peel. The practitioner's medical background shone through immediately — everything was sterile and explained thoroughly.",
    date: "April 2026"
  }
];

export const WORKING_HOURS: WorkingHour[] = [
  { day: "Monday", hours: "09:00 - 18:00", closed: false },
  { day: "Tuesday", hours: "09:00 - 18:00", closed: false },
  { day: "Wednesday", hours: "09:00 - 20:00", closed: false },
  { day: "Thursday", hours: "09:00 - 20:00", closed: false },
  { day: "Friday", hours: "09:00 - 18:00", closed: false },
  { day: "Saturday", hours: "09:00 - 17:00", closed: false },
  { day: "Sunday", hours: "Closed & by Request", closed: true }
];
