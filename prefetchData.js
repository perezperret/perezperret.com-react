const fs = require('fs')
const sanity = require('@sanity/client')
const contentful = require('contentful');

const sanityClient = sanity({
  projectId: '3b138hut',
  dataset: 'production'
})

const contentfulClient = contentful.createClient({
  space: "6jtwmjb4i1r4",
  accessToken: "be8f7199cb46fb171a55668d102a3abbbefee0d506813aeeddc20bb3644d7d50",
});

// Get home header text
sanityClient
.getDocument('486799cf-8905-4fd1-99c8-01e38fca1073')
.then(homeJumbotron => {
  fs.writeFileSync('./content/homeJumbotron.json', JSON.stringify(homeJumbotron, null, 2))
})

// Get work text
sanityClient
.getDocument('0078f1f3-85f6-47de-98a8-6d9ee652011c')
.then(myWork => {
  fs.writeFileSync('./content/myWork.json', JSON.stringify(myWork, null, 2))
})

// // Get life text
contentfulClient
.getEntry('5Qr08zO61qEI8wKmyIooU')
.then(myLife => {
  fs.writeFileSync('./content/myLife.json', JSON.stringify(myLife, null, 2))
})
.catch(err => console.log(err))

// Projects query
// client
// .fetch(
//   '*[_type == $type][0...2]{_id, title, description, image, links, technologies[]->{label, url} }',
//   { type: 'project' }
// )
