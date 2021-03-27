import React from 'react'

// styles
import classes from './styles.module.scss'
import styleVariables from '../../styles/js-variables.scss'

interface Props {
  open: boolean
  handleToggle: () => void
}

const HeaderNavToggle: React.FC<Props> = ({ open, handleToggle }): React.ReactElement => {
  return (
    <button
      onClick={(): void => handleToggle()}
      className={`${classes.headerNavToggleButton} ${open ? classes.headerNavToggleButtonOpen : ''}`}
    >
      {open ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <g fill={styleVariables.primary} fillRule="evenodd">
            <path d="M.1005 17.071L17.0711.1006l2.8284 2.8284L2.9289 19.8995z" />
            <path d="M17.071 19.8995L.1006 2.9289 2.929.1005l16.9706 16.9706z" />
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20">
          <g fill={styleVariables.primary} fillRule="evenodd">
            <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z" />
          </g>
        </svg>
      )}
    </button>
  )
}

export default HeaderNavToggle
