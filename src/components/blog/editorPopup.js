import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { getApiUrl } from '../../scripts/util';
import { Modal } from "react-bootstrap";
import ModalWrapper from '../modalPopup';
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

const DeleteButton = styled(Delete)`
  color: ${colors.white};
`;

export default function EditorPopup({ post }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (title, _, date, summary, content) => {
    const args = {
      id: post.id,
      title: title,
      dateString: date,
      summary: summary,
      content: content,
    }
    Axios.post(`${getApiUrl()}/api/update`, args);
    handleClose();
  }

  const handleResetLikes = () => {
    Axios.post(`${getApiUrl()}/api/likes/reset`, { id: post.id });
  }

  const buttons = (title, slug, date, summary, content) => {
    const isValid = x => x !== undefined && x.length > 0;
    const disabled = !(isValid(title) && isValid(summary) && isValid(slug));

    return (<>
      <Button onClick={() => handleSave(title, slug, date, summary, content)} disabled={disabled}>
        Update post
      </Button>
      <Button onClick={handleResetLikes}>
        Reset likes
      </Button>
      <Button onClick={handleClose}>
        <DeleteButton postID={post.id} />
      </Button>
    </>);
  }

  return (
    <>
      <EditButton onClick={handleShow} />
      <ModalWrapper show={show} onHide={handleClose} dialogClassName="modal-90w" animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>
        <div style={{ padding: '10px' }}>
          <Editor post={post} buttons={buttons} />
        </div>
      </ModalWrapper>
    </>
  );
}