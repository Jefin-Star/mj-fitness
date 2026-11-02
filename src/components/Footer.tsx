import React from 'react';
import { Instagram, MessageSquare, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] border-t border-white/10 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={GYM_INFO.logoUrl}
                alt="MJ FITNESS Logo"
                className="w-12 h-12 object-contain rounded-lg border border-red-500/30 bg-black/60 p-0.5"
              />
              <div>
                <span className="font-display text-2xl font-bold tracking-wider text-white uppercase">
                  MJ FITNESS
                </span>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                  Meppadi, Wayanad
                </p>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              "{GYM_INFO.tagline}"
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              A modern fitness center featuring calibrated strength machines, free weights, certified coaching, and therapeutic steam bath.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase text-white tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">
                  About Our Gym
                </a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-red-400 transition-colors">
                  Membership Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#students" className="hover:text-red-400 transition-colors">
                  Student Concessions (From ₹700/mo)
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-red-400 transition-colors">
                  Steam Bath & Facilities
                </a>
              </li>
              <li>
                <a href="#registration" className="hover:text-red-400 transition-colors">
                  Online Registration
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">
                  Timings & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Membership Rates Summary */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase text-white tracking-wider mb-4">
              Rates at a Glance
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>1 Month General:</span>
                <span className="text-white font-semibold">₹1,000 (+1.5k Adm)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>3 Months General:</span>
                <span className="text-white font-semibold">₹2,700 (Free Adm)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Student 3 Months:</span>
                <span className="text-emerald-400 font-semibold">₹2,100 (Free Adm)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span>Steam Bath (Session):</span>
                <span className="text-white font-semibold">₹600</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Daily Drop-in:</span>
                <span className="text-white font-semibold">₹100</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase text-white tracking-wider mb-4">
              Connect With Us
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={`https://wa.me/91${GYM_INFO.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+91 {GYM_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${GYM_INFO.email}`}
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-red-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="truncate">{GYM_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={GYM_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>{GYM_INFO.instagramHandle}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-neutral-400 pt-1">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{GYM_INFO.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-red-500/70" />
            <span>
              &copy; {new Date().getFullYear()} MJ FITNESS MEPPADI. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>Hours: Mon–Sat 5:30 AM – 10:30 PM</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
