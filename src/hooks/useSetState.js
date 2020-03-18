// import React, { useState, useCallback } from 'react'

// const useStateful = initial => {
//   const [value, setValue] = useState(initial)
//   return {
//     value,
//     setValue
//   }
// }

// export const useSetState = initialValue => {
//   const { value, setValue } = useStateful(initialValue)
//   return {
//     setState: useCallback(v => {
//       return setValue(oldValue => ({
//         ...oldValue,
//         ...(typeof v === 'function' ? v(oldValue) : v)
//       }))
//     }, []),
//     state: value
//   }
// }
