import styled from 'styled-components'
import { Modal } from "react-bootstrap";
import ModalWrapper from '../modalPopup';

const ArtModalWrapper = styled(ModalWrapper)`
  .modal-dialog { 
    max-width: 90vw;
    position: relative;

    img {
      width: auto;
      height: 100%;
    }
  }
  
  @media only screen and (max-width: 576px) {
    .modal-dialog {
      max-width: unset;

      img {
        width: 100%;
      }
    }
  }
`;

const ModalImg = styled.div`
  @media only screen and (min-width: 576px) {
    height: 75vh;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px;
  }
`;

export default function ArtModal(props) {
  const {modalItem, isShowing, handleClose} = props;
  return modalItem != null && 
    <ArtModalWrapper show={isShowing} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{modalItem.title} | {modalItem.date}</Modal.Title>
      </Modal.Header>
      <ModalImg>
        <img src={modalItem.src} alt={modalItem.alt} />
      </ModalImg>
  </ArtModalWrapper>
}