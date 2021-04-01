import React from 'react'
import Section from '../../atoms/section'
import FrontendDevSkills from './FrontendDevSkills'

// styles
import classes from './styles.module.scss'

const Skills: React.FC = (): React.ReactElement => {
  return (
    <Section id="skills" className={classes.container}>
      <h2>Skills</h2>
      <FrontendDevSkills />
    </Section>
  )
}

export default Skills
