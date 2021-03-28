import React, { useCallback, useState } from 'react'
import Toggle from 'react-toggle'
import { getTheme, setPreferredTheme } from '../../../utils/darkmode'

// styles
import './styles.scss'
import iconClasses from './icons.module.scss'

// icons
import Sun from 'assets/svgs/sun.svg'
import Moon from 'assets/svgs/moon.svg'

const icons = {
  checked: (
    <div className={iconClasses.icon}>
      <Sun />
    </div>
  ),
  unchecked: (
    <div className={iconClasses.icon}>
      <Moon />
    </div>
  )
}

const DarkModeToggle: React.FC = (): React.ReactElement | null => {
  if (typeof window === 'undefined') {
    // Never server-side render this, since we can't determine
    // the correct initial state until we get to the client.
    // Alternatively, use a loading placeholder here.
    return null
  }

  const [checked, setChecked] = useState(getTheme() === 'dark')

  const onChange = useCallback(
    (e) => {
      const isChecked = e.target.checked
      setChecked(isChecked)
      setPreferredTheme(isChecked ? 'dark' : 'light')
    },
    [setChecked]
  )

  return <Toggle checked={checked} icons={icons} onChange={onChange} />
}

export default DarkModeToggle
