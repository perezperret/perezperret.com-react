import React from 'react'

import ContentfulRichText from '../components/ContentfulRichText'

import { title, body } from '../content/myWork.json'

const MyWork = () => (
  <div className="container">
    <div className="constrain-xs">
      <h1 className="my-2-1">{title}</h1>
      <ContentfulRichText body={body} />
    </div>
  </div>
)

export default MyWork
