import ExperienceSection from "../components/about/experience"
import Link from "../components/link"
import ProfilePic from "../components/about/profilePic"
import React from "react"
import Subsection from "../components/layout/subsection"
import TechnologiesSection from "../components/about/technologies"
import styled from "styled-components"
import aboutPage from "../contentful/about.json"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextRenderOptions } from "../contentful/util"
import useContentfulPreview from "../contentful/useContentfulPreview"

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
  const preview = useContentfulPreview()
  const content = preview ?? aboutPage

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
          {content.fields.aboutText &&
            documentToReactComponents(
              content.fields.aboutText,
              richTextRenderOptions
            )}
        </Subsection>
        <Subsection title="Tools & Technologies" openByDefault={false}>
          {content.fields.toolsTechnologiesText &&
            documentToReactComponents(
              content.fields.toolsTechnologiesText,
              richTextRenderOptions
            )}
          <TechnologiesSection />
        </Subsection>
        <Subsection title="Experience" openByDefault={false}>
          <ExperienceSection />
        </Subsection>
      </div>
    </AboutWrapper>
  )
}
