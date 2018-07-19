import React from 'react'
import { OTHERS } from '../content/Others'

const Others = () => {
  return (
    <div>
      <h2>Others</h2>
      {OTHERS.map(({ title, description, more }) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>{more.map(line => <li key={line}>{line}</li>)}</ul>
        </div>
      ))}
    </div>
  )
}

export default Others
