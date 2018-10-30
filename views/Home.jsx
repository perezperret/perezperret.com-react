import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Loading from '../components/Loading'
import Jumbotron from '../components/Home/Jumbotron'
import ProjectsSummary from '../components/Projects/Summary'

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

    let highlights, projects

    const highlightsFetch = client
    .getDocument('486799cf-8905-4fd1-99c8-01e38fca1073')
    .then(jumbotron => {
      highlights = jumbotron.highlights
    })

    const projectsFetch = client
    .fetch(
      '*[_type == $type][0...2]{_id, title, description, image, links, technologies[]->{label, url} }',
      { type: 'project' }
    )
    .then(projectsResult => {
      projects = projectsResult
    })

    Promise.all([highlightsFetch, projectsFetch])
    .then(() => {
      this.setState({ loading: false, highlights, projects })
    })
  }

  render() {
    const { loading, highlights, projects } = this.state

    return (
      <div>
        {
          loading
          ? <Loading />
          : <div>
              <Jumbotron highlights={highlights} />
              <ProjectsSummary projects={projects} />
            </div>
        }
      </div>
    )
  }
}

export default Home
