import React, { useCallback, useEffect, useState } from "react"

import { Button } from "../components/button"
import { EmailApi } from "../scripts/api"
import Form from "react-bootstrap/Form"
import Input from "../components/input"
import MdEditor from "react-markdown-editor-lite"
import SubscribeButton from "../components/email/subscribeButton"
import SubscriberList from "../components/email/subscriberList"
import Toast from "../components/toast"
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

export default function AdminEmail() {
  const [testSubscribers, setTestSubscribers] = useState(null)
  const [subscribers, setSubscribers] = useState(null)
  const [editorContent, setEditorContent] = useState()
  const [subject, setSubject] = useState("")
  const [showToast, setShowToast] = useState(false)
  const [toastMsg, setToastMsg] = useState("Sent test email")

  const disableSend = () =>
    subject == null ||
    subject.trim().length === 0 ||
    editorContent == null ||
    editorContent.trim().length === 0

  const fetchSubscribers = useCallback(
    (tableName, setter) =>
      EmailApi.getSubscribers(tableName).then(result => {
        setter(result.data.reverse())
      }),
    []
  )

  useEffect(() => {
    fetchSubscribers("subscribersTest", setTestSubscribers)
    fetchSubscribers("subscribers", setSubscribers)
  }, [fetchSubscribers])

  const sendTest = () =>
    EmailApi.sendTest(subject, marked.parse(editorContent)).then(_ => {
      setToastMsg("Sent test email")
      setShowToast(true)
    })

  const sendReal = () => {
    const result = window.confirm(
      "Are you sure you went to send this email to everyone?"
    )
    if (result) {
      EmailApi.send(subject, marked.parse(editorContent)).then(_ => {
        setToastMsg("Sent email to contact list")
        setShowToast(true)
        setSubject("")
        setEditorContent("")
      })
    }
  }

  return (
    <AdminWrapper>
      <Buttons>
        <SubscribeButton />
        <Button onClick={sendTest} disabled={disableSend()}>
          Send Test
        </Button>
        <Button onClick={sendReal} disabled={disableSend()}>
          Send Email
        </Button>
      </Buttons>

      <Form.Group>
        <Form.Label>Subject</Form.Label>
        <Input onChange={e => setSubject(e.target.value)} value={subject} />
      </Form.Group>
      <EditorWrapper>
        <MdEditor
          value={editorContent}
          renderHTML={text => marked.parse(text)}
          onChange={({ _, text }) => setEditorContent(text)}
        />
      </EditorWrapper>

      <SubscriberList
        label={"Subscribers: " + subscribers?.length}
        data={subscribers}
        refresh={() => fetchSubscribers("subscribers", setSubscribers)}
      />
      <SubscriberList
        label={"SubscribersTest: " + testSubscribers?.length}
        data={testSubscribers}
        refresh={() => fetchSubscribers("subscribersTest", setTestSubscribers)}
      />

      <Toast show={showToast} onClose={() => setShowToast(false)}>
        {toastMsg}
      </Toast>
    </AdminWrapper>
  )
}
