import React from 'react'
import ProjectLayout from '../../layouts/projectLayout'

// images
import campr from 'assets/imgs/campr.jpg'

// styles
import classes from './styles.module.scss'

const Campr: React.FC = (): React.ReactElement => {
  return (
    <ProjectLayout img={campr}>
      <h3>Campr</h3>
      <h4 className={classes.camprColor}>Platform</h4>
      <p>
        A small platform allowing users to add and rate campgrounds. The campgrounds then are displayed in a cluster
        map.
      </p>
      <p>
        The core of the platform is build with JavaScript and Node.js. The styling is done with Bootstrap and the data
        persistence is achieved with a Mongo database.
      </p>
    </ProjectLayout>
  )
}

export default Campr
