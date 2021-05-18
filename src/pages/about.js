import React, { useState } from "react"
import styled from "styled-components"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/subsection"
import Link from "../components/link"

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

  /* a {
    color: ${props => props.theme.accent};
  }

  a:hover {
    color: ${props => props.theme.accentLight};
    text-decoration: none;
  } */

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

export default function About() {
  const [photoSrc, setPhotoSrc] = useState(ProfileImage);

  const hoverPhoto = () => setPhotoSrc(FunnyProfileImage);
  const unhoverPhoto = () => setPhotoSrc(ProfileImage);

  return (
    <>
      {SectionTitle("About Me")}
      <AboutWrapper>
        <ProfileWrapper>
          <ProfilePic
            src={photoSrc}
            onMouseOver={hoverPhoto}
            onFocus={hoverPhoto}
            onMouseOut={unhoverPhoto}
            onBlur={unhoverPhoto}
            alt="profile"
          />
          <ProfileIconsWrapper>
            {ProfileInfo(null,
              <Link href='https://github.com/lucia-gomez'>lucia-gomez</Link>,
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
            I was featured <Link href='https://www.leadwithlanguages.org/2019/03/14/ask-away-5-questions-cornell-computer-science-linguistics-major-mixing-asl-innovation/'>here</Link>.
            Getting others excited about Computer Science is also important to me- I'm a Teaching Assistant at Cornell, and I tutor kids through Juni Learning.
            I have at least one ABBA song stuck in my head at any given time.</p>
          </Subsection>
          <Subsection title='Languages & Tools'>
            <p>I fell in love with programming when I was 10 years old, thanks
              to <Link href='https://scratch.mit.edu/'>Scratch* </Link>
              and <Link href='https://www.codecademy.com/'>Codecademy</Link>.
              My humble nerd beginnings include
              an <Link href='https://scratch.mit.edu/projects/1554944/'>
                animated Star Trek fanfiction</Link> in Scratch, which is somehow still getting views.
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