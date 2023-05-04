import { useEffect, useState } from "react"

import Modal from "react-bootstrap/Modal"
import ModalWrapper from "../modalPopup"
import { Spinner } from "react-bootstrap"
import SubscribeFailed from "./subscribeFailed"
import SubscribeForm from "./subscribeForm"
import SubscribeSuccess from "./subscribeSuccess"

export default function SubscribeModal({ isShowing, handleClose }) {
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    setSuccess(null)
  }, [isShowing])

  const subscribeResult = () => {
    if (success === "LOADING") {
      return <Spinner />
    } else if (success === "SUCCESS") {
      return <SubscribeSuccess />
    } else if (success === "FAILED") {
      return <SubscribeFailed />
    }
  }

  return (
    <ModalWrapper show={isShowing} onHide={handleClose}>
      <Modal.Header closeButton />
      {success == null ? (
        <SubscribeForm {...{ setSuccess }} />
      ) : (
        subscribeResult()
      )}
    </ModalWrapper>
  )
}
