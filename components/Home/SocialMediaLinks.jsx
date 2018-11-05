import React from 'react'

import socialMediaIcons from '../../images/socialMediaIcons'

import IconLink from '../IconLink'

const socialMedia = [
  { name: 'github', label: 'GitHub', link: 'https://github.com/perezperret'},
  { name: 'medium', label: 'Medium', link: 'https://medium.com/@perezperret'},
  { name: 'dribbble', label: 'Dribbble', link: 'https://dribbble.com/perezperret'}
]

const SocialMediaLinks = () => (
  <div className="container py-2-1 flex flex-wrap">
    {socialMedia.map(medium => (
      <div className="mr-1-2 mb-1-2">
        <IconLink {...medium} key={medium.name} icon={socialMediaIcons[medium.name]} />
      </div>
    ))}
  </div>
)

export default SocialMediaLinks
