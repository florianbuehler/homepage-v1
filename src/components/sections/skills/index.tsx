import React from 'react'
import Section from '../../atoms/section'

// images
import CodeReview from 'assets/svgs/undraw_code_review.svg'

// styles
import classes from './styles.module.scss'

const Skills: React.FC = (): React.ReactElement => {
  return (
    <Section id="skills" className={classes.container}>
      <h2>Skills</h2>
      <article className={classes.skillCollection}>
        <ul>
          <li className={classes.skillCard} />
          <li className={classes.skillCard} />
          <li className={classes.skillCard} />
        </ul>
        <div className={classes.img}>
          <CodeReview />
        </div>
      </article>
    </Section>
  )
}

export default Skills
