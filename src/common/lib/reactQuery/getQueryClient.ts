import { QueryClient } from '@tanstack/react-query'
import { cache } from 'react'

export default cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
        },
      },
    }),
)
