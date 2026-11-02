import React from 'react';
import { Dumbbell, Sparkles, UserCheck, Shield, Wind, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-24 bg-[#0e1017] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
            <span>World-Class Equipment & Amenities</span>
            <span className="w-8 h-px bg-red-500/50"></span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-4">
            Engineered For True Performance
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            From heavy barbell training to rejuvenating thermal steam recovery, MJ FITNESS provides every tool
            you need to conquer your physical potential.
          </p>
        </div>

        {/* 3 Marquee Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Strength Floor */}
          <div className="rounded-2xl overflow-hidden bg-[#121319] border border-white/10 group hover:border-red-500/40 aura-red-glow-hover transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-60 overflow-hidden">
                <img
                  src="./images/facility_strength_zone_1793455851499.jpg"
                  alt="Strength training and heavy free weights zone"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121319] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-red-500/30 text-[11px] font-display font-semibold uppercase text-white tracking-wider flex items-center gap-1.5 aura-red-glow-subtle">
                  <Dumbbell className="w-3.5 h-3.5 text-red-500" />
                  Heavy Iron Zone
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide mb-2">
                  Strength & Bodybuilding
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  High-capacity Olympic barbells, heavy dumbbells, squat racks, and biomechanically aligned plate-loaded machines.
                </p>
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Olympic benches and multi-grip pullup bars</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Rubberized high-impact shock absorption flooring</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span>Access Included</span>
              <span className="font-semibold text-white">All Membership Tiers</span>
            </div>
          </div>

          {/* Card 2: Luxury Steam Bath */}
          <div className="rounded-2xl overflow-hidden bg-[#121319] border border-white/10 group hover:border-red-500/40 aura-red-glow-hover transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-60 overflow-hidden">
                <img
                  src="./images/facility_steam_bath_1793455852156.jpg"
                  alt="Luxury steam bath and recovery room at MJ Fitness"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121319] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-red-500/30 text-[11px] font-display font-semibold uppercase text-white tracking-wider flex items-center gap-1.5 aura-red-glow-subtle">
                  <Sparkles className="w-3.5 h-3.5 text-red-500" />
                  Recovery Spa
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide mb-2">
                  Therapeutic Steam Bath
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  Soothe tight muscles, promote blood circulation, and accelerate recovery in our hygienic steam bath suite.
                </p>
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Calibrated therapeutic moisture & heat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Private & hygienic booking available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span>Drop-in Session</span>
              <span className="font-semibold text-white font-sans tabular-nums">₹600 / Session</span>
            </div>
          </div>

          {/* Card 3: Personal Training */}
          <div className="rounded-2xl overflow-hidden bg-[#121319] border border-white/10 group hover:border-red-500/40 aura-red-glow-hover transition-all flex flex-col justify-between">
            <div>
              <div className="relative h-60 overflow-hidden">
                <img
                  src="./images/personal_training_coaching_1793455851741.jpg"
                  alt="Personal trainer coaching client on barbell form"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121319] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-red-500/30 text-[11px] font-display font-semibold uppercase text-white tracking-wider flex items-center gap-1.5 aura-red-glow-subtle">
                  <UserCheck className="w-3.5 h-3.5 text-red-500" />
                  1-on-1 Coaching
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide mb-2">
                  Personal Training
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  Tailored workout splits, precision form correction, and accountable coaching for dramatic body recomposition.
                </p>
                <div className="space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Structured progressive overload tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Nutritional advice & body transformation targets</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
              <span>Monthly Program</span>
              <span className="font-semibold text-white font-sans tabular-nums">₹5,000 / Month</span>
            </div>
          </div>
        </div>

        {/* Hygiene & Amenities Strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5">
            <Shield className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <p className="font-display text-sm font-bold text-white uppercase tracking-wide">Daily Sanitized</p>
            <p className="text-[11px] text-neutral-400">Equipment disinfected after every shift</p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5">
            <Wind className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <p className="font-display text-sm font-bold text-white uppercase tracking-wide">Fresh Air Flow</p>
            <p className="text-[11px] text-neutral-400">High-volume ventilation & cooling</p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5">
            <Dumbbell className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <p className="font-display text-sm font-bold text-white uppercase tracking-wide">Free Weights</p>
            <p className="text-[11px] text-neutral-400">Full dumbbell rack up to heavy loads</p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/5">
            <Sparkles className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <p className="font-display text-sm font-bold text-white uppercase tracking-wide">Lockers & Showers</p>
            <p className="text-[11px] text-neutral-400">Clean private amenities</p>
          </div>
        </div>
      </div>
    </section>
  );
};
