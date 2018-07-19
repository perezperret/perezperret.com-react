import React from 'react'

const ProjectLink = ({ title, sourceUrl, siteUrl }) => (
  <div>
    {`${title} `}
    {sourceUrl && <a href={sourceUrl} target="_blank">[source]</a>}
    {siteUrl && <a href={siteUrl} target="_blank">[site]</a>}
  </div>
)

export default ProjectLink
