import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LandingPage } from '@/pages/landing-page'
import { PrivacyPage } from '@/pages/privacy-page'
import { TermsPage } from '@/pages/terms-page'
import { SupportPage } from '@/pages/support-page'
import { DownloadPage } from '@/pages/download-page'
import { AboutPage } from '@/pages/about-page'
import { PUBLIC_PATHS } from '@/config/site'

function DocumentLanguage() {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])
  return null
}

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

export function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <DocumentLanguage />
      <Routes>
        <Route path={PUBLIC_PATHS.home} element={<LandingPage />} />
        <Route path={PUBLIC_PATHS.privacy} element={<PrivacyPage />} />
        <Route path={PUBLIC_PATHS.terms} element={<TermsPage />} />
        <Route path={PUBLIC_PATHS.support} element={<SupportPage />} />
        <Route path={PUBLIC_PATHS.download} element={<DownloadPage />} />
        <Route path={PUBLIC_PATHS.about} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}
