import React from 'react'
import { EDUCATION } from '../content/Education'

const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      {EDUCATION.map(({ title, institution, location, duration, description }) => (
        <div key={title}>
          <h3>{title}, {institution}</h3>
          <h4>{location} {duration}</h4>
          <ul>{description.map(line => <li key={line}>{line}</li>)}</ul>
        </div>
      ))}
    </div>
  )
}

export default Education
