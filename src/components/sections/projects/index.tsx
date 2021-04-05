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
          During my work as a consultant and senior consultant at d-fine I have been working on different software
          projects for multiple clients. Additionally I have been working privately on some smaller &quot;just for
          fun&quot; projects to get experienced with new technologies and frameworks. Some of these projects are
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
