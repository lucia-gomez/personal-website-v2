import React from "react"
import styled from "styled-components"
import Subsection from "../components/subsection"
import Link from "../components/link"

import ProfileImage from "../assets/images/profile-circle.png"
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
`

const ProfileWrapper = styled.div`
  padding-top: 20px;
  height: fit-content;
`

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
`

const ProfileIconsWrapper = styled.div`
  padding-top: 20px;

  i {
    font-size: 22px;
    width: 30px;
  }
`

const ProfileIconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  height: 35px;
  margin: auto;
  width: 175px;
  max-height: 300px;
  max-width: 300px;

  p {
    margin-bottom: 0px;
  }

  .material-icons {
    color: var(--color-text);
    margin-right: 5px;
  }
`

const ScratchNote = styled.p`
  font-size: 12px;
`

function ProfileInfo(icon, text) {
  return (
    <ProfileIconRow>
      <i className={icon}></i>
      <p>{text}</p>
    </ProfileIconRow>
  )
}

export default function About() {
  return (
    <AboutWrapper>
      <ProfileWrapper>
        <ProfilePic src={ProfileImage} alt="profile" />
        <ProfileIconsWrapper>
          {ProfileInfo(
            "fab fa-github",
            <Link href="https://github.com/lucia-gomez">lucia-gomez</Link>
          )}
          {ProfileInfo("fas fa-briefcase", "SWE, Facebook")}
          {ProfileInfo("fas fa-graduation-cap", "Cornell University")}
          {ProfileInfo("fas fa-map-marker-alt", "Seattle, WA")}
        </ProfileIconsWrapper>
      </ProfileWrapper>
      <div>
        <Subsection title="Hello World!">
          <p>
            I'm a Software Engineer working on AR glasses at{" "}
            <span>Facebook</span>, and I recently graduated from Cornell as a
            Computer Science and Linguistics major. I'm passionate about{" "}
            <span>augmented and virtual reality</span>, but I've been on a
            full-stack web dev spree lately. For the past few years, I've been
            interested in <span>American Sign Language</span> and the challenges
            associated with machine translation- I was featured{" "}
            <Link href="https://www.leadwithlanguages.org/2019/03/14/ask-away-5-questions-cornell-computer-science-linguistics-major-mixing-asl-innovation/">
              here
            </Link>
            . I have at least one ABBA song stuck in my head at any given time.
          </p>
        </Subsection>
        <Subsection title="Languages & Tools">
          <p>
            I fell in love with programming when I was 10 years old, thanks to{" "}
            <Link href="https://scratch.mit.edu/">Scratch* </Link>
            and <Link href="https://www.codecademy.com/">Codecademy</Link>. My
            humble nerd beginnings include an{" "}
            <Link href="https://scratch.mit.edu/projects/1554944/">
              animated Star Trek fanfiction
            </Link>{" "}
            in Scratch, which is somehow still getting views. Since then, I've
            gained experience with more ~legitimate~ programming languages and
            tools:
          </p>
          <LangBars />
          <ScratchNote>
            * My Scratch experience surpasses this scale
          </ScratchNote>
        </Subsection>
      </div>
    </AboutWrapper>
  )
}
