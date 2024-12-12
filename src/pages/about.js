import ExperienceSection from "../components/about/experience"
import Link from "../components/link"
import ProfilePic from "../components/about/profilePic"
import React from "react"
import Subsection from "../components/layout/subsection"
import TechnologiesSection from "../components/about/technologies"
import styled from "styled-components"

const AboutWrapper = styled.div`
  padding: 56px 20px 50px 20px;
  margin-right: 4px; // scrollbar
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

const ProfileIconsWrapper = styled.div`
  padding-top: 20px;

  ion-icon {
    font-size: 24px;
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
  width: 145px;
  max-height: 300px;
  max-width: 300px;

  p {
    margin-bottom: 0px;
  }
`

function ProfileInfo(icon, text) {
  return (
    <ProfileIconRow>
      <ion-icon name={icon}></ion-icon>
      <p>{text}</p>
    </ProfileIconRow>
  )
}

export default function About() {
  return (
    <AboutWrapper>
      <ProfileWrapper>
        <ProfilePic />
        <ProfileIconsWrapper>
          {ProfileInfo(
            "logo-github",
            <Link href="https://github.com/lucia-gomez">lucia-gomez</Link>
          )}
          {ProfileInfo(
            "logo-instagram",
            <Link href="https://www.instagram.com/lugoo.dev/">lugoo.dev</Link>
          )}
          {ProfileInfo("school", "NYU ITP")}
          {ProfileInfo("location", "Brooklyn, NY")}
        </ProfileIconsWrapper>
      </ProfileWrapper>
      <div className="animate__animated animate__fadeIn">
        <Subsection title="About Me">
          <p>
            I'm a second year graduate student and Web Developer at NYU Tisch's{" "}
            <Link href="https://itp.nyu.edu/itp/">
              Interactive Telecommunications Program
            </Link>
            . My background is in software engineering but I'm transitioning
            into more of a Creative Technologist role. I'm currently focused on
          </p>
          <ul>
            <li>Physical computing</li>
            <li>Interactive web experiences</li>
            <li>Jello ?!</li>
          </ul>
          ...Or whatever crazy sh*t captures my interest tomorrow. Before grad
          school, I studied Computer Science and Linguistics at Cornell
          University, and was a Senior Software Engineer at Meta working on AR
          glasses. I enjoy making use of my background in Linguistics; I've
          always been interested in combinations of emerging tech + American
          Sign Language.
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
