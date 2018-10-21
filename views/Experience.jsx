import React from 'react'

import { INFO, EXPERIENCES } from '../content/Experience'

import CollapsibleCard from '../components/CollapsibleCard'
import Info from '../components/Info'

const Experience = () => {
  return (
    <div className="container constrained content route-enter">
      <h1>Work experience</h1>

      <Info info={INFO} />

      <div className="grid">
        <div className="row">
          {EXPERIENCES.map(({ company, role, location, duration, description }) => (
            <div className="col" key={`${company}${role}${duration}`}>
              <CollapsibleCard
                title={company}
                subTitle={role}
                hiddenSubTitle={location}
                buttonText={duration}
                hiddenContent={description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
