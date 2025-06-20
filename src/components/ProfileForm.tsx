
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { UserProfile } from '../types';
import LanguageToggle from './LanguageToggle';

const ProfileForm: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [profile, setProfile] = useState<UserProfile>({
    fullName: '',
    dateOfBirth: '',
    age: 0,
    gender: 'male',
    district: '',
    caste: 'OC',
    income: '',
    profession: '',
    hasDisability: false,
    isWidow: false,
    hasLand: false,
    landAcreage: 0
  });

  const districts = [
    'Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon',
    'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar',
    'Khammam', 'Komaram Bheem Asifabad', 'Mahabubabad', 'Mahabubnagar',
    'Mancherial', 'Medak', 'Medchal–Malkajgiri', 'Mulugu', 'Nagarkurnool',
    'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli',
    'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet',
    'Vikarabad', 'Wanaparthy', 'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri'
  ];

  const incomeRanges = [
    'Below 50,000',
    '50,000 - 1,00,000',
    '1,00,000 - 2,00,000',
    '2,00,000 - 5,00,000',
    'Above 5,00,000'
  ];

  const professions = [
    'Farmer', 'Student', 'Government Employee', 'Private Employee',
    'Business Owner', 'Daily Wage Worker', 'Homemaker', 'Unemployed', 'Other'
  ];

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleInputChange = (field: keyof UserProfile, value: any) => {
    if (field === 'dateOfBirth') {
      const age = calculateAge(value);
      setProfile(prev => ({ ...prev, [field]: value, age }));
    } else {
      setProfile(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Store profile in localStorage and navigate to results
    localStorage.setItem('userProfile', JSON.stringify(profile));
    navigate('/schemes');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('personalInfo')}</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('fullName')}
              </label>
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('dateOfBirth')}
              </label>
              <input
                type="date"
                value={profile.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              {profile.age > 0 && (
                <p className="text-sm text-gray-600 mt-1">Age: {profile.age} years</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('gender')}
              </label>
              <select
                value={profile.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="male">{t('male')}</option>
                <option value="female">{t('female')}</option>
                <option value="other">{t('other')}</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('locationInfo')}</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('district')}
              </label>
              <select
                value={profile.district}
                onChange={(e) => handleInputChange('district', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('caste')}
              </label>
              <select
                value={profile.caste}
                onChange={(e) => handleInputChange('caste', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="SC">SC (Scheduled Caste)</option>
                <option value="ST">ST (Scheduled Tribe)</option>
                <option value="BC">BC (Backward Class)</option>
                <option value="OC">OC (Other Caste)</option>
                <option value="Minority">Minority</option>
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="disability"
                  checked={profile.hasDisability}
                  onChange={(e) => handleInputChange('hasDisability', e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="disability" className="text-sm font-medium text-gray-700">
                  {t('hasDisability')}
                </label>
              </div>

              {profile.gender === 'female' && (
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="widow"
                    checked={profile.isWidow}
                    onChange={(e) => handleInputChange('isWidow', e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="widow" className="text-sm font-medium text-gray-700">
                    {t('isWidow')}
                  </label>
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('economicInfo')}</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('income')}
              </label>
              <select
                value={profile.income}
                onChange={(e) => handleInputChange('income', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Income Range</option>
                {incomeRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('profession')}
              </label>
              <select
                value={profile.profession}
                onChange={(e) => handleInputChange('profession', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Profession</option>
                {professions.map((profession) => (
                  <option key={profession} value={profession}>{profession}</option>
                ))}
              </select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="hasLand"
                  checked={profile.hasLand}
                  onChange={(e) => handleInputChange('hasLand', e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="hasLand" className="text-sm font-medium text-gray-700">
                  {t('hasLand')}
                </label>
              </div>

              {profile.hasLand && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('landAcreage')}
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={profile.landAcreage || ''}
                    onChange={(e) => handleInputChange('landAcreage', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => navigate('/')}
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"
          >
            <span className="text-white font-bold text-lg">T</span>
          </button>
          <h1 className="text-gray-800 text-xl font-semibold">{t('findYourSchemes')}</h1>
        </div>
        <LanguageToggle />
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderStep()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t('back')}
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {t('next')}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                {t('submit')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
