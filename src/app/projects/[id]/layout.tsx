import { getPortfolio } from '@/lib/actions/portfolioActions'
import { Metadata } from 'next'

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}

type MetadataProps = {
  params: { id: string }
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const id = params.id
  const project = await getPortfolio(id)

  return {
    title: project.title,
    description: project.description,
  }
}
