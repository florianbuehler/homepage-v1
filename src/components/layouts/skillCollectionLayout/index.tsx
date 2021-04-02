import React from 'react'
import Fade from 'react-reveal/Fade'
import classNames from 'classnames'

// classes
import classes from './styles.module.scss'

type Props = {
  skillsPosition: 'left' | 'right'
  img: React.ReactElement
  imgStylingAdaptions?: string
}

const SkillCollectionLayout: React.FC<Props> = ({
  skillsPosition,
  img,
  imgStylingAdaptions,
  children
}): React.ReactElement => {
  return (
    <article className={classNames(classes.skillCollection, classes[skillsPosition])}>
      <ul>
        <Fade left={skillsPosition === 'left'} right={skillsPosition === 'right'} duration={1500}>
          {children}
        </Fade>
      </ul>
      <div
        className={classNames(
          classes.imgWrapper,
          skillsPosition === 'left' ? classes.imgWrapperLeft : classes.imgWrapperRight
        )}
      >
        <div className={classes.top} />
        <div className={classNames(classes.img, imgStylingAdaptions)}>{img}</div>
        <div className={classes.bottom} />
      </div>
    </article>
  )
}

export default SkillCollectionLayout
