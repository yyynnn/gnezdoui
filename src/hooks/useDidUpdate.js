/* eslint-disable no-magic-numbers */
import { useState, useEffect } from 'react'

import { useDidMount } from './useDidMount'

/**
 *  useDidUpdate hook
 *
 *  Fires a callback on component update
 *  Can take in a list of conditions to fire callback when one of the
 *  conditions changes
 *
 * @param {function} callback The callback to be called on update
 * @param {Array} conditions The list of variables which trigger update when they are changed
 * @return {undefined}
 */
export const useDidUpdate = (callback, conditions) => {
  const [hasMounted, setHasMounted] = useState(false)
  if (typeof conditions !== 'undefined' && !Array.isArray(conditions)) {
    conditions = [conditions]
  } else if (Array.isArray(conditions) && conditions.length === 0) {
    console.warn(
      'Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.'
    )
  }
  useDidMount(() => {
    setHasMounted(true)
  })
  useEffect(() => {
    if (hasMounted) {
      callback()
    }
  }, conditions)
}
