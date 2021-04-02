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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta, doloremque eius et iste magtatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="TypeScript" specification="Language" img={<TypeScript />}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        necessitatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="React.js" specification="Js Framework" img={<ReactLogo />}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta, doloremque eius et iste magni molestias natus necessitatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="CSS / Sass" img={<Sass />}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta
      </SkillCard>
    </SkillCollectionLayout>
  )
}

export default FrontendDevSkills
