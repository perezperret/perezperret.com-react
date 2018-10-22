import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Jumbotron from '../components/Home/Jumbotron'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      highlights: []
    }
  }

  componentWillMount() {
    const sanityClient = require('@sanity/client')
    const client = sanityClient({
      projectId: '3b138hut',
      dataset: 'production'
    })

    client
    .getDocument('486799cf-8905-4fd1-99c8-01e38fca1073')
    .then(jumbotron => {
      this.setState({ loading: false, highlights: jumbotron.highlights })
    })
  }

  render() {
    const { loading, highlights } = this.state

    return (
      <div>
        { loading ? 'Loading...' : <Jumbotron highlights={highlights} /> }
      </div>
    )
  }
}

export default Home
