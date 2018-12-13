import React from 'react'

import Content from '../components/Content'

import { title, content } from '../content/myWork.json'

const Work = () => (
  <div className="container">
    <div className="constrain-xs">
      <h1 className="my-2-1">{title}</h1>
      <Content content={content} />
    </div>
  </div>
)

export default Work
