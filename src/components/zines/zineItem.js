import styled from 'styled-components';
import { useState } from 'react';
import ZineFlipBook from './zineFlipBook';

const Wrapper = styled.div`
  width: 200px;
  margin-right: 20px;
  margin-bottom: 20px;

  :hover {
    transform: scale(1.05);
    transition: transform 200ms;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
    object-position: left;
  }

  @media only screen and (max-width: 576px) {
    width: 100%;

    img {
      width: 120px;
      height: 220px;
    }
  }
`;

const ZineTitle = styled.p`
  margin: 0;
  color: ${props => props.theme.accent};
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