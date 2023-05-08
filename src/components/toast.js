import { Toast as BootstrapToast } from "react-bootstrap"
import { hexToRGB } from "../style/theme"
import styled from "styled-components"

const ToastContainer = styled(BootstrapToast)`
  position: absolute;
  top: 75px;
  right: 20px;
  background-color: ${props => hexToRGB(props.theme.medium, 0.2)};
  backdrop-filter: blur(10px);
  cursor: pointer;
`

export default function Toast(props) {
  const { children, show, onClose } = props

  return (
    <ToastContainer
      show={show}
      onClose={onClose}
      onClick={onClose}
      delay={5000}
      autohide
    >
      <BootstrapToast.Body>{children}</BootstrapToast.Body>
    </ToastContainer>
  )
}
