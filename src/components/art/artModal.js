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

      .h4, h4 {
        font-size: 22px;
      }
    }
  }
`;

const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalMetadata = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

const ModalDate = styled.h4`
  color: ${props => props.theme.textLight};
  margin-bottom: 0;
  margin-left: 4px;
`;

const ModalDescription = styled.p`
  color: ${props => props.theme.text};
  margin: 0;
`;

export default function ArtModal(props) {
  const {modalItem, isShowing, handleClose} = props;
  return modalItem != null && 
    <ArtModalWrapper show={isShowing} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <ModalInfo>
          <ModalMetadata>
            <Modal.Title>{modalItem.title}</Modal.Title>
            <ModalDate>{`| ${modalItem.date}`}</ModalDate>
          </ModalMetadata>
          {modalItem.description && <ModalDescription>{modalItem.description}</ModalDescription>}
        </ModalInfo>
      </Modal.Header>
      <ModalImg>
        <img src={modalItem.src} alt={modalItem.alt} />
      </ModalImg>
  </ArtModalWrapper>
}