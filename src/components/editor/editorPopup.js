import React, { useState } from "react"

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

export default function EditorPopup({ post }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <EditButton onClick={() => setShow(true)} />
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
