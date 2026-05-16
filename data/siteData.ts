export const IMG = {
  logo: '/images/logo.png',
  img1: '/images/hero/shaan-slide1.webp', 
  img2: '/images/hero/shaan-slide2.webp', 
  img3: '/images/hero/shaan-slide3.webp', 
  img4: '/images/img3.jpg', 
  img5: '/images/img4.jpg', 
  img6: '/images/img5.jpg',
  img7: '/images/img6.jpg', 
  img8: '/images/img8.jpg', 
  img9: '/images/img9.jpg', 
  img10: '/images/img10.jpg',
  img11: '/images/img11.jpg', 
  img12: '/images/img12.jpg', 
  img13: '/images/img13.jpg', 
  img14: '/images/img14.jpg', 
  img15: '/images/img15.jpg',
};

export const headerContent = {
  logo: {
    src: IMG.logo,
    alt: 'Shaan Painting DS Group',
    href: '#home',
  },

  brand: {
    title: 'Shaan Painting',
    subtitle: 'DS Group Pty Ltd',
  },

  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ],

  cta: {
    label: '0451 644 200',
    href: 'tel:0451644200',
  },
};

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#process', label: 'Process' },
  { href: '#why', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
];

export const heroSlides = [
  { src: IMG.img1, tag: 'Porch Transformation' },
  { src: IMG.img2, tag: 'Full Exterior Repaint' },
  { src: IMG.img3, tag: 'Heritage Home Restored' }, 
];

export const googleReviewStripContent = {
  logoText: 'Google Reviews',
  rating: '5.0',
  label: 'Trusted by homeowners across Australia',
  badges: ['5-Star Service', 'Professional & Reliable', 'Licensed & Insured'],
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
        { label: 'Exterior Painting', href: '#services' },
        { label: 'Interior Painting', href: '#services' },
        { label: 'Weatherboard Restore', href: '#services' },
        { label: 'Doors & Trim', href: '#services' },
        { label: 'New Construction', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Our Work', href: '#gallery' },
        { label: 'Our Process', href: '#process' },
        { label: 'About Us', href: '#about' },
        { label: 'Contact Us', href: '#contact' },
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
      label: 'Shaanpainting3978@gmail.com',
      href: 'mailto:Shaanpainting3978@gmail.com',
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

export const services = [
  ['01', '🏠', 'Interior House Painting Melbourne', 'Full repaints — weatherboard prep, power wash, prime and topcoat. We restore aged exteriors to pristine condition that lasts.'],
  ['02', '🛋️', 'Exterior House Painters Melbourne', 'Walls, ceilings, trims and built-ins. We protect your furnishings, fill and sand all defects, and deliver a smooth lasting finish.'],
  ['03', '🖌️', 'Weatherboard Restoration', 'Specialist stripping and repainting of deteriorated weatherboard — full surface repair, prime and premium topcoats applied.'],
  ['04', '🚪', 'New Home Painting', 'Heritage doors, French doors, window frames — stained, painted or varnished to bring timber back to life beautifully.'],
  ['05', '🏗️', 'Commercial Painting Services', 'Working alongside builders on new homes and renovations — on time, on budget, and to exact specification every time.'],
  ['06', '🏘️', 'Roof & Timber Painting', 'Verandah floors, outdoor decks — proper surface prep and quality deck paint for a hard-wearing, beautiful result underfoot.'],
];

export const galleryData = [
  { src: IMG.img1, label: 'Porch Repaint', cls: 'c5 r2' },
  { src: IMG.img6, label: 'Kitchen Interior', cls: 'c4' },
  { src: IMG.img10, label: 'French Doors White', cls: 'c3' },
  { src: IMG.img7, label: 'Exterior Repaint', cls: 'c7' },
  { src: IMG.img9, label: 'Bedroom Progress', cls: 'c3 r2' },
  { src: IMG.img2, label: 'Heritage Exterior', cls: 'c4' },
  { src: IMG.img12, label: 'Dark French Doors', cls: 'c4' },
  { src: IMG.img15, label: 'Bedroom After', cls: 'c4' },
  { src: IMG.img14, label: 'Cottage After', cls: 'c5' },
];

export const beforeAfter = [
  { b: IMG.img4, a: IMG.img2, t: 'Weatherboard Exterior' },
  { b: IMG.img5, a: IMG.img1, t: 'Front Porch & Entry' },
  { b: IMG.img8, a: IMG.img14, t: 'Heritage Cottage' },
  { b: IMG.img11, a: IMG.img7, t: 'Side Exterior Repaint' },
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
    src: IMG.img2,
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
    src: IMG.img2,
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
