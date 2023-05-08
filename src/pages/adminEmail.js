import React, { useCallback, useEffect, useState } from "react"

import { Button } from "../components/button"
import { EmailApi } from "../scripts/api"
import Form from "react-bootstrap/Form"
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
  flex-direction: row;
  button {
    margin-right: 12px;
  }
  margin-bottom: 12px;
`

const EditorWrapper = styled.div`
  max-height: 80vh;

  .rc-md-editor.full {
    margin-top: 60px;
  }

  .rc-md-editor {
    height: 50vh;
  }
`

export default function AdminEmail(props) {
  const [editorContent, setEditorContent] = useState()
  const [numSubscribers, setNumSubscribers] = useState("--")
  const [subject, setSubject] = useState()
  const [draftId, setDraftId] = useState()

  const fetchNumSubscribers = useCallback(
    () =>
      EmailApi.getNumSubscribers().then(result => {
        setNumSubscribers(result.data)
      }),
    [setNumSubscribers]
  )

  useEffect(() => {
    fetchNumSubscribers()
  }, [fetchNumSubscribers])

  return (
    <AdminWrapper>
      <p
        onClick={fetchNumSubscribers}
        style={{ cursor: "pointer", width: "fit-content" }}
      >
        Subscribers: {numSubscribers}
      </p>
      <Buttons>
        <SubscribeButton />
        <Button onClick={() => EmailApi.sendTest().then(console.log)}>
          Send Test Email
        </Button>
        <Button
          onClick={() =>
            EmailApi.sendTestCampaign(
              subject,
              marked.parse(editorContent)
            ).then(result => setDraftId(result.data.Data[0].ID))
          }
          disabled={subject == null || subject.trim().length === 0}
        >
          Send Test Campaign
        </Button>
        <Button
          onClick={() =>
            EmailApi.sendCampaign(subject, marked.parse(editorContent)).then(
              console.log
            )
          }
          disabled={draftId == null}
        >
          Send Campaign
        </Button>
      </Buttons>

      <Form.Group>
        <Form.Label>Subject</Form.Label>
        <Form.Control
          onChange={e => setSubject(e.target.value)}
          value={subject}
        />
      </Form.Group>
      <EditorWrapper>
        <MdEditor
          value={editorContent}
          renderHTML={text => marked.parse(text)}
          onChange={({ _, text }) => setEditorContent(text)}
        />
      </EditorWrapper>
    </AdminWrapper>
  )
}
