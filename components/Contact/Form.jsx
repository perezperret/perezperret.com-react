import React from 'react'

const INITIAL_STATE = {
  email: '',
  message: ''
}

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(this.state)
    this.setState(INITIAL_STATE)
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input
          className="form-input mb-1-2"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          placeholder="Enter your email..."
        />
        <textarea
          className="form-input mb-1-2"
          name="message"
          rows="5"
          value={this.state.message}
          onChange={this.onChange}
          placeholder="Leave a message..."
        ></textarea>

        <button className="btn btn-secondary">Submit!</button>
      </form>
    )
  }
}
