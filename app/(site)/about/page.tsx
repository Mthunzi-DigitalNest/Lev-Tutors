"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Heart, Lightbulb, Target, Users, Award, X } from 'lucide-react'
import { useState } from 'react'

type Tutor = {
  name: string;
  image: string;
  quote: string;
  description: string;
}


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

const tutors: Tutor[] = [
  {
    name: 'Andrew',
    image: '/images/tutor-andrew.jpg',
    quote: '“Understanding is power—once you have it, nothing can stop you.”',
    description: 'Andrew is a highly skilled tutor specializing in Mathematics, Physics, and Life Sciences at both foundational and advanced levels. He has a strong reputation for delivering clarity in complex topics and guiding students toward consistent academic improvement. His approach is structured, disciplined, and focused on excellence, helping students develop deep understanding, sharp problem-solving skills, and the confidence to perform at their best in exams and beyond.'
  },
  {
    name: 'Fazillah',
    image: '/images/tutor-fazillah.jpg',
    quote: '“Every child can learn, just not on the same day or in the same way.”',
    description: 'Fazillah is a passionate and dedicated tutor who brings learning to life through clarity, patience, and encouragement. Specializing in Mathematics and Natural Sciences, she helps young learners build strong foundations, boost confidence, and develop a genuine love for problem-solving and discovery. Her teaching style is engaging, supportive, and tailored to each student’s pace—ensuring no child is left behind.'
  },
  {
    name: 'Owen',
    image: '/images/tutor-owen.jpg',
    quote: '“Success in Mathematics and Physics is not about being gifted, but about being consistent.”',
    description: 'Owen is a focused and results-driven tutor who specializes in Mathematics and Physics for senior students. He is passionate about simplifying complex concepts and helping learners gain clarity, confidence, and academic excellence. With a calm and structured teaching approach, he ensures that every student understands not just how to solve problems, but why they work. Owen is committed to helping students excel in exams, improve their analytical thinking, and unlock their full academic potential.'
  },
  {
    name: 'Tata',
    image: '/images/tutor-tata.jpg',
    quote: '“A new language is a new world—learn it, and you expand your life.”',
    description: 'Tata is a well skilled and passionate language tutor specializing in French, English, and Afrikaans. Dedicated to helping students communicate with confidence, improve their grammar, and develop strong reading and writing skills. With a clear and patient teaching style, Tata makes language learning engaging, practical, and easy to understand. Tata believes that mastering languages opens doors to greater opportunities and empowers students to express themselves effectively in any environment.'
  },
]

export default function AboutPage() {
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null)
  const handleOpen = (tutor: Tutor) => setSelectedTutor(tutor)
  const handleClose = () => setSelectedTutor(null)
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

      {/* --- Our Expert Tutors Section --- */}
      <section className="py-20 bg-secondary" id="tutors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Meet the Team
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Our Expert Tutors
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Learn from passionate educators dedicated to guiding you toward academic excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tutors.map((tutor, idx) => (
              <button
                key={tutor.name}
                type="button"
                onClick={() => handleOpen(tutor)}
                className={
                  `border border-border rounded-2xl p-6 text-center flex flex-col items-center hover:shadow-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary ` +
                  `hover:scale-105 ` +
                  `animate-fade-in-up` +
                  (idx % 2 === 0 ? ' delay-100' : ' delay-200')
                }
                aria-label={`Learn more about ${tutor.name}`}
                style={{ animationDelay: `${idx * 80}ms`, backgroundColor: 'rgba(255,255,230,0.6)' }}
              >
                {/* Tutor Image with Gradient Border */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 p-1 bg-linear-to-br from-gold/30 to-primary/30 group-hover:from-gold/50 group-hover:to-primary/50 transition-colors flex-none">
                  <Image
                    src={tutor.image}
                    alt={`Tutor ${tutor.name}`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                {/* Tutor Name */}
                <h3 className="font-bold text-foreground text-lg mb-4">{tutor.name}</h3>
                {/* Favorite Quote with Award Icons */}
                <div className="relative grow flex items-center">
                  <Award className="w-8 h-8 text-gold/20 absolute -top-4 -left-4 rotate-180" />
                  <p className="text-sm text-muted-foreground italic leading-relaxed px-4 pt-2">
                    {tutor.quote}
                  </p>
                  <Award className="w-8 h-8 text-gold/20 absolute -bottom-4 -right-4" />
                </div>
              </button>
            ))}
          </div>
          {/* Tutor Modal */}
          {selectedTutor && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in">
              <div className="bg-white dark:bg-card rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in-up">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground focus:outline-none"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 p-1 bg-linear-to-br from-gold/30 to-primary/30">
                    <Image
                      src={selectedTutor.image}
                      alt={`Tutor ${selectedTutor.name}`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-xl mb-2">{selectedTutor.name}</h3>
                  <p className="text-sm text-muted-foreground italic mb-4 text-center">{selectedTutor.quote}</p>
                  <p className="text-base text-foreground leading-relaxed text-center">{selectedTutor.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* --- End of Tutors Section --- */}

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

      {/* Hero */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Lev Learning Hub Centre"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Lev Learning Hub
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            We are dedicated to unlocking every learner's potential through personalised support, expert guidance, and a passion for academic excellence.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US - Highlight Section */}
      <section className="py-16 bg-blue-50 dark:bg-green-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-green-900 mb-4">
              Ready to improve your results?
            </h2>
          </div>
          <div className="bg-white/80 dark:bg-white/10 rounded-2xl shadow-lg p-8 mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              Helping Students Excel in Maths, Physics & Life Sciences
            </h3>
            <p className="text-lg text-muted-foreground text-center mb-6">
              Clear explanations. Strong understanding. Real results.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <li className="flex items-center gap-3 text-base text-foreground">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-200 text-green-700 font-bold">✔</span>
                Personalized teaching
              </li>
              <li className="flex items-center gap-3 text-base text-foreground">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-200 text-green-700 font-bold">✔</span>
                Patient & clear explanations
              </li>
              <li className="flex items-center gap-3 text-base text-foreground">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-200 text-green-700 font-bold">✔</span>
                Proven improvement
              </li>
              <li className="flex items-center gap-3 text-base text-foreground">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-200 text-green-700 font-bold">✔</span>
                Flexible schedule
              </li>
            </ul>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-900 dark:text-green-900 mb-2 mt-6">
                RESULTS & IMPACT
              </h4>
              <p className="text-base text-muted-foreground mb-4">
                Many students have improved their understanding, confidence, and performance after joining Lev Tutors Hub.<br />
                From struggling to confident — results that speak.
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-bold text-primary mb-3 text-center">
                ⭐ WHY CHOOSE LEV TUTORS HUB?
              </h4>
              <ul className="space-y-2 text-base text-foreground max-w-md mx-auto">
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✔</span> Patient and easy-to-understand teaching style</li>
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✔</span> Focus on real academic improvement</li>
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✔</span> Personalized lessons for every student</li>
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✔</span> Support beyond the classroom</li>
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✔</span> Passion for student success</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a href="/register" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-colors">
                Book a Lesson Now
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-600 text-white rounded-xl font-semibold text-base hover:bg-green-700 transition-colors">
                💬 Chat on WhatsApp
              </a>
            </div>
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
