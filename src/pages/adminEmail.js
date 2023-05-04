import React, { useCallback, useEffect, useState } from "react"

import { Button } from "../components/button"
import { EmailApi } from "../scripts/api"
import MdEditor from "react-markdown-editor-lite"
import SubscribeButton from "../components/email/subscribeButton"
import { marked } from "marked"
import styled from "styled-components"

const AdminWrapper = styled.div`
  padding: 75px 20px 50px 20px;
  text-align: left;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 12px;
  }
`

export default function AdminEmail(props) {
  const [editorContent, setEditorContent] = useState()
  const [numSubscribers, setNumSubscribers] = useState("--")

  const fetchNumSubscribers = useCallback(
    () =>
      EmailApi.getNumSubscribers().then(result => {
        setNumSubscribers(result.data.Data[0].SubscriberCount)
      }),
    [setNumSubscribers]
  )

  useEffect(() => {
    fetchNumSubscribers()
  }, [fetchNumSubscribers])

  return (
    <AdminWrapper>
      <Buttons>
        <Button onClick={() => EmailApi.sendTest().then(console.log)}>
          Send Test Email
        </Button>
        <SubscribeButton />
      </Buttons>
      <p
        onClick={fetchNumSubscribers}
        style={{ cursor: "pointer", width: "fit-content" }}
      >
        Subscribers: {numSubscribers}
      </p>
      <MdEditor
        value={editorContent}
        renderHTML={text => marked.parse(text)}
        onChange={({ _, text }) => setEditorContent(text)}
      />
    </AdminWrapper>
  )
}
