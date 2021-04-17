import React from 'react'
import ProjectLayout from '../../layouts/projectLayout'

// images
import tokenPlatform from 'assets/imgs/token-platform.jpg'

// styles
import classes from './styles.module.scss'

const TokenPlatform: React.FC = (): React.ReactElement => {
  return (
    <ProjectLayout img={tokenPlatform}>
      <h3>Tokenisation Platform</h3>
      <h4 className={classes.tokenPlatformColor}>Landing Page & Platform</h4>
      <p>
        A fully responsive landing page and a microservice based platform for a new, blockchain based, market offering
        of a big German stock exchange.
      </p>
      <p>
        The platform allows the management of the complete tokenisation lifecycle, including the application for a new
        tokenisation project, the user and ressources management, the creation of tokens and the complete interaction
        with the Ethereum blockchain. It offers different views and permissions for different user groups and the
        possibility to include external partners for a specific project.
      </p>
    </ProjectLayout>
  )
}

export default TokenPlatform
