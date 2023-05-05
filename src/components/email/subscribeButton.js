import { Button } from "../button"
import SubscribeModal from "./subscribeModal"
import { useState } from "react"

export default function SubscribeButton(props) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Button
        className="pas-button"
        onClick={() => {
          setShowModal(true)
        }}
      >
        Subscribe
      </Button>
      <SubscribeModal
        isShowing={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  )
}
