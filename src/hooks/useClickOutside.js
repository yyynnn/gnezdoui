/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { useEffect } from 'react'

import { root } from 'utils/universalRoot'

export const useClickOutside = (ref = [], handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    root.document.addEventListener('mousedown', listener)
    root.document.addEventListener('touchstart', listener)

    return () => {
      root.document.removeEventListener('mousedown', listener)
      root.document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
