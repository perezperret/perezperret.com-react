import React from 'react'

export default class CollapsibleCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    const isOpen = !this.state.isOpen
    this.setState({ isOpen })
  }

  render() {
    const { subTitle, title, hiddenSubTitle, buttonText, hiddenContent } = this.props
    const { isOpen } = this.state

    return(
      <div className="card">
        <div className="link text-right center-vertically align-right" onClick={this.toggle}>
          {buttonText}

          <span className="h2 ml-2">
            {isOpen ? <span>&times;</span> : '+'}
          </span>
        </div>

        <div className="mb-6">
          <h4 className="mb-0">{title}</h4>
          {subTitle ? <h6 className="mb-0">{subTitle}</h6> : null}
          {(isOpen && hiddenSubTitle) ? <h6>{hiddenSubTitle}</h6> : null}
        </div>

        {isOpen
          ? <div className="mb-8">
              {hiddenContent.map(line => <p key={line}>{line}</p>)}
            </div>
          : null}
      </div>
    )
  }
}
