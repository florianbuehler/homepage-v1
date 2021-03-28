import React from 'react'

// styles
import classes from './styles.module.scss'

const ProjectLayout: React.FC = ({ children }): React.ReactElement => {
  return (
    <article className={classes.container}>
      <div className={classes.content}>{children}</div>
    </article>
  )
}

export default ProjectLayout
