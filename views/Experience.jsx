import React from 'react'
import { EXPERIENCE } from '../content/Experience'

const ListItem = ({ role, company, location, duration, description }) => (
  <div className="card">
    <div className="card_header">
      <h5>{role}</h5>
      <h3>{company}</h3>
      <h5>{location}</h5>
      <h5>{duration}</h5>
    </div>
    {/* <ul>{description.map(line => <li key={line}>{line}</li>)}</ul> */}
  </div>
)

const Experience = () => {
  return (
    <div className="container">
      <h1>work experience</h1>

      <div className="grid">
        <div className="row">
          {EXPERIENCE.map(experience => (
            <div className="col" key={`${experience.role}${experience.company}`}>
              <ListItem {...experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
