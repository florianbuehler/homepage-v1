import React from 'react'
import ProjectLayout from '../../layouts/projectLayout'

// images
import tokenPlatform from 'assets/imgs/token-platform.jpg'

// styles
import classes from './styles.module.scss'

const TokenPlatform: React.FC = (): React.ReactElement => {
  return (
    <ProjectLayout img={tokenPlatform}>
      <h3>Token Platform</h3>
      <h4 className={classes.tokenPlatformColor}>Frontend</h4>
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

export default TokenPlatform
