import { useCallback, useLayoutEffect, useState } from 'react'

import { root } from 'utils/universalRoot'

const getSize = el => {
  if (!el) {
    return {
      width: 0,
      height: 0
    }
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}

export const useSize = ref => {
  let [ComponentSize, setComponentSize] = useState(getSize(ref ? ref.current : {}))

  const handleResize = useCallback(
    function handleResize() {
      if (ref.current) {
        setComponentSize(getSize(ref.current))
      }
    },
    [ref]
  )

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    handleResize()

    if (typeof ResizeObserver === 'function') {
      let resizeObserver = new ResizeObserver(() => handleResize())
      resizeObserver.observe(ref.current)

      return () => {
        resizeObserver.disconnect(ref.current)
        resizeObserver = null
      }
    } else {
      root.addEventListener('resize', handleResize)

      return () => {
        root.removeEventListener('resize', handleResize)
      }
    }
  }, [ref.current])

  return ComponentSize
}
