import React from 'react'

import { imageUrl } from '../../helpers/images'

const Summary = ({ projects }) => (
  <div className="container">
    <h1 className="my-2-1">Projects</h1>
    <ul>
      {projects.map(project => (
        <li key={project._id}>
          <img src={imageUrl(project.image.asset._ref)} />
          {project.title}
        </li>
      ))}
    </ul>
  </div>
)

export default Summary
