import styled, { css } from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;

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

  animation-duration: 1s;
  --webkit-animation-duration: 1s;
  text-shadow: 0px 0px 20px ${props => props.theme.bg};
`

const Title = styled.h1`
  ${bannerText}
  line-height: 1em;
  font-size: 70px;
  margin-bottom: 12px;

  animation-delay: 1s;
  --webkit-animation-delay: 1s;
`

const JobTitle = styled.h4`
  ${bannerText}
  height: 6vh;

  animation-delay: 1s;
  --webkit-animation-delay: 1s;
`

export default function Name() {
  return (
    <Wrapper>
      <Title className="animate__animated animate__fadeInDown">
        Test Branch
      </Title>
      <JobTitle className="animate__animated animate__fadeInUp">
        Creative Technologist
      </JobTitle>
    </Wrapper>
  )
}
