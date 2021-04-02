import React from 'react'
import SkillCollectionLayout from '../../layouts/skillCollectionLayout'
import SkillCard from '../../atoms/skillCard'

// images
import CodeReview from '../../../assets/svgs/undraw_code_review.svg'

const FrontendDevSkills: React.FC = (): React.ReactElement => {
  return (
    <SkillCollectionLayout skillsPosition="left" img={<CodeReview />}>
      <SkillCard title="JavaScript" specification="Language">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta, doloremque eius et iste magtatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="TypeScript" specification="Language">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        necessitatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="React.js" specification="Js Framework">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta, doloremque eius et iste magni molestias natus necessitatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="CSS / Sass">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta
      </SkillCard>
    </SkillCollectionLayout>
  )
}

export default FrontendDevSkills
