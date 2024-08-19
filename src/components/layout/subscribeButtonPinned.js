import { RoundButton } from "../button"

export default function SubscribeButtonPinned() {
  return (
    <RoundButton
      to="/subscribe"
      sameTab={true}
      className="animate__animated animate__bounceIn"
    >
      <ion-icon name="mail" style={{ marginTop: 6, fontSize: 40 }} />
    </RoundButton>
  )
}
