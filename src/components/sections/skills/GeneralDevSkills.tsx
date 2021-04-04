import React from 'react'
import SkillCollectionLayout from '../../layouts/skillCollectionLayout'
import SkillCard from '../../atoms/skillCard'

// images
import DeveloperActivity from 'assets/svgs/undraw_developer_activity.svg'
import Note from 'assets/svgs/skills/note.svg'
import WebSite from 'assets/svgs/skills/website.svg'
import Git from 'assets/svgs/skills/git.svg'

// classes
import classes from './styles.module.scss'

const GeneralDevSkills: React.FC = (): React.ReactElement => {
  return (
    <SkillCollectionLayout
      skillsPosition="left"
      img={<DeveloperActivity />}
      imgStylingAdaptions={classes.generalDevSkillsImg}
    >
      <SkillCard title="Scrum" specification="Framework" img={<Note />}>
        Scrum is a framework within which people can address complex adaptive problems, while productively and
        creatively delivering products of the highest possible value. It helps teams and organizations to generate value
        through adaptive solutions for complex problems.
      </SkillCard>
      <SkillCard title="Domain-Driven Design" specification="Programming method" img={<WebSite />}>
        The goal of Domain-driven design is to understand the problem domain in order to represent the domain and the
        corresponding logic in software, leading to software that meets the needs of the people using it while also
        being robust in the face of changes in the problem domain.
      </SkillCard>
      <SkillCard title="Git / GitHub" specification="Versioin control system" img={<Git />}>
        Git is a distributed version control system designed to handle everything from small to very large projects with
        speed and efficiency. GitHub is a code hosting platform based on Git, allowing developers to work together on
        the same code base from anywhere.
      </SkillCard>
    </SkillCollectionLayout>
  )
}

export default GeneralDevSkills
