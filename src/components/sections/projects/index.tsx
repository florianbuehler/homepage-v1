import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import classNames from 'classnames'
import Section from '../../atoms/section'
import HelfrLandingPage from './HelfrLandingPage'
import HelfrApp from './HelfrApp'
import HackerNewsClone from './HackerNewsClone'
import TokenPlatform from './TokenPlatform'

// icons
import Arrow from 'assets/svgs/arrow.svg'

// styles
import classes from './styles.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Projects: React.FC = (): React.ReactElement => {
  return (
    <Section id="projects" className={classes.container}>
      <div className={classes.top} />
      <div className={classes.content}>
        <h2>Projects I have been working on</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eius est, excepturi expedita facere hic
          illum iure laboriosam non porro qui quos ratione reiciendis repudiandae, saepe sed similique sint? Deserunt
          ipsum iusto laborum molestiae voluptate. Deleniti dolore incidunt pariatur rerum!
        </p>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          stopOnHover={true}
          swipeable={true}
          renderArrowPrev={(onClickHandler, hasPrev, label): React.ReactNode =>
            hasPrev && (
              <button className={classNames(classes.arrow, classes.arrowPrev)}>
                <Arrow onClick={onClickHandler} title={label} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label): React.ReactNode =>
            hasNext && (
              <button className={classNames(classes.arrow, classes.arrowNext)}>
                <Arrow onClick={onClickHandler} title={label} />
              </button>
            )
          }
        >
          <HelfrLandingPage />
          <HelfrApp />
          <HackerNewsClone />
          <TokenPlatform />
        </Carousel>
      </div>
      <div className={classes.bottom} />
    </Section>
  )
}

export default Projects
