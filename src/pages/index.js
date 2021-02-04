import React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

import BannerContent from "./banner"
import About from "./about"
import PortfolioSection from "./portfolio"

import { setDarkMode } from "../scripts/theme.js"

export default function Home() {

  const sectionContents = [
    [<BannerContent />, 'banner'],
    [<About />, 'about'],
    [<PortfolioSection />, 'portfolio'],
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

(function () {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setDarkMode('theme-dark');
    } else {
      setDarkMode('theme-light');
    }
  } else {
    setDarkMode('theme-light');
  }
})();
