import SectionTitle from "../../components/sectionTitle"
import { featuredProjects } from "../../scripts/projectList"
import styled from "styled-components"
import { useMemo } from "react"

const Wrapper = styled.div`
  padding: 56px 20px 50px 20px;

  h1,
  h2 {
    margin: 0;
  }

  p {
    max-width: 40%;
    @media screen and (max-width: 576px) {
      max-width: 100%;
    }
  }

  ul,
  ol {
    padding-left: 12px;
  }

  ul {
    margin-left: 8px;
  }
`

const VideoContainer = styled.div`
  position: relative;
  width: 50%;
  padding-bottom: 27.5%; /* 16:9 aspect ratio (height/width) */
  overflow: hidden;
  margin-top: 20px;

  @media screen and (max-width: 576px) {
    width: 100%;
    padding-bottom: 56.25%;
  }
`

const Video = styled.iframe`
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 4px;
`

const Image = styled.img`
  max-width: calc(50% - 8px);
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 5px;

  @media screen and (max-width: 576px) {
    max-width: unset;
    width: 100%;
    margin-right: 0;
  }
`

const Metadata = styled.p`
  color: ${props => props.theme.medium};
  margin: 0px;
`

const Header = styled.h3`
  margin-top: 10svh;
  width: fit-content;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
  }
`

const DoubleTextRow = styled(Row)`
  p {
    max-width: 70%;
  }

  @media screen and (max-width: 576px) {
    p {
      max-width: 100%;
    }
  }
`

export default function DJello() {
  const project = useMemo(() => featuredProjects(["DJELLO"])[0], [])

  return (
    <Wrapper>
      <div style={{ marginBottom: "5svh" }}>
        <SectionTitle>DJELLO</SectionTitle>
        <Metadata>{project.date}</Metadata>
        <Metadata>Made with: {project.tools.sort().join(", ")}</Metadata>
      </div>

      <Row>
        {project.text}
        <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/djello/hero.png" />
      </Row>

      <Header>Video Demo</Header>
      <Row>
        <VideoContainer>
          <Video
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tmLHYcFZ1_c?si=w-eIPG5D0TJ67NPu"
            allowfullscreen
            frameborder="0"
          ></Video>
        </VideoContainer>
        <VideoContainer>
          <Video
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wyp0w6lWb1Y?si=X2RDf8KK6XLyUfqD"
            allowfullscreen
            frameborder="0"
          ></Video>
        </VideoContainer>
      </Row>

      <Header>Concept</Header>
      <Row>
        <p>
          While brainstorming for a previous project, I learned that jello is
          conductive due to its water content. I became determined to design a
          jello user interface for my Introduction to Physical Computing final
          project. Keeping in theme with the squishiness of jello, I wanted to
          generate sounds that matched its texture.
          <br />
          <br />
          This is a 3D render of my initial concept, modeled with Womp 3D. This
          helped communicate my idea to my classmates and helped me to envision
          the layout and aesthetic.
        </p>
        <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/djello/concept.jpeg" />
      </Row>

      <Header>Research</Header>
      <Row>
        <p>
          By research I mean me, in my kitchen, experimenting with jello recipes
          through trial and error. Having a solid enough texture to pick up and
          manipulate is critical. I gathered advice online from 50s housewives,
          mommy bloggers, and ballistic experts.
          <br />
          <br />
          The keys were "blooming" the gelatin while mixing + soaking molds in
          hot water to release the solidified shape.
        </p>
        <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/djello/jelloTrials.png" />
      </Row>

      <Header>Recipe</Header>
      <Row>
        <ol>
          <li>Buy Knox unflavored gelatin</li>
          <li>Boil ~1/4 cup water per gelatin packet</li>
          <li>Pour 1/4 cup cold water per gelatin packet into bowl</li>
          <li>“Bloom” it- sprinkle dry gelatin powder over cold water</li>
          <li>Scrape bloomed gelatin into hot water</li>
          <li>Stir well</li>
          <li>Pour into molds</li>
          <li>Leave overnight</li>
          <li>Soak molds in hot water to remove jello</li>
        </ol>
        <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/djello/gelatin.jpeg" />
      </Row>

      <Header>Prototypes</Header>
      <p>
        I used Adobe Illustrator to design a layered structure for the acrylic
        base. Each layer has different cutouts to hold jello, sensors, and
        wires. All of the wires exit through a hole in the bottom layer, to plug
        into an Arduino attached via velcro to the base's underside.
        <br />
        <br />I laser-cut my first prototype out of cardboard to visualize the
        sensor layout. The next was laser-cut 1/4" clear acrylic.
      </p>
      <Row>
        <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/djello/cardboard.jpeg" />
        <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/djello/prototype.jpeg" />
      </Row>

      <Header>Software</Header>
      <Row>
        <p>
          The software was the easy part for me. I wrote an Arduino script to
          read input from the various sensors, and made those sensors trigger
          MIDI commands, such as "play a middle-C note on channel 5". I set up
          Ableton Live, music-making software, to read these MIDI commands and
          turn them into squishy sounds.
          <br />
          <br />I asked some of my classmates with more musical backgrounds for
          advice on what my controls should do. Most controls play a single
          note, but some more "advanced" ones play ranges of notes or apply
          filters.
        </p>
        <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/djello/ableton.png" />
      </Row>

      <Header>Finished Product</Header>
      <Row>
        <p>
          After learning from my prototypes, I assembled the final version. Some
          changes from the earlier versions:
          <ul>
            <li>White acrylic instead of clear, to hide the internal wiring</li>
            <li>
              Conductive copper tape instead of normal wires, to fit flat
              between acrylic layers
            </li>
            <li>Updated design for the bendy flex sensor control</li>
            <li>Tighter fitting legs for the base</li>
          </ul>
        </p>
        <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/djello/final.jpeg" />
      </Row>

      <DoubleTextRow>
        <div>
          <Header>Skills Learned</Header>
          <p>
            <ul>
              <li>
                This was my first time using a laser cutter. Aside from learning
                how to design cut templates with Adobe Illustrator, I learned
                how to use some advanced controls like manually adjusting the
                height of the bed.
              </li>
              <li>What MIDI is and how it works</li>
              <li>Ableton Live basics, basic music-making skills</li>
              <li>Iterating on user interface design</li>
            </ul>
          </p>
        </div>

        <div>
          <Header>Challenges</Header>
          <p>
            <ul>
              <li>
                Arranging the wires inside of the acrylic layers. Normal wires
                are thick enough that they can't sit flat between two hard
                layers of acrylic, creating a gap
              </li>
              <li>
                Fabricating the base legs. I had to individually laser cut faces
                on a hollow rectangular tube
              </li>
              <li>Finding specific MIDI command codes for Ableton</li>
              <li>Designing an intuitive control using a flex sensor</li>
            </ul>
          </p>
        </div>
      </DoubleTextRow>
    </Wrapper>
  )
}
