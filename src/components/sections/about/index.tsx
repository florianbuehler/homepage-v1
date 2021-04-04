import React from 'react'
import Section from '../../atoms/section'
import pdf from 'assets/documents/Resume.pdf'

// images
import LinkedIn from 'assets/svgs/linkedin.svg'
import GitHub from 'assets/svgs/github.svg'
import Email from 'assets/svgs/email.svg'

// styles
import classes from './styles.module.scss'

const About: React.FC = (): React.ReactElement => {
  return (
    <Section id="about" className={classes.container}>
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dicta dolores earum iusto nam non
        sint sunt. Debitis et quos sequi sit! Aliquid autem distinctio dolore error est, laboriosam magnam maiores minus
        modi molestias non nostrum perspiciatis provident recusandae repellendus sequi sint ut veniam veritatis
        voluptatibus. Ab beatae corporis et hic inventore iusto, nisi sed unde velit vero! Accusantium adipisci
        aspernatur, corporis deserunt eaque hic laudantium molestiae, numquam optio perferendis sequi ut! Aperiam, iure?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus omnis perferendis veritatis. Ab, architecto
        at aut culpa doloribus eius enim exercitationem itaque iure laudantium, magnam molestiae nostrum nulla omnis
        porro possimus quaerat rem saepe sint, totam. Doloribus eveniet molestiae neque?
      </p>
      <div className={classes.additionalInformation}>
        <ul>
          <li className={classes.item}>
            <LinkedIn />
            <a href="https://www.linkedin.com/in/florian-b%C3%BChler/" target="_blank" rel="noreferrer">
              linkedin.com/in/florian-bühler
            </a>
          </li>
          <li className={classes.item}>
            <GitHub />
            <a href="https://github.com/florianbuehler" target="_blank" rel="noreferrer">
              github.com/florianbuehler
            </a>
          </li>
          <li className={classes.item}>
            <Email />
            <a href="mailto:florian-buehler@outlook.com" target="_blank" rel="noreferrer">
              florian-buehler@outlook.com
            </a>
          </li>
        </ul>
        <div>
          <a href={pdf} download="Resume" className={classes.button}>
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  )
}

export default About
