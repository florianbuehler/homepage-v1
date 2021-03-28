import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import classNames from 'classnames'
import Section from '../../atoms/section'

// icons
import Arrow from 'assets/svgs/arrow.svg'

// styles
import classes from './styles.module.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Projects: React.FC = (): React.ReactElement => {
  return (
    <Section id="projects" className={classes.container}>
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
        <div>
          <div className={classes.project} />
        </div>
        <div>
          <div className={classes.project} />
        </div>
        <div>
          <div className={classes.project} />
        </div>
      </Carousel>
    </Section>
  )
}

export default Projects
