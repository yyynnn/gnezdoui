import { useState, useLayoutEffect } from 'react'

import { root } from 'utils/universalRoot'

export const useScrollLock = () => {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = root.getComputedStyle(root.document.body).overflow
    // Prevent scrolling on mount
    root.document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    return () => (root.document.body.style.overflow = originalStyle)
  }, []) // Empty array ensures effect is only run on mount and unmount
}
