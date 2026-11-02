import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calculator, 
  Flame, 
  Dumbbell, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Activity, 
  ShieldCheck, 
  Target,
  Zap,
  Info
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export type FitnessObjective = 'hypertrophy' | 'fatloss' | 'strength' | 'endurance';

interface FitnessCalculatorProps {
  onApplyPlanToGoals?: (goalText: string) => void;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({ onApplyPlanToGoals }) => {
  // Calculator State
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(74);
  const [objective, setObjective] = useState<FitnessObjective>('hypertrophy');

  // Real-time Countdown Timer State
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format height into Feet and Inches
  const heightFtIn = useMemo(() => {
    const totalInches = heightCm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}"`;
  }, [heightCm]);

  // Weight in Lbs
  const weightLbs = useMemo(() => {
    return (weightKg * 2.20462).toFixed(1);
  }, [weightKg]);

  // Real-time BMI Calculation
  const bmiData = useMemo(() => {
    const heightInMeters = heightCm / 100;
    const bmi = weightKg / (heightInMeters * heightInMeters);
    const roundedBmi = parseFloat(bmi.toFixed(1));

    let status = 'Healthy Weight';
    let color = 'text-emerald-400';
    let badgeBg = 'bg-emerald-950/60 border-emerald-500/40';
    let gaugePercent = Math.min(Math.max(((roundedBmi - 15) / 25) * 100, 5), 95);

    if (roundedBmi < 18.5) {
      status = 'Underweight (Bulking Opportunity)';
      color = 'text-amber-400';
      badgeBg = 'bg-amber-950/60 border-amber-500/40';
    } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
      status = 'Optimal Athletic Range';
      color = 'text-emerald-400';
      badgeBg = 'bg-emerald-950/60 border-emerald-500/40';
    } else if (roundedBmi >= 25.0 && roundedBmi <= 29.9) {
      status = 'Overweight / High Muscle Mass';
      color = 'text-orange-400';
      badgeBg = 'bg-orange-950/60 border-orange-500/40';
    } else {
      status = 'High BMI (Recomposition Focus)';
      color = 'text-red-400';
      badgeBg = 'bg-red-950/60 border-red-500/40';
    }

    return {
      value: roundedBmi,
      status,
      color,
      badgeBg,
      gaugePercent,
    };
  }, [heightCm, weightKg]);

  // Dynamic Daily Protein Target
  const proteinTarget = useMemo(() => {
    let factorMin = 1.8;
    let factorMax = 2.2;
    let explanation = '1.8 – 2.2g/kg for maximum muscle protein synthesis & hypertrophy.';

    if (objective === 'fatloss') {
      factorMin = 2.0;
      factorMax = 2.4;
      explanation = '2.0 – 2.4g/kg to safeguard lean muscle tissue in a caloric deficit.';
    } else if (objective === 'strength') {
      factorMin = 1.7;
      factorMax = 2.1;
      explanation = '1.7 – 2.1g/kg to support explosive power output and heavy tendon repair.';
    } else if (objective === 'endurance') {
      factorMin = 1.3;
      factorMax = 1.6;
      explanation = '1.3 – 1.6g/kg to fuel aerobic capacity, glycogen reload & daily recovery.';
    }

    const minGrams = Math.round(weightKg * factorMin);
    const maxGrams = Math.round(weightKg * factorMax);
    const mealPortion = Math.round((minGrams + maxGrams) / 2 / 4);

    return {
      range: `${minGrams}g – ${maxGrams}g`,
      perDay: Math.round((minGrams + maxGrams) / 2),
      explanation,
      meals: `Approx. ${mealPortion}g across 4 balanced meals`,
    };
  }, [weightKg, objective]);

  // Dynamic Workout Split Recommendations
  const workoutRecommendation = useMemo(() => {
    switch (objective) {
      case 'hypertrophy':
        return {
          title: 'Push · Pull · Legs (PPL Hypertrophy)',
          schedule: '6 Days On · 1 Day Rest',
          focus: 'Maximum Volume & Muscle Sculpting',
          days: [
            { day: 'Day 1', focus: 'Push (Chest, Delts, Triceps)', exercises: 'Incline Bench, Dumbbell Press, Cable Flies' },
            { day: 'Day 2', focus: 'Pull (Back, Lats, Biceps)', exercises: 'Lat Pulldowns, Barbell Rows, Hammer Curls' },
            { day: 'Day 3', focus: 'Legs & Abs (Quads, Calves)', exercises: 'Squats, Romanian Deadlifts, Leg Extensions' },
            { day: 'Day 4-6', focus: 'Repeat PPL Cycle with Varied Angles', exercises: 'Hypertrophy target 8-12 reps per set' },
            { day: 'Day 7', focus: 'Rest & Steam Bath Recovery', exercises: 'Full body thermal steam session at MJ' },
          ],
          gymTip: 'Pair your leg days with MJ Fitness steam bath session for accelerated lactate removal.',
        };
      case 'fatloss':
        return {
          title: 'Metabolic Conditioning + High-Intensity Split',
          schedule: '4 Days Lifting · 2 Days Cardio/Core',
          focus: 'Accelerated Caloric Expenditure & Lean Retention',
          days: [
            { day: 'Day 1', focus: 'Upper Body Compound Strength', exercises: 'Overhead Press, Dumbbell Rows, Dips' },
            { day: 'Day 2', focus: 'Lower Body & Sprints', exercises: 'Goblet Squats, Walking Lunges, Treadmill Intervals' },
            { day: 'Day 3', focus: 'Active Recovery & Core', exercises: 'Planks, Hanging Leg Raises, 20-min Steam Bath' },
            { day: 'Day 4', focus: 'Full Body Functional Circuit', exercises: 'Kettlebell Swings, Pushups, Cable Rows' },
            { day: 'Day 5', focus: 'High Energy Conditioning', exercises: 'Rowing machine, Assault bike, HIIT intervals' },
            { day: 'Day 6-7', focus: 'Steady State Cardio & Rest', exercises: '8,000 to 10,000 steps daily outdoor walk' },
          ],
          gymTip: 'Maintain high training intensity with 45-60 second rest periods between sets.',
        };
      case 'strength':
        return {
          title: 'Heavy Compound 5x5 Strength Protocol',
          schedule: '3–4 Days On · Non-Consecutive Days',
          focus: 'Maximal 1RM CNS Adaptation & Power Output',
          days: [
            { day: 'Monday', focus: 'Heavy Squat & Bench Press (5x5)', exercises: 'Olympic Barbell focus, RPE 8-9' },
            { day: 'Wednesday', focus: 'Deadlift & Overhead Strict Press', exercises: 'Heavy singles/doubles + pullups' },
            { day: 'Friday', focus: 'Speed Squat & Paused Bench', exercises: 'Explosive drive & Bar speed control' },
            { day: 'Saturday', focus: 'Accessory & Posterior Chain', exercises: 'Face pulls, barbell shrugs, core stability' },
            { day: 'Sun/Tue/Thu', focus: 'Complete Rest & Nutrient Reload', exercises: 'Sleep 8+ hrs & High Protein' },
          ],
          gymTip: 'Utilize MJ Fitness heavy power racks and calibrated steel plates for progressive overload.',
        };
      case 'endurance':
      default:
        return {
          title: 'Functional Conditioning & Longevity Split',
          schedule: '4 Days Hybrid · 2 Days Active Mobility',
          focus: 'Cardiovascular Endurance, Joint Mobility & Health',
          days: [
            { day: 'Day 1', focus: 'Upper Body Pull & Aerobic Base', exercises: 'Dumbbell Rows, Lat Pulldowns, 20m Rowing' },
            { day: 'Day 2', focus: 'Lower Body Unilateral Balance', exercises: 'Bulgarian Split Squats, Step-ups, Core' },
            { day: 'Day 3', focus: 'Mobility & Steam Bath Therapy', exercises: 'Dynamic foam rolling & 20 min steam spa' },
            { day: 'Day 4', focus: 'Push Strength & VO2 Max Intervals', exercises: 'Pushups, Dumbbell Floor Press, Stair Climber' },
            { day: 'Day 5', focus: 'Total Body Hybrid Circuit', exercises: 'Clean & Press, Farmer Walks, Battle Ropes' },
          ],
          gymTip: 'Focus on breathing rhythm and post-workout hydration at our water & recovery stations.',
        };
    }
  }, [objective]);

  // Real-time Schedule Calculation & Countdown
  const scheduleInfo = useMemo(() => {
    const day = currentTime.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();
    const currentTimeInSeconds = currentHours * 3600 + currentMinutes * 60 + currentSeconds;

    // Gym operating bounds: 5:30 AM (5.5 * 3600 = 19800) to 10:30 PM (22.5 * 3600 = 81000)
    const openTimeSeconds = 5 * 3600 + 30 * 60; // 19,800 sec
    const closeTimeSeconds = 22 * 3600 + 30 * 60; // 81,000 sec

    let isOpen = false;
    let nextStatusText = '';
    let secondsUntilNextEvent = 0;

    if (day === 0) {
      // Sunday: Closed all day. Next event is Monday 5:30 AM
      isOpen = false;
      nextStatusText = 'Opens Monday at 5:30 AM';
      // Seconds remaining today + Monday 5:30 AM
      const secondsRemainingSunday = 86400 - currentTimeInSeconds;
      secondsUntilNextEvent = secondsRemainingSunday + openTimeSeconds;
    } else {
      // Monday to Saturday
      if (currentTimeInSeconds >= openTimeSeconds && currentTimeInSeconds < closeTimeSeconds) {
        // Gym is currently OPEN
        isOpen = true;
        nextStatusText = 'Closes tonight at 10:30 PM';
        secondsUntilNextEvent = closeTimeSeconds - currentTimeInSeconds;
      } else if (currentTimeInSeconds < openTimeSeconds) {
        // Early morning before 5:30 AM
        isOpen = false;
        nextStatusText = 'Opens today at 5:30 AM';
        secondsUntilNextEvent = openTimeSeconds - currentTimeInSeconds;
      } else {
        // Late night after 10:30 PM
        isOpen = false;
        if (day === 6) {
          // Saturday night -> Next event is Monday 5:30 AM (skip Sunday)
          nextStatusText = 'Opens Monday at 5:30 AM';
          const secondsRemainingSaturday = 86400 - currentTimeInSeconds;
          secondsUntilNextEvent = secondsRemainingSaturday + 86400 + openTimeSeconds;
        } else {
          // Next day morning at 5:30 AM
          nextStatusText = 'Opens tomorrow at 5:30 AM';
          const secondsRemainingToday = 86400 - currentTimeInSeconds;
          secondsUntilNextEvent = secondsRemainingToday + openTimeSeconds;
        }
      }
    }

    // Convert seconds to H:M:S
    const hours = Math.floor(secondsUntilNextEvent / 3600);
    const minutes = Math.floor((secondsUntilNextEvent % 3600) / 60);
    const seconds = secondsUntilNextEvent % 60;

    const pad = (n: number) => n.toString().padStart(2, '0');

    return {
      isOpen,
      nextStatusText,
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds),
      dayName: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day],
      formattedCurrentTime: currentTime.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }),
    };
  }, [currentTime]);

  const handleApplyToRegistration = () => {
    const summary = `${workoutRecommendation.title} (${proteinTarget.range} daily protein, Height: ${heightCm}cm, Weight: ${weightKg}kg)`;
    if (onApplyPlanToGoals) {
      onApplyPlanToGoals(summary);
    }
    const regSection = document.getElementById('registration');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#0a0a0d] relative overflow-hidden">
      {/* Background Soft Aura Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-red-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-red-700/8 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-3">
            <Activity className="w-4 h-4" />
            <span>MJ Performance Lab</span>
            <span className="w-8 h-px bg-red-500/50"></span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-4">
            Fitness Calculator & Workout Architect
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Dial in your biometric measurements to instantly calculate your real-time BMI, optimal daily protein intake,
            and tailored workout split.
          </p>
        </div>

        {/* 2-Column Split: Left Calculator Input & Real-time Metrics, Right Operating Hours & Split Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Calculator (Sliders & Objectives) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121319] border border-red-500/30 aura-red-glow relative overflow-hidden">
              {/* Subtle Red Light Arc in Card Header */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/15 border border-red-500/30 flex items-center justify-center shrink-0">
                    <Calculator className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
                      Biometric Sliders
                    </h3>
                    <p className="text-xs text-neutral-400">Interactive live calculations</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>Live Metrics</span>
                </div>
              </div>

              {/* Slider 1: Height */}
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="height-slider" className="text-xs font-semibold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                    <span>Height</span>
                    <span className="text-[11px] text-neutral-500 font-normal">({heightFtIn})</span>
                  </label>
                  <div className="flex items-baseline gap-1 font-display">
                    <span className="text-3xl font-bold text-white tabular-nums">{heightCm}</span>
                    <span className="text-xs text-red-400 font-semibold uppercase">CM</span>
                  </div>
                </div>

                <div className="relative py-2">
                  <input
                    id="height-slider"
                    type="range"
                    min="120"
                    max="220"
                    step="1"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    aria-label="Height in centimeters"
                    className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-2">
                    <span>120 cm (3'11")</span>
                    <span>170 cm (5'7")</span>
                    <span>220 cm (7'2")</span>
                  </div>
                </div>
              </div>

              {/* Slider 2: Weight */}
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="weight-slider" className="text-xs font-semibold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                    <span>Current Bodyweight</span>
                    <span className="text-[11px] text-neutral-500 font-normal">({weightLbs} lbs)</span>
                  </label>
                  <div className="flex items-baseline gap-1 font-display">
                    <span className="text-3xl font-bold text-white tabular-nums">{weightKg}</span>
                    <span className="text-xs text-red-400 font-semibold uppercase">KG</span>
                  </div>
                </div>

                <div className="relative py-2">
                  <input
                    id="weight-slider"
                    type="range"
                    min="40"
                    max="150"
                    step="1"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    aria-label="Weight in kilograms"
                    className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-600 focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-2">
                    <span>40 kg (88 lbs)</span>
                    <span>95 kg (209 lbs)</span>
                    <span>150 kg (330 lbs)</span>
                  </div>
                </div>
              </div>

              {/* Primary Objective Buttons */}
              <div className="mb-8">
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
                  Primary Fitness Objective <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'hypertrophy', label: 'Hypertrophy', desc: 'Build Muscle', icon: Dumbbell },
                    { id: 'fatloss', label: 'Fat Loss', desc: 'Cut & Shred', icon: Flame },
                    { id: 'strength', label: 'Strength', desc: 'Max 1RM Power', icon: Zap },
                    { id: 'endurance', label: 'Endurance', desc: 'Cardio & Stamina', icon: Activity },
                  ].map((item) => {
                    const isSelected = objective === item.id;
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setObjective(item.id as FitnessObjective)}
                        className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-red-600/20 border-red-500 text-white aura-red-glow-active'
                            : 'bg-neutral-900/80 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Icon className={`w-4 h-4 ${isSelected ? 'text-red-400' : 'text-neutral-500'}`} />
                          {isSelected && <Check className="w-3.5 h-3.5 text-red-400" />}
                        </div>
                        <p className="font-display text-sm font-bold uppercase tracking-wide text-white leading-tight">
                          {item.label}
                        </p>
                        <p className="text-[10px] text-neutral-400 mt-0.5">{item.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Real-time Calculated Metrics Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {/* Metric 1: BMI */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                      Body Mass Index
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${bmiData.badgeBg} ${bmiData.color}`}>
                      {bmiData.status}
                    </span>
                  </div>

                  <div className="my-2 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-white tabular-nums tracking-tight">
                      {bmiData.value}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">kg/m²</span>
                  </div>

                  {/* Gauge Bar */}
                  <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden relative mt-1">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 via-orange-400 to-red-500 transition-all duration-300"
                      style={{ width: `${bmiData.gaugePercent}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] text-neutral-500 mt-1 font-mono">
                    <span>18.5 (Under)</span>
                    <span>25 (Optimal)</span>
                    <span>30+ (High)</span>
                  </div>
                </div>

                {/* Metric 2: Dynamic Protein Target */}
                <div className="p-4 rounded-xl bg-black/50 border border-red-500/25 aura-red-glow-subtle flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                      Daily Protein Target
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-950/60 text-red-400 border border-red-500/40">
                      Target Range
                    </span>
                  </div>

                  <div className="my-2 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-white tabular-nums tracking-tight">
                      {proteinTarget.range}
                    </span>
                  </div>

                  <p className="text-[11px] text-neutral-300 leading-tight">
                    {proteinTarget.meals}
                  </p>
                  <p className="text-[10px] text-neutral-400 mt-1 italic">
                    {proteinTarget.explanation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Operating Hours Countdown & Workout Split Recommendation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Live Operating Hours & Countdown Timer Section */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#181114] to-[#121319] border border-red-500/40 aura-red-glow relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase text-white tracking-wide">
                      Live Gym Schedule
                    </h3>
                    <p className="text-[11px] text-neutral-400">{scheduleInfo.dayName} · {scheduleInfo.formattedCurrentTime}</p>
                  </div>
                </div>

                {/* Status Indicator Pill */}
                <div
                  className={`px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5 border shadow-sm ${
                    scheduleInfo.isOpen
                      ? 'bg-emerald-950 text-emerald-400 border-emerald-500/50 shadow-emerald-900/30'
                      : 'bg-red-950 text-red-400 border-red-500/50 shadow-red-900/30'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${scheduleInfo.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-red-500'}`} />
                  <span>{scheduleInfo.isOpen ? 'Open Now' : 'Closed Now'}</span>
                </div>
              </div>

              {/* Countdown Display Card */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-4 text-center">
                <p className="text-xs text-neutral-300 font-medium mb-3 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-red-500" />
                  <span>{scheduleInfo.nextStatusText} in:</span>
                </p>

                {/* Countdown Digit Blocks with Red Glow */}
                <div className="flex items-center justify-center gap-3 font-display">
                  {/* Hours */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-neutral-900 border border-red-500/30 flex items-center justify-center aura-red-glow-subtle">
                      <span className="text-3xl font-bold text-white tabular-nums tracking-wider">
                        {scheduleInfo.hours}
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider mt-1.5">
                      Hours
                    </span>
                  </div>

                  <span className="text-2xl font-bold text-red-500 mb-5">:</span>

                  {/* Minutes */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-neutral-900 border border-red-500/30 flex items-center justify-center aura-red-glow-subtle">
                      <span className="text-3xl font-bold text-white tabular-nums tracking-wider">
                        {scheduleInfo.minutes}
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider mt-1.5">
                      Minutes
                    </span>
                  </div>

                  <span className="text-2xl font-bold text-red-500 mb-5">:</span>

                  {/* Seconds */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-xl bg-neutral-900 border border-red-500/30 flex items-center justify-center aura-red-glow-subtle">
                      <span className="text-3xl font-bold text-red-400 tabular-nums tracking-wider">
                        {scheduleInfo.seconds}
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider mt-1.5">
                      Seconds
                    </span>
                  </div>
                </div>
              </div>

              {/* Standard Hours Note */}
              <div className="flex items-center justify-between text-xs text-neutral-400 px-1">
                <span>Mon – Sat: 5:30 AM – 10:30 PM</span>
                <span className="text-red-400 font-medium">Sunday: Closed</span>
              </div>
            </div>

            {/* Dynamic Workout Split Blueprint */}
            <div className="p-6 rounded-2xl bg-[#121319] border border-white/10 aura-red-glow-subtle flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                      Recommended Routine
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-300 font-mono">
                    {workoutRecommendation.schedule}
                  </span>
                </div>

                <h4 className="font-display text-xl font-bold uppercase text-white tracking-wide mb-1">
                  {workoutRecommendation.title}
                </h4>
                <p className="text-xs text-neutral-400 mb-4">{workoutRecommendation.focus}</p>

                {/* Day-by-Day Micro Preview */}
                <div className="space-y-2 mb-4">
                  {workoutRecommendation.days.slice(0, 3).map((d, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-red-400 uppercase text-[11px]">{d.day}:</span>
                        <span className="text-neutral-200 font-medium">{d.focus}</span>
                      </div>
                      <span className="text-[10px] text-neutral-500 hidden sm:inline truncate max-w-[130px]">{d.exercises}</span>
                    </div>
                  ))}
                </div>

                {/* Gym Tip */}
                <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20 text-xs text-neutral-300 flex items-start gap-2 mb-4">
                  <Info className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed">{workoutRecommendation.gymTip}</span>
                </div>
              </div>

              {/* Action: Apply to Registration */}
              <button
                type="button"
                onClick={handleApplyToRegistration}
                className="w-full py-3.5 px-4 rounded-xl font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:scale-98 aura-red-glow-active transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enroll with this Fitness Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
