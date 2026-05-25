export const IMG = {
  logo: '/images/logo.png',

  hero1: '/images/hero/hero-slide1.webp', 
  hero2: '/images/hero/hero-slide2.webp', 
  hero3: '/images/hero/hero-slide3.webp', 
  hero4: '/images/hero/hero-slide4.webp', 
  hero5: '/images/hero/hero-slide5.webp',
  
  aboutwhy: '/images/about-pic.webp',

  gal1: '/images/gallery/gal1.webp', 
  gal2: '/images/gallery/gal2.webp', 
  gal3: '/images/gallery/gal3.webp',
  gal4: '/images/gallery/gal4.webp',
  gal5: '/images/gallery/gal5.webp',
  gal6: '/images/gallery/gal6.webp',
  gal7: '/images/gallery/gal7.webp',
  gal8: '/images/gallery/gal8.webp',
  gal9: '/images/gallery/gal9.webp',
  gal10: '/images/gallery/gal10.webp',
  gal11: '/images/gallery/gal11.webp',
  gal12: '/images/gallery/gal12.webp',
  gal13: '/images/gallery/gal13.webp',
  gal14: '/images/gallery/gal14.webp',
  gal15: '/images/gallery/gal15.webp',
  
  b1: '/images/before-after/p1-before.webp',
  a1: '/images/before-after/p1-after.webp',
  
  b2: '/images/before-after/p2-before.webp',
  a2: '/images/before-after/p2-after.webp',
  
  b3: '/images/before-after/p3-before.webp',
  a3: '/images/before-after/p3-after.webp',

  b4: '/images/before-after/p4-before.webp',
  a4: '/images/before-after/p4-after.webp',
  
  b5: '/images/before-after/p5-before.webp',
  a5: '/images/before-after/p5-after.webp',
  
  b6: '/images/before-after/p6-before.webp',
  a6: '/images/before-after/p6-after.webp',
};

// export const heroSlidesold = [
//   { src: IMG.hero1, tag: 'Exterier Painting' },
//   { src: IMG.hero2, tag: 'Full Exterior Repaint' },
//   { src: IMG.hero3, tag: 'Heritage Home Restored' }, 
//   { src: IMG.hero4, tag: 'Outside Home Restored' },
//   { src: IMG.hero5, tag: 'Doors & Trim' },
// ];

export const heroSlides = [
  {
    src: '/images/hero/hero-slide1.webp',
    mobileSrc: '/images/hero/mob-slide1.webp',
    tag: 'Exterier Painting',
  },
  {
    src: '/images/hero/hero-slide2.webp',
    mobileSrc: '/images/hero/mob-slide2.webp',
    tag: 'Full Exterior Repaint',
  },
  {
    src: '/images/hero/hero-slide3.webp',
    mobileSrc: '/images/hero/mob-slide3.webp',
    tag: 'Heritage Home Restored',
  },
  {
    src: '/images/hero/hero-slide4.webp',
    mobileSrc: '/images/hero/mob-slide4.webp',
    tag: 'Doors & Trim',
  },
  {
    src: '/images/hero/hero-slide5.webp',
    mobileSrc: '/images/hero/mob-slide5.webp',
    tag: 'Doors & Trim',
  },
];

export const headerContent = {
  logo: {
    src: IMG.logo,
    alt: 'Shaan Painting DS Group',
    href: '/',
  },

  brand: {
    title: 'Shaan Painting',
    subtitle: 'DS Group Pty Ltd',
  },

  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Areas We Service', href: '/#areas' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Process', href: '/#process' },
    { label: 'Why Choose Us', href: '/#why-choose' },
    { label: 'Contact Us', href: '/#contact' },
  ],

  cta: {
    label: '0451 644 200',
    href: 'tel:0451644200',
  },
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#areas', label: 'Areas We Service' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#process', label: 'Process' },
  { href: '/#why-choose', label: 'Why Choose Us' },
  { href: '/#contact', label: 'Contact' },
];

export const googleReviewStripContent = {
  logoText: 'Google Reviews',
  rating: '5.0',
  label: 'Trusted by homeowners across Australia',
  badges: ['5-Star Service', 'Fully insured', 'Dulux premium paint', ' No deposit', 'Payment after quality check'],
};

export const footerContent = {
  brand: {
    logo: IMG.logo,
    alt: 'Shaan Painting',
    name: 'Shaan Painting',
    subtitle: 'DS Group Pty Ltd',
    description:
      'Premium residential painting services. Delivering flawless results through expert preparation, quality materials, and meticulous craftsmanship on every project.',
  },

  columns: [
    {
      title: 'Services',
      links: [
        { label: 'Exterior Painting', href: '/#services' },
        { label: 'Interior Painting', href: '/#services' },
        { label: 'Weatherboard Restore', href: '/#services' },
        { label: 'New Home Painting', href: '/#services' },
        { label: 'Roof & Timber Painting', href: '/#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Work', href: '/#gallery' },
        { label: 'Our Process', href: '/#process' },
        { label: 'About Us', href: '/#about' },
        { label: 'Contact Us', href: '/#contact' },
        { label: 'Testimonials', href: '/#reviews' },
      ],
    },
  ],

  contact: {
    title: 'Contact',
    phone: {
      label: '0451 644 200',
      href: 'tel:0451644200',
    },
    email: {
      label: 'contact@shaanpainting.com',
      href: 'mailto:contact@shaanpainting.com',
    },
    cta: {
      label: 'Request a Quote',
      href: '#contact',
    },
  },

  bottom: {
    copyright: `© ${new Date().getFullYear()} Shaan Painting DS Group Pty Ltd. All rights reserved.`,
    note: 'Licensed · Insured · Professional',
  },
};

export const services = [
  ['01', '🏠', 'Interior House Painting Melbourne', 'Walls, ceilings, trims and built-ins. We protect your furnishings, fill and sand all defects, and deliver a smooth lasting finish.'],
  ['02', '🛋️', 'Exterior House Painters Melbourne', 'Full repaints — weatherboard prep, power wash, prime and topcoat. We restore aged exteriors to pristine condition that lasts.'],
  ['03', '🖌️', 'Weatherboard Restoration', 'Specialist stripping and repainting of deteriorated weatherboard — full surface repair, prime and premium topcoats applied.'],
  ['04', '🚪', 'New Home Painting', 'Heritage doors, French doors, window frames — stained, painted or varnished to bring timber back to life beautifully.'],
  ['05', '🏗️', 'Commercial Painting Services', 'Working alongside builders on new homes and renovations — on time, on budget, and to exact specification every time.'],
  ['06', '🏘️', 'Roof & Timber Painting', 'Verandah floors, outdoor decks — proper surface prep and quality deck paint for a hard-wearing, beautiful result underfoot.'],
];

export const galleryData = [
  { src: IMG.gal1, label: 'Porch Repaint', cls: 'c5 r2' },
  { src: IMG.gal2, label: 'Heritage Exterior', cls: 'c4' },
  { src: IMG.gal3, label: 'Interior House Painting', cls: 'c3' },
  { src: IMG.gal4, label: 'Room Painting', cls: 'c7' },
  { src: IMG.gal5, label: 'Kitchen Interior', cls: 'c3 r2' },
  { src: IMG.gal6, label: 'French Doors White', cls: 'c4' },
  { src: IMG.gal7, label: 'Sky Window Ceiling', cls: 'c4' },
  { src: IMG.gal8, label: 'Exterior Repaint', cls: 'c4' },
];

export const beforeAfter = [
  { b: IMG.b1, a: IMG.a1, t: 'Kitchen' },
  { b: IMG.b2, a: IMG.a2, t: 'Exterior Weatherboard' },
  { b: IMG.b3, a: IMG.a3, t: 'Interior House Painting' },
  { b: IMG.b4, a: IMG.a4, t: 'Front Porch & Entry' },
  { b: IMG.b5, a: IMG.a5, t: 'Timber Door Repaint' },
  { b: IMG.b6, a: IMG.a6, t: 'Interior Room Painting' },
];

export const processSteps = [
  ['1', 'Free On-Site Quote', 'We visit your property, assess the full scope, and provide a detailed written quote — usually same day.'],
  ['2', 'Colour Selection', 'We help you find the perfect colours with free sample patches applied before any work begins.'],
  ['3', 'Expert Preparation', 'Surfaces cleaned, sanded, filled and primed — our meticulous prep is what makes the difference.'],
  ['4', 'Flawless Finish', "Premium paint applied with care. We clean up completely and only leave when you're 100% satisfied."],
];

export const whyChooseUsContent = {
  eyebrow: 'Why Choose Shaan',
  title: 'Why Homeowners',
  highlight: 'Trust Us.',
  intro:
    'We are a locally trusted painting company committed to quality, honesty and results that last. Every job — big or small — receives the same professional standard.',

  image: {
    src: IMG.aboutwhy,
    alt: 'Quality painting work',
  },

  button: {
    label: 'Get Free Quote Today',
    href: '#contact',
  },

  stats: [
    { value: '500+', label: 'Projects Done' },
    { value: '10+', label: 'Years Exp.' },
    { value: '100%', label: 'Guaranteed' },
  ],

  items: [
    {
      title: 'Fully Insured',
      description:
        "All work covered by full public liability insurance. You're completely protected on every single job.",
    },
    {
      title: 'Dulux Premium Paints',
      description:
        'We use only premium Dulux and quality brand paints — better coverage, richer colour, longer lasting finish.',
    },
    {
      title: 'No Deposit Required',
      description:
        'We never ask for upfront deposits. Start your project with complete confidence and zero financial risk.',
    },
    {
      title: 'Payment After Quality Work',
      description:
        'You only pay when you are 100% satisfied with the finished result. Your satisfaction is our guarantee.',
    },
    {
      title: 'Professional Preparation',
      description:
        'Expert sanding, filling, priming and cleaning before any paint is applied. This is what makes results last.',
    },
    {
      title: 'Free On-Site Quotes',
      description:
        'Detailed, honest quotes at no cost and no pressure. We visit your property and give you a fair price.',
    },
    {
      title: 'Reliable Communication',
      description:
        'We keep you updated at every stage. No surprises — just clear, honest communication from start to finish.',
    },
    {
      title: 'Spotless Worksite',
      description:
        'All surfaces protected, all drop sheets laid. We leave your home cleaner than we found it — every time.',
    },
  ],

  ctaStrip: {
    title: 'Ready to get started?',
    text: 'Call us today for a free, no-obligation on-site quote.',
    call: {
      label: '0451 644 200',
      href: 'tel:0451644200',
    },
    quote: {
      label: 'Free Quote',
    },
  },
};

export const whyChooseContent = {
  eyebrow: 'Why Choose Shaan',
  title: 'The Standard Others',
  highlight: 'Try to Match.',
  image: {
    src: IMG.hero2,
    alt: 'Quality painting work',
  },
  items: [
    {
      icon: '✓',
      title: 'Quality First. Payment After Satisfaction.',       
    },
    {
      icon: '🔍',
      title: 'No Deposits. No Shortcuts. Just Quality Work',
    },
    {
      icon: '⏱',
      title: 'The Finish Speaks For Itself.',
    },
    {
      icon: '📋',
      title: 'Built on Trust. Finished with Quality.',
    },
    {
      icon: '🧹',
      title: 'Professional Painting Without the Stress.',
    },
    {
      icon: '🎨',
      title: 'Melbourne Painters Who Actually Care About Prep.',
    },
    {
      icon: '🛡️',
      title: 'Fully Insured. Fully Committed.',
    },
    {
      icon: '✨',
      title: 'Where Proper Preparation Meets Premium Finishes.',
    },
  ],
};

export const googleTestimonialsContent = {
  eyebrow: 'What Customers Say',
  title: 'Real Google Reviews',
  highlight: 'From Happy Clients.',

  badge: {
    source: 'Google',
    rating: '5.0',
    outOf: '/ 5.0',
    count: 'Click here to show real review',
  },

  reviews: [
    {
      initial: 'T',
      name: 'Tim Holroyd',
      date: '2 weeks ago',
      avatarClass: 'avatarBlue',
      text: 'Shaan painted inside and out at my house in Inverloch, and did a great job. Shaan was polite, punctual and efficient, and did everything promised in the quotation, and a few extra bits too. His ongoing communication and reporting was also very much appreciated. I’m very happy with his work, and I wouldn’t hesitate to recommend his services.',
      service: 'Exterior Painting',
    },
    {
      initial: 'A',
      name: 'Anna Antonijevic',
      date: '1 month ago',
      avatarClass: 'avatarGreen',
      text: 'Shaan did an outstanding job painting our house in Traralgon. We needed all internal walls (including wet areas and the kitchen) painted. We can not be happier with the quality of his work - the house now looks so beautiful and fresh. Shaan has always been very responsive with great communication, easy to work with, and a high standard of professionalism ...',
      service: 'Interior Painting',
    },
    {
      initial: 'D',
      name: 'Daniel MacRae',
      date: '2 month ago',
      avatarClass: 'avatarRed',
      text: "Fantastic service. Great communication throughout my job. Very happy with his workmanship. Highly recommend",
      service: 'Weatherboard Restore',
    },
    {
      initial: 'M',
      name: 'Maudy Chirisa',
      date: '2 months ago',
      avatarClass: 'avatarYellow',
      text: 'I recently hired Shaan from Shaan Painting DS Group for a house painting job in Pakenham and I’m very happy with the result. At the time he didn’t have many reviews, but after speaking with him I decided to give him the opportunity — and he proved himself. Shaan is a professional and reliable house painter in Melbourne. He prepared the walls properly with sanding, patching, ...',
      service: 'New Construction',
    }
  ],

  overall: {
    label: 'Google Rating',
    rating: '5.0',
    stats: [
      { value: '100%', label: '5-Star Reviews' },
      { value: '500+', label: 'Happy Clients' },
      { value: '10+', label: 'Years Trusted' },
    ],
    cta: {
      label: 'Get Your Free Quote',
      href: '#contact',
    },
  },
};


export const quoteFormContent = {
  header: {
    eyebrow: 'Free On-Site Visit — No Obligation',
    title: 'Request Your Free Quote',
  },

  quickContact: {
    phone: {
      label: '0451 644 200',
      href: 'tel:0451644200',
    },
    email: {
      label: 'contact@shaanpainting.com',
      href: 'mailto:contact@shaanpainting.com',
    },
  },

  fields: [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name *',
      placeholder: 'John',
      required: true,
      half: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'Smith',
      required: false,
      half: true,
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'john@example.com',
      required: true,
      half: true,
    },
    {
      type: 'tel',
      name: 'phone',
      label: 'Phone Number *',
      placeholder: '04XX XXX XXX',
      half: true,
      required: true,
    },
    {
      type: 'text',
      name: 'suburb',
      label: 'Suburb',
      placeholder: 'Suburb',
      required: false,
      half: false,
    },
    {
      type: 'select',
      name: 'service',
      label: 'Service Needed',
      placeholder: 'Select a service…',
      options: [
        'Exterior Painting',
        'Interior Painting',
        'Weatherboard Restoration',
        'Doors & Trim',
        'New Construction',
        'Porch / Deck',
        'Other',
      ],
    },
    {
      type: 'textarea',
      name: 'address',
      label: 'Address',
      placeholder: 'Address',
      rows: 4,
    },
    {
      type: 'textarea',
      name: 'projectDetails',
      label: 'Project Details optional',
      placeholder: 'Briefly describe your property…',
      rows: 3,
    },
  ],

  buttons: {
    submit: 'Send Quote Request →',
    later: "Maybe Later — I'll explore the site first",
  },

  success: {
    title: 'Quote Request Sent!',
    text: "Thank you! We'll be in touch within 24 hours with your detailed, no-obligation quote.",
  },
};


// Services Page
export const servicesPageContent = {
  hero: {
    eyebrow: 'Our Services',
    title: 'Professional Painting',
    highlight: 'Services.',
    description:
      'Shaan Painting DS Group provides premium residential painting services across Melbourne and regional Victoria with honest quotes, expert preparation and flawless finishes.',
    stats: [
      { value: '500+', label: 'Projects Done' },
      { value: '10+', label: 'Years Exp.' },
      { value: '100%', label: 'Satisfaction' },
    ],
  },

  search: {
    placeholder: 'Search service or area...',
  },

  regions: [
    {
      id: 'exterior_painting',
      icon: '🏠',
      title: 'Exterior Painting',
      description: 'Premium exterior repainting for homes, weatherboards and outdoor surfaces.',
      suburbs: [
        'Full Exterior Repaints',
        'Weatherboard Painting',
        'Render Painting',
        'Fence Painting',
        'Garage Painting',
        'Exterior Surface Preparation',
        'Power Washing',
        'Primer & Topcoat',
      ],
    },
    {
      id: 'interior_painting',
      icon: '🛋️',
      title: 'Interior Painting',
      description: 'Clean, smooth and professional finishes for every room in your home.',
      suburbs: [
        'Walls Painting',
        'Ceiling Painting',
        'Bedroom Painting',
        'Living Room Painting',
        'Kitchen Painting',
        'Bathroom Painting',
        'Feature Walls',
        'Touch Ups',
      ],
    },
    {
      id: 'weatherboard_restoration',
      icon: '🪵',
      title: 'Weatherboard Restoration',
      description: 'Specialist restoration for old, peeling and damaged weatherboard homes.',
      suburbs: [
        'Peeling Paint Removal',
        'Sanding',
        'Gap Filling',
        'Timber Repair',
        'Weatherboard Priming',
        'Premium Topcoats',
        'Long Lasting Protection',
      ],
    },
    {
      id: 'doors_and_trim',
      icon: '🚪',
      title: 'Doors & Trim',
      description: 'Detailed painting for doors, trims, windows, skirting and timber features.',
      suburbs: [
        'Front Doors',
        'French Doors',
        'Window Frames',
        'Skirting Boards',
        'Architraves',
        'Timber Trims',
        'Varnish & Stain',
      ],
    },
    {
      id: 'new_construction',
      icon: '🏗️',
      title: 'New Construction Painting',
      description: 'Reliable painting support for new homes, renovations and builder projects.',
      suburbs: [
        'New Homes',
        'Renovations',
        'Builder Projects',
        'Final Finish Painting',
        'Internal & External Painting',
        'Defect Touch Ups',
      ],
    },
    {
      id: 'porch_deck_floor',
      icon: '🎨',
      title: 'Porch, Deck & Floor Painting',
      description: 'Durable finishes for outdoor floors, decks, verandahs and porch areas.',
      suburbs: [
        'Deck Painting',
        'Porch Painting',
        'Verandah Floors',
        'Outdoor Timber Coating',
        'Anti-Slip Coatings',
        'Deck Staining',
      ],
    },
  ],

  cta: {
    tag: 'Free On-Site Quote',
    title: 'Need professional painters?',
    description:
      'Call Shaan Painting DS Group today for a free, no-obligation painting quote tailored to your home.',
    phone: {
      label: '0451 644 200',
      href: 'tel:0451644200',
    },
    quoteButton: 'Request Free Quote',
    secondaryButton: {
      label: 'Back to Home',
      href: '/',
    },
  },
};


// Area we server
export const areasWeServiceContent = {
  eyebrow: 'Where We Work',
  title: 'Areas We Service',
  description:
    'From residential to commercial projects — premium painting across Melbourne & Regional Victoria. 77+ suburbs covered.',
  searchPlaceholder: 'Search suburb…',
  cta: {
    label: 'Free Quote',
    href: 'tel:0451644200',
  },
  footer: {
    text: "Don't see your suburb? We regularly travel across Victoria — call us to check.",
    phoneLabel: '0451 644 200',
    phoneHref: 'tel:0451644200',
  },
  areas: [
    {
      region: 'South-East Melbourne',
      icon: '🏙️',
      suburbs: [
        'Berwick',
        'Pakenham',
        'Cranbourne',
        'Clyde North',
        'Narre Warren',
        'Dandenong',
        'Keysborough',
        'Springvale',
        'Glen Waverley',
        'Wheelers Hill',
        'Clayton',
        'Oakleigh',
        'Richmond',
        'Frankston',
        'Brighton',
      ],
    },
    {
      region: 'Gippsland Region',
      icon: '🌿',
      suburbs: [
        'Warragul',
        'Drouin',
        'Moe',
        'Morwell',
        'Traralgon',
        'Leongatha',
        'Sale',
        'Bairnsdale',
        'Inverloch',
        'Venus Bay',
        'Wonthaggi',
        'Phillip Island',
      ],
    },
    {
      region: 'Melbourne West',
      icon: '🌅',
      suburbs: [
        'Tarneit',
        'Truganina',
        'Werribee',
        'Point Cook',
        'Hoppers Crossing',
        'Melton',
        'Caroline Springs',
        'Sunshine',
        'Footscray',
        'Williamstown',
      ],
    },
    {
      region: 'Ballarat Region',
      icon: '🏔️',
      suburbs: [
        'Ballarat',
        'Lucas',
        'Delacombe',
        'Alfredton',
        'Sebastopol',
        'Wendouree',
        'Ballan',
        'Creswick',
      ],
    },
    {
      region: 'Geelong & Surf Coast',
      icon: '🌊',
      suburbs: [
        'Geelong',
        'Belmont',
        'Grovedale',
        'Waurn Ponds',
        'Torquay',
        'Ocean Grove',
        'Barwon Heads',
        'Lara',
        'Armstrong Creek',
      ],
    },
    {
      region: 'Macedon Ranges',
      icon: '🌄',
      suburbs: [
        'Gisborne',
        'Woodend',
        'Kyneton',
        'Romsey',
        'Macedon',
        'Sunbury',
        'Daylesford',
      ],
    },
    {
      region: 'Melbourne North',
      icon: '🌳',
      suburbs: [
        'Craigieburn',
        'Mickleham',
        'Roxburgh Park',
        'Epping',
        'South Morang',
        'Greensborough',
        'Diamond Creek',
        'Eltham',
      ],
    },
    {
      region: 'Melbourne East',
      icon: '🏡',
      suburbs: [
        'Ringwood',
        'Croydon',
        'Mitcham',
        'Nunawading',
        'Blackburn',
        'Box Hill',
        'Doncaster',
        'Templestowe',
      ],
    },
  ],
};


export const mobileStickyContent = {
  call: {
    label: 'Call Now',
    text: '0451 644 200',
    href: 'tel:0451644200',
  },
  quote: {
    label: 'Free Quote',
    text: 'No obligation',
  },
};