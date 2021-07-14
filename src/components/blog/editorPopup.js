import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { getApiUrl } from '../../scripts/util';
import { Modal as ModalDefault } from "react-bootstrap";
import Editor from './editor';
import { Button } from '../button';
import Delete from './delete';
import { colors } from '../../style/theme';

const EditButton = styled.i.attrs(_ => ({
  className: 'fas fa-pencil-alt'
}))`
  color: ${props => props.theme.accent};
  padding-right: 3px;
  cursor: pointer;
  font-size: 22px;
`;

const Modal = styled(ModalDefault)`
  @media (min-width: 576px) {
    .modal-dialog {
        max-width: 90vw;
    }
  }

  .modal-footer {
    padding: 0.5rem;
    justify-content: flex-start;
  }
`;

const DeleteButton = styled(Delete)`
  color: ${colors.white};
`;

export default function EditorPopup({ post }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (title, _, summary, content) => {
    const args = {
      id: post.id,
      title: title,
      summary: summary,
      content: content,
    }
    Axios.post(`${getApiUrl()}/api/update`, args);
    handleClose();
  }

  const handleResetLikes = () => {
    Axios.post(`${getApiUrl()}/api/likes/reset`, { id: post.id });
  }

  return (
    <>
      <EditButton onClick={handleShow} />
      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w" animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <div style={{ padding: '10px' }}>
          <Editor
            post={post}
            buttonText="Update post"
            buttonAction={(title, slug, summary, content) => handleSave(title, slug, summary, content)}
          />
        </div>
        <Modal.Footer>
          <Button onClick={handleClose}>
            <DeleteButton postID={post.id} />
          </Button>
          <Button onClick={handleResetLikes}>
            Reset likes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}