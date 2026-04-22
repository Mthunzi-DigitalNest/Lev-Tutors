'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { ArrowRight, BookOpen, GraduationCap, Monitor, Award, CheckCircle, MapPin, Phone } from 'lucide-react'

const services = [
  {
    icon: BookOpen,
    title: 'Primary School Tutoring',
    grades: 'Grade 1 – Grade 7',
    description:
      'Our primary school tutoring programme builds strong academic foundations in young learners. We focus on core subjects with engaging, age-appropriate methods that foster curiosity and a love for learning.',
    subjects: [
      'Mathematics',
      'English / Home Language',
      'Natural Sciences & Technology',
      'Social Sciences',
      'Life Skills',
      'Afrikaans (First Additional Language)',
    ],
    highlight: 'Ideal for learners who need extra support or enrichment to stay ahead.',
  },
  {
    icon: GraduationCap,
    title: 'High School Tutoring',
    grades: 'Grade 8 – Grade 12',
    description:
      'Our high school support is designed to help learners navigate the demands of the CAPS curriculum and prepare thoroughly for tests, exams, and matric. We offer both remedial and enrichment tutoring.',
    subjects: [
      'Mathematics & Mathematical Literacy',
      'Physical Sciences',
      'Life Sciences',
      'Accounting',
      'Business Studies',
      'English Home Language',
      'Geography & History',
    ],
    highlight: 'Tailored preparation for class tests, mid-years, trials, and final matric exams.',
  },
  {
    icon: Award,
    title: 'Varsity Student Support',
    grades: 'University & College Level',
    description:
      'The jump from high school to tertiary education is significant. Our varsity support programme provides specialised academic mentoring, assignment support, and subject-specific tutoring for first-year and beyond students.',
    subjects: [
      'Statistics & Data Analysis',
      'Economics & Microeconomics',
      'Academic Writing & Research',
      'Business Management Modules',
      'Mathematics & Calculus',
      'Financial Accounting',
    ],
    highlight: 'Perfect for students struggling to transition or needing focused exam preparation.',
  },
  {
    icon: Monitor,
    title: 'Computer Skills Training',
    grades: 'All Ages & Levels',
    description:
      "In today's digital world, computer literacy is essential. Our practical computer skills training programme covers everything from basic computer use to advanced productivity tools, benefiting learners, parents, and working adults alike.",
    subjects: [
      'Microsoft Word, Excel & PowerPoint',
      'Internet & Email Basics',
      'Typing Skills & Speed',
      'Digital Literacy & Online Safety',
      'Introduction to Coding',
      'Google Workspace Tools',
    ],
    highlight: 'Structured for beginners through to intermediate digital skill levels.',
  },
]

export default function ServicesPage() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = document.querySelectorAll<HTMLElement>('[data-service-timeline-item]')

    if (reduceMotion) {
      items.forEach((item) => item.classList.add('timeline-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement
          element.classList.toggle('timeline-visible', entry.isIntersecting)
        })
      },
      {
        threshold: 0.25,
        rootMargin: '-8% 0px -8% 0px',
      }
    )

    items.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/pic2.jpg"
            alt="Lev Learning Hub Centre services"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-foreground text-balance mb-5">
              Our Services
            </h1>
            <p className="text-navy-foreground/80 text-lg leading-relaxed">
              Comprehensive academic support tailored to every learner — from primary school
              through to university. Explore our full range of tutoring services below.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative space-y-14">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />
            {services.map((service, idx) => (
              <div
                key={service.title}
                data-service-timeline-item
                data-direction={idx % 2 === 0 ? 'left' : 'right'}
                className="timeline-item relative grid items-start gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-10"
              >
                {/* Content */}
                <div
                  className={`timeline-card ${
                    idx % 2 === 0 ? 'lg:col-start-1 lg:pr-6' : 'lg:col-start-3 lg:pl-6'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {service.grades}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="bg-secondary border border-border rounded-xl p-4 mb-5">
                    <p className="text-sm font-semibold text-foreground italic">
                      {service.highlight}
                    </p>
                  </div>
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    Register Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="hidden lg:flex lg:col-start-2 justify-center">
                  <span className="timeline-dot mt-2 h-5 w-5 rounded-full border-4 border-background bg-accent" />
                </div>

                {/* Subject List */}
                <div
                  className={`timeline-card bg-card border border-border rounded-2xl p-6 ${
                    idx % 2 === 0 ? 'lg:col-start-3 lg:pl-6' : 'lg:col-start-1 lg:pr-6'
                  }`}
                >
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-5">
                    Subjects Covered
                  </h4>
                  <ul className="space-y-3">
                    {service.subjects.map((subject) => (
                      <li key={subject} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-sm text-foreground">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saturday Computer Skills Programme */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest block mb-3">
              Featured Weekly Programme
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
              Saturday Computer Skills Class
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every Saturday we run a structured, hands-on computer skills session for all ages.
              From basic hardware to coding concepts — build real digital confidence in just two hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Schedule */}
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-navy px-6 py-4">
                <h3 className="font-semibold text-navy-foreground">Session Schedule — Saturdays</h3>
                <p className="text-navy-foreground/70 text-sm mt-0.5">12:00 – 14:00</p>
              </div>
              <div className="divide-y divide-border">
                {[
                  { time: '12:00 – 12:15', activity: 'Introduction to computers and basic hardware' },
                  { time: '12:15 – 12:40', activity: 'Typing skills practice' },
                  { time: '12:40 – 13:10', activity: 'Microsoft Word basics (documents, fonts, saving files)' },
                  { time: '13:10 – 13:30', activity: 'Internet skills and safe searching' },
                  { time: '13:30 – 13:50', activity: 'Basic coding concepts / Scratch' },
                  { time: '13:50 – 14:00', activity: 'Review and fun computer challenge' },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center gap-4 px-6 py-4 hover:bg-secondary/40 transition-colors">
                    <span className="text-accent font-semibold text-sm tabular-nums whitespace-nowrap w-32 shrink-0">
                      {row.time}
                    </span>
                    <span className="text-foreground text-sm">{row.activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue & Contact */}
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-1">Venue</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  47 Robert Sobukwe Street<br />Sunnyside, Pretoria
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="w-10 h-10 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-[#25D366]" />
                </div>
                <h4 className="font-bold text-foreground mb-1">Call / WhatsApp</h4>
                <a
                  href="tel:+27670279825"
                  className="text-sm text-primary font-semibold hover:underline"
                >
                  067 027 9825
                </a>
              </div>
              <Link
                href="/register"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Register for Saturdays <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-accent-foreground text-balance mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-accent-foreground/80 leading-relaxed mb-8">
            Get in touch with our team. We will assess your learner's needs and recommend
            the best service and format for them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy text-navy-foreground rounded-xl font-semibold text-base hover:bg-navy/90 transition-colors"
            >
              Register Now <ArrowRight className="w-4 h-4" />
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

      <style jsx>{`
        .timeline-item {
          opacity: 0;
          transform: translateY(36px) scale(0.98);
          transition:
            opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .timeline-item[data-direction='left'] {
          transform: translate(-18px, 36px) scale(0.98);
        }

        .timeline-item[data-direction='right'] {
          transform: translate(18px, 36px) scale(0.98);
        }

        .timeline-item.timeline-visible {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }

        .timeline-dot {
          box-shadow: 0 0 0 0 color-mix(in oklch, var(--accent) 40%, transparent);
          transition: box-shadow 700ms ease;
        }

        .timeline-item.timeline-visible .timeline-dot {
          box-shadow: 0 0 0 10px color-mix(in oklch, var(--accent) 26%, transparent);
        }

        .timeline-card {
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .timeline-item.timeline-visible .timeline-card {
          transform: translateY(0);
        }

        @media (max-width: 1023px) {
          .timeline-item,
          .timeline-item[data-direction='left'],
          .timeline-item[data-direction='right'] {
            transform: translateY(28px);
          }

          .timeline-item.timeline-visible {
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .timeline-item,
          .timeline-item[data-direction='left'],
          .timeline-item[data-direction='right'],
          .timeline-item.timeline-visible,
          .timeline-card,
          .timeline-dot,
          .timeline-item.timeline-visible .timeline-dot {
            opacity: 1;
            transform: none;
            transition: none;
            box-shadow: none;
          }
        }
      `}</style>
    </main>
  )
}
