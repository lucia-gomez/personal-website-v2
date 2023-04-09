import Layout from "./components/layout"
import Section from "./components/section"

import BannerContent from "./components/banner"
import About from "./pages/about"
import PortfolioSection from "./pages/portfolio"
import ExperienceSection from "./pages/experience"

export default function App() {
  return (
    <Layout>
      <BannerContent>Lucia Gomez</BannerContent>
      <About />
    </Layout>
  )
}
