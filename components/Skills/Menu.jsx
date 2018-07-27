import React from 'react'
import { Link } from 'react-router-dom';

const images = {
  'ruby-on-rails': require(`../../images/Skills/ruby-on-rails.svg`),
  react: require(`../../images/Skills/react.svg`),
  ruby: require(`../../images/Skills/ruby.svg`),
  javascript: require(`../../images/Skills/javascript.svg`),
  'c-lang': require(`../../images/Skills/c-lang.svg`),
  java: require(`../../images/Skills/java.svg`),
  python: require(`../../images/Skills/python.svg`)
}

const SectionLink = ({ title, to, slug }) => (
  <Link to={to} className="h5 link col">
    <div className="card">
      <div className="image-link">
        <img className='image-link_image' src={images[slug]} />
        {title}
      </div>
    </div>
  </Link>
)

const SkillsMenu = ({ skills, match }) => (
  <div className="grid">
    <div className="row">
      {skills.map(({ slug, title }) => (
        <SectionLink key={slug} to={`${match.url}/${slug}`} title={title} slug={slug} />
      ))}
    </div>
  </div>
)

export default SkillsMenu
