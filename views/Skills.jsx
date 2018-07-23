import React from 'react'
import { Route, Link } from 'react-router-dom';

import Info from '../components/Skills/Info'
import Section from '../components/Skills/Section'
import Others from '../components/Skills/Others'

import { SKILLS, OTHERS, INFO } from '../content/Skills'

const SectionLink = ({ title, isActive, to }) => (
  <Link to={to} className={`clean-link col ${isActive ? ' nav_link--active': ''}`}>
    <div className="card">{title}</div>
  </Link>
)

const SkillsMenu = ({ skills, match, isActive }) => (
  <div className="grid">
    <div className="row">
      {skills.map(({ slug, title }) => (
        <SectionLink key={slug} to={`${match.url}/${slug}`} isActive={isActive(slug)} title={title} />
      ))}
    </div>
  </div>
)

const Skills = ({ match, location }) => {
  const isActive = sectionName => (
    sectionName === location.pathname.split('/')[2]
  )

  return (
    <div>
      <h2><Link to={match.url}>skills</Link></h2>

      <div className="content">
        <Route path={match.url} exact={true} render={() => <Info info={INFO} />} />
        {SKILLS.map(skill => (
          <Route key={skill.slug} path={`${match.url}/${skill.slug}`} render={() => <Section {...skill} />} />
        ))}
      </div>

      <Route path={match.url} exact={true} render={() => <SkillsMenu skills={SKILLS} isActive={isActive} match={match} />} />
    </div>
  )
}

export default Skills
