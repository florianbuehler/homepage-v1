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
      <h4 className={classes.helfrLandingPageColor}>Frontend</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci consequatur, error excepturi hic magnam
        tempora? Ad, architecto beatae consequatur necessitatibus nemo praesentium ullam. Totam.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque fugit incidunt odit quod sunt?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque fugit incidunt odit quod sunt?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque fugit incidunt odit quod sunt?</p>
    </ProjectLayout>
  )
}

export default HelfrLandingPage
