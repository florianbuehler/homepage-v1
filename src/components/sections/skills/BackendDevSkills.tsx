import React from 'react'
import SkillCollectionLayout from '../../layouts/skillCollectionLayout'
import SkillCard from '../../atoms/skillCard'

// images
import FeelingProud from 'assets/svgs/undraw_feeling_proud.svg'
import NETCore from 'assets/svgs/skills/dot-net-core.svg'
import Postgres from 'assets/svgs/skills/postgresql.svg'

// styles
import classes from './styles.module.scss'

const BackendDevSkills: React.FC = (): React.ReactElement => {
  return (
    <SkillCollectionLayout
      skillsPosition="right"
      img={<FeelingProud />}
      imgStylingAdaptions={classes.backendDevSkillsImg}
    >
      <SkillCard title="C#" specification="Language" img="C#">
        C# is a modern, object-oriented, general-purpose and type-safe programming language. It enables developers to
        build many types of secure and robust applications that run in the .NET ecosystem.
      </SkillCard>
      <SkillCard title="ASP.NET Core" specification="Framework" img={<NETCore />}>
        ASP.NET Core is a modern, fast and popular web-development framework for building web applications.
      </SkillCard>
      <SkillCard title="REST APIs" img="{ }">
        A RESTful API is an application program interface that uses HTTP requests to access and use data, following the
        principles of the representational state transfer. It consists of GET, PUT, POST and DELETE methods, to read,
        update, create and delete the relevant data or ressources.
      </SkillCard>
      <SkillCard title="Postgres" specification="Database" img={<Postgres />}>
        Postgres is a powerful object-relational database system that uses and extends the SQL language combined with
        many features that safely store and scale the most complicated data workloads.
      </SkillCard>
    </SkillCollectionLayout>
  )
}

export default BackendDevSkills
