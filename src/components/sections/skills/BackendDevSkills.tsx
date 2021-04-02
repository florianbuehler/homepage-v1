import React from 'react'
import SkillCollectionLayout from '../../layouts/skillCollectionLayout'
import SkillCard from '../../atoms/skillCard'

// images
import CodeReview from '../../../assets/svgs/undraw_code_review.svg'

const BackendDevSkills: React.FC = (): React.ReactElement => {
  return (
    <SkillCollectionLayout skillsPosition="right" img={<CodeReview />}>
      <SkillCard title="C#">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta, doloremque eius et iste magtatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="ASP.NET Core">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        necessitatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="Rest APIs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta, doloremque eius et iste magni molestias natus necessitatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="Postgres">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta
      </SkillCard>
    </SkillCollectionLayout>
  )
}

export default BackendDevSkills
