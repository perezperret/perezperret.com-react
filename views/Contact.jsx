import React from 'react'
import { EMAIL, PHONE, INFO } from '../content/Contact'

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>You can always find me at {EMAIL}</p>
    <p>You can also call or message me at {PHONE}</p>
    <p>{INFO}</p>
  </div>
)

export default Contact
