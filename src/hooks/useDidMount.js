import { useEffect } from 'react'

export const useDidMount = f => useEffect(() => f && f(), [])
