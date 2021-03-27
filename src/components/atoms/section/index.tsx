import React from 'react'
import classNames from 'classnames'

// styles
import classes from './styles.module.scss'

interface Props {
  id?: string
  className?: string
  backgroundColor?: 'white' | 'primary'
}

const Section: React.FC<Props> = ({ id, className, backgroundColor, children }): React.ReactElement => {
  return (
    <section id={id} className={classNames(classes.wrapper, classes[backgroundColor ?? 'white'])}>
      <div className={classNames(classes.container, className)}>{children}</div>
    </section>
  )
}

export default Section
