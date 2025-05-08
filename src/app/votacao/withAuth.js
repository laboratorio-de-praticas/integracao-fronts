'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { votacaoApi } from '@/lib/api'

export default function withAuth(Wrapped) {
  return function Authenticated(props) {
    const router = useRouter()

    useEffect(() => {
      votacaoApi.get('/votacao/interna')
        .catch(() => router.push('/error?message=Não autorizado'))
    }, [router])

    return <Wrapped {...props} />
  }
}
