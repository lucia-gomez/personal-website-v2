import styled from 'styled-components'
import Layout from "../components/layout"
import Section from "../components/section"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/subsection"
import Link from '../components/link';
import ZineItem from "../components/zines/zineItem";
import { PortfolioCardDeck } from '../components/portfolioCardDeck'
import zines from '../scripts/zineList';

const SubsectionWrapper = styled.div`
  h4 {
    width: fit-content;
  }
`;

const ZinePortfolioCardDeck = styled(PortfolioCardDeck)`
  padding: 0px;

  @media only screen and (min-width: 576px) {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 576px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;

export default function ArtPage() {
  return (
    <Layout>
      <Section id="art" index={0}>
        {SectionTitle("Art")}
        <SubsectionWrapper>
          <Subsection title='Zines'>
            <p>Sometimes I make silly little <Link href="https://en.wikipedia.org/wiki/Zine">zines</Link>. Click on a zine to read it!</p>
            <ZinePortfolioCardDeck>
              {zines.map((zine, idx) =>
                <ZineItem zine={zine} key={idx} />
              )}
            </ZinePortfolioCardDeck>
          </Subsection>
        </SubsectionWrapper>
      </Section>
    </Layout>
  )
}