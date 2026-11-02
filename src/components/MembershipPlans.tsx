import React, { useState } from 'react';
import { Check, Flame, GraduationCap, Sparkles, Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { STANDARD_PLANS, STUDENT_PLANS, ADDON_PLANS, MembershipPlan, GYM_INFO } from '../data/gymData';

interface MembershipPlansProps {
  onSelectPlan: (plan: MembershipPlan) => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'standard' | 'student' | 'addons'>('standard');

  // Check if gym is currently open based on current time
  const isGymCurrentlyOpen = () => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday
    if (day === 0) return false; // Sunday closed
    const currentHour = now.getHours() + now.getMinutes() / 60;
    return currentHour >= GYM_INFO.timings.openHour && currentHour < GYM_INFO.timings.closeHour;
  };

  const isOpen = isGymCurrentlyOpen();

  return (
    <section id="memberships" className="py-24 bg-[#0a0a0d] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
            <span>Transparent Pricing</span>
            <span className="w-8 h-px bg-red-500/50"></span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-4">
            Membership Plans & Concessions
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Choose the package that aligns with your goals. Enjoy zero admission fees on multi-month subscriptions
            and dedicated student packages.
          </p>

          {/* Interactive Category Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 bg-neutral-900/90 border border-white/10 rounded-xl max-w-md mx-auto aura-red-glow-subtle">
            <button
              onClick={() => setActiveTab('standard')}
              className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'standard'
                  ? 'bg-red-600 text-white aura-red-button-glow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              General Plans
            </button>
            <button
              onClick={() => setActiveTab('student')}
              className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === 'student'
                  ? 'bg-red-600 text-white aura-red-button-glow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Student Offers
            </button>
            <button
              onClick={() => setActiveTab('addons')}
              className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'addons'
                  ? 'bg-red-600 text-white aura-red-button-glow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Day & Steam Bath
            </button>
          </div>
        </div>

        {/* Tab 1: Standard General Plans */}
        {activeTab === 'standard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {STANDARD_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-[#1c1214] to-[#121319] border-2 border-red-500 aura-red-glow lg:-translate-y-2'
                    : 'bg-[#121319] border border-white/10 aura-red-glow-hover'
                }`}
              >
                {/* Popularity Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-600 text-white text-[11px] font-display font-bold uppercase tracking-wider aura-red-button-glow flex items-center gap-1 whitespace-nowrap">
                    <Flame className="w-3.5 h-3.5" />
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Plan Name & Duration */}
                  <div className="mb-4">
                    <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                      {plan.duration}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">Standard Gym Membership</p>
                  </div>

                  {/* Pricing Display */}
                  <div className="mb-4 pb-4 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-red-500 font-sans">₹</span>
                      <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight tabular-nums">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium ml-1">
                        / {plan.duration}
                      </span>
                    </div>

                    {/* Admission Fee Note */}
                    <div className="mt-2.5">
                      {plan.admissionFee > 0 ? (
                        <div className="text-xs text-neutral-300 bg-white/5 px-2.5 py-1.5 rounded-md border border-white/10 flex items-center justify-between">
                          <span>Admission Fee:</span>
                          <span className="font-bold text-white font-sans tabular-nums">₹{plan.admissionFee}</span>
                        </div>
                      ) : (
                        <div className="text-xs text-emerald-400 bg-emerald-950/40 px-2.5 py-1.5 rounded-md border border-emerald-500/30 flex items-center gap-1.5 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                          <span>Admission Fee: FREE</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-neutral-300">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Join CTA */}
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-3 px-4 rounded-xl font-display text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-red-600 hover:bg-red-500 text-white aura-red-button-glow'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-red-500/40 hover:aura-red-glow-subtle'
                  }`}
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Student Offers */}
        {activeTab === 'student' && (
          <div id="students" className="space-y-6">
            <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold uppercase text-white tracking-wider">
                    Student Privilege Concession
                  </h4>
                  <p className="text-xs text-neutral-300">
                    Admission Fee is 100% FREE on all student plans! Please present a valid student ID card during verification.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 text-xs font-bold shrink-0">
                Admission: FREE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {STUDENT_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl flex flex-col justify-between p-6 transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-gradient-to-b from-[#1b1114] to-[#121319] border-2 border-red-500 aura-red-glow'
                      : 'bg-[#121319] border border-white/10 aura-red-glow-hover'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-600 text-white text-[11px] font-display font-bold uppercase tracking-wider aura-red-button-glow flex items-center gap-1 whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5" />
                      Best Student Deal
                    </div>
                  )}

                  <div>
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                          {plan.duration}
                        </h3>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/10 text-neutral-300">
                          Student Pass
                        </span>
                      </div>
                      <p className="text-xs text-red-400 font-medium mt-1">{plan.highlight}</p>
                    </div>

                    <div className="mb-4 pb-4 border-b border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-semibold text-red-500 font-sans">₹</span>
                        <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight tabular-nums">
                          {plan.price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium ml-1">
                          total ({plan.duration})
                        </span>
                      </div>

                      <div className="mt-2 text-xs text-emerald-400 bg-emerald-950/40 px-2.5 py-1.5 rounded-md border border-emerald-500/30 flex items-center gap-1.5 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                        <span>Admission Fee: FREE</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-neutral-300">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan)}
                    className="w-full py-3 px-4 rounded-xl font-display text-sm font-bold uppercase tracking-wider bg-red-600 hover:bg-red-500 text-white aura-red-button-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Claim Student Offer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Add-on Plans (Daily Pass, Steam Bath, Personal Training) */}
        {activeTab === 'addons' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ADDON_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="bg-[#121319] border border-white/10 hover:border-red-500/40 aura-red-glow-hover rounded-2xl p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30">
                      {plan.highlight}
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide mt-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">Billing: {plan.duration}</p>
                  </div>

                  <div className="mb-4 pb-4 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-red-500 font-sans">₹</span>
                      <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight tabular-nums">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium ml-1">
                        / {plan.duration}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-neutral-300">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectPlan(plan)}
                  className="w-full py-3 px-4 rounded-xl font-display text-sm font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-red-500/40 hover:aura-red-glow-subtle transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Select Option</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Operating Hours Callout Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#171114] via-[#121319] to-[#121319] border border-red-500/30 aura-red-glow-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-display text-lg font-bold uppercase text-white tracking-wide">
                  Gym Working Schedule
                </h4>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    isOpen
                      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
                      : 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                  }`}
                >
                  {isOpen ? 'Open Now' : 'Closed Now'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                <strong>Monday to Saturday:</strong> 5:30 AM to 10:30 PM &nbsp;·&nbsp;
                <strong className="text-red-400">Sunday:</strong> Closed
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/91${GYM_INFO.phone}?text=${encodeURIComponent('Hello MJ FITNESS! I have a question about timings and plan admissions.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-red-500/40 hover:aura-red-glow-subtle text-xs sm:text-sm font-medium text-white transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <Zap className="w-4 h-4 text-red-400" />
            <span>Direct WhatsApp Inquiry</span>
          </a>
        </div>
      </div>
    </section>
  );
};
