import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Form, Row, Col } from "react-bootstrap"

import BlogContent from "./blogContent"
import { Editor as ReactDraft } from "@nick4fake/react-draft-wysiwyg"
import { EditorState, ContentState, convertToRaw } from "draft-js"
import draftToHtml from "draftjs-to-html"
import htmlToDraft from "html-to-draftjs"
import "@nick4fake/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`

const PreviewButton = styled.div`
  color: ${props => props.theme.accent};
  cursor: pointer;
  padding-top: 20px;
  width: fit-content;
`

export default function Editor(props) {
  const { post } = props

  const [title, setTitle] = useState(post?.title ?? "")
  const [summary, setSummary] = useState(post?.summary ?? "")
  const [slug, setSlug] = useState(post?.slug ?? "")
  const [date, setDate] = useState(post?.dateString ?? "")
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    setTitle(post?.title ?? "")
    setSummary(post?.summary ?? "")
    setSlug(post?.slug ?? "")
    setDate(post?.dateString ?? "")
    if (post !== undefined) {
      const blocksFromHtml = htmlToDraft(post.content)
      const { contentBlocks, entityMap } = blocksFromHtml
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      )
      const editorState = EditorState.createWithContent(contentState)
      setEditorState(editorState)
    } else {
      setEditorState(EditorState.createEmpty())
    }
  }, [post])

  const getHTMLString = () =>
    draftToHtml(convertToRaw(editorState.getCurrentContent()))

  const titleForm = (
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control onChange={e => setTitle(e.target.value)} value={title} />
    </Form.Group>
  )

  const slugForm = (
    <Form.Group>
      <Form.Label>Slug</Form.Label>
      <Form.Control onChange={e => setSlug(e.target.value)} value={slug} />
    </Form.Group>
  )

  const dateForm = (
    <Form.Group>
      <Form.Label>Date</Form.Label>
      <Form.Control onChange={e => setDate(e.target.value)} value={date} />
    </Form.Group>
  )

  const summaryForm = (
    <Form.Group>
      <Form.Label>Summary</Form.Label>
      <Form.Control
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
      {summaryForm}
    </Form>
  )

  const formMobile = (
    <Form className="d-md-none">
      {titleForm}
      {slugForm}
      {dateForm}
      {summaryForm}
    </Form>
  )

  const buttons = props.buttons(title, slug, date, summary, getHTMLString())

  return (
    <div>
      {formDesktop}
      {formMobile}
      <EditorWrapper>
        <ReactDraft
          editorState={editorState}
          onEditorStateChange={x => {
            setEditorState(x)
            if (props.editorCallback) props.editorCallback(getHTMLString())
          }}
        />
      </EditorWrapper>
      <PreviewButton onClick={() => setShowPreview(!showPreview)}>
        {showPreview ? "Hide preview" : "Show preview"}
      </PreviewButton>
      {showPreview ? <BlogContent content={getHTMLString()} /> : null}
      <ButtonRow>{buttons}</ButtonRow>
    </div>
  )
}

const EditorWrapper = styled.div`
  margin-bottom: 20px;

  .rdw-editor-toolbar {
    background-color: ${props => props.theme.accentLight};
    border: none;
    margin-bottom: 0px;
  }

  .rdw-editor-main {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    min-height: 200px;
    padding: 10px;
    border: 1px solid ${props => props.theme.textLight};
    border-radius: 0px 0px 5px 5px;
    border-top: none;

    pre {
      background-color: ${props => props.theme.medium};
      color: ${props => props.theme.text};
      margin: 10px;
      border-radius: 10px;
    }
  }

  .rdw-option-wrapper {
    border: none;
  }

  .rdw-option-active {
    background-color: ${props => props.theme.accent};
  }

  a {
    color: ${props => props.theme.accentHover};
  }

  .rdw-dropdown-optionwrapper {
    border: 1px solid ${props => props.theme.textLight};
    overflow-y: auto;

    :hover {
      box-shadow: none;
    }
  }

  .rdw-dropdownoption-default {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};

    :hover {
      background-color: ${props => props.theme.accentHover};
      color: ${props => props.theme.textInv};
    }
  }

  .rdw-dropdownoption-active {
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.textInv};
  }
`
