import React from 'react'
import { Route, Link } from 'react-router-dom';

import Info from '../components/Info'

import Section from '../components/Skills/Section'
import Others from '../components/Skills/Others'
import Menu from '../components/Skills/Menu'

import { SKILLS, OTHERS, INFO } from '../content/Skills'

const Skills = ({ match, location }) => {
  const isActive = sectionName => (
    sectionName === location.pathname.split('/')[2]
  )

  return (
    <div className="container constrained content route-enter">
      <h1>Skills</h1>

      <div>
        <Route path={match.url} exact={true} render={() => <Info info={INFO} />} />
        {SKILLS.map(skill => (
          <Route key={skill.slug} path={`${match.url}/${skill.slug}`} render={() => <Section {...skill} />} />
        ))}
      </div>

      <Route path={match.url} exact={true} render={() => <Menu skills={SKILLS} match={match} />} />
    </div>
  )
}

export default Skills
