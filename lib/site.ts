export const siteConfig = {
  name: 'Lev Learning Hub Centre',
  shortName: 'Lev Learning Hub',
  description:
    'Lev Learning Hub Centre offers professional tutoring for primary school, high school, varsity students, and computer skills training with centre-based, home-to-home, and online learning options.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://levlearning.co.za',
  locale: 'en_ZA',
  email: 'info@levlearning.co.za',
  phone: '+27670279825',
  whatsapp: 'https://wa.me/27670279825',
  address: {
    streetAddress: '47 Robert Sobukwe Street, Sunnyside',
    addressLocality: 'Pretoria',
    addressCountry: 'ZA',
  },
  keywords: [
    'tutoring centre Pretoria',
    'tutors South Africa',
    'primary school tutoring',
    'high school tutoring',
    'matric tutoring',
    'varsity student support',
    'computer skills training',
    'online tutoring South Africa',
    'home tutoring Pretoria',
    'Lev Learning Hub Centre',
  ],
} as const
