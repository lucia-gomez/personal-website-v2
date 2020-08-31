import React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'
import SectionTitle from '../components/sectionTitle'
import Image404 from "../assets/images/404-office.gif";

export default function Error404() {
  return (
    <Layout>
      <Section id='404-section' index={-1}>
        <div id="error-404">
          {SectionTitle('Page not found :(')}
          <h4>Error 404</h4>
          <img src={Image404} alt="the office cringe" />
        </div>
      </Section>
    </Layout>
  )
}