import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import classNames from 'classnames'
import Section from '../../atoms/section'
import Project1 from './Project1'

// icons
import Arrow from 'assets/svgs/arrow.svg'

// styles
import classes from './styles.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Projects: React.FC = (): React.ReactElement => {
  return (
    <Section id="projects" className={classes.container}>
      <h2>Projects I have been working on</h2>
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
        <Project1 />
        <Project1 />
        <Project1 />
      </Carousel>
    </Section>
  )
}

export default Projects
