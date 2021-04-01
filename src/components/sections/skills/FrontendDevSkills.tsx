import React from 'react'
import SkillCollectionLayout from '../../layouts/skillCollectionLayout'

// images
import CodeReview from '../../../assets/svgs/undraw_code_review.svg'

// classes
import classes from './styles.module.scss'

const FrontendDevSkills: React.FC = (): React.ReactElement => {
  return (
    <SkillCollectionLayout skillsPosition="left" img={<CodeReview />}>
      <li className={classes.skillCard} />
      <li className={classes.skillCard} />
      <li className={classes.skillCard} />
      <li className={classes.skillCard} />
    </SkillCollectionLayout>
  )
}

export default FrontendDevSkills
