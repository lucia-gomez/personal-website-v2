import React from "react"
import SectionTitle from "../components/sectionTitle"

import ProfileImage from "../assets/images/profile-circle.png"

export default function About() {
  return (
    <>
      {SectionTitle("About Me")}
      <div id='about-content'>
        <img id="profile-pic" src={ProfileImage} alt="profile" />
        <AboutSection title='Hello World!'>
          <p>I'm a senior at <span>Cornell University</span> majoring in Computer Science and Linguistics (graduating in May, 2021).
            I'm passionate about the <span>intersection of language and technology</span>, as well as augmented and virtual reality.
            I enjoy learning new languages, both human and programming, because doing so lets me see the world in new ways.
            For the past few years, I've been interested in <span>American Sign Language</span> and the challenges associated with machine translation-
            I was featured <a href='https://www.leadwithlanguages.org/2019/03/14/ask-away-5-questions-cornell-computer-science-linguistics-major-mixing-asl-innovation/'>here</a>.
            I have at least one ABBA song stuck in my head at any given time.</p>
        </AboutSection>
      </div>
    </>
  )
}


class AboutSection extends React.Component {
  render() {
    return (
      <div className='about-section'>
        <h4>{this.props.title}</h4>
        {this.props.children}
      </div>
    )
  }
}
