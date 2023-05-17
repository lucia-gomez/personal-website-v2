import { ButtonLink } from "../button"
import styled from "styled-components"

const SIZE = 75
const RoundButton = styled(ButtonLink)`
  height: ${SIZE}px;
  width: ${SIZE}px;
  border-radius: ${SIZE}px;

  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  box-shadow: 0px 6px 10px 0 rgba(0, 0, 0, 0.14),
    0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
  transition: transform 200ms;

  :hover {
    transform: scale(1.1);
  }
`

const Icon = styled.i`
  color: ${props => props.theme.text};
  font-size: 30px;
`

export default function SubscribeButtonPinned() {
  return (
    <RoundButton to="/subscribe" sameTab={true}>
      <Icon className="fas fa-envelope" />
    </RoundButton>
  )
}
