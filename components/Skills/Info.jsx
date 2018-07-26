import React from 'react'

const Info = ({ info }) => (
  <div className="pb-8">
    <p className="highlight">{info[0]}</p>
    {info.slice(1, info.length).map(text => <p>{text}</p>)}
  </div>
)

export default Info
