import Modal from "react-bootstrap/Modal"
import { a } from "../style/blogStyle"
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

  .close {
    ${a}
    opacity: unset;
    text-shadow: none;
    font-size: 32px;
    padding: 12px;
    display: inline;
  }
`

export default ModalWrapper
