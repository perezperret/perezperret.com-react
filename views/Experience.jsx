import React from 'react'

import { INFO, EXPERIENCES } from '../content/Experience'

import Info from '../components/Info'

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { trayIsOpen: false }
    this.toggleTray = this.toggleTray.bind(this)
  }

  toggleTray() {
    const trayIsOpen = !this.state.trayIsOpen
    this.setState({ trayIsOpen })
  }

  render() {
    const { role, company, location, duration, description } = this.props
    const { trayIsOpen } = this.state

    return(
      <div className="card">
        <div className="link text-right center-vertically align-right" onClick={this.toggleTray}>
          {duration}<span className="h2 ml-2">{trayIsOpen ? <span>&times;</span> : '+'}</span>
        </div>
        <div className="mb-6">
          <h4 className="mb-0">{company}</h4>
          <h6 className="mb-0">{role}</h6>
          {trayIsOpen ? <h6>{location}</h6> : null}
        </div>
        {trayIsOpen
          ? <div className="mb-8">{description.map(line => <p key={line}>{line}</p>)}</div>
          : null
        }
      </div>
    )
  }
}

const Experience = () => {
  return (
    <div className="container constrained content">
      <h1>Work experience</h1>

      <Info info={INFO} />

      <div className="grid">
        <div className="row">
          {EXPERIENCES.map(experience => (
            <div className="col" key={`${experience.role}${experience.company}${experience.duration}`}>
              <ListItem {...experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
