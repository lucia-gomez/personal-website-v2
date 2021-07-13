import Layout from "./components/layout"
import Section from "./components/section"

import BannerContent from "./components/banner"
import About from "./pages/about"
import PortfolioSection from "./pages/portfolio"
import ExperienceSection from "./pages/experience"

export default function App() {

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