import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0c10]/90 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        {/* Zone 1: Brand Wordmark & Shield Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
          className="flex items-center gap-3 shrink-0 group focus:outline-none"
        >
          <img
            src={GYM_INFO.logoUrl}
            alt="MJ FITNESS Shield Logo"
            className="w-11 h-11 rounded-lg object-contain bg-black/60 border border-red-600/40 p-0.5 group-hover:border-red-500 transition-colors aura-red-glow-subtle"
          />
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold tracking-wider text-white uppercase group-hover:text-red-500 transition-colors whitespace-nowrap">
              MJ FITNESS
            </span>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase -mt-1 font-semibold">
              Meppadi · Wayanad
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Single Line, Concise) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('about');
            }}
            className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0"
          >
            About Gym
          </a>
          <a
            href="#memberships"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('memberships');
            }}
            className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0"
          >
            Membership Plans
          </a>
          <a
            href="#students"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('students');
            }}
            className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            Student Offers
            <span className="text-[10px] px-1.5 py-0.2 bg-red-600/20 text-red-400 border border-red-500/30 rounded font-semibold">
              Save
            </span>
          </a>
          <a
            href="#facilities"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('facilities');
            }}
            className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0"
          >
            Facilities & Steam
          </a>
          <a
            href="#calculator"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('calculator');
            }}
            className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
          >
            Fitness Calculator
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className="hover:text-red-400 transition-colors whitespace-nowrap shrink-0"
          >
            Timings & Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action CTA & Quick Contact */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/91${GYM_INFO.phone}?text=${encodeURIComponent('Hi MJ FITNESS team, I want to inquire about gym membership details.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors whitespace-nowrap shrink-0"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>+91 {GYM_INFO.phone}</span>
          </a>

          <button
            onClick={onJoinClick}
            className="px-5 py-2.5 text-sm font-display font-semibold tracking-wide text-white bg-red-600 hover:bg-red-500 active:scale-95 rounded-lg aura-red-button-glow transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Join Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0d0f14] px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => scrollTo('about')}
            className="block w-full text-left py-2.5 text-sm font-medium text-neutral-200 hover:text-red-400"
          >
            About Our Gym
          </button>
          <button
            onClick={() => scrollTo('memberships')}
            className="block w-full text-left py-2.5 text-sm font-medium text-neutral-200 hover:text-red-400"
          >
            Membership Plans
          </button>
          <button
            onClick={() => scrollTo('students')}
            className="block w-full text-left py-2.5 text-sm font-medium text-red-400 hover:text-red-300 font-semibold"
          >
            Student Offers (from ₹700/mo)
          </button>
          <button
            onClick={() => scrollTo('facilities')}
            className="block w-full text-left py-2.5 text-sm font-medium text-neutral-200 hover:text-red-400"
          >
            Facilities & Steam Bath
          </button>
          <button
            onClick={() => scrollTo('calculator')}
            className="block w-full text-left py-2.5 text-sm font-medium text-red-400 hover:text-red-300 font-semibold flex items-center justify-between"
          >
            <span>Fitness Calculator & Live Schedule</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-red-600/30 text-white">Live</span>
          </button>
          <button
            onClick={() => scrollTo('registration')}
            className="block w-full text-left py-2.5 text-sm font-medium text-neutral-200 hover:text-red-400"
          >
            Registration Form
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="block w-full text-left py-2.5 text-sm font-medium text-neutral-200 hover:text-red-400"
          >
            Timings & Location
          </button>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`https://wa.me/91${GYM_INFO.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-emerald-700/80 hover:bg-emerald-600 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp: {GYM_INFO.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinClick();
              }}
              className="w-full py-2.5 text-sm font-display font-semibold tracking-wider text-white bg-red-600 hover:bg-red-500 rounded-lg uppercase"
            >
              Register Membership Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
