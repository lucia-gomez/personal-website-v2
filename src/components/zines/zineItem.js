import styled from 'styled-components';
import { useState } from 'react';
import ZineFlipBook from './zineFlipBook';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;

  p {
    width: fit-content;
  }

  img {
    width: 200px;
  }
`;

export default function ZineItem({ zine }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (<>
    <Wrapper onClick={handleShow}>
      <img src={zine.pages[0]} alt={`${zine.title} zine cover page`} />
      <p>{zine.title}</p>
    </Wrapper>
    <ZineFlipBook show={showModal} {...{ zine, handleClose }} />
  </>);
}