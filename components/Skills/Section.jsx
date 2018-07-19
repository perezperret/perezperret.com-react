import React from 'react'
import ProjectLink from './ProjectLink'

const Section = ({ title, description, projects, posts }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    <h4>Projects</h4>
    <ul>
      {projects.map(project => <li key={project.title}><ProjectLink {...project} /></li>)}
    </ul>
  </div>
)

export default Section
