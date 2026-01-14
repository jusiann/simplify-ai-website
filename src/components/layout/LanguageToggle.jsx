import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

/**
 * LanguageToggle component for switching between Turkish and English
 * Fixed width to prevent layout shift on language change
 */
function LanguageToggle({ className = '' }) {
    const { i18n, t } = useTranslation('common');
    const currentLang = i18n.language;

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={`flex items-center gap-0.5 bg-surface-hover rounded-lg p-1 ${className}`}>
            <button
                onClick={() => handleLanguageChange('tr')}
                className={`w-10 py-1.5 text-sm font-medium rounded-md transition-all duration-300 
          ${currentLang === 'tr'
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                aria-label="Türkçe"
                aria-pressed={currentLang === 'tr'}
            >
                {t('language.tr')}
            </button>
            <button
                onClick={() => handleLanguageChange('en')}
                className={`w-10 py-1.5 text-sm font-medium rounded-md transition-all duration-300 
          ${currentLang === 'en'
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                aria-label="English"
                aria-pressed={currentLang === 'en'}
            >
                {t('language.en')}
            </button>
        </div>
    );
}

LanguageToggle.propTypes = {
    className: PropTypes.string,
};

export default LanguageToggle;
