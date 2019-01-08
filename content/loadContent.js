const fs = require('fs')
const contentful = require('contentful');

const contentfulClient = contentful.createClient({
  space: "6jtwmjb4i1r4",
  accessToken: "be8f7199cb46fb171a55668d102a3abbbefee0d506813aeeddc20bb3644d7d50",
});

const parseContentfulEntry = ({ fields, sys }) => Object.assign(fields, sys)

const parseContentfulEntries = response => (
  response.items.map(parseContentfulEntry)
)

// Get work text
contentfulClient
.getEntry('154UelCyMkU2cQcQ8MmeaM', { select: 'fields,sys.id' })
.then(parseContentfulEntry)
.then(myWork => {
  fs.writeFileSync('./content/myWork.json', JSON.stringify(myWork, null, 2))
})
.catch(err => console.log(err))

// Get life text
contentfulClient
.getEntry('5Qr08zO61qEI8wKmyIooU', { select: 'fields,sys.id' })
.then(parseContentfulEntry)
.then(myLife => {
  fs.writeFileSync('./content/myLife.json', JSON.stringify(myLife, null, 2))
})
.catch(err => console.log(err))

// Get projects
contentfulClient
.getEntries({ select: 'fields,sys.id', 'content_type': 'project' })
.then(parseContentfulEntries)
.then(projects => {
  fs.writeFileSync('./content/projects.json', JSON.stringify(projects, null, 2))
})
.catch(err => console.log(err))
