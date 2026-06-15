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
    id: "laser-hair-removal",
    title: "Laser Hair Removal",
    description: "Medical-grade permanent reduction of unwanted facial and body hair for silky, long-lasting smoothness with absolute clinical safety.",
    longDescription: "Say goodbye to daily shaving, painful waxing, and ingrown hairs. Our state-of-the-art laser system safely and selectively targets active hair follicles, emitting localized light energy to disable root growth at the source. Led by an experienced NHS-trained clinician, this procedure is adapted precisely to your skin type and hair density, ensuring highly comfortable treatments and permanent, beautifully smooth skin.",
    priceRange: "From £40",
    duration: "15 - 60 mins",
    iconName: "Grid",
    benefits: [
      "Permanent, clinically-proven reduction of active hair follicles",
      "Prevents irritating razor bumps and painful ingrown hairs",
      "Bespoke adjustable parameters for maximum skin safety",
      "Suitable for a broad range of skin types and body areas"
    ],
    procedureSteps: [
      "In-depth patch test, melanin mapping and custom parameter planning",
      "Thorough skin sterilization and protective eye shield fitting",
      "Step-by-step laser application paired with intelligent epidermal cooling",
      "Post-treatment application of soothing physiological restorers and SPF 50"
    ],
    bestSuitedFor: [
      "Individuals looking for a permanent release from shaving or waxing",
      "Anyone suffering from recurrent folliculitis or painful ingrown hairs",
      "Patients seeking professional-grade laser comfort under clinical guidance"
    ]
  },
  {
    id: "laser-skin-rejuvenation",
    title: "Laser Skin Rejuvenation",
    description: "Advanced non-invasive laser treatments designed to stimulate natural collagen, refine skin texture, and restore healthy bounce.",
    longDescription: "Restore your skin's youthful radiance with our customized Laser Skin Rejuvenation protocol. Delivering controlled thermal pulses beneath the epidermis, we gently trigger your skin's natural healing cascade. This stimulates premium fibroblast activity, encouraging fresh collagen regeneration. This advanced non-ablative therapy refines uneven skin texture, softens static fine lines, and firms the skin network with virtually zero clinical downtime.",
    priceRange: "From £120",
    duration: "30 - 45 mins",
    iconName: "Sparkles",
    benefits: [
      "Stimulates deep natural collagen and elastin synthesis",
      "Smoothing of skin micro-texture, fine lines, and mild surface irregularities",
      "Extremely low downtime, allowing immediate return to routine",
      "Restores a uniform, radiant aesthetic dewiness across the facial canvas"
    ],
    procedureSteps: [
      "Comprehensive analysis of dermal thickness and texture planning",
      "Deep clinical cleanse followed by skin sanitization",
      "Precise, controlled energy passes over critical facial zones",
      "Soothing custom recovery serum application and protective lipid seal"
    ],
    bestSuitedFor: [
      "Early signs of skin laxity, fine lines, or superficial texture issues",
      "Dull, tired-looking skin needing a powerful collagen-induction boost",
      "Active professionals desiring visible dermal renewal with minimal recovery time"
    ]
  },
  {
    id: "pigmentation-treatments",
    title: "Pigmentation Treatment",
    description: "Precision laser therapy targeting sun damage, age spots, and uneven melanin patches for a beautifully unified skin tone.",
    longDescription: "Achieve a clear, perfectly balanced complexion with our focused Pigmentation Treatments. Utilizing precision wavelength technology, we selectively target and break down excess localized melanin clusters associated with sun damage, solar lentigines, and age spots. Once fragmented, these pigment particles are naturally and safely resorbed through your body's immune system, leaving behind a beautifully uniform, bright skin texture.",
    priceRange: "From £80",
    duration: "20 - 45 mins",
    iconName: "Layers",
    benefits: [
      "Fades stubborn sun spots, solar freckles, and pigmentation patches",
      "Restores a unified, bright, and beautifully even-toned complexion",
      "Highly precise targeting with zero damage to surrounding skin layers",
      "Promotes faster cell turnover for refreshed dermal health"
    ],
    procedureSteps: [
      "Visual mapping and pigmentation assessment to verify lesion type",
      "Double clinical skin preparation and gentle mechanical surface prep",
      "Targeted laser pulses delivered directly to focused pigment points",
      "Post-laser application of customized antioxidant serum, cooling gel, and SPF"
    ],
    bestSuitedFor: [
      "Stubborn dark spots, solar sun spots, and patchy melanin accumulation",
      "Those who want to replace muddy, uneven color with a clean glow",
      "Patients preferring medical-grade non-surgical skin tone correction"
    ]
  },
  {
    id: "thread-vein-removal",
    title: "Thread Vein Removal",
    description: "Fast and effective vascular therapy utilizing advanced light and heat energy to collapse and eliminate facial spider veins.",
    longDescription: "Facial spider veins and fine red capillaries can create persistent redness that makeup fails to conceal. Our vascular capillary treatment utilizes targeted energy matching the absorption spectrum of damaged blood vessels. The heat collapses the micro-vessel walls, sealing them safely and instantly. Over the following weeks, your system naturally resorbs the collapsed vessel tissue, leading to a beautifully even, clear-toned complexion.",
    priceRange: "From £90",
    duration: "15 - 30 mins",
    iconName: "Droplet",
    benefits: [
      "Targets and eliminates visible facial spider veins and red capillaries",
      "Highly visible clearing, often immediately following treatment",
      "Non-invasive procedure with clean and healthy healing cycles",
      "Reduces dynamic facial flush and chronic superficial redness"
    ],
    procedureSteps: [
      "Close vascular analysis under professional examination lights",
      "Thorough skin sanitization and application of a light conductive clinical gel",
      "Bespoke laser or light wavelength triggers directly onto target vessels",
      "Cleansing of the area and application of specialized vascular recovery balm"
    ],
    bestSuitedFor: [
      "Aesthetic concern over prominent red or blue spider veins on nose and cheeks",
      "Persistent facial redness caused by tiny dilated capillaries",
      "Anyone looking for quick, non-surgical relief from superficial vascular blemishes"
    ]
  },
  {
    id: "blemish-removal",
    title: "Blemish Removal",
    description: "Safe, sterile clinic procedures to hygienically isolate and eliminate skin tags, cherry angiomas, milia, and cosmetic marks.",
    longDescription: "Do not risk hazardous or scarring at-home removal methods. Our professional Blemish Removal treatments are conducted under strict safety guidelines by an NHS-trained clinical practitioner. We utilize minor clinical procedures to carefully isolate and cleanly eliminate uncomfortable skin tags, cherry angiomas, persistent milia bumps, and benign superficial blemishes. This ensures the surrounding dermal layer is perfectly preserved for a smooth, scar-free, and comfortable recovery.",
    priceRange: "From £50",
    duration: "15 - 30 mins",
    iconName: "ShieldCheck",
    benefits: [
      "Clean, swift cosmetic removal with minimal to no healing marks",
      "Perfect clinical sterility ensuring absolute infection prevention",
      "Hygienic extraction of milia, cherry angiomas, and solar blemishes",
      "Restores smooth skin topography and facial comfort"
    ],
    procedureSteps: [
      "Careful inspection of blemish type to ensure benign cosmetic nature",
      "Deep sterilization of the skin area and precision clinical mapping",
      "Gentle target separation or precise aseptic removal",
      "Application of sterile protection serum and barrier adhesive shield"
    ],
    bestSuitedFor: [
      "Irritating or raised skin tags catching on clothing around neck or body",
      "Small red cherry angiomas or white sebaceous milia on face and eyelids",
      "Anyone wanting safe, rapid clinical extraction instead of dangerous DIY tools"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Sarah Jenkins",
    location: "Morley, Leeds",
    rating: 5,
    treatment: "Laser Skin Rejuvenation",
    quote: "I can't recommend Confidence & Glow enough! Being treated by an NHS-trained professional made me feel so incredibly safe. Mantas explained everything beautifully and my laser skin rejuvenation results are so clear and radiant. Absolute 5-star experience!",
    date: "May 2026"
  },
  {
    id: "rev-2",
    name: "Rebecca Thorne",
    location: "Gildersome, Leeds",
    rating: 5,
    treatment: "Laser Hair Removal",
    quote: "My skin has never looked this radiant or healthy! The clinic is stunning, exceptionally clean, and so relaxing. The laser hair removal sessions have been life-changing—virtually painless and amazing results.",
    date: "June 2026"
  },
  {
    id: "rev-3",
    name: "James Radcliffe",
    location: "Churwell, Morley",
    rating: 5,
    treatment: "Thread Vein & Blemish Removal",
    quote: "Professional, hygienic, and highly skilled treatment. I had a stubborn blemish and some thread veins removed. Mantas' medical background shone through immediately — everything was sterile and explained thoroughly.",
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
