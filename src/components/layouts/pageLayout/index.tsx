import React from 'react'
import SEO from '../../atoms/seo'
import Header from '../../header'

// styles
import '../../../styles/global-styles.scss'
import classes from './styles.module.scss'

type Props = {
  title: string
  addSuffixToPageTitle?: boolean
  keywords?: string[]
  description?: string
}

const PageLayout: React.FC<Props> = ({
  title,
  addSuffixToPageTitle,
  keywords,
  description,
  children
}): React.ReactElement => {
  return (
    <>
      <SEO title={title} addSuffixToPageTitle={addSuffixToPageTitle} keywords={keywords} description={description} />
      <div className={classes.pageTemplate}>
        <Header />
        <main className={classes.main}>{children}</main>
      </div>
    </>
  )
}

export default PageLayout
