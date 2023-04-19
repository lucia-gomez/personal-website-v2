import React, { useState } from "react"

import Axios from "axios"
import { Button } from "../button"
import Delete from "./delete"
import Editor from "./editor"
import { Modal } from "react-bootstrap"
import ModalWrapper from "../modalPopup"
import { colors } from "../../style/theme"
import { getApiUrl } from "../../scripts/util"
import styled from "styled-components"

const EditorModal = styled(ModalWrapper)`
  .modal-dialog {
    @media screen and (max-width: 576px) {
      top: 0;
      transform: unset;
    }
  }
`

const EditButton = styled.i.attrs(_ => ({
  className: "fas fa-pencil-alt",
}))`
  color: ${props => props.theme.accent};
  padding-top: 16px;
  cursor: pointer;
  font-size: 22px;
  text-shadow: 0 0 5px ${props => props.theme.bg};
  transition: color 150ms;

  :hover {
    color: ${props => props.theme.accentHover};
  }
`

const DeleteButton = styled(Delete)`
  color: ${colors.white};
`

export default function EditorPopup({ post }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSave = (title, _, date, imageUrl, summary, content) => {
    const args = {
      id: post.id,
      title: title,
      dateString: date,
      imageUrl: imageUrl,
      summary: summary,
      content: content,
    }
    Axios.post(`${getApiUrl()}/api/update`, args)
    handleClose()
  }

  const handleResetLikes = () => {
    Axios.post(`${getApiUrl()}/api/likes/reset`, { id: post.id })
  }

  const buttons = (title, slug, date, imageUrl, summary, content) => {
    const isValid = x => x !== undefined && x.length > 0
    const disabled = !(isValid(title) && isValid(summary) && isValid(slug))

    return (
      <>
        <Button
          onClick={() =>
            handleSave(title, slug, date, imageUrl, summary, content)
          }
          disabled={disabled}
        >
          Update post
        </Button>
        <Button onClick={handleResetLikes}>Reset likes</Button>
        <Button onClick={handleClose}>
          <DeleteButton postID={post.id} />
        </Button>
      </>
    )
  }

  return (
    <>
      <EditButton onClick={handleShow} />
      <EditorModal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        animation={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <div style={{ padding: "10px" }}>
          <Editor post={post} buttons={buttons} />
        </div>
      </EditorModal>
    </>
  )
}
