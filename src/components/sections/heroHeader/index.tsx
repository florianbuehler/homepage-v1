import React from 'react'
import Section from '../../atoms/section'

// styles
import classes from './styles.module.scss'

const HeroHeader: React.FC = (): React.ReactElement => {
  return (
    <Section id="heroHeader" className={classes.container}>
      hero header
    </Section>
  )
}

export default HeroHeader
