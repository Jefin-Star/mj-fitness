import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, Copy, Check, Calendar, User, Phone, Tag, Dumbbell } from 'lucide-react';
import { ALL_REGISTRATION_PLANS, MembershipPlan, GYM_INFO } from '../data/gymData';

interface RegistrationFormProps {
  selectedPlan: MembershipPlan | null;
  initialGoals?: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ selectedPlan, initialGoals }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [planId, setPlanId] = useState(ALL_REGISTRATION_PLANS[1].id); // default 3 Months
  const [startDate, setStartDate] = useState('');
  const [goals, setGoals] = useState(initialGoals || '');

  // Update goals if initialGoals changes from the calculator
  useEffect(() => {
    if (initialGoals) {
      setGoals(initialGoals);
    }
  }, [initialGoals]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    plan: MembershipPlan;
    startDate: string;
    goals: string;
    timestamp: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  // Sync when user clicks "Join Now" on any plan card
  useEffect(() => {
    if (selectedPlan) {
      setPlanId(selectedPlan.id);
    }
  }, [selectedPlan]);

  // Set default preferred date to today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setStartDate(today);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    // Phone validation: allow digits, optional +91, spaces
    const cleanPhone = phoneNumber.replace(/[\s-+()]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailAddress.trim() || !emailRegex.test(emailAddress)) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    if (!startDate) {
      newErrors.startDate = 'Please choose a preferred start date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const currentPlan = ALL_REGISTRATION_PLANS.find((p) => p.id === planId) || ALL_REGISTRATION_PLANS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const regId = `MJ-${Date.now().toString().slice(-6)}`;
      const submission = {
        id: regId,
        fullName: fullName.trim(),
        phoneNumber: phoneNumber.trim(),
        emailAddress: emailAddress.trim(),
        plan: currentPlan,
        startDate,
        goals: goals.trim() || 'General fitness and strength training',
        timestamp: new Date().toLocaleString('en-IN'),
      };

      // Save to localStorage for record keeping
      try {
        const existing = JSON.parse(localStorage.getItem('mj_fitness_registrations') || '[]');
        existing.unshift(submission);
        localStorage.setItem('mj_fitness_registrations', JSON.stringify(existing));
      } catch (err) {
        console.error('Storage error:', err);
      }

      setSubmittedData(submission);
      setIsSubmitting(false);
    }, 400);
  };

  const getWhatsAppMessage = () => {
    if (!submittedData) return '';
    return (
      `*New Gym Registration - MJ FITNESS*\n` +
      `--------------------------------\n` +
      `*Registration ID:* ${submittedData.id}\n` +
      `*Name:* ${submittedData.fullName}\n` +
      `*Phone:* ${submittedData.phoneNumber}\n` +
      `*Email:* ${submittedData.emailAddress}\n` +
      `*Selected Plan:* ${submittedData.plan.name} (₹${submittedData.plan.price})\n` +
      `*Admission Fee:* ${submittedData.plan.admissionFee > 0 ? `₹${submittedData.plan.admissionFee}` : 'FREE'}\n` +
      `*Preferred Start Date:* ${submittedData.startDate}\n` +
      `*Fitness Goals:* ${submittedData.goals}\n` +
      `--------------------------------\n` +
      `Please confirm my registration slot. Thank you!`
    );
  };

  const handleCopySummary = () => {
    const text = getWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setFullName('');
    setPhoneNumber('');
    setEmailAddress('');
    setGoals('');
    setErrors({});
  };

  return (
    <section id="registration" className="py-24 bg-[#0a0a0d] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
            <span>Official Enrollment</span>
            <span className="w-8 h-px bg-red-500/50"></span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-4">
            Membership Registration
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Secure your membership slot at MJ FITNESS Meppadi. Complete the details below
            for instant reservation and direct WhatsApp confirmation.
          </p>
        </div>

        {/* If successfully submitted: show Confirmation Card */}
        {submittedData ? (
          <div className="rounded-2xl bg-gradient-to-b from-[#181214] to-[#111218] border-2 border-emerald-500/50 p-6 sm:p-10 aura-red-glow shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 aura-red-glow-subtle">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="font-display text-3xl font-bold uppercase text-white tracking-wide">
                Registration Confirmed!
              </h3>
              <p className="text-neutral-300 text-sm mt-2">
                Thank you, <strong className="text-white">{submittedData.fullName}</strong>.
                Your enrollment reference has been generated.
              </p>
              <div className="mt-3 inline-block px-4 py-1.5 rounded-full bg-white/5 border border-red-500/30 text-xs font-mono text-neutral-300 aura-red-glow-subtle">
                Reference ID: <span className="text-red-400 font-bold">{submittedData.id}</span>
              </div>
            </div>

            {/* Receipt Details Box */}
            <div className="bg-black/50 rounded-xl p-6 border border-white/10 mb-8 space-y-3 text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-neutral-400">Chosen Plan:</span>
                <span className="font-bold text-white uppercase font-display text-base tracking-wide">
                  {submittedData.plan.name}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-neutral-400">Plan Rate:</span>
                <span className="font-bold text-white tabular-nums">
                  ₹{submittedData.plan.price.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-neutral-400">Admission Fee:</span>
                <span className={`font-semibold ${submittedData.plan.admissionFee === 0 ? 'text-emerald-400' : 'text-neutral-200'}`}>
                  {submittedData.plan.admissionFee === 0 ? 'FREE' : `₹${submittedData.plan.admissionFee}`}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-neutral-400">Contact Number:</span>
                <span className="font-medium text-neutral-200">{submittedData.phoneNumber}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-neutral-400">Preferred Start Date:</span>
                <span className="font-medium text-neutral-200">{submittedData.startDate}</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-neutral-400">Fitness Goals:</span>
                <span className="font-medium text-neutral-200 text-right max-w-xs truncate">{submittedData.goals}</span>
              </div>
            </div>

            {/* Action Buttons to connect WhatsApp, Email, or Copy */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/91${GYM_INFO.phone}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl font-display text-base font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 active:scale-98 shadow-xl shadow-emerald-950/40 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Confirm via WhatsApp Desk (+91 {GYM_INFO.phone})</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${GYM_INFO.email}?subject=${encodeURIComponent(`New Gym Registration - ${submittedData.fullName} (${submittedData.id})`)}&body=${encodeURIComponent(getWhatsAppMessage())}`}
                  className="py-3 px-4 rounded-xl font-medium text-xs sm:text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-neutral-400" />
                  <span>Send via Email</span>
                </a>

                <button
                  onClick={handleCopySummary}
                  className="py-3 px-4 rounded-xl font-medium text-xs sm:text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-400" />}
                  <span>{copied ? 'Details Copied!' : 'Copy Registration Details'}</span>
                </button>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={handleResetForm}
                  className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  Register Another Member
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Enrollment Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl bg-[#121319] border border-red-500/30 p-6 sm:p-10 aura-red-glow shadow-2xl relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full pl-10 pr-4 py-3 bg-neutral-900/90 rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all aura-red-input-focus ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/15'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.fullName}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) setErrors((prev) => ({ ...prev, phoneNumber: '' }));
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full pl-10 pr-4 py-3 bg-neutral-900/90 rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all aura-red-input-focus ${
                      errors.phoneNumber
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/15'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={emailAddress}
                    onChange={(e) => {
                      setEmailAddress(e.target.value);
                      if (errors.emailAddress) setErrors((prev) => ({ ...prev, emailAddress: '' }));
                    }}
                    placeholder="e.g. rahul@example.com"
                    className={`w-full pl-10 pr-4 py-3 bg-neutral-900/90 rounded-xl border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all aura-red-input-focus ${
                      errors.emailAddress
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/15'
                    }`}
                  />
                </div>
                {errors.emailAddress && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.emailAddress}</p>
                )}
              </div>

              {/* Membership Plan Dropdown */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Membership Plan <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <Tag className="w-4 h-4" />
                  </div>
                  <select
                    value={planId}
                    onChange={(e) => setPlanId(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-neutral-900/90 rounded-xl border border-white/15 text-sm text-white focus:outline-none transition-all aura-red-input-focus appearance-none cursor-pointer"
                  >
                    <optgroup label="Standard Membership Plans">
                      {ALL_REGISTRATION_PLANS.filter((p) => p.category === 'standard').map((p) => (
                        <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                          {p.name} — ₹{p.price.toLocaleString('en-IN')} {p.admissionFee === 0 ? '(Free Admission)' : `(+₹${p.admissionFee} Adm.)`}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Student Concession Plans (Valid ID Req.)">
                      {ALL_REGISTRATION_PLANS.filter((p) => p.category === 'student').map((p) => (
                        <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                          {p.name} — ₹{p.price.toLocaleString('en-IN')} (Free Admission)
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Flexible Passes & Training">
                      {ALL_REGISTRATION_PLANS.filter((p) => p.category === 'addon').map((p) => (
                        <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                          {p.name} — ₹{p.price.toLocaleString('en-IN')}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
                {/* Active Plan Pricing Breakdown Preview */}
                <div className="mt-2 text-xs text-neutral-400 flex items-center justify-between px-1">
                  <span>Selected Rate: <strong className="text-white">₹{currentPlan.price.toLocaleString('en-IN')}</strong></span>
                  <span>Admission: <strong className={currentPlan.admissionFee === 0 ? 'text-emerald-400' : 'text-neutral-200'}>
                    {currentPlan.admissionFee === 0 ? 'FREE' : `₹${currentPlan.admissionFee}`}
                  </strong></span>
                </div>
              </div>

              {/* Preferred Start Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Preferred Start Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      if (errors.startDate) setErrors((prev) => ({ ...prev, startDate: '' }));
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-neutral-900/90 rounded-xl border text-sm text-white focus:outline-none transition-all aura-red-input-focus ${
                      errors.startDate
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-white/15'
                    }`}
                  />
                </div>
                {errors.startDate && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.startDate}</p>
                )}
              </div>

              {/* Message / Fitness Goals */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Message / Fitness Goals <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder="Tell us about your fitness targets (e.g. Muscle gain, fat loss, stamina, steam bath schedule, prior gym experience)..."
                  className="w-full px-4 py-3 bg-neutral-900/90 rounded-xl border border-white/15 text-sm text-white placeholder-neutral-500 focus:outline-none transition-all aura-red-input-focus"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl font-display text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:scale-98 aura-red-button-glow transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? 'Processing Registration...' : 'Submit Registration'}</span>
            </button>

            {/* Trust Note */}
            <p className="text-center text-xs text-neutral-400 mt-4 flex items-center justify-center gap-1.5">
              <Dumbbell className="w-3.5 h-3.5 text-red-500" />
              <span>No instant online debit required · Pay at reception upon biometric/card onboarding</span>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
