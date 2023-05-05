import Modal from "react-bootstrap/Modal"
import ModalWrapper from "../modalPopup"
import SubscribeForm from "./subscribeForm"

export default function SubscribeModal({ isShowing, handleClose }) {
  return (
    <ModalWrapper show={isShowing} onHide={handleClose}>
      <Modal.Header closeButton />
      <SubscribeForm />
    </ModalWrapper>
  )
}
