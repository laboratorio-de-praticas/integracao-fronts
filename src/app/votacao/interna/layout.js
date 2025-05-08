'use client'
import { withAuth } from '@/app/votacao/withAuth'

export default function InternaLayout({ children }) {
  const Wrapped = withAuth(() => <>{children}</>)
  return <Wrapped />
}
