import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;
`;

const SwiperWrapper = styled.div`
  .swiper {
    max-width: 350px;
  }

  .swiper-wrapper {
    padding-top: 30px;
  }

  .swiper-pagination-bullets {
    bottom: unset;
  }

  .swiper-pagination-bullet {
    background: ${props => props.theme.text};
  }

  .swiper-pagination-bullet-active {
    background: ${props => props.theme.accent};
    opacity: 1;
  }
`;

export default function ZineFlipBook({ zine }) {
  const getZineSwiper = zine => {
    return (
      <SwiperWrapper>
        <Swiper pagination={true} modules={[Pagination]}>
          {zine.pages.map((page, i) =>
            <SwiperSlide key={i}>
              <img src={page} style={{ height: '100%', width: '100%' }} alt='zine page' />
            </SwiperSlide>
          )}
        </Swiper>
      </SwiperWrapper>
    );
  }

  return (
    <Wrapper>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {getZineSwiper(zine)}
      </div>
    </Wrapper>
  );
}