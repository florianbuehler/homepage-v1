import React from 'react'
import ProjectLayout from '../../layouts/projectLayout'

// images
import helfrLandingPage from 'assets/imgs/helfr-landingpage.jpg'

// styles
import classes from './styles.module.scss'

const HelfrLandingPage: React.FC = (): React.ReactElement => {
  return (
    <ProjectLayout img={helfrLandingPage}>
      <h3>Helfr Landing Page</h3>
      <h4 className={classes.helfrLandingPageColor}>Landing Page</h4>
      <p>A fully responsive, multi page landing page for a coupon platform offering of a client.</p>
      <p>The landing page was created using Gatsby, JavaScript and Sass.</p>
      <p>
        Gatsby is a React-based framework, that helps to build modern, scalable and blazing fast static websites and
        apps.
      </p>
    </ProjectLayout>
  )
}

export default HelfrLandingPage
