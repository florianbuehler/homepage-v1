import React from 'react'
import ProjectLayout from '../../layouts/projectLayout'

// images
import helfrApp from 'assets/imgs/helfr-app.png'

// styles
import classes from './styles.module.scss'

const HelfrApp: React.FC = (): React.ReactElement => {
  return (
    <ProjectLayout img={helfrApp} additionalImgClasses={classes.helfrAppImg}>
      <h3>Helfr App</h3>
      <h4 className={classes.helfrAppColor}>Frontend</h4>
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

export default HelfrApp
