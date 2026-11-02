export interface MembershipPlan {
  id: string;
  name: string;
  category: 'standard' | 'student' | 'addon';
  duration: string;
  price: number;
  admissionFee: number;
  highlight?: string;
  isPopular?: boolean;
  features: string[];
}

export const GYM_INFO = {
  name: 'MJ FITNESS',
  city: 'Meppadi, Wayanad',
  tagline: 'Build Your Strength. Transform Your Life.',
  phone: '9074998978',
  phoneFormatted: '+91 90749 98978',
  email: 'mjfitnessmeppadi@gmail.com',
  instagram: 'https://www.instagram.com/mj_fitness_centre?cplk=aWhrdXF3YTNobmV0',
  instagramHandle: '@mj_fitness_centre',
  address: 'MJ Fitness Centre, Meppadi, Wayanad, Kerala 673577',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.7448922289805!2d76.13696019999999!3d11.553417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60d79e5fae36b%3A0xa47d9d96fdc88bf!2sMJ%20Fitness%20Centre!5e1!3m2!1sen!2sin!4v1793455749927!5m2!1sen!2sin',
  googleMapsDirectionsUrl: 'https://maps.google.com/?cid=11852899478491864063',
  logoUrl: '/assets/aistudio/e28d698a-844a-490d-b287-f4e9828d7b6a_1eaa7042.jpg',
  timings: {
    weekdays: 'Monday to Saturday: 5:30 AM – 10:30 PM',
    sunday: 'Sunday: Closed',
    openHour: 5.5, // 5:30 AM
    closeHour: 22.5, // 10:30 PM
  },
};

export const STANDARD_PLANS: MembershipPlan[] = [
  {
    id: 'plan-1m',
    name: '1 Month Membership',
    category: 'standard',
    duration: '1 Month',
    price: 1000,
    admissionFee: 1500,
    features: [
      'Full Gym Floor & Strength Access',
      'Free Weights & Cable Stations',
      'General Fitness Guidance',
    ],
  },
  {
    id: 'plan-3m',
    name: '3 Months Membership',
    category: 'standard',
    duration: '3 Months',
    price: 2700,
    admissionFee: 0,
    isPopular: true,
    highlight: 'Admission Fee: FREE (Save ₹1,500)',
    features: [
      'Admission Fee 100% Free',
      'Full Gym Floor & Strength Access',
      'Free Weights & Cable Stations',
      'Progress Tracking Assessment',
      'Locker & Shower Facilities',
    ],
  },
  {
    id: 'plan-6m',
    name: '6 Months Membership',
    category: 'standard',
    duration: '6 Months',
    price: 5000,
    admissionFee: 0,
    highlight: 'Admission Fee: FREE (Save ₹2,500)',
    features: [
      'Admission Fee 100% Free',
      'Full Access for 180 Days',
      'Complete Strength & Cardio Suite',
      'Custom Workout Guidance',
    ],
  },
  {
    id: 'plan-1y',
    name: '1 Year Membership',
    category: 'standard',
    duration: '12 Months',
    price: 8500,
    admissionFee: 0,
    highlight: 'Best Annual Value (₹708/mo)',
    features: [
      'Admission Fee 100% Free',
      'Unrestricted 365 Days Access',
      'Lowest Monthly Rate',
    ],
  },
];

export const STUDENT_PLANS: MembershipPlan[] = [
  {
    id: 'student-1m',
    name: 'Student 1 Month',
    category: 'student',
    duration: '1 Month',
    price: 900,
    admissionFee: 0,
    highlight: 'Admission Fee: FREE',
    features: [
      'Special Student Concession',
      'Admission Fee 100% Free',
      'Full Equipment & Weights Access',
      'Flexible Study-friendly Timings',
      'Valid Student ID Required',
    ],
  },
  {
    id: 'student-2m',
    name: 'Student 2 Months',
    category: 'student',
    duration: '2 Months',
    price: 1600,
    admissionFee: 0,
    highlight: '₹800/month (Admission Free)',
    features: [
      'Semester Break Fitness',
      'Admission Fee 100% Free',
      'Strength, Cardio & Conditioning',
      'Valid Student ID Required',
    ],
  },
  {
    id: 'student-3m',
    name: 'Student 3 Months',
    category: 'student',
    duration: '3 Months',
    price: 2100,
    admissionFee: 0,
    isPopular: true,
    highlight: 'Only ₹700/mo (Best Student Pack)',
    features: [
      'Most Economical Student Plan',
      'Admission Fee 100% Free',
      'Complete Gym Access for 90 Days',
      'Complimentary Workout Split Routine',
      'Valid Student ID Required',
    ],
  },
];

export const ADDON_PLANS: MembershipPlan[] = [
  {
    id: 'addon-day',
    name: 'Daily Workout Pass',
    category: 'addon',
    duration: 'Single Day',
    price: 100,
    admissionFee: 0,
    highlight: 'Drop-in Anytime',
    features: [
      'Full Day Access to Equipment',
      'Ideal for Travelers & Trial Visits',
      'Access During All Open Hours',
    ],
  },
  {
    id: 'addon-steam',
    name: 'Luxury Steam Bath Session',
    category: 'addon',
    duration: 'Per Session',
    price: 600,
    admissionFee: 0,
    highlight: 'Deep Muscle Recovery',
    features: [
      'Deep Muscle Relaxation & Detox',
      'Relieves Post-workout Soreness',
      'Hygienic Modern Steam Facility',
      'Private Session Booking Available',
    ],
  },
  {
    id: 'addon-pt',
    name: 'Personal Training Program',
    category: 'addon',
    duration: 'Per Month',
    price: 5000,
    admissionFee: 0,
    highlight: '1-on-1 Dedicated Coach',
    features: [
      'Dedicated 1-on-1 Fitness Coach',
      'Customized Diet & Nutrition Blueprint',
      'Bi-weekly Body Composition Checks',
      'Targeted Muscle & Fat-Loss Protocols',
    ],
  },
];

export const ALL_REGISTRATION_PLANS = [
  ...STANDARD_PLANS,
  ...STUDENT_PLANS,
  ...ADDON_PLANS,
];
