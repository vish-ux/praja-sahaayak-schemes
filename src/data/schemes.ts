
import { Scheme } from '../types';

export const schemes: Scheme[] = [
  {
    id: '1',
    name_en: 'Rythu Bandhu',
    name_te: 'రైతు బంధు',
    description: 'Financial assistance to farmers for cultivation and farming activities.',
    benefits: [
      'Rs. 5,000 per acre per season',
      'Direct cash transfer to farmer accounts',
      'Support for both Kharif and Rabi seasons'
    ],
    eligibility: [
      'Must be a registered farmer',
      'Should own agricultural land',
      'Must have updated land records'
    ],
    documents: [
      'Land ownership documents',
      'Aadhaar card',
      'Bank account details',
      'Farmer ID card'
    ],
    howToApply: [
      'Visit nearest village revenue office',
      'Submit required documents',
      'Complete verification process',
      'Amount will be credited directly to bank account'
    ],
    officialLink: 'https://rythubandhu.telangana.gov.in',
    conditions: {
      profession: ['farmer'],
      requiresLand: true
    }
  },
  {
    id: '2',
    name_en: 'Kalyana Lakshmi',
    name_te: 'కల్యాణ లక్ష్మి',
    description: 'Financial assistance for marriage of eligible girls from poor families.',
    benefits: [
      'Rs. 1,16,116 for marriage expenses',
      'One-time financial assistance',
      'Support for economically weaker families'
    ],
    eligibility: [
      'Bride should be 18 years or above',
      'Family income should be less than Rs. 2 lakhs per annum',
      'Should be a resident of Telangana'
    ],
    documents: [
      'Age proof of bride',
      'Income certificate',
      'Caste certificate',
      'Marriage invitation card',
      'Bank account details'
    ],
    howToApply: [
      'Apply online through official portal',
      'Submit required documents',
      'Get verification done by officials',
      'Amount credited after marriage completion'
    ],
    officialLink: 'https://kalyanalkshmi.telangana.gov.in',
    conditions: {
      minAge: 18,
      gender: ['female'],
      maxIncome: 200000
    }
  },
  {
    id: '3',
    name_en: 'Aasara Pensions',
    name_te: 'ఆసరా పెన్షన్లు',
    description: 'Monthly pension scheme for elderly, widows, disabled and other eligible categories.',
    benefits: [
      'Rs. 2,016 per month for elderly',
      'Rs. 2,016 per month for widows',
      'Rs. 3,016 per month for disabled',
      'Direct bank transfer'
    ],
    eligibility: [
      'Age 65+ for elderly pension',
      'Widows of any age',
      'Persons with disabilities',
      'Income below Rs. 2 lakhs per annum'
    ],
    documents: [
      'Age proof',
      'Income certificate',
      'Widow certificate (if applicable)',
      'Disability certificate (if applicable)',
      'Bank account details'
    ],
    howToApply: [
      'Apply at village/ward secretariat',
      'Submit required certificates',
      'Complete biometric verification',
      'Monthly pension will be credited'
    ],
    officialLink: 'https://pensioners.telangana.gov.in',
    conditions: {
      minAge: 65,
      maxIncome: 200000
    }
  },
  {
    id: '4',
    name_en: 'KCR Kit',
    name_te: 'కేసిఆర్ కిట్',
    description: 'Comprehensive maternity support kit for pregnant women and new mothers.',
    benefits: [
      'Complete baby care kit',
      'Nutritional supplements',
      'Baby clothes and essentials',
      'Hygiene products for mother and baby'
    ],
    eligibility: [
      'Pregnant women in Telangana',
      'Must be registered at government health facility',
      'Available for first two children'
    ],
    documents: [
      'Pregnancy registration card',
      'Aadhaar card',
      'Hospital registration documents'
    ],
    howToApply: [
      'Register pregnancy at nearest PHC/Government hospital',
      'Complete all antenatal checkups',
      'Kit will be provided during delivery'
    ],
    officialLink: 'https://health.telangana.gov.in',
    conditions: {
      gender: ['female'],
      minAge: 18,
      maxAge: 45
    }
  },
  {
    id: '5',
    name_en: 'Fee Reimbursement Scheme',
    name_te: 'ఫీజు రీయింబర్స్‌మెంట్ పథకం',
    description: 'Reimbursement of tuition fees for students from backward classes.',
    benefits: [
      'Full tuition fee reimbursement',
      'Covers professional courses',
      'Support for higher education',
      'Direct payment to institutions'
    ],
    eligibility: [
      'Students from SC/ST/BC/Minority communities',
      'Family income below Rs. 2 lakhs per annum',
      'Must be studying in recognized institutions'
    ],
    documents: [
      'Income certificate',
      'Caste certificate',
      'Admission receipt',
      'Fee structure from college',
      'Bank account details'
    ],
    howToApply: [
      'Apply online through TS ePass portal',
      'Upload required documents',
      'Institution verification',
      'Fee directly paid to college'
    ],
    officialLink: 'https://telanganaepass.cgg.gov.in',
    conditions: {
      maxIncome: 200000,
      caste: ['SC', 'ST', 'BC', 'Minority'],
      profession: ['student']
    }
  },
  {
    id: '6',
    name_en: 'Rythu Bima',
    name_te: 'రైతు బీమా',
    description: 'Life insurance scheme for farmers providing financial security to farming families.',
    benefits: [
      'Rs. 5 lakh life insurance coverage',
      'Premium paid by government',
      'Additional accidental coverage',
      'Family financial security'
    ],
    eligibility: [
      'Registered farmers in Telangana',
      'Age between 18-59 years',
      'Must own agricultural land'
    ],
    documents: [
      'Farmer ID card',
      'Land ownership documents',
      'Aadhaar card',
      'Nominee details'
    ],
    howToApply: [
      'Registration at village revenue office',
      'Submit required documents',
      'Complete health checkup if required',
      'Policy issued automatically'
    ],
    officialLink: 'https://rythubima.telangana.gov.in',
    conditions: {
      minAge: 18,
      maxAge: 59,
      profession: ['farmer'],
      requiresLand: true
    }
  },
  {
    id: '7',
    name_en: 'Dalit Bandhu',
    name_te: 'దలిత్ బంధు',
    description: 'Economic empowerment scheme for Scheduled Caste families.',
    benefits: [
      'Rs. 10 lakh financial assistance',
      'Support for self-employment ventures',
      'Skill development programs',
      'Business mentorship'
    ],
    eligibility: [
      'Must belong to Scheduled Caste',
      'Age between 18-45 years',
      'Should be a resident of Telangana for 10 years',
      'One member per family eligible'
    ],
    documents: [
      'Caste certificate (SC)',
      'Residence proof',
      'Aadhaar card',
      'Business plan',
      'Bank account details'
    ],
    howToApply: [
      'Apply through official portal',
      'Submit business proposal',
      'Attend interview process',
      'Complete skill development training'
    ],
    officialLink: 'https://dalitbandhu.telangana.gov.in',
    conditions: {
      minAge: 18,
      maxAge: 45,
      caste: ['SC']
    }
  },
  {
    id: '8',
    name_en: 'Mission Bhagiratha',
    name_te: 'మిషన్ భగీరథ',
    description: 'Safe drinking water supply scheme ensuring tap water connections to every household.',
    benefits: [
      'Tap water connection to household',
      'Safe and treated drinking water',
      '24x7 water supply',
      'Subsidized connection charges'
    ],
    eligibility: [
      'All households in Telangana',
      'Priority to rural areas',
      'Below poverty line families get free connections'
    ],
    documents: [
      'House ownership documents',
      'Aadhaar card',
      'Electricity connection proof',
      'BPL card (if applicable)'
    ],
    howToApply: [
      'Apply at village/ward secretariat',
      'Submit required documents',
      'Site inspection by officials',
      'Connection provided within timeline'
    ],
    officialLink: 'https://missionbhagiratha.telangana.gov.in',
    conditions: {}
  }
];
