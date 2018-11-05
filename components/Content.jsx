import React from 'react'

const Content = ({ content }) => (
  content.map(block => (
    <p>{block.children.map(child => <span>{child.text}</span>)}</p>)
  )
)

export default Content
