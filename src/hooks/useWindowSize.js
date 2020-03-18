import { useEffect, useState } from 'react'

import { root } from 'utils/universalRoot'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: root.innerWidth,
    height: root.innerHeight
  })

  useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: root.innerWidth,
        height: root.innerHeight
      })
    }
    root.addEventListener('resize', handler)
    return () => root.removeEventListener('resize', handler)
  }, [])

  return windowSize
}
