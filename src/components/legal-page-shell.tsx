import { Link } from 'react-router-dom'
import { PageHead } from '@/components/page-head'
import { SiteLayout } from '@/components/site-layout'
import { PUBLIC_PATHS } from '@/config/site'

interface LegalPageShellProps {
  title: string
  description: string
  path: string
  children: React.ReactNode
}

export function LegalPageShell({ title, description, path, children }: LegalPageShellProps) {
  return (
    <SiteLayout>
      <PageHead title={`${title} — Anspry`} description={description} path={path} />
      <div className="mx-auto max-w-3xl px-4 py-16">
        <Link to={PUBLIC_PATHS.home} className="text-sm text-yellow hover:underline">
          ← Anspry
        </Link>
        <h1 className="mt-8 text-3xl font-bold">{title}</h1>
        <div className="prose prose-invert mt-8 space-y-6 text-text-muted">{children}</div>
      </div>
    </SiteLayout>
  )
}
