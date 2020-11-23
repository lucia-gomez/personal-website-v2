import React from "react"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/subsection"
import Link from '../components/link'
import { featuredProjects } from "../scripts/projectList"

export default function PortfolioSection() {
  const projects = featuredProjects(["Sign Search", "How Many Hollaback Girls", "Personal Website"]);
  return (
    <>
      {SectionTitle("Things I've Made")}
      <Subsection title="Featured">
        <div className='portfolio-card-deck'>
          {projects.map(makePortfolioCard)}
        </div>
      </Subsection>
    </>
  )
}

export function makePortfolioCard(project, key) {
  return (
    <PortfolioCard
      title={project.title}
      tools={project.tools}
      image={project.image}
      git={project.link ?? null}
      link={project.extra ?? null}
      key={key}
    >
      <p>{project.text}</p>
    </PortfolioCard>
  );
}

class PortfolioCard extends React.Component {
  render() {
    const imgStyle = { backgroundImage: `url(${this.props.image})` };
    const githubIcon = (this.props.git ?
      <Link href={this.props.git ?? ''} className={'git-link icon-link'}>
        <div className='material-icons'>
          <i className="fa fa-github"></i>
        </div>
      </Link >
      : null);

    return (
      <div className='portfolio-card'>
        <div className="portfolio-card-image" style={imgStyle}></div>
        <div className='portfolio-card-body'>
          <div className='flex-row'>
            <h4>{this.props.title}</h4>
            <div className='portfolio-card-buttons flex-row'>
              {githubIcon}
              {this.props.link}
            </div>
          </div>
          <span className='portfolio-card-divider'></span>
          {this.props.children}
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
