import React from 'react'
import Section from '../../atoms/section'
import FrontendDevSkills from './FrontendDevSkills'
import BackendDevSkills from './BackendDevSkills'
import GeneralDevSkills from './GeneralDevSkills'

// styles
import classes from './styles.module.scss'

const Skills: React.FC = (): React.ReactElement => {
  return (
    <Section id="skills" className={classes.container}>
      <h2>Skills</h2>
      <FrontendDevSkills />
      <BackendDevSkills />
      <GeneralDevSkills />
    </Section>
  )
}

export default Skills
