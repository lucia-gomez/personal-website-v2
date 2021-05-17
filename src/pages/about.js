import React from "react"
import styled from "styled-components"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/subsection"

import ProfileImage from "../assets/images/profile-circle.png"
import FunnyProfileImage from "../assets/images/funny-profile-circle.png"
import LangBars from "../components/langBars"

const AboutWrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  h4 {
    height: min-content;
    width: fit-content;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProfileWrapper = styled.div`
  padding-top: 20px;
  height: fit-content;
`;

const ProfilePic = styled.img`
  border-radius: 300px;
  height: 25vw;
  width: 25vw;
  mix-blend-mode: luminosity;
  margin: auto;
  max-height: 300px;
  max-width: 300px;

  @media only screen and (max-width: 600px) {
    height: 30vh;
    width: 30vh;
  }
`;

const ProfileIconsWrapper = styled.div`
  padding-top: 20px;
`;

const ProfileIconRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  height: 35px;
  margin: auto;
  width: 175px;
  max-height: 300px;
  max-width: 300px;
  .material-icons {
    color: var(--color-text);
    margin-right: 5px;
  }
`;

const ScratchNote = styled.p`
  font-size: 12px;
`;

function ProfileInfo(iconName, text, otherIcon = null) {
  return (
    <ProfileIconRow>
      {otherIcon !== null ? otherIcon : <i className="material-icons">{iconName}</i>}
      <p>{text}</p>
    </ProfileIconRow>
  )
}

function hoverImage() {
  document.getElementById("profile-pic").setAttribute('src', FunnyProfileImage);
}

function unhoverImage() {
  document.getElementById("profile-pic").setAttribute('src', ProfileImage);
}

export default function About() {
  return (
    <>
      {SectionTitle("About Me")}
      <AboutWrapper>
        <ProfileWrapper>
          <ProfilePic
            src={ProfileImage}
            onMouseOver={hoverImage}
            onFocus={hoverImage}
            onMouseOut={unhoverImage}
            onBlur={unhoverImage}
            alt="profile" />
          <ProfileIconsWrapper>
            {ProfileInfo(null,
              <a href='https://github.com/lucia-gomez' target='_blank' rel='noopener noreferrer'>lucia-gomez</a>,
              <div className='material-icons' style={{ paddingLeft: '3px' }}>
                <i className="fa fa-github"></i>
              </div>
            )}
            {ProfileInfo("school", "Cornell University")}
            {ProfileInfo("place", "Ithaca, NY")}
            {ProfileInfo("home", "Redwood City, CA")}
          </ProfileIconsWrapper>
        </ProfileWrapper>
        <div>
          <Subsection title='Hello World!'>
            <p>I'm a senior at <span>Cornell University</span> majoring in Computer Science and Linguistics (graduating in May, 2021).
            I'm passionate about the <span>intersection of language and technology</span>, as well as augmented and virtual reality.
            I enjoy learning new languages, both human and programming, because doing so lets me see the world in new ways.
            For the past few years, I've been interested in <span>American Sign Language</span> and the challenges associated with machine translation-
            I was featured <a href='https://www.leadwithlanguages.org/2019/03/14/ask-away-5-questions-cornell-computer-science-linguistics-major-mixing-asl-innovation/' target='_blank' rel='noopener noreferrer'>here</a>.
            Getting others excited about Computer Science is also important to me- I'm a Teaching Assistant at Cornell, and I tutor kids through Juni Learning.
            I have at least one ABBA song stuck in my head at any given time.</p>
          </Subsection>
          <Subsection title='Languages & Tools'>
            <p>I fell in love with programming when I was 10 years old, thanks
              to <a href='https://scratch.mit.edu/' target='_blank' rel='noopener noreferrer'>Scratch* </a>
              and <a href='https://www.codecademy.com/' target='_blank' rel='noopener noreferrer'>Codecademy</a>.
              My humble nerd beginnings include
              an <a href='https://scratch.mit.edu/projects/1554944/' target='_blank' rel='noopener noreferrer'>
                animated Star Trek fanfiction</a> in Scratch, which is somehow still getting views.
              Since then, I've gained experience with more ~legitimate~ programming languages and tools:
            </p>
            <LangBars />
            <ScratchNote>* My Scratch experience surpasses this scale</ScratchNote>
          </Subsection>
        </div>
      </AboutWrapper>
    </>
  )
}