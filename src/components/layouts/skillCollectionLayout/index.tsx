import React from 'react'
import Fade from 'react-reveal/Fade'

// classes
import classes from './styles.module.scss'

type Props = {
  skillsPosition: 'left' | 'right'
  img: React.ReactElement
}

const SkillCollectionLayout: React.FC<Props> = ({ skillsPosition, img, children }): React.ReactElement => {
  return (
    <article className={classes.skillCollection}>
      <ul>
        <Fade left={skillsPosition === 'left'} right={skillsPosition === 'right'} duration={1500}>
          {children}
        </Fade>
      </ul>
      <div className={classes.img}>{img}</div>
    </article>
  )
}

export default SkillCollectionLayout
