import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Lev Learning Hub Centre contact"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-foreground text-balance mb-5">
              We&apos;d Love to Hear From You
            </h1>
            <p className="text-navy-foreground/80 text-lg leading-relaxed">
              Whether you have a question about our programmes, want to enrol a learner, or
              simply need more information — we are here and happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Left — Contact details */}
            <div className="lg:col-span-2 space-y-3">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5">
                Contact Details
              </p>

              {/* Phone */}
              <a
                href="tel:+27670279825"
                className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 hover:border-primary/50 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">Phone</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">067 027 9825</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@levlearning.co.za"
                className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 hover:border-primary/50 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">Email</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">info@levlearning.co.za</p>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/maps?q=47+Robert+Sobukwe+Street,+Sunnyside,+Pretoria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5 hover:border-primary/50 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">Address</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    47 Robert Sobukwe Street,<br />Sunnyside, Pretoria
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Hours</p>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-sm text-muted-foreground">Mon – Fri</span>
                      <span className="text-sm font-medium text-foreground">8:00 – 18:00</span>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-sm text-muted-foreground">Saturday</span>
                      <span className="text-sm font-medium text-foreground">8:00 – 13:00</span>
                    </div>
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-sm text-muted-foreground">Sunday</span>
                      <span className="text-sm font-medium text-destructive">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Action cards */}
            <div className="lg:col-span-3 space-y-5">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5">
                Reach Out Directly
              </p>

              {/* WhatsApp card */}
              <div className="relative overflow-hidden bg-[#25D366] rounded-2xl p-8 text-white">
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full" />
                <div className="absolute -bottom-10 -right-4 w-28 h-28 bg-white/5 rounded-full" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold mb-2">Chat on WhatsApp</h2>
                  <p className="text-white/80 leading-relaxed mb-6 max-w-sm">
                    The fastest way to reach us. Send a message and we will get back to you
                    promptly during business hours.
                  </p>
                  <a
                    href="https://wa.me/27670279825"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-[#25D366] rounded-xl font-semibold hover:bg-white/90 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open WhatsApp Chat
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Call card */}
              <div className="grid sm:grid-cols-2 gap-5">
                <a
                  href="tel:+27670279825"
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">Give Us a Call</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Speak directly to one of our consultants during business hours.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Call 067 027 9825 <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <a
                  href="mailto:info@levlearning.co.za"
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">Send an Email</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Email us and we will respond within one business day.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Email Us <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
              Our Location
            </p>
            <h2 className="font-serif text-2xl font-bold text-foreground">Find Us in Sunnyside</h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-sm" style={{ height: 380 }}>
            <iframe
              title="Lev Learning Hub Centre location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0!2d28.2014!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560c3b3e2b0b5%3A0x0!2s47+Robert+Sobukwe+St%2C+Sunnyside%2C+Pretoria%2C+0002!5e0!3m2!1sen!2sza!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
            <p className="text-sm text-muted-foreground">
              47 Robert Sobukwe Street, Sunnyside, Pretoria, 0002
            </p>
            <a
              href="https://maps.google.com/maps?q=47+Robert+Sobukwe+Street,+Sunnyside,+Pretoria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
            >
              Open in Google Maps <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
