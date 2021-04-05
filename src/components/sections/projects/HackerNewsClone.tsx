import React from 'react'
import ProjectLayout from '../../layouts/projectLayout'

// images
import hackerNewsClone from 'assets/imgs/hacker-news-clone.jpg'

// styles
import classes from './styles.module.scss'

const HackerNewsClone: React.FC = (): React.ReactElement => {
  return (
    <ProjectLayout img={hackerNewsClone}>
      <h3>Hacker News Clone</h3>
      <h4 className={classes.hackerNewsColor}>Frontend</h4>
      <p>An own version of the Hacker News website using the API directly provided by Hacker News / Y Combinator.</p>
      <p>
        The project is a React single page application using TypeScript, Redux for state management and Tailwind CSS for
        the styling.
      </p>
      <p>
        Tailwind CSS is a utility-first CSS framework. It aims to avoid the &quot;typical&quot; semantic class names,
        which often lead to an overhead, as parts of the HTML structure are replicated in the structure of the style
        sheets. Instead it provides a set of CSS helper classes to rapidly build modern websites.
      </p>
    </ProjectLayout>
  )
}

export default HackerNewsClone
