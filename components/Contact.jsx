import React from 'react'
import axios from 'axios'

import Form from './Contact/Form'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Leave your email and a message and I will contact you shortly!'
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(formData) {
    axios.post('https://formkeep.com/f/2196b304bda9', formData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/javascript'
      }
    })
    .then(() => {
      this.setState({ message: "Thanks! I'll contact you shortly! " })
    })
  }

  render() {
    return(
      <div className="container">
        <h4 className="mb-1-1">Contact me</h4>
          <div className="flex vertical md-horizontal">
            <div className="alert alert-warning w-md-20 mb-1-1 mb-md-0 mr-md-1-1">
              <p>{this.state.message}</p>
              You can also find me at perezperret@gmail.com
            </div>
            <Form onSubmit={this.onSubmit} />
          </div>
      </div>
    )
  }
}
