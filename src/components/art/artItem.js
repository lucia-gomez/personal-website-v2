import { hexToRGB } from "../../style/theme"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  img {
    max-width: 300px;
    max-height: 300px;
    object-fit: fill;
    object-position: left bottom;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  @media only screen and (max-width: 576px) {
    max-width: 75vw;
  }
`

const ArtTitle = styled.p`
  margin: 0;
  color: ${props => props.theme.text};
`

const ArtDate = styled.p`
  color: ${props => hexToRGB(props.theme.text, 0.2)};
  margin: 0;
`

export default function ArtItem(props) {
  const { title, date, src, alt } = props
  return (
    <Wrapper className={props.className}>
      <img {...{ src, alt }} />
      <ArtTitle>{title}</ArtTitle>
      <ArtDate>{date}</ArtDate>
    </Wrapper>
  )
}
