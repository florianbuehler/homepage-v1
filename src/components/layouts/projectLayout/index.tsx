import React from 'react'

// styles
import classes from './styles.module.scss'

type Props = {
  img: string
}

const ProjectLayout: React.FC<Props> = ({ img, children }): React.ReactElement => {
  return (
    <article className={classes.container}>
      <div className={classes.contentWrapper}>
        <div className={classes.top} />
        <div className={classes.content}>{children}</div>
        <div className={classes.bottom} />
      </div>
      <div className={classes.imgWrapper}>
        <div className={classes.top} />
        <div className={classes.img}>
          <img src={img} alt="" />
        </div>
        <div className={classes.bottom} />
      </div>
    </article>
  )
}

export default ProjectLayout
