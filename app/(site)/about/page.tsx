import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Heart, Lightbulb, Target, Users, Award } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'About Us',
  description:
    'Learn more about Lev Learning Hub Centre, our mission, values, and commitment to personalised academic support for learners across South Africa.',
  path: '/about',
})

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description:
      'We approach every learner with empathy, patience, and genuine care for their wellbeing.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description:
      'We hold ourselves to the highest academic and professional standards in everything we do.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously evolve our teaching methods to meet the modern learner\'s needs.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'We build a supportive community where learners, parents, and tutors thrive together.',
  },
  {
    icon: BookOpen,
    title: 'Integrity',
    description:
      'We operate with honesty, transparency, and a strong ethical foundation at all times.',
  },
  {
    icon: Award,
    title: 'Empowerment',
    description:
      'We equip learners with the skills, mindset, and confidence to succeed independently.',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Lev Learning Hub Centre tutors and students"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              About Us
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-foreground text-balance mb-5">
              Who We Are
            </h1>
            <p className="text-navy-foreground/80 text-lg leading-relaxed">
              Lev Learning Hub Centre is a passionate, professional tutoring and academic support
              centre dedicated to helping learners reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance mb-5">
                Dedicated to Academic Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lev Learning Hub Centre was founded with a singular mission: to provide every
                learner — regardless of background or academic level — with access to high-quality,
                personalised educational support.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We understand the pressures that today's students face. From demanding school
                curricula to the transition into university life, learning can feel overwhelming.
                That is why our team of qualified, dedicated tutors work alongside each learner
                to build understanding, confidence, and measurable academic improvement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether your child needs a helping hand with primary school concepts or a university
                student requires focused support, Lev Learning Hub Centre is your trusted partner
                in academic success.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 shadow-xl">
              <Image
                src="/images/hero-bg.jpg"
                alt="Tutoring session at Lev Learning Hub Centre"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/30 to-transparent" />
              <div className="absolute bottom-8 left-0 right-0 p-6 grid grid-cols-2 gap-3">
                {[
                  { value: '95%', label: 'Improved Results' },
                  { value: '4+', label: 'Years of Excellence' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3 text-center">
                    <p className="font-serif text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/70 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-2xl p-8">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To provide accessible, personalised, and high-quality academic support that
                empowers every learner to achieve their full potential — building both knowledge
                and the confidence to use it.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading tutoring and academic support centre in South Africa — recognised
                for excellence, innovation, and a genuine commitment to transforming learners'
                lives through education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              How We Think
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance mb-5">
              Our Educational Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe that every learner is capable of greatness when given the right
              environment, tools, and support. Our approach is holistic — we do not just teach
              content; we build learners.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Personalised Learning',
                desc: 'No two learners are the same. We assess each student\'s strengths, gaps, and goals before designing a tailored learning plan.',
              },
              {
                title: 'Mastery Before Progress',
                desc: 'We ensure foundational concepts are solidly understood before moving forward, preventing gaps that compound over time.',
              },
              {
                title: 'Confidence Building',
                desc: 'Academic performance is linked to self-belief. We celebrate every win — big or small — to build lasting confidence.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="w-2 h-8 bg-accent rounded-full mb-4" />
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">
              What Drives Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-foreground text-balance">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-navy-foreground/5 border border-navy-foreground/10 rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <val.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-bold text-navy-foreground mb-2">{val.title}</h3>
                <p className="text-sm text-navy-foreground/70 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-accent-foreground text-balance mb-4">
            Join the Lev Learning Hub Family
          </h2>
          <p className="text-accent-foreground/80 leading-relaxed mb-8">
            Take the next step towards academic excellence. Get in touch with us today to
            discuss how we can support your learner's journey.
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
    </main>
  )
}
