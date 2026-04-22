'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { CheckCircle, Shield, Clock, Star, ArrowRight } from 'lucide-react'

const grades = [
  'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7',
  'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12 (Matric)',
  'University / College Year 1', 'University / College Year 2+',
  'Adult Learner',
]

const subjects = [
  'Mathematics', 'Mathematical Literacy', 'English', 'Afrikaans', 'Physical Sciences',
  'Life Sciences', 'Accounting', 'Business Studies', 'Economics', 'Geography',
  'History', 'Computer Applications Technology', 'Statistics', 'Academic Writing',
  'Computer Skills (General)',
]

const formats = ['Centre-Based', 'Home-to-Home', 'Online', 'Not Sure Yet']
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const trustPoints = [
  { icon: CheckCircle, text: 'Simple & straightforward registration process' },
  { icon: Shield, text: 'Secure & confidential student information' },
  { icon: Clock, text: 'We respond within 24 hours' },
  { icon: Star, text: 'Join 500+ students we support' },
]

function focusFirstInvalid(container?: HTMLElement | null) {
  if (!container) return;
  const invalid = container.querySelector<HTMLElement>(':invalid, .error, [aria-invalid="true"]');
  if (invalid) { invalid.focus(); return; }
  const first = container.querySelector<HTMLElement>('input, select, textarea, button, [tabindex]:not([tabindex="-1"])');
  first?.focus();
}

function formDataToUrlSearchParams(fd: FormData) {
  const entries = Array.from(fd.entries()).map(([k, v]) => [k, typeof v === 'string' ? v : (v as File).name]);
  return new URLSearchParams(entries as any);
}

export default function RegistrationPage() {
  const router = useRouter()
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [stepError, setStepError] = useState('')

  const studentSectionRef = useRef<HTMLElement>(null)
  const guardianSectionRef = useRef<HTMLElement>(null)
  const learningSectionRef = useRef<HTMLElement>(null)
  const additionalSectionRef = useRef<HTMLElement>(null)
  const submitIntentRef = useRef(false)

  const toggleSubject = (s: string) =>
    setSelectedSubjects((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    )

  const toggleDay = (d: string) =>
    setSelectedDays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent implicit form submit (e.g. Enter key) before final step.
    if (currentStep < 4) {
      handleNextStep()
      return
    }

    // Allow submit only when user explicitly clicks the submit button.
    if (!submitIntentRef.current) {
      return
    }
    submitIntentRef.current = false

    if (!validateCurrentStep()) return;

    setSubmitting(true);
    setStepError('');

    const form = e.currentTarget;
    const fd = new FormData(form);
  const getValue = (key: string) => (fd.get(key)?.toString().trim() ?? '');

  fd.set('subjectsNeeded', selectedSubjects.join(', '));
  fd.set('preferredDays', selectedDays.join(', '));

  // Send aliases so either script field format is supported.
  fd.set('studentName', getValue('studentFullName'));
  fd.set('grade', getValue('gradeLevel'));
  fd.set('learningFormat', getValue('preferredLearningFormat'));
  fd.set('guardianName', getValue('parentGuardianName'));
  fd.set('guardianEmail', getValue('emailAddress'));
  fd.set('guardianPhone', getValue('parentContactNumber'));
  fd.set('additionalInfo', getValue('additionalNotes'));

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxJEVVjupxw2vammMisJ6xV2Wqtb7-pn5YkFu9JkW6zC5PykXAhRpQPI1IeUOPMAZnkfA/exec';

    try {
      const body = formDataToUrlSearchParams(fd).toString();

      const res = await fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body
      });

      const text = await res.text();
      let json = null;
      try { json = JSON.parse(text); } catch (err) { /* not JSON */ }

      if (!res.ok) {
        const msg = json?.error || `Server error ${res.status}`;
        throw new Error(msg);
      }

      if (json?.result === 'success' || res.ok) {
        router.push('/thank-you');
        return;
      }

      throw new Error(json?.error || 'Unknown server response');

    } catch (err: any) {
      console.error('Submission error:', err);
      setStepError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  const openForm = () => {
    setIsFormOpen(true)
    setCurrentStep(1)
    setStepError('')
    requestAnimationFrame(() => {
      document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const validateCurrentStep = (): boolean => {
    const activeRef = currentStep === 1 ? studentSectionRef
      : currentStep === 2 ? guardianSectionRef
      : currentStep === 3 ? learningSectionRef
      : additionalSectionRef

    const container = activeRef.current
    if (!container) return true

    const controls = Array.from(container.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input, select, textarea'))
    const isGroupValid = (name: string, type: string) => {
      const group = container.querySelectorAll<HTMLInputElement>(`input[name="${name}"][type="${type}"]`)
      return Array.from(group).some((g) => g.checked)
    }

    for (const field of controls) {
      const type = (field.getAttribute('type') || '').toLowerCase()
      if (type === 'hidden') continue

      if ((type === 'checkbox' || type === 'radio') && field.required) {
        const name = field.name
        if (name) {
          if (!isGroupValid(name, type)) {
            ;(field as HTMLInputElement).setCustomValidity('Please select at least one option.')
            ;(field as HTMLInputElement).reportValidity()
            setStepError('Please complete all required fields before continuing.')
            focusFirstInvalid(container)
            return false
          } else {
            ;(field as HTMLInputElement).setCustomValidity('')
          }
        } else {
          if (!(field as HTMLInputElement).checked) {
            ;(field as HTMLInputElement).reportValidity()
            setStepError('Please complete all required fields before continuing.')
            focusFirstInvalid(container)
            return false
          }
        }
        continue
      }

      if (type === 'file' && field.required) {
        const input = field as HTMLInputElement
        if (!input.files || input.files.length === 0) {
          input.reportValidity()
          setStepError('Please upload the required file.')
          focusFirstInvalid(container)
          return false
        }
        continue
      }

      const value = (field.value || '').toString().trim()
      if (field.required && value === '') {
        field.reportValidity()
        setStepError('Please complete all required fields before continuing.')
        focusFirstInvalid(container)
        return false
      }

      if (!field.checkValidity()) {
        field.reportValidity()
        setStepError('Please correct the highlighted field before continuing.')
        focusFirstInvalid(container)
        return false
      }
    }

    if (currentStep === 3 && selectedSubjects.length === 0) {
      setStepError('Please select at least one subject before continuing.')
      learningSectionRef.current?.querySelector<HTMLElement>('.subjects-container')?.focus()
      return false
    }

    setStepError('')
    return true
  }

  const handleNextStep = () => {
    if (!validateCurrentStep()) {
      return
    }

    setCurrentStep((prev) => Math.min(prev + 1, 4))
    requestAnimationFrame(() => {
      document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const handlePreviousStep = () => {
    setStepError('')
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    requestAnimationFrame(() => {
      document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const handleFormKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key !== 'Enter') {
      return
    }

    const target = e.target as HTMLElement
    const isTextarea = target.tagName === 'TEXTAREA'
    if (isTextarea) {
      return
    }

    e.preventDefault()
    if (currentStep < 4) {
      handleNextStep()
    }
  }

  return (
    <main>
      <section className="relative bg-navy py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/classromm-3.jpg"
            alt="Students at Lev Learning Hub Centre"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                LEV Tutors Hub
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-foreground text-balance mb-5">
                Student Registration Form
              </h1>
              <p className="text-navy-foreground/80 text-lg leading-relaxed mb-8 max-w-2xl">
                Complete the form below and our admissions team will contact you within 24 hours
                with a tailored support plan.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-full bg-navy-foreground/10 text-navy-foreground text-xs font-semibold">
                  Personalised Support
                </span>
                <span className="px-3 py-1.5 rounded-full bg-navy-foreground/10 text-navy-foreground text-xs font-semibold">
                  Centre, Home & Online
                </span>
                <span className="px-3 py-1.5 rounded-full bg-navy-foreground/10 text-navy-foreground text-xs font-semibold">
                  Response Within 24 Hours
                </span>
              </div>
              <button
                type="button"
                onClick={openForm}
                className="mt-7 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors"
              >
                Open Registration Form
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <Image
                  src="/images/pic1.jpeg"
                  alt="Students studying at Lev Learning Hub Centre"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/95 via-navy/50 to-navy/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">
                    Quick Overview
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      'Simple registration in under 5 minutes',
                      'Safe handling of student information',
                      'Support for all grades and learning levels',
                      'Fast call back from our admissions team',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Registration Steps
              </h2>
              <ul className="space-y-3">
                {[
                  'Share student and guardian details',
                  'Select subjects and preferred days',
                  'Submit and wait for our call back',
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 h-6 w-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4">
                Why Register with Lev?
              </h3>
              <ul className="space-y-4">
                {trustPoints.map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent/15 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="registration-form">
              {!isFormOpen ? (
                <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 text-center">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                    Ready to Register?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                    Click the button below to open the student registration form and get started.
                  </p>
                  <button
                    type="button"
                    onClick={openForm}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    Open Registration Form
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                <div className="mb-6 pb-6 border-b border-border">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Complete Registration
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Fields marked with <span className="text-destructive">*</span> are required.
                  </p>
                  <div className="mt-4 h-2 w-full rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / 4) * 100}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs font-medium text-muted-foreground">Step {currentStep} of 4</p>
                </div>

                <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown} className="space-y-8">
                  <section
                    ref={studentSectionRef}
                    className={`space-y-4 rounded-xl border border-border bg-secondary/40 p-5 sm:p-6 ${
                      currentStep === 1 ? 'block' : 'hidden'
                    }`}
                  >
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                      Student Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Student Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="studentFullName"
                          required
                          placeholder="Full name of student"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Date of Birth <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          School Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="schoolName"
                          required
                          placeholder="Current school name"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Grade / Level <span className="text-destructive">*</span>
                        </label>
                        <select
                          name="gradeLevel"
                          required
                          defaultValue=""
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                        >
                          <option value="" disabled>
                            Select grade
                          </option>
                          {grades.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </section>

                  <section
                    ref={guardianSectionRef}
                    className={`space-y-4 rounded-xl border border-border bg-secondary/40 p-5 sm:p-6 ${
                      currentStep === 2 ? 'block' : 'hidden'
                    }`}
                  >
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                      Parent / Guardian Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Parent / Guardian Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="parentGuardianName"
                          required
                          placeholder="Parent or guardian name"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Parent Contact Number <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="tel"
                          name="parentContactNumber"
                          required
                          placeholder="+27 00 000 0000"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Alternative Contact
                        </label>
                        <input
                          type="tel"
                          name="alternativeContact"
                          placeholder="Alternative phone number"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Email Address <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          name="emailAddress"
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Home Address <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="homeAddress"
                          required
                          placeholder="Home address"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1.5">
                          Emergency Contact
                        </label>
                        <input
                          type="text"
                          name="emergencyContact"
                          placeholder="Name and number"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                        />
                      </div>
                    </div>
                  </section>

                  <section
                    ref={learningSectionRef}
                    className={`space-y-4 rounded-xl border border-border bg-secondary/40 p-5 sm:p-6 ${
                      currentStep === 3 ? 'block' : 'hidden'
                    }`}
                  >
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                      Learning Preferences
                    </h3>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">
                        Preferred Learning Format <span className="text-destructive">*</span>
                      </label>
                      <select
                        name="preferredLearningFormat"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                      >
                        <option value="" disabled>
                          Select format
                        </option>
                        {formats.map((f) => (
                          <option key={f} value={f}>
                            {f}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <p id="subjects-label" className="block text-sm font-semibold text-foreground mb-2">
                        Subject(s) Needed <span className="text-destructive">*</span>
                      </p>
                      <div
                        role="group"
                        aria-labelledby="subjects-label"
                        aria-required="true"
                        tabIndex={0}
                        className="subjects-container flex flex-wrap gap-2 focus:outline-none"
                      >
                        {subjects.map((s) => (
                          <button
                            key={s}
                            type="button"
                            aria-pressed={selectedSubjects.includes(s)}
                            onClick={() => toggleSubject(s)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                              selectedSubjects.includes(s)
                                ? 'bg-primary border-primary text-primary-foreground'
                                : 'bg-background border-border text-foreground hover:border-primary/50'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                      {selectedSubjects.length > 0 && (
                        <p className="text-xs text-accent mt-2" aria-live="polite">
                          Selected: {selectedSubjects.join(', ')}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Preferred Days
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {days.map((d) => (
                          <button
                            key={d}
                            type="button"
                            onClick={() => toggleDay(d)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                              selectedDays.includes(d)
                                ? 'bg-accent border-accent text-accent-foreground'
                                : 'bg-background border-border text-foreground hover:border-accent/50'
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>
                  </section>

                  <section
                    ref={additionalSectionRef}
                    className={`space-y-4 rounded-xl border border-border bg-secondary/40 p-5 sm:p-6 ${
                      currentStep === 4 ? 'block' : 'hidden'
                    }`}
                  >
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                      Additional Information
                    </h3>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">
                        Medical Conditions (if any)
                      </label>
                      <textarea
                        name="medicalConditions"
                        rows={3}
                        placeholder="Please list any important medical conditions or write 'None'"
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">
                        Additional Notes
                      </label>
                      <textarea
                        name="additionalNotes"
                        rows={4}
                        placeholder="Any other information we should know — specific struggles, goals, urgency, etc."
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                      />
                    </div>
                  </section>

                  {stepError && (
                    <p id="registration-step-error" role="status" aria-live="polite" className="text-sm text-destructive font-medium">{stepError}</p>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={handlePreviousStep}
                        className="sm:w-40 py-4 px-5 bg-secondary text-secondary-foreground rounded-xl font-semibold text-base hover:bg-secondary/80 transition-colors"
                      >
                        Back
                      </button>
                    )}

                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-colors"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={() => {
                          submitIntentRef.current = true
                        }}
                        disabled={submitting}
                        className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 disabled:opacity-70 transition-colors"
                      >
                        {submitting ? 'Submitting Registration...' : 'Submit Registration'}
                      </button>
                    )}
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Our admissions team will review your registration and contact you within 24
                      hours. Your information is kept secure & confidential.
                    </p>
                  </div>
                </form>
              </div>
              )}
          </div>
        </div>
      </section>
    </main>
  )
}
