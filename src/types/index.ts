
export interface UserProfile {
  fullName: string;
  dateOfBirth: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  district: string;
  caste: 'SC' | 'ST' | 'BC' | 'OC' | 'Minority';
  income: string;
  profession: string;
  hasDisability: boolean;
  isWidow: boolean;
  hasLand: boolean;
  landAcreage?: number;
}

export interface Scheme {
  id: string;
  name_en: string;
  name_te: string;
  description: string;
  benefits: string[];
  eligibility: string[];
  documents: string[];
  howToApply: string[];
  officialLink: string;
  conditions: {
    minAge?: number;
    maxAge?: number;
    gender?: string[];
    caste?: string[];
    maxIncome?: number;
    profession?: string[];
    requiresDisability?: boolean;
    requiresWidow?: boolean;
    requiresLand?: boolean;
  };
}
