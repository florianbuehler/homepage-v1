import React from 'react'
import ProjectLayout from '../../layouts/projectLayout'

// images
import hackerNewsClone from 'assets/imgs/frame.png'

const HackerNewsClone: React.FC = (): React.ReactElement => {
  return (
    <ProjectLayout img={hackerNewsClone}>
      <h3>Hacker News Clone</h3>
      <h4>Frontend</h4>
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

export default HackerNewsClone
