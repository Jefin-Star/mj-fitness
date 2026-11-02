import React, { useState } from 'react';
import { MessageSquare, ClipboardList, X, Trash2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MembershipPlans } from './components/MembershipPlans';
import { Facilities } from './components/Facilities';
import { FitnessCalculator } from './components/FitnessCalculator';
import { RegistrationForm } from './components/RegistrationForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MembershipPlan, GYM_INFO } from './data/gymData';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [userGoalsFromCalculator, setUserGoalsFromCalculator] = useState('');
  const [showAdminLogs, setShowAdminLogs] = useState(false);
  const [registrations, setRegistrations] = useState<any[]>([]);

  const handleSelectPlan = (plan: MembershipPlan) => {
    setSelectedPlan(plan);
    const regSection = document.getElementById('registration');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyCalculatorPlan = (goalsSummary: string) => {
    setUserGoalsFromCalculator(goalsSummary);
  };

  const handleHeroJoin = () => {
    const regSection = document.getElementById('registration');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroViewPlans = () => {
    const plansSection = document.getElementById('memberships');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openAdminLogs = () => {
    try {
      const stored = JSON.parse(localStorage.getItem('mj_fitness_registrations') || '[]');
      setRegistrations(stored);
    } catch (e) {
      setRegistrations([]);
    }
    setShowAdminLogs(true);
  };

  const clearRegistrations = () => {
    if (confirm('Clear local registration entries on this device?')) {
      localStorage.removeItem('mj_fitness_registrations');
      setRegistrations([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e2e8f0] flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Navbar with 3-Zone Contract */}
      <Navbar onJoinClick={handleHeroJoin} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero onJoinClick={handleHeroJoin} onViewPlansClick={handleHeroViewPlans} />

        {/* Section 2: About Our Gym */}
        <About />

        {/* Section 3: Membership Plans & Student Offers & Timings */}
        <MembershipPlans onSelectPlan={handleSelectPlan} />

        {/* Section: Facilities & Steam Bath */}
        <Facilities />

        {/* Section: Fitness Calculator & Live Schedule Countdown */}
        <FitnessCalculator onApplyPlanToGoals={handleApplyCalculatorPlan} />

        {/* Section 4: Membership Registration Form */}
        <RegistrationForm 
          selectedPlan={selectedPlan} 
          initialGoals={userGoalsFromCalculator} 
        />

        {/* Section 5: Contact Us & Map */}
        <ContactSection />
      </main>

      {/* Section 6: Footer */}
      <Footer />

      {/* Floating Direct WhatsApp Button */}
      <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={`https://wa.me/91${GYM_INFO.phone}?text=${encodeURIComponent('Hi MJ FITNESS! I have an inquiry about memberships and gym timings.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-full shadow-2xl shadow-emerald-950/60 border border-emerald-400/30 transition-all hover:scale-105 active:scale-95 group"
          aria-label="Direct WhatsApp Enquiry"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="font-display uppercase tracking-wide hidden sm:inline">
            WhatsApp Desk
          </span>
        </a>

        {/* Discreet Reception Submissions Log Trigger */}
        <button
          onClick={openAdminLogs}
          title="Gym Reception Submissions"
          className="px-2.5 py-1 text-[10px] text-neutral-400 hover:text-white bg-black/60 hover:bg-black/90 backdrop-blur-md rounded-md border border-white/10 transition-colors flex items-center gap-1.5"
        >
          <ClipboardList className="w-3 h-3" />
          <span>Reception Submissions</span>
        </button>
      </aside>

      {/* Reception Submissions Modal */}
      {showAdminLogs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121319] border border-white/20 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl">
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                  Reception Enrollment Submissions
                </h3>
                <p className="text-xs text-neutral-400">
                  Registrations submitted on this device ({registrations.length} records)
                </p>
              </div>
              <button
                onClick={() => setShowAdminLogs(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
              {registrations.length === 0 ? (
                <div className="text-center py-12 text-neutral-400 text-sm">
                  No member registrations submitted on this device yet.
                </div>
              ) : (
                registrations.map((reg) => (
                  <div key={reg.id} className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{reg.fullName}</span>
                      <span className="font-mono text-red-400 text-[11px] font-semibold">{reg.id}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-neutral-300">
                      <div>Plan: <strong className="text-white">{reg.plan?.name} (₹{reg.plan?.price})</strong></div>
                      <div>Phone: <strong className="text-white">{reg.phoneNumber}</strong></div>
                      <div>Start Date: <strong className="text-white">{reg.startDate}</strong></div>
                      <div>Email: <span className="text-neutral-300">{reg.emailAddress}</span></div>
                    </div>
                    {reg.goals && (
                      <p className="text-neutral-400 text-[11px] pt-1 border-t border-white/5">
                        Goals: {reg.goals}
                      </p>
                    )}
                    <div className="pt-2 flex justify-between items-center text-[10px] text-neutral-500">
                      <span>Submitted: {reg.timestamp}</span>
                      <a
                        href={`https://wa.me/91${reg.phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${reg.fullName}, this is MJ FITNESS Meppadi confirming your ${reg.plan?.name} enrollment!`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline font-semibold"
                      >
                        Message Member on WhatsApp &rarr;
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t border-white/10 flex justify-between items-center bg-black/40">
              {registrations.length > 0 && (
                <button
                  onClick={clearRegistrations}
                  className="px-3 py-1.5 text-xs text-red-400 hover:text-red-300 flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Local Submissions</span>
                </button>
              )}
              <button
                onClick={() => setShowAdminLogs(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
