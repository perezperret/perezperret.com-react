import React from 'react'

import ContentfulRichText from '../components/ContentfulRichText'

import { fields } from '../content/myLife.json'

const Life = () => (
  <div className="container">
    <div className="constrain-xs">
      <h1 className="my-2-1">{fields.title}</h1>
      <ContentfulRichText body={fields.body} />
    </div>
  </div>
)

export default Life
