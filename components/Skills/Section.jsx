import React from 'react'
import { Link } from 'react-router-dom'
import ProjectLink from './ProjectLink'

const Section = ({ title, description, projects, posts }) => (
  <div>
    <h2>{title} <Link to="/skills" className="ml-4">&times;</Link></h2>
    <div className="pb-8">
      <p className="highlight">{description[0]}</p>
      <p>{description[1]}</p>
    </div>
    <div className="grid">
      <div className="row">
        {projects.map(project => (
          <div className="col" key={project.title}>
            <ProjectLink {...project} />
          </div>
      ))}
      </div>
    </div>
  </div>
)

export default Section
