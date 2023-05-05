import { useEffect, useState } from "react"

import { Button } from "../button"
import { EmailApi } from "../../scripts/api"
import Form from "react-bootstrap/Form"
import SectionTitle from "../sectionTitle"
import { Spinner } from "react-bootstrap"
import SubscribeFailed from "./subscribeFailed"
import SubscribeSuccess from "./subscribeSuccess"
import { hexToRGB } from "../../style/theme"
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

  input {
    background-color: ${props => hexToRGB(props.theme.medium, 0.4)};
    color: ${props => props.theme.text};
    border-radius: 8px;
    border: 2px solid
      ${props =>
        props.isActive ? props.theme.accentHover : props.theme.accent};
    padding: 5px 10px 5px 10px;

    :focus-visible {
      outline: none;
      border: 2px solid ${props => props.theme.accentHover};
      box-shadow: none;
      background-color: ${props => hexToRGB(props.theme.medium, 0.4)};
      color: ${props => props.theme.text};
    }
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
      return <Spinner />
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
      EmailApi.subscribe(email)
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
              <Form.Control
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
                feedbackType="invalid"
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
