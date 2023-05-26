import { QueryClient } from '@tanstack/react-query'
import { cache } from 'react'

export default cache(() => new QueryClient())
