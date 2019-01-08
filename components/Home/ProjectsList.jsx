import React from 'react'

const Project = ({ name, description, url, sourceCodeUrl }) => (
  <div className="card flex flex-column justify-between">
      <div>
        <h6 className="mt-1-2 mb-1-1">{name}</h6>
        <p>{description}</p>
      </div>
      <div>
        { url && <a className="btn btn-primary mr-1-2" href={url} target="_blank">View</a> }
        { sourceCodeUrl && (<a className="btn btn-secondary" href={sourceCodeUrl} target="_blank">Source code</a>) }
      </div>
  </div>
)

const ProjectsList = ({ projects }) => (
  <div className="container mb-3-1">
    <h4 className="mt-0 mb-2-1 w-100">My projects</h4>
    <div className="row">
      {projects.map(project => <div className="col col-sm-6 col-md-4 mb-1-1"><Project {...project} /></div>)}
    </div>
  </div>
)

export default ProjectsList
