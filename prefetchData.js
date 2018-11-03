const fs = require('fs')
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: '3b138hut',
  dataset: 'production'
})

client
.getDocument('486799cf-8905-4fd1-99c8-01e38fca1073')
.then(homeJumbotron => {
  fs.writeFileSync('./content/homeJumbotron.json', JSON.stringify(homeJumbotron, null, 2))
})

// Projects query
// client
// .fetch(
//   '*[_type == $type][0...2]{_id, title, description, image, links, technologies[]->{label, url} }',
//   { type: 'project' }
// )
