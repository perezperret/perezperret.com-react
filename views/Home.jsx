import React from 'react'
import Jumbotron from '../components/Home/Jumbotron'
import SocialMediaLinks from '../components/Home/SocialMediaLinks'
import ProjectsList from '../components/Home/ProjectsList'
import Contact from '../components/Contact'

import projects from '../content/projects.json'
import highlights from '../content/highlights.json'

const Home = () => (
  <div>
    <Jumbotron highlights={highlights} />
    <SocialMediaLinks />
    <ProjectsList projects={projects} />
    <Contact />
  </div>
)

export default Home
