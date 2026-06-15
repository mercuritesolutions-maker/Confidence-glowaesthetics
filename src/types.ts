export interface Treatment {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  priceRange: string;
  duration: string;
  iconName: string;
  benefits: string[];
  procedureSteps: string[];
  bestSuitedFor: string[];
}

export interface Booking {
  id: string;
  patientName: string;
  email: string;
  phone: string;
  treatmentId: string;
  treatmentTitle: string;
  date: string;
  timeSlot: string;
  skinConcerns: string;
  createdAt: string;
  status: "Confirmed" | "Pending Clinical Review";
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
    longDescription: "Our anti-wrinkle treatments represent the pinnacle of precise medical aesthetics. Administered strictly by our NHS-trained clinical specialist, this treatment utilizes premium, certified neuromodulators to temporarily relax targeted facial muscles responsible for dynamic expressions. This lets your skin rest and smooth out naturally, correcting lines with a refined touch that keeps dynamic movement looking beautiful, radiant, and absolutely genuine.",
    priceRange: "From £150",
    duration: "20 - 30 mins",
    iconName: "Sparkles",
    benefits: [
      "Smoothes forehead wrinkles, frown lines, and delicate crow's feet",
      "Saves dynamic facial movement for an expert, non-frozen look",
      "Extremely comfortable, virtually painless micro-needles used",
      "Results fully develop in 7 to 14 days and last up to 3-4 months"
    ],
    procedureSteps: [
      "Detailed clinical consultation, facial anatomy analysis & medical mapping",
      "Gentle skin preparation & deep sterilization of targeted muscle points",
      "Ultra-precise micro-injections using premium grade clinical toxins",
      "Comprehensive post-procedure guidance and complimentary 2-week follow-up call"
    ],
    bestSuitedFor: [
      "Individuals noticing static forehead, frown, or smile lines at rest",
      "Those desiring a more refreshed, active, less tired facial appearance",
      "Patients seeking medical-grade safety standards led by an NHS clinician"
    ]
  },
  {
    id: "skin-boosters",
    title: "Skin Booster",
    description: "Deeply hydrating micro-injections (Seventy Hyal / Profhilo) that drench skin in hyaluronic acid for a soft, dewy glow.",
    longDescription: "Unlike traditional fillers that simply add local contour volume, our premium Skin Boosters (utilizing world-class Seventy Hyal and Profhilo) act as an injectable moisturizer. By directly depositing high-concentration, ultra-pure hyaluronic acid into the dermal layers, we stimulate cellular receptors to increase natural collagen and elastin synthesis. This floods your entire face with deep, persistent hydration, leaving it intensely dewy, plump, and glowing.",
    priceRange: "From £180",
    duration: "30 - 45 mins",
    iconName: "Droplet",
    benefits: [
      "Floods the dermis with deep, long-duration hydration",
      "Improves overall skin creepiness, fine line texture, and laxity",
      "Accelerates natural collagen and elastin production",
      "Imparts cell-deep luminosity and a healthy bounce"
    ],
    procedureSteps: [
      "In-depth assessment of dermal hydration levels and barrier thickness",
      "Gentle cleansing and application of a medical-grade topical numbing cream",
      "Precise bio-aesthetic point (BAP) micro-droplet deposits of pure Hyaluronic Acid",
      "Soothing dermal massage to distribute hydration and cool clinical compress"
    ],
    bestSuitedFor: [
      "Dehydrated, dull, or tired-looking skin showing signs of early aging",
      "Those who want hydrated, plump skin without adding physical volume or altering facial contours",
      "Anyone experiencing dryness that traditional topicals fail to resolve"
    ]
  },
  {
    id: "microneedling",
    title: "Microneedling",
    description: "Collagen induction therapy utilizing medicalgrade microneedles to improve scarring, texture, and pore size.",
    longDescription: "Our medical-grade Microneedling treatment is a controlled collagen induction therapy. Using sterile, single-use surgical micro-needles, we create thousands of microscopic fractions in the epidermis. This triggers the skin's innate healing response, generating fresh fibroblasts, collagen, and elastin. Combined with our medical-grade recovery serums, it effectively remodels scarred tissue, refines coarse skin texture, and shrinks enlarged pores.",
    priceRange: "From £95",
    duration: "45 - 60 mins",
    iconName: "Grid",
    benefits: [
      "Visibly reduces acne scars, post-inflammatory pigmentation, and age spots",
      "Refines coarse skin texture and shrinks enlarged pores",
      "Improves absorption efficiency of home skincare products by up to 300%",
      "Safe and highly effective for all skin tones and Fitzpatricks"
    ],
    procedureSteps: [
      "Double clinical cleanse and application of strong premium numbing cream for max comfort",
      "Application of customized medical hyaluronic acid or brightening serum glide",
      "Controlled needle passes with safe, sterilized motorized pen at target depths",
      "Soothing application of a sterile sheet mask and advanced recovery cocktail"
    ],
    bestSuitedFor: [
      "Patients looking to clear old acne scars, uneven pigment, or dark marks",
      "Individuals experiencing uneven texture, coarse pores, or fine lines",
      "Anyone seeking a completely drug-free dermal regeneration therapy"
    ]
  },
  {
    id: "chemical-peels",
    title: "Chemical Peel",
    description: "Advanced medical-grade exfoliating acids tailored to your skin concerns to lift dead cells and pigmentation.",
    longDescription: "Ditch traditional harsh scrubs for our scientifically formulated clinical Peels. We carefully select specific combinations of glycolic, salicylic, lactic, or mandelic acids to match your biological skin threshold. By loosening the chemical bonds holding damaged, pigment-heavy cells together, our peeling therapy lifts dead skin buildup to reveal the healthy cells underneath.",
    priceRange: "From £70",
    duration: "30 - 45 mins",
    iconName: "Layers",
    benefits: [
      "Brightens and evens out hyperpigmentation and sun damage",
      "Unclogs congested pores, preventing breakouts and acne",
      "Encourages cell turnover for smooth, baby-soft skin",
      "Customizable depth from superficial to medium with minimal downtime"
    ],
    procedureSteps: [
      "Thorough skin prep to remove lipids, excess oils, and balance skin pH",
      "Bespoke application of the peeling acid blend, carefully monitored by the practitioner",
      "Active neutralization and sterile water cooling rinse",
      "Application of physiological lipids, barrier protection creams, and broad-spectrum SPF 50"
    ],
    bestSuitedFor: [
      "Congested, dull, or acne-prone skin",
      "Individuals struggling with pigment spots, sun-damage, or dark marks",
      "Those looking for rapid skin brightening before a major event"
    ]
  },
  {
    id: "skin-tag-removal",
    title: "Skin Tag Removal",
    description: "Safe, rapid, and hygienic clinical removal of skin tags, lesions, or milia with minimal healing times.",
    longDescription: "Do not risk hazardous at-home remedies. Our skin tag and lesion removal is conducted under absolute sterile clinical conditions by an NHS-trained practitioner. Utilizing safe, minor clinical procedures, we isolate and eliminate problematic skin tags, milia, and benign cosmetic lesions, ensuring minimal disturbance to the surrounding tissue and smooth, aesthetically pleasing healing.",
    priceRange: "From £50",
    duration: "15 - 30 mins",
    iconName: "ShieldCheck",
    benefits: [
      "Quick, minor procedure with immediate, clean results",
      "Conducted using strictly single-use sterile medical tools",
      "Prevents scarring or infection commonly caused by diy options",
      "Gives you back smooth, comfortable skin texture"
    ],
    procedureSteps: [
      "Comprehensive examination of the lesion to confirm benign cosmetic status",
      "Deep sterilization of the targeted skin region and local numbing if required",
      "Precise, aseptic removal of the cosmetic lesion",
      "Application of sterile medical adhesive/antiseptic shield and homecare recovery guidance"
    ],
    bestSuitedFor: [
      "Aesthetic discomfort caused by frictional skin tags on neck, underarms, or body",
      "Persistent milia bumps around eyes or cheeks",
      "Patients seeking safe, sterile clinical removal with minimal scarring"
    ]
  },
  {
    id: "prescriptive-facial",
    title: "Prescriptive Facial",
    description: "Bespoke clinical facial designed around your specific skin goals, incorporating medical serums and massage.",
    longDescription: "Our Prescriptive Facial is the perfect fusion of clinical oncology/dermatology expertise and sensorial spa luxury. Instead of standard menu options, this facial is custom-built on-the-spot. We choose active antioxidants, amino acids, and hydration compounds to feed your skin cells while integrating lymphatic drainage massage to contour and reduce facial puffiness.",
    priceRange: "From £65",
    duration: "60 mins",
    iconName: "Smile",
    benefits: [
      "Totally bespoke to your specific skin needs on the day",
      "Relieves muscle tension, drains fluid retention, and contours cheeks",
      "Restores natural skin barrier function and locks in moisture",
      "A deeply relaxing, serene, and stress-relieving treatment"
    ],
    procedureSteps: [
      "Detailed visual assessment and discussion of your sensory preferences",
      "Bespoke double clinical cleansing, mild enzyme exfoliation, and steamed towels",
      "Manual lymphatic drainage face, neck, and shoulder massage",
      "Bespoke mask infusion followed by targeted medical serums and SPF locks"
    ],
    bestSuitedFor: [
      "Anyone wanting a highly personalized, medical-level, relaxing facial treatment",
      "Stressed individuals needing professional skin maintenance combined with therapeutic touch",
      "All skin types, including sensitive, sensitized, or dry skin"
    ]
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
