import { useRef } from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { Button } from '../button';
import FlipPage from 'react-flip-page';

const ModalWrapper = styled.div`
  .modal-header, .modal-body, .modal-footer {
    background-color: ${props => props.theme.bg};
    border-color: ${props => props.theme.medium};
  }

  .modal-title {
    color: ${props => props.theme.text};
  }

  .modal-header button {
    text-shadow: none;
    color: ${props => props.theme.text};
  }
`;

export default function ZineFlipBook({ zine, show, handleClose }) {
  const flipBookRef = useRef(null);

  const handlePreviousPage = () => {
    if (flipBookRef.current != null) {
      flipBookRef.current.gotoPreviousPage();
    }
  }

  const handleNextPage = () => {
    if (flipBookRef.current != null) {
      flipBookRef.current.gotoNextPage();
    }
  }

  const getZineFlipBook = (zine) => {
    return <FlipPage
      orientation="horizontal"
      flipOnTouch={true}
      showTouchHint={true}
      height={zine.height}
      animationDuration={500}
      ref={flipBookRef}>
      {zine.pages.map((page, i) =>
        <article key={i}>
          <img src={page} style={{ height: '100%', width: '100%' }} alt='zine page' />
        </article>
      )}
    </FlipPage>
  };

  return (
    <Modal show={show} onHide={handleClose} centered >
      <ModalWrapper>
        <Modal.Header closeButton>
          <Modal.Title>{zine.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{zine.description}</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {getZineFlipBook(zine)}
          </div>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: 'space-between' }}>
          <Button onClick={handlePreviousPage}>
            <i className="fas fa-arrow-left"></i>
          </Button>
          <Button onClick={handleNextPage}>
            <i className="fas fa-arrow-right"></i>
          </Button>
        </Modal.Footer>
      </ModalWrapper>
    </Modal>
  );
}