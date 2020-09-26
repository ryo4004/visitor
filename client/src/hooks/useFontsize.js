import { useState } from 'react'

export const useFontsize = () => {
  const defaultFontsize = localStorage.getItem('fontsize') ? localStorage.getItem('fontsize') : 'small'

  const [fontSize, setFontsize] = useState(defaultFontsize)

  const updateFontSize = (value) => {
    localStorage.setItem('fontsize', value)
    setFontsize(value)
  }

  return { fontSize: ' ' + fontSize, updateFontSize }
}
