
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { UserProfile, Scheme } from '../types';
import { schemes } from '../data/schemes';
import { matchSchemes } from '../utils/schemeMatching';
import LanguageToggle from './LanguageToggle';

const SchemeResults: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [matchedSchemes, setMatchedSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      setUserProfile(profile);
      
      // Simulate API call delay
      setTimeout(() => {
        const matched = matchSchemes(profile, schemes);
        setMatchedSchemes(matched);
        setLoading(false);
      }, 1500);
    } else {
      navigate('/form');
    }
  }, [navigate]);

  const handleViewScheme = (schemeId: string) => {
    navigate(`/scheme/${schemeId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">{t('loading')}</p>
        </div>
      </div>
    );
  }

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
          <h1 className="text-gray-800 text-xl font-semibold">{t('recommendedSchemes')}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/form')}
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
          >
            Edit Profile
          </button>
          <LanguageToggle />
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Results Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {userProfile?.fullName && `Hello, ${userProfile.fullName}!`}
              </h2>
              <p className="text-lg text-gray-600">
                {matchedSchemes.length} {t('schemesFound')}
              </p>
            </div>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Schemes Grid */}
        {matchedSchemes.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedSchemes.map((scheme) => (
              <div key={scheme.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {language === 'te' ? scheme.name_te : scheme.name_en}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {scheme.description}
                  </p>
                  
                  {/* Key Benefits Preview */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">{t('benefits')}:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {scheme.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                      {scheme.benefits.length > 2 && (
                        <li className="text-blue-600">+{scheme.benefits.length - 2} more benefits</li>
                      )}
                    </ul>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <button
                    onClick={() => handleViewScheme(scheme.id)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    {t('viewMore')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t('noSchemes')}</h3>
            <p className="text-gray-600 mb-6">Try updating your profile to find more matches</p>
            <button
              onClick={() => navigate('/form')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Update Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchemeResults;
