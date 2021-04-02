import React from 'react'
import classNames from 'classnames'

// styles
import classes from './styles.module.scss'

interface Props {
  id?: string
  className?: string
}

const Section: React.FC<Props> = ({ id, className, children }): React.ReactElement => {
  return (
    <section id={id} className={classes.wrapper}>
      <div className={classNames(classes.container, className)}>{children}</div>
    </section>
  )
}

export default Section
