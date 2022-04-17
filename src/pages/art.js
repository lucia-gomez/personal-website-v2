import styled from 'styled-components'
import Layout from "../components/layout"
import Section from "../components/section"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/subsection"
import Link from '../components/link';
import ZineItem from "../components/zines/zineItem";
import { PortfolioCardDeck } from '../components/portfolioCardDeck'

const lactoseIntolerance = {
  title: "The Seven Deadly Sins of Lactose Intolerance",
  date: "April 2022",
  description: "I, a lactose intolerant, sacrified a Lactaid bottle's label for this zine",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/lactose_intolerance/${i + 1}.png`)
  )
};
const snakesCantSign = {
  title: "Snakes Can't Sign",
  date: "July 2019",
  description: "My first zine, made for Facebook's Open Arts zine fest. Printed on a Risograph",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/snakes_cant_sign/${i + 1}.png`)
  )
};
const pickle = {
  title: "Should You Tickle Your Pickle?",
  date: "March 2021",
  description: "Hey, I'm not your mom. Do what you want",
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/pickle/${i + 1}.png`)
  )
};
const birds_arent_real = {
  title: "Birds Aren't Real",
  date: "April 2020",
  description: "I got a collage book for Christmas and it didn't disappoint",
  height: 418,
  pages: Array.from(Array(4)).map((_, i) =>
    require(`../assets/zines/birds_arent_real/${i + 1}.png`)
  )
};
const shell = {
  title: "We're All Going to Shell",
  date: "February 2021",
  description: "Made with watercolor, inspired by puns",
  height: 418,
  pages: Array.from(Array(4)).map((_, i) =>
    require(`../assets/zines/shell/${i + 1}.png`)
  )
};
const wugs = {
  title: "This is a Wug",
  date: "April 2022",
  description: "\"This is a wug\" is a famous linguistics experiment. Now it's the beginning of a war",
  height: 520,
  pages: Array.from(Array(8)).map((_, i) =>
    require(`../assets/zines/wug/${i + 1}.png`)
  )
};

const zines = [wugs, lactoseIntolerance, pickle, shell, birds_arent_real, snakesCantSign];

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