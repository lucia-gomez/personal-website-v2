import "swiper/css"
import "swiper/css/pagination"

import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useRef } from "react"

import { Pagination } from "swiper"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;
  display: flex;
  overflow-x: scroll;
`

const SwiperWrapper = styled.div`
  .swiper {
    width: 83vw;
    max-width: 300px;

    @media screen and (max-width: 576px) {
      max-width: 350px;
    }
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
`

export default function ZineFlipBook({ zine }) {
  const swiperRef = useRef()

  useEffect(() => {
    if (swiperRef.current != null) {
      swiperRef.current.activeIndex = 0
    }
  }, [zine])

  const getZineSwiper = zine => {
    return (
      <SwiperWrapper>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          onSwiper={swiper => (swiperRef.current = swiper)}
        >
          {zine.pages.map((page, i) => (
            <SwiperSlide key={i}>
              <img
                src={page}
                style={{ height: "100%", width: "100%" }}
                alt="zine page"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    )
  }

  return <Wrapper>{getZineSwiper(zine)}</Wrapper>
}
