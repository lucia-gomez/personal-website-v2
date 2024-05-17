import React from "react"
import Skeleton from "react-loading-skeleton"
import { blogPlaceholderImageUrl } from "../../scripts/util"
import { hexToRGB } from "../../style/theme"
import styled from "styled-components"

const Gradient = styled.div.attrs(_ => ({
  className: "gradient",
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  ::after {
    content: "";
    display: block;
    height: 80%;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(
      to top,
      ${props => hexToRGB(props.theme.bg, 0.85)} 30%,
      transparent 100%
    );
  }
`

const SkeletonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`

const ImageWrapper = styled.div.attrs(_ => ({
  className: "colorOverlay",
}))`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to left bottom,
      ${props => props.theme.accentHover},
      #0886ea,
      ${props => props.theme.accent}
    );
    opacity: 0.5;
    filter: contrast(1.5);
  }
`

const Image = styled.div.attrs(_ => ({
  className: "image",
}))`
  background-image: url(${props => props.image});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  filter: contrast(1.5) grayscale(1);
`

export default function BlogGradientBanner({ post, className }) {
  if (post == null) {
    return (
      <SkeletonWrapper>
        <Skeleton width="100%" height="100%" enableAnimation={false} />
      </SkeletonWrapper>
    )
  }

  return (
    <Gradient className={className}>
      <ImageWrapper>
        <Image image={post?.imageUrl || blogPlaceholderImageUrl} />
      </ImageWrapper>
    </Gradient>
  )
}
