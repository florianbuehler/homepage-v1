import React from 'react'

// styles
import classes from './styles.module.scss'

type Props = {
  img?: React.ReactElement
  title: string
}

const SkillCard: React.FC<Props> = ({ img, title, children }): React.ReactElement => {
  return (
    <div className={classes.card}>
      <div className={classes.visualization}>
        <div className={classes.bubble}>{img}</div>
        <div className={classes.line} />
      </div>
      <div className={classes.content}>
        <h4>{title}</h4>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default SkillCard
