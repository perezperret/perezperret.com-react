import React from 'react'

const ContentfulRichText = ({ body }) => (
  body.content.map(block => (
    <p>{block.content.map(child => <span>{child.value}</span>)}</p>)
  )
)

export default ContentfulRichText
