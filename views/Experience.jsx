import React from 'react'

import { INFO, EXPERIENCES } from '../content/Experience'

import Info from '../components/Info'

const ListItem = ({ role, company, location, duration, description }) => (
  <div className="card">
    <div className="link text-right mb-2">
      {duration} &times;
    </div>
    <div>
      <h4 className="mb-0">{company}</h4>
      <h6 className="mb-0">{role}</h6>
    </div>
    {/* <ul>{description.map(line => <li key={line}>{line}</li>)}</ul> */}
  </div>
)

const Experience = () => {
  return (
    <div className="container constrained content">
      <h1>Work experience</h1>

      <Info info={INFO} />

      <div className="grid">
        <div className="row">
          {EXPERIENCES.map(experience => (
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
