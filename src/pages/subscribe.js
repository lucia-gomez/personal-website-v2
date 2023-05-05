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

// const MailjetForm = styled.iframe`
//   width: 100%;

//   @media screen and (min-width: 840px) {
//     width: 600px;
//   }
// `

function setIFrameStyles() {
  const iframe = document.getElementById("successMessageDiv"[0])
  console.log(iframe)
}

export default function SubscribePage(props) {
  setIFrameStyles()
  return (
    <Wrapper>
      <SubscribeForm />
      {/* <SectionTitle>Sign up for my newsletter</SectionTitle>
      <MailjetForm
        title="subscribe form"
        data-w-type="embedded"
        frameBorder="0"
        scrolling="no"
        src="https://0r72l.mjt.lu/wgt/0r72l/z96/form?c=ae6857a7"
        width="100%"
        style={{ minHeight: 250 }}
      ></MailjetForm>
      <script
        type="text/javascript"
        src="https://app.mailjet.com/pas-nc-embedded-v1.js"
      ></script> */}
    </Wrapper>
  )
}
