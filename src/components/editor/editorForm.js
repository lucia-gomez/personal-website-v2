import React, { useEffect, useState } from "react"
import { animated, useSpring } from "@react-spring/web"

import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Input from "../input"
import Row from "react-bootstrap/Row"
import { Toggle } from "../layout/subsection"
import getButtons from "./editorActions"
import styled from "styled-components"
import useMeasure from "react-use-measure"

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0px;

  button {
    margin-right: 12px;
  }
`

const FormToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-shadow: 0 0 5px ${props => props.theme.bg};

  p {
    color: ${props => props.theme.accent};
    margin: 0;
    width: 85px;
  }

  i {
    color: ${props => props.theme.accent};
  }
`

const Collapsible = styled(animated.div)`
  overflow: hidden;
`

export default function EditorForm(props) {
  const { actions, content, isDraft, isNew, post } = props
  const [isExpanded, setExpanded] = useState(isNew)
  const [ref, bounds] = useMeasure()
  const contentAnimatedStyle = useSpring({
    height: isExpanded ? bounds.height : 0,
  })

  const [title, setTitle] = useState(post?.title ?? "")
  const [summary, setSummary] = useState(post?.summary ?? "")
  const [slug, setSlug] = useState(post?.slug ?? "")
  const [date, setDate] = useState(post?.dateString ?? "")
  const [imageUrl, setImageUrl] = useState(post?.imageUrl ?? "")

  useEffect(() => {
    setTitle(post?.title ?? "")
    setSummary(post?.summary ?? "")
    setSlug(post?.slug ?? "")
    setDate(post?.dateString ?? "")
    setImageUrl(post?.imageUrl ?? "")
  }, [post])

  const titleForm = (
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Input onChange={e => setTitle(e.target.value)} value={title} />
    </Form.Group>
  )

  const slugForm = (
    <Form.Group>
      <Form.Label>Slug</Form.Label>
      <Input onChange={e => setSlug(e.target.value)} value={slug} />
    </Form.Group>
  )

  const dateForm = (
    <Form.Group>
      <Form.Label>Date</Form.Label>
      <Input onChange={e => setDate(e.target.value)} value={date} />
    </Form.Group>
  )

  const imageUrlForm = (
    <Form.Group>
      <Form.Label>Image</Form.Label>
      <Input onChange={e => setImageUrl(e.target.value)} value={imageUrl} />
    </Form.Group>
  )

  const summaryForm = (
    <Form.Group>
      <Form.Label>Summary</Form.Label>
      <Input
        onChange={e => setSummary(e.target.value)}
        value={summary}
        as="textarea"
      />
    </Form.Group>
  )

  const formDesktop = (
    <Form className="d-none d-md-block">
      <Row>
        <Col>{titleForm}</Col>
        <Col>{slugForm}</Col>
        <Col>{dateForm}</Col>
      </Row>
      {imageUrlForm}
      {summaryForm}
    </Form>
  )

  const formMobile = (
    <Form className="d-md-none">
      {titleForm}
      {slugForm}
      {dateForm}
      {imageUrlForm}
      {summaryForm}
    </Form>
  )

  const payload = {
    title: title,
    slug: slug,
    date: date,
    imageUrl: imageUrl,
    summary: summary,
    content: content,
    id: post?.id,
  }

  return (
    <div>
      <FormToggle onClick={() => setExpanded(!isExpanded)} {...{ isExpanded }}>
        <p>{isExpanded ? "Hide Form" : "Show Form"}</p>
        <Toggle isOpen={isExpanded} />
      </FormToggle>
      <Collapsible style={contentAnimatedStyle}>
        <div ref={ref}>
          {formDesktop}
          {formMobile}
        </div>
      </Collapsible>
      <ButtonRow>{getButtons(payload, isDraft, isNew, actions)}</ButtonRow>
    </div>
  )
}
