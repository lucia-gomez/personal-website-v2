import React from "react"
import { RoundButton } from "../button"

export default function SubscribeButtonPinned() {
  return (
    <RoundButton
      to="/subscribe"
      sameTab={true}
      className="animate__animated animate__bounceIn"
    >
      <i className="fas fa-envelope" />
    </RoundButton>
  )
}
