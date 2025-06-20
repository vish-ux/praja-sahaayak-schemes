
import { UserProfile, Scheme } from '../types';

export const matchSchemes = (profile: UserProfile, schemes: Scheme[]): Scheme[] => {
  return schemes.filter(scheme => {
    const conditions = scheme.conditions;
    
    // Check age requirements
    if (conditions.minAge && profile.age < conditions.minAge) return false;
    if (conditions.maxAge && profile.age > conditions.maxAge) return false;
    
    // Check gender requirements
    if (conditions.gender && !conditions.gender.includes(profile.gender)) return false;
    
    // Check caste requirements
    if (conditions.caste && !conditions.caste.includes(profile.caste)) return false;
    
    // Check income requirements (convert income range to number for comparison)
    if (conditions.maxIncome) {
      const incomeValue = getIncomeValue(profile.income);
      if (incomeValue > conditions.maxIncome) return false;
    }
    
    // Check profession requirements
    if (conditions.profession && !conditions.profession.includes(profile.profession.toLowerCase())) return false;
    
    // Check disability requirements
    if (conditions.requiresDisability && !profile.hasDisability) return false;
    
    // Check widow requirements
    if (conditions.requiresWidow && !profile.isWidow) return false;
    
    // Check land ownership requirements
    if (conditions.requiresLand && !profile.hasLand) return false;
    
    return true;
  });
};

const getIncomeValue = (incomeRange: string): number => {
  switch (incomeRange) {
    case 'Below 50,000': return 50000;
    case '50,000 - 1,00,000': return 100000;
    case '1,00,000 - 2,00,000': return 200000;
    case '2,00,000 - 5,00,000': return 500000;
    case 'Above 5,00,000': return 1000000;
    default: return 0;
  }
};
