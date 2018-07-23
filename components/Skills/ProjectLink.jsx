import React from 'react'

const ProjectLink = ({ title, description, sourceUrl, siteUrl }) => (
  <div>
    <h4>{title}</h4>
    <p>{description}</p>
    <div className="d-flex justify-start">
      <div className="mr-1">{sourceUrl && <a href={sourceUrl} target="_blank">source</a>}</div>{" "}
      <div>{siteUrl && <a href={siteUrl} target="_blank">site</a>}</div>
    </div>
  </div>
)

export default ProjectLink
