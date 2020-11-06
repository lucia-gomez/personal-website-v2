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
    [<PortfolioSection />, 'portfolio']
  ];

  return (
    <Layout>
      <script src="https://kit.fontawesome.com/9dd13a1052.js" crossOrigin="anonymous"></script>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-
        wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
      {sectionContents.map(([content, id], index) => (
        <Section id={id} index={index} key={index}>
          {content}
        </Section>)
      )}
    </Layout>
  )
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setDarkMode('theme-dark');
  } else {
    setDarkMode('theme-light');
  }
})();
