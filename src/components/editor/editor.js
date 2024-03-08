import "react-markdown-editor-lite/lib/index.css"

import React, { useEffect, useRef, useState } from "react"

import { DraftApi } from "../../scripts/api"
import EditorForm from "./editorForm"
import MdEditor from "react-markdown-editor-lite"
import { marked } from "marked"
import styled from "styled-components"

const lodash = require("lodash")

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
    max-height: 90vh;
  }

  a {
    color: ${props => props.theme.accent};
  }
`

export default function Editor(props) {
  const { actions, isNew, post } = props
  const [editorContent, setEditorContent] = useState()
  const actionsEditor = {
    ...actions,
    handleCloseDraft: () => setEditorContent(""),
  }
  const autoSaveDebounced = useRef(
    lodash.throttle((payload, newContent) => {
      if (payload == null) {
        const btn = document.getElementById("editor-create-draft")
        if (btn != null && !btn.disabled) {
          btn.click()
        }
      } else {
        DraftApi.updateDraft({ ...payload, content: newContent }).then(_ =>
          DraftApi.getDrafts().then(res =>
            actions.setDrafts(res.data.reverse())
          )
        )
      }
    }, 10000)
  ).current

  useEffect(() => {
    return () => (autoSaveDebounced.current = null)
  }, [autoSaveDebounced])

  useEffect(() => {
    if (post !== undefined) {
      setEditorContent(post.content)
    }
  }, [post])

  const onEditorChange = ({ _, text }) => {
    setEditorContent(text)
    isNew && autoSaveDebounced(post, text)
  }

  return (
    <Grid className={props.className}>
      <EditorForm content={editorContent} {...props} actions={actionsEditor} />
      <EditorWrapper>
        <MdEditor
          value={editorContent}
          renderHTML={text => marked.parse(text)}
          onChange={onEditorChange}
          id="editor"
        />
      </EditorWrapper>
    </Grid>
  )
}
