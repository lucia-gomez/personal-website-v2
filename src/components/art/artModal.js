import BlogNavButtons from "../blog/blogNavButtons"
import Modal from "react-bootstrap/Modal"
import ModalWrapper from "../modalPopup"
import React from "react"
import { hexToRGB } from "../../style/theme"
import styled from "styled-components"

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
  flex-wrap: wrap;
  align-items: center;
`

const ModalImg = styled.div`
  @media only screen and (min-width: 576px) {
    height: 75vh;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 8px;
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
  const { modalItem, isShowing, handleClose, nextSlug, prevSlug } = props
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
        <BlogNavButtons {...{ nextSlug, prevSlug }} />
      </ArtModalWrapper>
    )
  )
}
