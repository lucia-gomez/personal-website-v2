import styled from 'styled-components'
import Layout from "../components/layout"
import Section from "../components/section"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/subsection"
import ZineItem from "../components/zines/zineItem";

const lactoseIntolerance = {
  title: "The Seven Deadly Sins of Lactose Intolerance",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/lactose_intolerance/${i + 1}.png`)
  )
};
const snakesCantSign = {
  title: "Snakes Can't Sign",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/snakes_cant_sign/${i + 1}.png`)
  )
};
const pickle = {
  title: "Should You Tickle Your Pickle?",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/pickle/${i + 1}.png`)
  )
};
const birds_arent_real = {
  title: "Birds Aren't Real",
  height: 418,
  pages: Array.from(Array(4)).map((_, i) =>
    require(`../assets/zines/birds_arent_real/${i + 1}.png`)
  )
};
const shell = {
  title: "We're All Going to Shell",
  height: 418,
  pages: Array.from(Array(4)).map((_, i) =>
    require(`../assets/zines/shell/${i + 1}.png`)
  )
};

const zines = [lactoseIntolerance, snakesCantSign, pickle, birds_arent_real,
  shell];

const SubsectionWrapper = styled.div`
  h4 {
    width: fit-content;
  }
`;

export default function ArtPage() {
  return (
    <Layout>
      <Section id="art" index={0}>
        {SectionTitle("Art")}
        <SubsectionWrapper>
          <Subsection title='Zines'>
            <p>Sometimes I make silly little zines</p>
            {zines.map((zine, idx) =>
              <ZineItem zine={zine} key={idx} />
            )}
          </Subsection>
        </SubsectionWrapper>
      </Section>
    </Layout>
  )
}