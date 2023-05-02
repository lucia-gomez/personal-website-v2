import React, { useState } from "react"

import Editor from "./editor"
import { IconButton } from "../iconButton"
import Modal from "react-bootstrap/Modal"
import ModalWrapper from "../modalPopup"
import styled from "styled-components"

const EditorModal = styled(ModalWrapper)`
  .modal-dialog {
    @media screen and (max-width: 576px) {
      top: 0;
      transform: unset;
    }
  }

  .modal-content {
    height: 100%;
  }
`

const EditButton = styled(IconButton)`
  padding-top: 16px;
`

export default function EditorPopup({ post }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <EditButton
        className={"fas fa-pencil-alt"}
        onClick={() => setShow(true)}
      />
      <EditorModal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        animation={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <div style={{ padding: "10px" }}>
          <Editor
            post={post}
            isNew={false}
            actions={{ closeEditor: () => setShow(false) }}
          />
        </div>
      </EditorModal>
    </>
  )
}
