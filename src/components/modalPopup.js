import { Modal } from "react-bootstrap"
import { hexToRGB } from "../style/theme"
import styled from "styled-components"

const ModalWrapper = styled(Modal)`
  .modal-content {
    background-color: ${props => hexToRGB(props.theme.medium, 0.2)};
    backdrop-filter: blur(20px);
    border: none;
    border-radius: 5px;
    color: ${props => props.theme.text};
    position: relative;
  }

  .modal-dialog {
    max-width: 95vw;
    position: relative;

    @media screen and (max-width: 576px) {
      max-width: 97vw;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .modal-header {
    border: none;
    @media screen and (min-width: 576px) {
      padding-bottom: 0px;
    }
  }

  .modal-title {
    color: ${props => props.theme.text};
  }

  .form-control {
    background-color: ${props => hexToRGB(props.theme.medium, 0.2)};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
  }

  .close {
    color: ${props => props.theme.accent};
    opacity: unset;
    text-shadow: none;
    font-size: 32px;
    padding: 12px;
    transition: color 150ms, transform 150ms;

    :hover {
      color: ${props => props.theme.accentHover};
      transform: scale(1.05);
      opacity: 1 !important;
    }
  }
`

export default ModalWrapper
