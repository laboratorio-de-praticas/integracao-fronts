import { createApi } from '@/lib/apiFactory'

export const votacaoApi = createApi({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})
