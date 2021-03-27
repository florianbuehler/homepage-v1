import React from 'react'
import PageLayout from '../components/layouts/pageLayout'

const IndexPage = (): React.ReactElement => {
  return (
    <PageLayout title={{ id: 'home.metadata.title' }} addSuffixToPageTitle>
      Hello world
    </PageLayout>
  )
}

export default IndexPage
