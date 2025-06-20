
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    appName: "Telangana Schemes Finder",
    appDescription: "Discover government schemes you're eligible for",
    getStarted: "Get Started",
    findYourSchemes: "Find Your Schemes",
    welcomeMessage: "Welcome to Telangana's comprehensive government schemes discovery platform",
    subMessage: "Answer a few questions about yourself and discover all the government schemes and benefits you're eligible for",
    eligibilityChecker: "Eligibility Checker",
    recommendedSchemes: "Recommended Schemes",
    schemeDetails: "Scheme Details",
    personalInfo: "Personal Information",
    locationInfo: "Location & Social Details", 
    economicInfo: "Economic Information",
    submit: "Find My Schemes",
    next: "Next",
    back: "Back",
    fullName: "Full Name",
    dateOfBirth: "Date of Birth",
    gender: "Gender",
    male: "Male",
    female: "Female",
    other: "Other",
    district: "District",
    caste: "Caste Category",
    income: "Annual Income Range",
    profession: "Profession",
    hasDisability: "Do you have a disability?",
    isWidow: "Are you a widow?",
    hasLand: "Do you own agricultural land?",
    landAcreage: "Land acreage (in acres)",
    yes: "Yes",
    no: "No",
    viewMore: "View Details",
    eligibility: "Eligibility",
    benefits: "Benefits",
    documents: "Required Documents",
    howToApply: "How to Apply",
    officialLink: "Official Website",
    schemesFound: "schemes found for you",
    noSchemes: "No schemes found matching your profile",
    loading: "Finding your schemes..."
  },
  te: {
    appName: "తెలంగాణ స్కీంలు వెతుకుడు",
    appDescription: "మీకు అర్హత ఉన్న ప్రభుత్వ పథకాలను కనుగొనండి",
    getStarted: "ప్రారంభించండి",
    findYourSchemes: "మీ స్కీంలను కనుగొనండి",
    welcomeMessage: "తెలంగాణ ప్రభుత్వ పథకాల వెతుకుడు వేదికకు స్వాగతం",
    subMessage: "మీ గురించి కొన్ని ప్రశ్నలకు సమాధానం ఇవ్వండి మరియు మీకు అర్హత ఉన్న అన్ని ప్రభుత్వ పథకాలను కనుగొనండి",
    eligibilityChecker: "అర్హత తనిఖీ",
    recommendedSchemes: "సిఫార్సు చేయబడిన పథకాలు",
    schemeDetails: "పథకం వివరాలు",
    personalInfo: "వ్యక్తిగత సమాచారం",
    locationInfo: "స్థానం & సామాజిక వివరాలు",
    economicInfo: "ఆర్థిక సమాచారం", 
    submit: "నా పథకాలను కనుగొనండి",
    next: "తదుపరి",
    back: "వెనుకకు",
    fullName: "పూర్తి పేరు",
    dateOfBirth: "పుట్టిన తేదీ",
    gender: "లింగం",
    male: "పురుషుడు",
    female: "స్త్రీ",
    other: "ఇతర",
    district: "జిల్లా",
    caste: "కుల వర్గం",
    income: "వార్షిక ఆదాయ స్థాయి",
    profession: "వృత్తి",
    hasDisability: "మీకు వైకల్యం ఉందా?",
    isWidow: "మీరు వితంతువా?",
    hasLand: "మీకు వ్యవసాయ భూమి ఉందా?",
    landAcreage: "భూమి విస్తీర్ణం (ఎకరాలలో)",
    yes: "అవును",
    no: "లేదు",
    viewMore: "వివరాలు చూడండి",
    eligibility: "అర్హత",
    benefits: "ప్రయోజనాలు",
    documents: "అవసరమైన పత్రాలు",
    howToApply: "దరకాస్తు ఎలా చేయాలి",
    officialLink: "అధికారిక వెబ్‌సైట్",
    schemesFound: "మీకు పథకాలు దొరికాయి",
    noSchemes: "మీ ప్రొఫైల్‌కు సరిపోయే పథకాలు లేవు",
    loading: "మీ పథకాలను కనుగొంటున్నాం..."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'te' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
