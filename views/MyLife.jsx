import React from 'react'

import ContentfulRichText from '../components/ContentfulRichText'

import { title, body } from '../content/myLife.json'

const MyLife = () => (
  <div className="container">
    <div className="constrain-xs">
      <h1 className="my-2-1">{title}</h1>
      <ContentfulRichText body={body} />
    </div>
  </div>
)

export default MyLife
