import { useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { Button } from '../button';
import FlipPage from 'react-flip-page';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;

  @media only screen and (max-width: 576px) {
    padding-top: 50px;
  }
`;

const ButtonLeft = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: -50px;

  @media only screen and (max-width: 576px) {
    top: 0px;
    left: 0px;
    transform: none;
  }
`;

const ButtonRight = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: -50px;

  @media only screen and (max-width: 576px) {
    top: 0px;
    right: 0px;
    transform: none;
  }
`;

const ArrowButton = styled(Button)`
  margin: 0px;
`;

export default function ZineFlipBook({ zine }) {
  const theme = useTheme();
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
      pageBackground={theme.bg}
      ref={flipBookRef}>
      {zine.pages.map((page, i) =>
        <article key={i}>
          <img src={page} style={{ height: '100%', width: '100%' }} alt='zine page' />
        </article>
      )}
    </FlipPage>
  };

  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {getZineFlipBook(zine)}
      </div>
      <ButtonLeft>
        <ArrowButton onClick={handlePreviousPage}>
          <i className="fas fa-arrow-left"></i>
        </ArrowButton>
      </ButtonLeft>
      <ButtonRight>
        <ArrowButton onClick={handleNextPage}>
          <i className="fas fa-arrow-right"></i>
        </ArrowButton>
      </ButtonRight>
    </Wrapper>
  );
}