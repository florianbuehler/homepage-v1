import React from 'react'
import PageLayout from '../components/layouts/pageLayout'
import HeroHeader from '../components/sections/heroHeader'
import About from '../components/sections/about'
import Projects from '../components/sections/projects'
import Skills from '../components/sections/skills'

const IndexPage = (): React.ReactElement => {
  return (
    <PageLayout title="Home" addSuffixToPageTitle>
      <HeroHeader />
      <About />
      <Projects />
      <Skills />
    </PageLayout>
  )
}

export default IndexPage
