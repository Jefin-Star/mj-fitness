import React from 'react';
import { ArrowRight, Flame, Clock, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeroProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onViewPlansClick }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-black">
      {/* Background Hero Image with Measured Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/hero_gym_interior_1793455851483.jpg"
          alt="MJ FITNESS Gym Floor & Strength Training"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in"
        />
        {/* Cinematic Multi-Layer Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_50%)]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 w-full my-auto">
        <div className="max-w-3xl">
          {/* Brand Kicker / Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-red-500/40 backdrop-blur-md mb-6 aura-red-glow-subtle">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-neutral-300 uppercase">
              Premier Strength & Fitness Club · Meppadi
            </span>
          </div>

          {/* Gym Name & Display Title */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white uppercase leading-[0.95] mb-4">
            <span className="text-white">MJ </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-rose-400">
              FITNESS
            </span>
          </h1>

          {/* Powerful Tagline */}
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide text-red-400 uppercase mb-5">
            "{GYM_INFO.tagline}"
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8">
            Experience Meppadi's ultimate fitness destination. Heavy strength stations,
            calibrated free weights, steam bath recovery, personalized workout guidance,
            and an empowering community designed to push you beyond limits.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onJoinClick}
              className="px-8 py-4 text-base font-display font-semibold tracking-wider uppercase text-white bg-red-600 hover:bg-red-500 active:scale-95 rounded-lg aura-red-button-glow flex items-center gap-2 group cursor-pointer"
            >
              <span>Join Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onViewPlansClick}
              className="px-7 py-4 text-base font-display font-semibold tracking-wider uppercase text-neutral-200 hover:text-white bg-white/10 hover:bg-white/15 active:scale-95 rounded-lg border border-white/15 hover:border-red-500/30 hover:aura-red-glow-subtle transition-all cursor-pointer backdrop-blur-sm"
            >
              View Membership Plans
            </button>
          </div>

          {/* Quick Offer Highlight */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
              <span>Free Admission on 3, 6 & 12 Month Plans</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-red-500 shrink-0" />
              <span>Student Offer from ₹700/Month</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Item Metric / Value Ribbon */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#0d0e13]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-neutral-300">
            <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/[0.03] aura-red-glow-hover">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">Daily Timings</p>
                <p className="text-sm font-bold text-white tracking-wide">5:30 AM – 10:30 PM</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/[0.03] aura-red-glow-hover">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">Strength & Iron</p>
                <p className="text-sm font-bold text-white tracking-wide">Heavy Racks & DBs</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/[0.03] aura-red-glow-hover">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">Recovery Zone</p>
                <p className="text-sm font-bold text-white tracking-wide">Luxury Steam Bath</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/[0.03] aura-red-glow-hover">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">Drop-In Option</p>
                <p className="text-sm font-bold text-white tracking-wide">Daily Pass ₹100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
