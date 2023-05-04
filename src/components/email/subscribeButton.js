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
          // setShowModal(true)
          window.parent.postMessage(
            {
              eventId: "openWidgetModal",
              widgetId: "0r72l",
            },
            "*"
          )
        }}
      >
        Subscribe
      </Button>
      <SubscribeModal
        isShowing={showModal}
        handleClose={() => setShowModal(false)}
      />
      <iframe
        title="subscribe form"
        data-w-token="b3083eb98d1d46f50cb4"
        data-w-type="pop-in"
        frameBorder="0"
        scrolling="yes"
        marginHeight="0"
        marginWidth="0"
        src="https://0r72l.mjt.lu/wgt/0r72l/zgu/form?c=eb57628d"
        width="100%"
        style={{ height: 0 }}
      ></iframe>
      {/* <iframe
        title="subscribe trigger"
        data-w-token="b3083eb98d1d46f50cb4"
        data-w-type="trigger"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://0r72l.mjt.lu/wgt/0r72l/zgu/trigger?c=f3416f1d"
        width="100%"
        style={{ height: 0 }}
      ></iframe> */}
    </>
  )
}
