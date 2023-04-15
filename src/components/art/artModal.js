import styled from "styled-components"
import { hexToRGB } from "../../style/theme"
import { Modal } from "react-bootstrap"
import ModalWrapper from "../modalPopup"

const ArtModalWrapper = styled(ModalWrapper)`
  .modal-dialog {
    img {
      width: auto;
      height: 100%;
    }
  }

  @media only screen and (max-width: 576px) {
    .modal-dialog {
      img {
        width: 100%;
        border-radius: 0px 0px 5px 5px;
      }

      .h3,
      h3 {
        font-size: 28px;
      }
    }
  }
`

const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const ModalMetadata = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ModalImg = styled.div`
  @media only screen and (min-width: 576px) {
    height: 75vh;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px;
  }
`

const ModalDate = styled.p`
  color: ${props => hexToRGB(props.theme.text, 0.4)};
  margin-bottom: 0;
`

const ModalDescription = styled.p`
  color: ${props => props.theme.text};
  margin: 0;
  margin-right: 8px;
`

export default function ArtModal(props) {
  const { modalItem, isShowing, handleClose } = props
  return (
    modalItem != null && (
      <ArtModalWrapper show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <ModalInfo>
            <Modal.Title as="h3">{modalItem.title}</Modal.Title>
            <ModalMetadata>
              {modalItem.description && (
                <ModalDescription>{modalItem.description}</ModalDescription>
              )}
              <ModalDate>{modalItem.date}</ModalDate>
            </ModalMetadata>
          </ModalInfo>
        </Modal.Header>
        <ModalImg>
          <img src={modalItem.src} alt={modalItem.alt} />
        </ModalImg>
      </ArtModalWrapper>
    )
  )
}
