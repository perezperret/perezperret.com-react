import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Content from '../components/Content'
import Loading from '../components/Loading'

class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      title: '',
      content: []
    }
  }

  componentWillMount() {
    const sanityClient = require('@sanity/client')
    const client = sanityClient({
      projectId: '3b138hut',
      dataset: 'production'
    })

    client
    .getDocument('54fe2b0d-30ba-428d-afe5-0e02285de5ca')
    .then(article => {
      this.setState({ loading: false, title: article.title, content: article.content })
    })
  }

  render() {
    const { title, content, loading } = this.state

    return (
      <div className="container">
        {
          loading
          ? <Loading/>
          : (
            <div>
              <h1 className="my-2-1">{title}</h1>
              <Content content={content} />
            </div>
          )
        }
      </div>
    )
  }
}

export default Life
