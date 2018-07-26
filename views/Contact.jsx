import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { EMAIL, PHONE, INFO } from '../content/Contact'

const LINKS = [
  {
    description: 'Email me at',
    linkText: 'perezperret@gmail.com',
    linkUrl: 'mailto:perezperret@gmail.com',
    linkIcon: ['far', 'envelope']
  },
  {
    description: 'Call or message me at',
    linkText: '+58 424 248 0556',
    linkUrl: 'tel:+584242480556',
    linkIcon: 'phone'
  }
]

const ContactLink = ({ description, linkText, linkUrl, linkIcon }) => (
  <div className="text-right mb-3">
    {description}{' '}
    <a href={linkUrl} className="icon-link icon-link--external">
      <span className="icon-link_text">{linkText}</span>
      <span className="icon-link_icon">
        <FontAwesomeIcon icon={linkIcon} />
      </span>
    </a>
  </div>
)

const Contact = () => (
  <div className="container constrained content">
    <h1>Contact</h1>
    <div className="pb-4">
      {LINKS.map(link => <ContactLink {...link} />)}
    </div>
    <p className="text-center">{INFO}</p>
  </div>
)

export default Contact
