import React from 'react'
import { INFO, MORE } from '../content/More'

import CollapsibleCard from '../components/CollapsibleCard'
import Info from '../components/Info'

const More = () => {
  return (
    <div className="container constrained content route-enter">
      <h1>More</h1>

      <Info info={INFO} />

      <div className="grid">
        <div className="row">
          {MORE.map(({ title, description, more }) => (
            <div className="col" key={`${title}${description}`}>
              <CollapsibleCard
                title={title}
                hiddenContent={description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default More
