import React from 'react'
import ProjectLink from './ProjectLink'

const Section = ({ title, description, projects }) => (
  <div>
    <h4>{title}</h4>
    <p>{description}</p>
    <ul>{projects.map(project => <li><ProjectLink {...project} /></li>)}</ul>
  </div>
)

const Others = ({ others }) => (
  <div>
    <h3>Others</h3>
    {others.map(other => <Section key={other.title} {...other} />)}
  </div>
)

export default Others
