import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  BookOpen,
  GraduationCap,
  Monitor,
  Star,
  CheckCircle,
  ArrowRight,
  Home,
  Wifi,
  Building2,
  Award,
} from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Expert Tutors in Pretoria',
  description:
    'Lev Learning Hub Centre provides primary school, high school, varsity, and computer skills tutoring in Pretoria with centre-based, home, and online options.',
  path: '/',
})

const services = [
  {
    icon: BookOpen,
    title: 'Primary School Tutoring',
    description:
      'Nurturing young minds with patient, engaging support across all core subjects from Grade 1 to Grade 7.',
    subjects: ['Mathematics', 'English', 'Natural Sciences', 'Social Sciences'],
    href: '/services',
  },
  {
    icon: GraduationCap,
    title: 'High School Tutoring',
    description:
      'Expert guidance for Grade 8–12 learners preparing for tests, exams, and matric finals.',
    subjects: ['Mathematics', 'Physical Sciences', 'Accounting', 'English'],
    href: '/services',
  },
  {
    icon: Award,
    title: 'Varsity Student Support',
    description:
      'Specialised academic mentoring and tutoring for university and college students.',
    subjects: ['Statistics', 'Economics', 'Research Skills', 'Academic Writing'],
    href: '/services',
  },
  {
    icon: Monitor,
    title: 'Computer Skills Training',
    description:
      'Practical computer literacy and digital skills training for learners and adults.',
    subjects: ['MS Office Suite', 'Internet Basics', 'Typing Skills', 'Digital Literacy'],
    href: '/services',
  },
]

const formats = [
  {
    icon: Building2,
    title: 'Centre-Based',
    description:
      'Learn in our dedicated, focused, and resource-rich tutoring centre environment.',
  },
  {
    icon: Home,
    title: 'Home-to-Home',
    description:
      'Our qualified tutors come directly to your home for maximum convenience.',
  },
  {
    icon: Wifi,
    title: 'Online Classes',
    description:
      'Access quality tutoring from anywhere via our interactive online platform.',
  },
]

const whyChooseUs = [
  { icon: CheckCircle, text: 'Qualified & experienced tutors' },
  { icon: CheckCircle, text: 'Personalised learning plans' },
  { icon: CheckCircle, text: 'Flexible scheduling options' },
  { icon: CheckCircle, text: 'All grade levels & subjects' },
  { icon: CheckCircle, text: 'Proven track record of results' },
  { icon: CheckCircle, text: 'Affordable, customised pricing' },
  { icon: CheckCircle, text: 'Regular progress reports' },
  { icon: CheckCircle, text: 'Supportive & welcoming environment' },
]

const testimonials = [
  {
    name: 'Naledi M.',
    role: 'Parent – Grade 10 Student',
    quote:
      "My son's marks improved dramatically within two months. The tutors at Lev Learning Hub are patient, professional, and truly care about their students.",
    stars: 5,
  },
  {
    name: 'Sipho K.',
    role: 'Matric Learner',
    quote:
      "I was struggling with Mathematics and Physical Sciences. After joining Lev Learning Hub, I passed my trial exams with distinction. Highly recommended!",
    stars: 5,
  },
  {
    name: 'Thandi P.',
    role: 'Parent – Primary School',
    quote:
      "Excellent service, dedicated tutors, and a warm learning environment. My daughter looks forward to every session. Best decision we made!",
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Students learning at Lev Learning Hub Centre"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              <span className="text-gold text-xs font-semibold tracking-wide uppercase">
                Trusted Academic Excellence
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-foreground leading-tight text-balance mb-6">
              Expert Tutors –{' '}
              <span className="text-gold">Shaping Bright</span> Futures
            </h1>
            <p className="text-lg text-navy-foreground/80 leading-relaxed mb-8 max-w-xl">
              Professional tutoring and academic support for primary, high school, and varsity
              students. Learn at our centre, at home, or online — on your terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-gold-foreground rounded-xl font-semibold text-base hover:bg-gold/90 transition-colors"
              >
                Register Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy-foreground/10 border border-navy-foreground/20 text-navy-foreground rounded-xl font-semibold text-base hover:bg-navy-foreground/20 transition-colors"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Our Tutoring Services
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We offer comprehensive academic support across all levels of education, tailored
              to each learner's unique needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {service.subjects.map((subject) => (
                    <li key={subject} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {subject}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                Why Choose Us
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance mb-5">
                The Lev Learning Hub Difference
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We are more than just a tutoring centre. We are a dedicated team of passionate
                educators committed to unlocking every learner's potential and building genuine
                confidence in their academic journey.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5">
                    <item.icon className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
              <Image
                src="/images/about-hero.jpg"
                alt="Students learning at Lev Learning Hub Centre"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-2 gap-3">
                {[
                  { value: '95%', label: 'Improved Results' },
                  { value: '4+', label: 'Years of Excellence' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3 text-center">
                    <p className="font-serif text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-white/70 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Flexible Learning
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
              How We Teach
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We offer three flexible learning formats to suit every learner's lifestyle
              and preference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats.map((format, idx) => (
              <div
                key={format.title}
                className={`rounded-2xl p-8 text-center ${
                  idx === 1
                    ? 'bg-primary text-primary-foreground shadow-xl'
                    : 'bg-card border border-border'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${
                    idx === 1 ? 'bg-primary-foreground/15' : 'bg-primary/10'
                  }`}
                >
                  <format.icon
                    className={`w-6 h-6 ${idx === 1 ? 'text-gold' : 'text-primary'}`}
                  />
                </div>
                <h3
                  className={`font-bold text-lg mb-3 ${
                    idx === 1 ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {format.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    idx === 1 ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}
                >
                  {format.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/learning-formats"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Compare all formats <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
              What Parents & Students Say
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-foreground text-balance">
              Real Results, Real Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-navy-foreground/5 border border-navy-foreground/10 rounded-2xl p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-navy-foreground/80 text-sm leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold text-navy-foreground text-sm">{t.name}</p>
                  <p className="text-gold text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-accent-foreground text-balance mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-accent-foreground/80 leading-relaxed mb-8 max-w-xl mx-auto">
            Take the first step towards academic excellence. Request a personalised quote today
            or get in touch with our friendly team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy text-navy-foreground rounded-xl font-semibold text-base hover:bg-navy/90 transition-colors"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-foreground/10 border border-accent-foreground/30 text-accent-foreground rounded-xl font-semibold text-base hover:bg-accent-foreground/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
