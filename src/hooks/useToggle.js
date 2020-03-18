import { useCallback, useState } from 'react'

export const useToggle = state => {
  const [value, setValue] = useState(state)

  const toggle = useCallback(
    nextValue => {
      if (typeof nextValue !== 'undefined') {
        setValue(!!nextValue)
        return
      }

      setValue(newValue => !newValue)
    },
    [setValue]
  )

  return [value, toggle]
}
