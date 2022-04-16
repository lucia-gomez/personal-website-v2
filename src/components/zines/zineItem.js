import styled from 'styled-components';
import { useState } from 'react';
import ZineFlipBook from './zineFlipBook';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 100px;
  width: 200px;
  margin-left: 20px;

  :hover {
    transform: scale(1.05);
    transition: transform 200ms;
  }

  p {
    width: fit-content;
  }

  img {
    width: 200px;
    height: 100%;
    object-fit: contain;
  }
`;

const ZineTitle = styled.p`
  margin: 0;
`;

const ZineDate = styled.p`
  color: ${props => props.theme.textLight};
  margin: 0;
`;

export default function ZineItem({ zine }) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (<>
    <Wrapper onClick={handleShow}>
      <img src={zine.pages[0]} alt={`${zine.title} zine cover page`} />
      <div>
        <ZineTitle>{zine.title}</ZineTitle>
        <ZineDate>{zine.date}</ZineDate>
      </div>
    </Wrapper>
    <ZineFlipBook show={showModal} {...{ zine, handleClose }} />
  </>);
}