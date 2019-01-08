import React from 'react'

const Project = ({ name, description, url, sourceCodeUrl }) => (
  <div className="card">
    <h6 className="mt-1-2 mb-1-1">{name}</h6>
    <p>{description}</p>
    { url && <a className="btn btn-primary mr-1-2" href={url} target="_blank">View</a> }
    { sourceCodeUrl && (<a className="btn btn-secondary" href={sourceCodeUrl} target="_blank">Source code</a>) }
  </div>
)

const ProjectsList = ({ projects }) => (
  <div className="container mb-3-1 flex flex-wrap">
    <h4 className="mt-0 mb-2-1 w-100">My projects</h4>
    {projects.map(project => <div className="mb-1-1 w-100 w-md-50"><Project {...project} /></div>)}
  </div>
)

export default ProjectsList
