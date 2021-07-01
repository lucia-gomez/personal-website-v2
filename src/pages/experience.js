import React from "react"
import SectionTitle from "../components/sectionTitle"
import TabbedContent from "../components/tabbedContent"

export default function ExperienceSection() {
  const tabs = {
    "Juni Learning": "test",
    "Cornell TA": "test2",
  };
  return (
    <>
      {SectionTitle("Experience")}
      <p>Previous work experience</p>
      <TabbedContent {...{ tabs }} />
    </>
  )
}