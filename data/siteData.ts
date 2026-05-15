export const IMG = {
  logo: '/images/logo.png',
  img1: '/images/img1.jpg', img2: '/images/img2.jpg', img3: '/images/img3.jpg', img4: '/images/img4.jpg', img5: '/images/img5.jpg',
  img6: '/images/img6.jpg', img7: '/images/img7.jpg', img8: '/images/img8.jpg', img9: '/images/img9.jpg', img10: '/images/img10.jpg',
  img11: '/images/img11.jpg', img12: '/images/img12.jpg', img13: '/images/img13.jpg', img14: '/images/img14.jpg', img15: '/images/img15.jpg',
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
  { src: IMG.img7, tag: 'Full Exterior Repaint' },
  { src: IMG.img2, tag: 'Heritage Home Restored' },
  { src: IMG.img14, tag: 'Cottage Restoration' },
  { src: IMG.img10, tag: 'Interior French Doors' },
];

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

export const services = [
  ['01', '🏠', 'Exterior House Painting', 'Full repaints — weatherboard prep, power wash, prime and topcoat. We restore aged exteriors to pristine condition that lasts.'],
  ['02', '🛋️', 'Interior Painting', 'Walls, ceilings, trims and built-ins. We protect your furnishings, fill and sand all defects, and deliver a smooth lasting finish.'],
  ['03', '🪵', 'Weatherboard Restoration', 'Specialist stripping and repainting of deteriorated weatherboard — full surface repair, prime and premium topcoats applied.'],
  ['04', '🚪', 'Doors & Trim', 'Heritage doors, French doors, window frames — stained, painted or varnished to bring timber back to life beautifully.'],
  ['05', '🏗️', 'New Construction', 'Working alongside builders on new homes and renovations — on time, on budget, and to exact specification every time.'],
  ['06', '🎨', 'Porch, Deck & Floor', 'Verandah floors, outdoor decks — proper surface prep and quality deck paint for a hard-wearing, beautiful result underfoot.'],
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
      description:
        'All work completed by licenced professionals with full public liability insurance for your peace of mind.',
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