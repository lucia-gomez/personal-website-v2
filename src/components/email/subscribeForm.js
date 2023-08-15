import { useEffect, useState } from "react"

import BlogLoading from "../blog/blogLoading"
import { Button } from "../button"
import { EmailApi } from "../../scripts/api"
import Form from "react-bootstrap/Form"
import Input from "../input"
import SectionTitle from "../sectionTitle"
import SubscribeFailed from "./subscribeFailed"
import SubscribeSuccess from "./subscribeSuccess"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  @media screen and (min-width: 840px) {
    width: 600px;
    h2 {
      padding-bottom: 40px;
    }
  }

  h2 {
    text-align: center;
  }

  .custom-checkbox input {
    accent-color: ${props => props.theme.accent};
    transform: scale(1.1);
  }
`

export default function SubscribeForm() {
  const [success, setSuccess] = useState(null)
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState()

  useEffect(() => {
    setValidated(false)
    setSuccess(null)
  }, [])

  const subscribeResult = () => {
    if (success === "LOADING") {
      return <BlogLoading />
    } else if (success === "SUCCESS") {
      return <SubscribeSuccess />
    } else if (success === "FAILED") {
      return <SubscribeFailed />
    }
  }

  const handleSubmit = event => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      setSuccess("LOADING")
      EmailApi.confirm(email)
        .then(result => {
          console.log(result)
          setSuccess("SUCCESS")
        })
        .catch(err => {
          console.error(err)
          setSuccess("FAILED")
        })
    }
    setValidated(true)
  }

  return (
    <Wrapper>
      {success == null ? (
        <>
          <SectionTitle>Sign up for my newsletter</SectionTitle>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                required
                label="I agree to receive emails, with the understanding that I may easily opt-out at any time after signing up."
                feedback="You must agree before submitting."
                className="custom-checkbox"
              />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button type="submit">Sign Up</Button>
            </div>
          </Form>
        </>
      ) : (
        subscribeResult()
      )}
    </Wrapper>
  )
}
