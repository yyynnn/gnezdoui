/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react'

import { deepeq } from 'utils/deepeq'

const checkDeps = deps => {
  if (!deps || !deps.length) {
    throw new Error('useDeepCompareEffect should not be used with no dependencies. Use React.useEffect instead.')
  }
  if (deps.every(isPrimitive)) {
    throw new Error(
      'useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
    )
  }
}

const isPrimitive = val => {
  return val == null || /^[sbn]/.test(typeof val)
}

const useDeepCompareMemoize = value => {
  const ref = React.useRef()

  if (!deepeq(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}

export const useDeepCompareEffect = (callback, dependencies) => {
  if (process.env.NODE_ENV !== 'production') {
    checkDeps(dependencies)
  }
  React.useEffect(callback, useDeepCompareMemoize(dependencies))
}

export const useDeepCompareEffectNoCheck = (callback, dependencies) => {
  React.useEffect(callback, useDeepCompareMemoize(dependencies))
}
