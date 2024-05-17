import React, { useEffect, useState } from "react"

import BlogLoading from "../components/blog/blogLoading"
import { EmailApi } from "../scripts/api"
import Link from "../components/link"
import styled from "styled-components"
import { useParams } from "react-router-dom"

const Wrapper = styled.div`
  height: var(--doc-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 75px 20px;
`

const Loading = styled(BlogLoading)`
  height: var(--doc-height);
`

export default function UnsubscribePage() {
  const { emailHash } = useParams()
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    setSuccess(null)
    EmailApi.unsubscribe(emailHash)
      .then(result => {
        console.log(result)
        setSuccess(true)
      })
      .catch(err => {
        console.error(err)
        setSuccess(false)
      })
  }, [emailHash])

  if (success == null) {
    return <Loading />
  }

  return (
    <Wrapper>
      {success ? (
        <>
          <p>You've been unsubscribed.</p>
          <p>
            If this was a mistake,{" "}
            <Link to={`/confirmation/${emailHash}`} sameTab={true}>
              click here to re-subscribe
            </Link>
          </p>
        </>
      ) : (
        <>
          <h1>Oops!</h1>
          <p>
            Something went wrong and you couldn't be unsubscribed. Reach out to
            me to unsubscribe.
          </p>
        </>
      )}
    </Wrapper>
  )
}
