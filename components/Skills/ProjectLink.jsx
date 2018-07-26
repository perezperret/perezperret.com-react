import React from 'react'

const ProjectLink = ({ title, description, sourceUrl, siteUrl }) => (
  <div className="card">
    <h4>{title}</h4>

    <p className="pb-4">{description}</p>

    <div className="d-flex justify-start">
      <div className="text-right">
        {sourceUrl ? <a className="link link--external" href={sourceUrl} target="_blank">source</a> : null}
      </div>{" "}

      <div className="text-right">
        {siteUrl ? <a className="link link--external" href={siteUrl} target="_blank">site</a> : null}
      </div>
    </div>
  </div>
)

export default ProjectLink
