import React from 'react'
import { Route, Link } from 'react-router-dom';

import Info from '../components/Skills/Info'
import Section from '../components/Skills/Section'
import Others from '../components/Skills/Others'

import { SKILLS, OTHERS, INFO } from '../content/Skills'

const Skills = ({ match, location }) => {
  const isActive = sectionName => (
    sectionName === location.pathname.split('/')[2]
  )

  return (
    <div>
      <h2><Link to={match.url}>Skills</Link></h2>
      <ul>
        {SKILLS.map(({ slug, title }) => (
          <li key={slug}><Link to={`${match.url}/${slug}`}>{title}{isActive(slug) ? '[active]' : ''}</Link></li>
        ))}
        <li><Link to={`${match.url}/others`}>Others{isActive('others') ? '[active]' : ''}</Link></li>
      </ul>

      <Route path={match.url} exact={true} render={() => <Info info={INFO} />} />
      {SKILLS.map(skill => (
        <Route key={skill.slug} path={`${match.url}/${skill.slug}`} render={() => <Section {...skill} />} />
      ))}
      <Route path={`${match.url}/others`} render={() => <Others others={OTHERS} />} />
    </div>
  )
}

export default Skills
