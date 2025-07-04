import { ButtonLink } from "../button"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 10;

  button {
    margin-right: 8px;
  }

  animation-duration: 1s;
  --webkit-animation-duration: 1s;
  animation-delay: 2s;
  --webkit-animation-delay: 2s;
`

export default function ActionButtons() {
  return (
    <Wrapper className="animate__animated animate__fadeIn">
      <ButtonLink to="/about-me" sameTab={true}>
        About
      </ButtonLink>
      <ButtonLink to="/portfolio" sameTab={true}>
        Work
      </ButtonLink>
      <ButtonLink to="mailto:lucia.dev42@gmail.com" sameTab={true}>
        Contact
      </ButtonLink>
    </Wrapper>
  )
}
