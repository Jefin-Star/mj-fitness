import React from 'react';
import { Dumbbell, Users, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0e1017] border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl">
              <img
                src="/src/assets/images/facility_strength_zone_1793455851499.jpg"
                alt="MJ FITNESS Strength Training Equipment and Racks"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Floating Shield Logo Badge */}
              <div className="absolute top-4 left-4 p-2 bg-black/80 backdrop-blur-md rounded-xl border border-red-500/40 flex items-center gap-3">
                <img
                  src={GYM_INFO.logoUrl}
                  alt="MJ Fitness Logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="font-display text-sm font-bold text-white tracking-wider uppercase">
                    MJ FITNESS
                  </p>
                  <p className="text-[10px] text-red-400 font-semibold uppercase tracking-widest">
                    Meppadi Hub
                  </p>
                </div>
              </div>

              {/* Bottom Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10">
                <p className="text-xs text-neutral-400 font-medium">Daily Fitness Commitment</p>
                <p className="text-base font-bold text-white font-display uppercase tracking-wide">
                  5:30 AM to 10:30 PM · 6 Days a Week
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Gym Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase">
              <span>About Our Gym</span>
              <span className="w-8 h-px bg-red-500/50"></span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight">
              A New Benchmark in Strength & Conditioning
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Located in the heart of Meppadi, <strong className="text-white font-semibold">MJ FITNESS</strong> is built
              with one mission: to empower individuals of every fitness level to sculpt their bodies, build enduring strength,
              and cultivate lasting mental resilience.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Whether you are taking your first step into fitness, aiming for competitive strength training, or recovering
              after demanding workouts in our dedicated steam bath, our modern equipment, hygienic environment, and
              encouraging community will keep you inspired every day.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 flex items-center justify-center mb-3">
                  <Dumbbell className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-1">
                  Strength & Free Weights
                </h3>
                <p className="text-xs text-neutral-400 leading-normal">
                  Heavy dumbbell ranges, Olympic barbells, power racks, and precision plate-loaded machines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-1">
                  Supportive Culture
                </h3>
                <p className="text-xs text-neutral-400 leading-normal">
                  Zero ego, maximum encouragement. A welcoming atmosphere for beginners, athletes, and students alike.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-1">
                  Steam Bath & Recovery
                </h3>
                <p className="text-xs text-neutral-400 leading-normal">
                  Revitalize tired muscles, detoxify, and accelerate athletic recovery with our steam bath sessions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 flex items-center justify-center mb-3">
                  <HeartPulse className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-1">
                  Expert Coaching
                </h3>
                <p className="text-xs text-neutral-400 leading-normal">
                  Personal training programs with structured form coaching and personalized nutrition guidance.
                </p>
              </div>
            </div>

            {/* Quick Feature Checkpoints */}
            <div className="pt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                Spacious ventilated workout floor
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                Secure lockers & changing rooms
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                Sanitized and well-maintained daily
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
