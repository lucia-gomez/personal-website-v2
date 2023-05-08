import SubscribeForm from "../components/email/subscribeForm"
import styled from "styled-components"

const Wrapper = styled.div`
  height: var(--doc-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`

export default function SubscribePage(props) {
  return (
    <Wrapper className="animate__animated animate__fadeIn">
      <SubscribeForm />
    </Wrapper>
  )
}
