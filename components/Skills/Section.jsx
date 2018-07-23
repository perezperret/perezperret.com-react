import React from 'react'
import { Link } from 'react-router-dom'
import ProjectLink from './ProjectLink'

const Section = ({ title, description, projects, posts }) => (
  <div>
    <h3>{title} <Link to="/skills">&times;</Link></h3>
    <p>{description}</p>
    <div className="grid">
      <div className="row">
        {projects.map(project => (
          <div className="col" key={project.title}>
            <div className="card">
              <ProjectLink {...project} />
            </div>
          </div>
      ))}
      </div>
    </div>
  </div>
)

export default Section
