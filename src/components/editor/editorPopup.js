import React, { useState } from "react"

import { Button } from "../button"
import Editor from "./editor"
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

const EditButton = styled(Button)`
  padding-top: 8px;
`

export default function EditorPopup({ post }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <EditButton onClick={() => setShow(true)}>
        <ion-icon name="pencil" style={{ fontSize: 24 }}></ion-icon>
      </EditButton>
      <EditorModal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        animation={false}
        data-test-id="blog-post-edit-modal"
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
