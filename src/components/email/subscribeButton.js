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
<<<<<<< HEAD
          // setShowModal(true)
          window.parent.postMessage(
            {
              eventId: "openWidgetModal",
              widgetId: "0r72l",
            },
            "*"
          )
=======
          setShowModal(true)
>>>>>>> a6bf2f0927c5c51e43f09af9c3834be5f4b862f9
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
