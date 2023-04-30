import "react-markdown-editor-lite/lib/index.css"

import React, { useEffect, useState } from "react"

import EditorForm from "./editorForm"
import MdEditor from "react-markdown-editor-lite"
import { marked } from "marked"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  height: calc(90vh - 40px);
`

const EditorWrapper = styled.div`
  .rc-md-editor {
    border: none;
    margin-bottom: 12px;
    height: 100%;
  }

  .rc-md-editor.full {
    max-height: none;
  }

  a {
    color: ${props => props.theme.accent};
  }
`

export default function Editor(props) {
  const { post } = props

  const [editorContent, setEditorContent] = useState()
  useEffect(() => {
    if (post !== undefined) {
      setEditorContent(post.content)
    }
  }, [post])

  return (
    <Grid className={props.className}>
      <EditorForm content={editorContent} {...props} />
      <EditorWrapper>
        <MdEditor
          value={editorContent}
          renderHTML={text => marked.parse(text)}
          onChange={({ _, text }) => setEditorContent(text)}
        />
      </EditorWrapper>
    </Grid>
  )
}
