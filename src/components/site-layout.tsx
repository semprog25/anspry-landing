import { LandingFooter, LandingHeader } from '@/components/landing-chrome'

interface SiteLayoutProps {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-charcoal">
      <LandingHeader />
      <main>{children}</main>
      <LandingFooter />
    </div>
  )
}
