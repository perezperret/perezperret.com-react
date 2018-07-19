import React from 'react'
import { EXPERIENCE } from '../content/Experience'

const Experience = () => {
  return (
    <div>
      <h2>Work experience</h2>
      {EXPERIENCE.map(({ role, company, location, duration, description }) => (
        <div key={`${role}${company}`}>
          <h3>{role} {company === 'Freelance' ? 'as' : 'at'} {company}</h3>
          <h4>{location} {duration}</h4>
          <ul>{description.map(line => <li key={line}>{line}</li>)}</ul>
        </div>
      ))}
    </div>
  )
}

export default Experience
