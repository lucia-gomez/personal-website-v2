import React from 'react'
import Layout from "../components/layout"
import Section from "../components/section"
import SectionTitle from "../components/sectionTitle"
import { makePortfolioCard } from "./portfolio"
import projects from "../scripts/projectList"

export default function ArchivePage() {
  return (
    <Layout>
      <Section id="archive" index={0}>
        {SectionTitle("Things I've Made")}
        <p>Vaguely organized in reverse chronological order, but mostly in order of how badly I want to show off each project</p>
        <div className='portfolio-card-deck'>
          {projects.map(makePortfolioCard)}
        </div>
      </Section>
    </Layout>
  );
}