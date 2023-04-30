import "react-markdown-editor-lite/lib/index.css"

import React, { useEffect, useState } from "react"

import EditorForm from "./editorForm"
import MdEditor from "react-markdown-editor-lite"
import { marked } from "marked"

export default function Editor(props) {
  const { post } = props

  const [editorContent, setEditorContent] = useState()
  useEffect(() => {
    if (post !== undefined) {
      setEditorContent(post.content)
    }
  }, [post])

  return (
    <>
      <EditorForm content={editorContent} {...props} />
      <MdEditor
        value={editorContent}
        renderHTML={text => marked.parse(text)}
        onChange={({ _, text }) => setEditorContent(text)}
      />
    </>
  )
}
