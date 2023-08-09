import ExperienceSection from "../components/about/experience"
import Link from "../components/link"
import React from "react"
import Subsection from "../components/layout/subsection"
import TechnologiesSection from "../components/about/technologies"
import { profilePicUrl } from "../scripts/util"
import styled from "styled-components"

const AboutWrapper = styled.div`
  padding: 56px 20px 50px 20px;
  display: flex;
  flex-direction: row;
  h4 {
    height: min-content;
    width: fit-content;
  }

  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`

const ProfileWrapper = styled.div`
  padding-top: 20px;
  height: fit-content;
  @media only screen and (max-width: 850px) {
    margin: auto;
  }
`

const ProfilePic = styled.img`
  border-radius: 300px;
  height: 25vw;
  width: 25vw;
  filter: grayscale(1);
  mix-blend-mode: darken;
  margin: auto;
  max-height: 300px;
  max-width: 300px;

  @media only screen and (max-width: 850px) {
    height: 30vh;
    width: 30vh;
  }
`

const ProfileIconsWrapper = styled.div`
  padding-top: 20px;

  i {
    font-size: 22px;
    text-align: center;
    width: 35px;
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
        <ProfilePic src={profilePicUrl} alt="profile" />
        <ProfileIconsWrapper>
          {ProfileInfo(
            "fab fa-github",
            <Link href="https://github.com/lucia-gomez">lucia-gomez</Link>
          )}
          {ProfileInfo("fas fa-briefcase", "SWE, Meta")}
          {ProfileInfo("fas fa-graduation-cap", "NYU Tisch")}
          {ProfileInfo("fas fa-map-marker-alt", "Brooklyn, NY")}
        </ProfileIconsWrapper>
      </ProfileWrapper>
      <div className="animate__animated animate__fadeIn">
        <Subsection title="About Me">
          <p>
            By day, I'm a Software Engineer working on augmented reality glasses
            at Meta. By night, I'm a Creative Technologist bouncing from project
            to project. Right now I'm focused on
          </p>
          <ul>
            <li>Augmented reality</li>
            <li>Interactive web experiences</li>
            <li>Digital art</li>
            <li>Zines</li>
            <li>Combinations of all of the above</li>
          </ul>
          ...Or whatever shiny, new technology captures my interest tomorrow.
          I'm also an incoming graduate student at the{" "}
          <Link href="https://tisch.nyu.edu/itp/admissions/itp-mps">
            Interactive Telecommunications Program
          </Link>{" "}
          through the NYU Tisch School of the Arts! I'm excited to be returning
          to New York for school, after graduating from Cornell in 2021 with a
          B.A. in Computer Science and Linguistics. I enjoy making use of my
          background in Linguistics; I've always been interested in machine
          translation of American Sign Language.
          <br></br>
          <br></br>I have at least one ABBA song stuck in my head at any given
          time.
        </Subsection>
        <Subsection title="Tools & Technologies" openByDefault={false}>
          <p>
            I fell in love with programming and creative technology when I was
            10 years old. My humble nerd beginnings include an{" "}
            <Link href="https://scratch.mit.edu/projects/1554944/">
              animated Star Trek fanfiction
            </Link>{" "}
            in Scratch, and nothing I've made since can ever compete with that.
            More recently, I've gained hands-on experience with several creative
            tools and technologies to bring my ideas to life
          </p>
          <TechnologiesSection />
        </Subsection>
        <Subsection title="Experience" openByDefault={false}>
          <ExperienceSection />
        </Subsection>
      </div>
    </AboutWrapper>
  )
}
