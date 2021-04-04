import React from 'react'
import SkillCollectionLayout from '../../layouts/skillCollectionLayout'
import SkillCard from '../../atoms/skillCard'

// images
import StaticWebsite from 'assets/svgs/undraw_static_website.svg'
import JavaScript from 'assets/svgs/skills/javascript.svg'
import TypeScript from 'assets/svgs/skills/typescript.svg'
import ReactLogo from 'assets/svgs/skills/react-logo.svg'
import Sass from 'assets/svgs/skills/sass.svg'

const FrontendDevSkills: React.FC = (): React.ReactElement => {
  return (
    <SkillCollectionLayout skillsPosition="left" img={<StaticWebsite />}>
      <SkillCard title="JavaScript" specification="Language" img={<JavaScript />}>
        JavaScript is a lightweight, interpreted, or just-in-time compiled programming language, that runs in the
        browser and allows you to implement complex features on web pages. Every time a web page does more than just sit
        there and display static information JavaScript is involved.
      </SkillCard>
      <SkillCard title="TypeScript" specification="Language" img={<TypeScript />}>
        TypeScript is a strict syntactical superset of JavaScript which provides static typing and thereby more robust
        and less error-prone code. It is designed for the development of larger applications and allows multiple team
        members to work together efficiently.
      </SkillCard>
      <SkillCard title="React" specification="Js Framework" img={<ReactLogo />}>
        React is a JavaScript library which makes it painless to create interactive UIs using a component based approach
        and by providing an efficient state management and taking care of the DOM rendering.
      </SkillCard>
      <SkillCard title="CSS / Sass" img={<Sass />}>
        Sass is a CSS extension which compiles to CSS and provides several features allowing for cleaner, more
        consistent and better readable stylings of web pages.
      </SkillCard>
    </SkillCollectionLayout>
  )
}

export default FrontendDevSkills
