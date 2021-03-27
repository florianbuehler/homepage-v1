import React, { useCallback, useState } from 'react'
import Toggle from 'react-toggle'

const DarkModeToggle: React.FC = (): React.ReactElement | null => {
  if (typeof window === 'undefined') {
    // Never server-side render this, since we can't determine
    // the correct initial state until we get to the client.
    // Alternatively, use a loading placeholder here.
    return null
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [checked, setChecked] = useState(window.__theme === 'dark')

  const onChange = useCallback(
    (e) => {
      const isChecked = e.target.checked
      setChecked(isChecked)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.__setPreferredTheme(isChecked ? 'dark' : 'light')
    },
    [setChecked]
  )

  return <Toggle checked={checked} onChange={onChange} />
}

export default DarkModeToggle
