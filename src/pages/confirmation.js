import styled from "styled-components"

const Wrapper = styled.div`
  text-align: center;
  transform: translate(-50%, -60%);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 0 20px;
  animation-delay: 1s;
`

export default function ConfirmationPage(props) {
  return (
    <Wrapper className="animate__animated animate__fadeIn">
      <h1>🎉</h1>
      <h1>Thank you!</h1>
      <p>You're subscribed. Keep an eye out for email updates!</p>
    </Wrapper>
  )
}
