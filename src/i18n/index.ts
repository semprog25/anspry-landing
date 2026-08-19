import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { de } from './locales/de'
import { en } from './locales/en'

function getLang(): string {
  const stored = localStorage.getItem('anspry_landing_lang')
  if (stored === 'de' || stored === 'en') return stored
  return navigator.language.startsWith('de') ? 'de' : 'en'
}

void i18n.use(initReactI18next).init({
  resources: { de: { translation: de }, en: { translation: en } },
  lng: getLang(),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export function setLandingLanguage(lang: 'de' | 'en') {
  localStorage.setItem('anspry_landing_lang', lang)
  void i18n.changeLanguage(lang)
}

export default i18n
