import React from 'react'
import Typewriter from 'typewriter-effect'
import Section from '../../atoms/section'

// images
import CodeReview from 'assets/svgs/undraw_code_review.svg'

// styles
import classes from './styles.module.scss'

const HeroHeader: React.FC = (): React.ReactElement => {
  return (
    <Section id="heroHeader" className={classes.container}>
      <div className={classes.top} />
      <div className={classes.content}>
        <div className={classes.text}>
          <h1 className={classes.title}>
            I am
            <Typewriter
              onInit={(typewriter): void => {
                typewriter
                  .pauseFor(1000)
                  .typeString('Florian!')
                  .pauseFor(2500)
                  .deleteAll()
                  .pauseFor(1000)
                  .typeString('a Full Stack Developer!')
                  .pauseFor(2500)
                  .deleteAll()
                  .pauseFor(1000)
                  .typeString('a Frontend Expert!')
                  .pauseFor(2500)
                  .start()
              }}
              options={{
                loop: true,
                wrapperClassName: classes.typewriterWrapper,
                cursorClassName: classes.typewriterCursor
              }}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aperiam deleniti doloremque dolores fuga
            impedit nesciunt placeat, qui totam? Adipisci assumenda itaque minus modi nemo obcaecati perspiciatis quod
            sunt!
          </p>
        </div>
        <div className={classes.img}>
          <CodeReview />
        </div>
      </div>
      <div className={classes.bottom} />
    </Section>
  )
}

export default HeroHeader
