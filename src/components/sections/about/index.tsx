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
        I&apos;m a passionate full stack developer with a strong hands-on mentality and over 4 years of experience in
        building prototypes and scalable web applications in agile teams from front to back. I possess strong
        analytical, methodical and problem-solving skills and have a quick comprehension - already shown during five
        years of mathematical and technical studies and in over four years as a (senior) consultant for multiple
        clients.
      </p>
      <p>
        Since March 2017 I am working as a consultant and later as a senior consultant for d-fine. D-fine is a leading
        European consulting firm with scientifically minded employees, which provides innovative, customized and
        futureproof software solutions for complex challenges for its clients. On a day to day basis I currently am
        engaging with requirement gathering, solution design, documentation, coordination with business owners,
        implementation and testing.
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
