import { useCallback, useReducer } from 'react'

const reducer = (state, _action) => !state

export const useForce = () => {
  const [, dispatch] = useReducer(reducer, true)

  const memoizedDispatch = useCallback(() => {
    dispatch(null)
  }, [dispatch])
  return memoizedDispatch
}
