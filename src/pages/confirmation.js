import React, { useEffect, useState } from "react"

import BlogLoading from "../components/blog/blogLoading"
import { EmailApi } from "../scripts/api"
import styled from "styled-components"
import { useParams } from "react-router-dom"

const Wrapper = styled.div`
  text-align: center;
  transform: translate(-50%, -60%);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 0 20px;
  animation-delay: 200ms;
`

const Loading = styled(BlogLoading)`
  height: var(--doc-height);
`

export default function ConfirmationPage(props) {
  const { emailHash } = useParams()
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    setSuccess(null)
    EmailApi.subscribe(encodeURIComponent(emailHash))
      .then(_ => {
        setSuccess(true)
      })
      .catch(err => {
        if (err.response.status === 409) {
          setSuccess(true)
        } else {
          setSuccess(false)
        }
      })
  }, [emailHash])

  if (success == null) {
    return <Loading />
  }

  return (
    <Wrapper className="animate__animated animate__fadeIn">
      {success ? (
        <>
          <h1>🎉</h1>
          <h1>Thank you!</h1>
          <p>You're subscribed. Keep an eye out for email updates!</p>
        </>
      ) : (
        <>
          <h1>Oops!</h1>
          <p>Something went wrong and you weren't able to subscribe.</p>
        </>
      )}
    </Wrapper>
  )
}
