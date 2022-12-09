import styled from 'styled-components';
import { Modal } from "react-bootstrap";

const ModalWrapper = styled(Modal)`
  .modal-content {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    position: relative;
  }

  .modal-header {
    border-bottom: 1px solid ${props => props.theme.textLight};
  }

  .modal-title {
    color: ${props => props.theme.text};
  }
  
  @media (min-width: 576px) {
    .modal-dialog {
        max-width: 90vw;
    }
  }

  .form-control {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.header};
    border: 1px solid ${props => props.theme.textLight};
  }

  .close {
    color: ${props => props.theme.accent};
    opacity: unset;
    text-shadow: none;
  }
`;

export default ModalWrapper;