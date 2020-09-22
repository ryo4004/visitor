import { useState } from 'react'

export const useInput = () => {
  const defaultInput = localStorage.getItem('value')
    ? JSON.parse(localStorage.getItem('value'))
    : {
        name: '',
        code: '',
        address: '',
        tel: '',
      }

  const [state, setState] = useState(defaultInput)

  const updateState = (key, value) => {
    const update = {
      ...state,
      [key]: value,
    }
    localStorage.setItem('value', JSON.stringify(update))
    setState(update)
  }
  return { state, updateState }
}
