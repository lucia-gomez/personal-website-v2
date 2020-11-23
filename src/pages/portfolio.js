import React from "react"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/subsection"
import Link from '../components/link'
import projects from "../scripts/projectList"

export default function PortfolioSection() {
  return (
    <>
      {SectionTitle("Things I've Made")}
      <Subsection title="Featured">
        <div className='portfolio-card-deck'>
          {projects.map((project, i) => (
            <PortfolioCard
              title={project.title}
              tools={project.tools}
              image={project.image}
              link={project.link}
              key={i}
            >
              <p>{project.text}</p>
              {project.extra ?? null}
            </PortfolioCard>
          ))}
        </div>
      </Subsection>
    </>
  )
}

class PortfolioCard extends React.Component {
  render() {
    const imgStyle = { backgroundImage: `url(${this.props.image})` };
    const githubIcon = (
      <Link href={this.props.link ?? ''} className={'gitLink'}>
        <div className='material-icons'>
          <i className="fa fa-github"></i>
        </div>
      </Link >
    );

    return (
      <div className='portfolio-card'>
        <div className="portfolio-card-image" style={imgStyle}></div>
        <div className='portfolio-card-body'>
          <div>
            <div className='flex-row'>
              <h4>{this.props.title}</h4>
              {githubIcon}
            </div>
            <span className='portfolio-card-divider'></span>
            {this.props.children}
          </div>
        </div>
        <div className='portfolio-card-tags'>
          {this.props.tools.map((tool, index) => (
            <span className='portfolio-card-tag' key={index}>{tool}</span>
          ))}
        </div>
      </div>
    )
  }
}
