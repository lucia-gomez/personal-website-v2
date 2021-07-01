import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

import BannerContent from "./banner"
import About from "./about"
import PortfolioSection from "./portfolio"
import ExperienceSection from "./experience"

export default function Home() {

  const sectionContents = [
    [<BannerContent />, 'banner'],
    [<About />, 'about'],
    [<PortfolioSection />, 'portfolio'],
    [<ExperienceSection />, 'experience']
  ];

  return (
    <Layout>
      {sectionContents.map(([content, id], index) => (
        <Section id={id} index={index} key={index}>
          {content}
        </Section>)
      )}
    </Layout>
  )
}
