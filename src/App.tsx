import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PageHead } from '@/components/page-head'
import { LandingPage } from '@/pages/landing-page'
import { PrivacyPage } from '@/pages/privacy-page'
import { TermsPage } from '@/pages/terms-page'
import { SupportPage } from '@/pages/support-page'
import { DownloadPage } from '@/pages/download-page'
import { AboutPage } from '@/pages/about-page'
import { PUBLIC_PATHS } from '@/config/site'

function HomeMeta() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <PageHead
      title={t('meta.title')}
      description={t('meta.description')}
      path={PUBLIC_PATHS.home}
    />
  )
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PUBLIC_PATHS.home}
          element={
            <>
              <HomeMeta />
              <LandingPage />
            </>
          }
        />
        <Route path={PUBLIC_PATHS.privacy} element={<PrivacyPage />} />
        <Route path={PUBLIC_PATHS.terms} element={<TermsPage />} />
        <Route path={PUBLIC_PATHS.support} element={<SupportPage />} />
        <Route path={PUBLIC_PATHS.download} element={<DownloadPage />} />
        <Route path={PUBLIC_PATHS.about} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}
