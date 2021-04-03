import React from 'react'

// styles
import classes from './styles.module.scss'

type Props = {
  img?: React.ReactElement | string
  title: string
  specification?: string
}

const SkillCard: React.FC<Props> = ({ img, title, specification, children }): React.ReactElement => {
  return (
    <div className={classes.card}>
      <div className={classes.visualization}>
        <div className={classes.bubble}>{img}</div>
        <div className={classes.line} />
      </div>
      <div className={classes.content}>
        <div className={classes.title}>
          <h4>{title}</h4>
          <h5>{specification}</h5>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default SkillCard
