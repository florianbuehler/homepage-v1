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
        I&apos;m a 29-year-old mathematician and self-taught full stack web developer with a strong hands-on mentality
        and over 4 years of experience in building web applications from front to back in agile teams. I love to create
        software to solve real world problems and I strongly believe that anything can be built if it is tackled by a
        passionate and creative team.
      </p>
      <p>
        I would describe myself as a person with a strong analytical, problem-solving and methodical mindset, who likes
        to get engaged with complex topics and tries to constantly learn new things – especially if it is related to web
        development and technical innovations in general. These skills and my quick comprehension have been of high
        value for me during my five years of mathematical education and in over four years of work as a (senior)
        consultant and web developer. I am convinced that my experience and skills form a great foundation for future
        challenges.
      </p>
      <p>
        Since March 2017 I am working as a (senior) consultant and web developer for d-fine. D-fine is a leading
        European consulting firm with scientifically minded employees, which provides innovative, customized and
        futureproof software solutions for complex challenges for its clients. During my time with d-fine I am engaged
        in all steps of web development. Ranging from requirement gathering, solution design and coordination with
        business owners to implementation, testing and documentation – mostly in agile setups.
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
