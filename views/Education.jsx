import React from 'react'
import { INFO, EDUCATION } from '../content/Education'

import CollapsibleCard from '../components/CollapsibleCard'
import Info from '../components/Info'

const Education = () => {
  return (
    <div className="container constrained content route-enter">
      <h1>Education</h1>

      <Info info={INFO} />

      <div className="grid">
        <div className="row">
          {EDUCATION.map(({ title, institution, location, duration, description }) => (
            <div className="col" key={`${institution}${title}${duration}`}>
              <CollapsibleCard
                title={title}
                subTitle={institution}
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

export default Education
