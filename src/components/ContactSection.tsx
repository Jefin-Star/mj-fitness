import React from 'react';
import { MessageSquare, Mail, Instagram, MapPin, Clock, ExternalLink, PhoneCall } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0e1017] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
            <span>Get in Touch</span>
            <span className="w-8 h-px bg-red-500/50"></span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-4">
            Visit MJ FITNESS Meppadi
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Have questions about memberships, student discounts, or personal training?
            Reach out directly or stop by our gym floor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact Cards & Operating Schedule */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/91${GYM_INFO.phone}?text=${encodeURIComponent('Hello MJ FITNESS! I would like to enquire about gym memberships and facilities.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#121319] border border-white/10 hover:border-emerald-500/50 aura-red-glow-hover group transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                    WhatsApp Chat
                  </p>
                  <p className="font-display text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    +91 {GYM_INFO.phone}
                  </p>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    Instant chat & enquiry reply
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${GYM_INFO.email}`}
              className="p-5 rounded-2xl bg-[#121319] border border-white/10 hover:border-red-500/50 aura-red-glow-hover group transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-red-500" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                    Official Email
                  </p>
                  <p className="font-display text-lg font-bold text-white group-hover:text-red-400 transition-colors truncate">
                    {GYM_INFO.email}
                  </p>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    Direct member inquiries & partnerships
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-red-400 transition-colors shrink-0" />
            </a>

            {/* Instagram Card */}
            <a
              href={GYM_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#121319] border border-white/10 hover:border-pink-500/50 aura-red-glow-hover group transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                    Official Instagram
                  </p>
                  <p className="font-display text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                    {GYM_INFO.instagramHandle}
                  </p>
                  <span className="text-[11px] text-pink-400 font-medium">
                    Follow workouts, reels & member transformations
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-pink-400 transition-colors" />
            </a>

            {/* Physical Location Card */}
            <div className="p-5 rounded-2xl bg-[#121319] border border-white/10 aura-red-glow-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                    Gym Location
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                    {GYM_INFO.address}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={GYM_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Timings Quick Card */}
            <div className="p-5 rounded-2xl bg-neutral-900/90 border border-red-500/20 aura-red-glow-subtle">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-red-500" />
                <h4 className="font-display text-base font-bold uppercase text-white tracking-wide">
                  Hours of Operation
                </h4>
              </div>
              <div className="text-xs space-y-1 text-neutral-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-400">Monday – Saturday:</span>
                  <span className="font-bold text-white">5:30 AM – 10:30 PM (17 Hrs)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-400">Sunday:</span>
                  <span className="font-bold text-red-400">Closed for Maintenance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Iframe Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-red-500/30 aura-red-glow bg-neutral-900 shadow-2xl h-full min-h-[460px] flex flex-col">
              <div className="px-5 py-3.5 bg-black/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span className="font-display text-sm font-bold uppercase text-white tracking-wide">
                    Live Map View · MJ Fitness Centre Meppadi
                  </span>
                </div>
                <a
                  href={GYM_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Iframe Container */}
              <div className="relative flex-1 w-full h-full min-h-[400px]">
                <iframe
                  src={GYM_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="MJ Fitness Centre Location on Google Maps"
                  className="w-full h-full min-h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
