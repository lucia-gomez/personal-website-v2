import styled, { css } from "styled-components"

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;

  align-items: flex-start;

  h1,
  h4 {
    text-align: left;
  }
`

const bannerText = css`
  text-align: center;
  opacity: 0;
  margin: 0;

  animation-duration: 500ms;
  --webkit-animation-duration: 500ms;
  text-shadow: 0px 0px 20px ${props => props.theme.bg};
`

const Title = styled.h1`
  ${bannerText}
  line-height: 1em;
  font-size: 70px;
  margin-bottom: 12px;

  animation-delay: 500ms;
  --webkit-animation-delay: 500ms;
`

const JobTitle = styled.h4`
  ${bannerText}
  height: 10vh;

  animation-delay: 1s;
  --webkit-animation-delay: 1s;
`

export default function Name(props) {
  return (
    <Wrapper style={{ color: props.color }}>
      <Title className="animate__animated animate__fadeInDown">
        Lucia Gomez
      </Title>
      <JobTitle className="animate__animated animate__fadeInUp">
        Creative Technologist
      </JobTitle>
    </Wrapper>
  )
}
