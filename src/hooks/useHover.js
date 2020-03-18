import { useState } from 'react'

export const useHover = () => {
  const [isHovered, setHovered] = useState(false)

  const bind = {
    onMouseEnter: e => setHovered(true),
    onMouseLeave: e => setHovered(false)
  }

  return [isHovered, bind]
}
