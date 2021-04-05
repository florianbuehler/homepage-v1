import React from 'react'
import ProjectLayout from '../../layouts/projectLayout'

// images
import helfrApp from 'assets/imgs/helfr-app.png'

// styles
import classes from './styles.module.scss'

const HelfrApp: React.FC = (): React.ReactElement => {
  return (
    <ProjectLayout img={helfrApp} additionalImgClasses={classes.helfrAppImg}>
      <h3>Helfr Mobile SPA</h3>
      <h4 className={classes.helfrAppColor}>Platform</h4>
      <p>
        A platform offering corona affected small businesses the possibility to generate some revenue during the
        lockdown.
      </p>
      <p>
        Small businesses could easily create and sell their coupons online. The customers then had the possibility to
        support their favorite businesses by buing the coupons during the lockdown and reedem them when the businesses
        could open again or even fully donate them.
      </p>
      <p>
        The frontend is a mobile optimized React single page application using TypeScript and Sass. For the backend we
        used C#, the ASP.NET Core framework and Postgres for the database. The platform itself was hosted on AWS and
        could be automatically tested and deployed using GitLab pipelines.
      </p>
    </ProjectLayout>
  )
}

export default HelfrApp
