import React from "react"
import SectionTitle from "../components/sectionTitle"

import ProfileImage from "../assets/images/profile-circle.png"
import LangBars from "../components/langBars"

function ProfileInfo(iconName, text, otherIcon = null) {
  return (
    <div className='flex-row profile-icon-row'>
      {otherIcon !== null ? otherIcon : <i className="material-icons">{iconName}</i>}
      <p>{text}</p>
    </div>
  )
}

export default function About() {
  return (
    <>
      {SectionTitle("About Me")}
      <div id='about-content'>
        <div id='profile'>
          <img id="profile-pic" src={ProfileImage} alt="profile" />
          <div className='profile-icon-rows'>
            {ProfileInfo(null,
              <a href='https://github.com/lucia-gomez' target='_blank' rel='noopener noreferrer'>lucia-gomez</a>,
              <div className='material-icons' style={{ paddingLeft: '3px' }}>
                <i className="fa fa-github"></i>
              </div>
            )}
            {ProfileInfo("school", "Cornell University")}
            {ProfileInfo("place", "Ithaca, NY")}
            {ProfileInfo("home", "Redwood City, CA")}
          </div>
        </div>
        <div>
          <AboutSection title='Hello World!'>
            <p>I'm a senior at <span>Cornell University</span> majoring in Computer Science and Linguistics (graduating in May, 2021).
            I'm passionate about the <span>intersection of language and technology</span>, as well as augmented and virtual reality.
            I enjoy learning new languages, both human and programming, because doing so lets me see the world in new ways.
            For the past few years, I've been interested in <span>American Sign Language</span> and the challenges associated with machine translation-
            I was featured <a href='https://www.leadwithlanguages.org/2019/03/14/ask-away-5-questions-cornell-computer-science-linguistics-major-mixing-asl-innovation/'>here</a>.
            Getting others excited about Computer Science is also important to me- I'm a Teaching Assistant at Cornell, and I tutor kids through Juni Learning.
            I have at least one ABBA song stuck in my head at any given time.</p>
          </AboutSection>
          <AboutSection title='Languages & Tools'>
            <p>I fell in love with programming when I was 10 years old, thanks
              to <a href='https://scratch.mit.edu/' target='_blank' rel='noopener noreferrer'>Scratch* </a>
              and <a href='https://www.codecademy.com/' target='_blank' rel='noopener noreferrer'>Codecademy</a>.
              My humble nerd beginnings include
              an <a href='https://scratch.mit.edu/projects/1554944/' target='_blank' rel='noopener noreferrer'>
                animated Star Trek fanfiction</a> in Scratch, which is somehow still getting views.
              Since then, I've gained experience with more ~legitimate~ programming languages and tools:
            </p>
            <LangBars />
            <p id='scratch-note'>* My Scratch experience surpasses this scale</p>
          </AboutSection>
          <AboutSection title='Numbers'>
            <NumberRow number={3}>
              <p>Versions of this website, because I'm indecisive and web dev is fun</p>
            </NumberRow>
            <NumberRow number={4}>
              <p>Languages I know or am currently learning: English, Spanish, American Sign Language, Italian</p>
            </NumberRow>
            <NumberRow number={0}>
              <p>Times I've baked bread in quarantine</p>
            </NumberRow>
          </AboutSection>
        </div>
      </div>
    </>
  )
}

class NumberRow extends React.Component {
  render() {
    return (
      <div className='about-number-row flex-row'>
        <h3>{this.props.number}</h3>
        {this.props.children}
      </div>
    )
  }
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
