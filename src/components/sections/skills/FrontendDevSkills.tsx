import React from 'react'
import SkillCollectionLayout from '../../layouts/skillCollectionLayout'
import SkillCard from '../../atoms/skillCard'

// images
import CodeReview from '../../../assets/svgs/undraw_code_review.svg'

// classes
import classes from './styles.module.scss'

const FrontendDevSkills: React.FC = (): React.ReactElement => {
  return (
    <SkillCollectionLayout skillsPosition="left" img={<CodeReview />}>
      <SkillCard title="Javascript">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        dicta, doloremque eius et iste magtatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="Typescript">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad asperiores consectetur consequatur deleniti
        necessitatibus odit quis reiciendis sint sit voluptas.
      </SkillCard>
      <SkillCard title="React">
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
