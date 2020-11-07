import React from "react"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/subsection"

export default function PortfolioSection() {
  return (
    <>
      {SectionTitle("Things I've Made")}
      <Subsection title="Featured">
        <PortfolioCard title="Sign Search" tools={["Javascript", "React"]}>
          <p>A Chrome extension for providing a convenient way to lookup words in American Sign Language.
            Highlight a word on a page or enter a search directly into the extension to see multiple ways of signing the word. </p>
          {/* <div className='button'>Install</div> */}
          <a href="https://chrome.google.com/webstore/detail/sign-search/gniinlnnpjdbeleojkghgdccpapkapma"
            target="_blank" rel='noopener noreferrer' role="button" className="btn btn-primary">Install</a>
        </PortfolioCard>
      </Subsection>
    </>
  )
}

class PortfolioCard extends React.Component {
  render() {
    return (
      <div className='portfolio-card'>
        <div className="portfolio-card-image"></div>
        <div className='portfolio-card-body'>
          <h4>{this.props.title}</h4>
          <span className='portfolio-card-divider'></span>
          {this.props.children}
          <div className='portfolio-card-tags'>
            {this.props.tools.map((tool, index) => (
              <span className='portfolio-card-tag' key={index}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
