import BlogPostItemMetadata from "./blogPostItemMetadata"
import { Link } from "react-router-dom"
import { blogPlaceholderImageUrl } from "../../scripts/util"
import { hexToRGB } from "../../style/theme"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const Wrapper = styled(Link)`
  width: 100%;
  display: block;
  position: relative;
  color: ${props => props.theme.text};

  :hover {
    transition: transform 250ms;
    text-decoration: none;
    color: unset;
  }

  @media screen and (max-width: 576px) {
    aspect-ratio: 1;

    :hover {
      transform: unset;
    }
  }

  animation-duration: 500ms;
  --webkit-animation-duration: 500ms;
  &.hidden {
    visibility: hidden;
  }
`

const Gradient = styled.div.attrs(_ => ({
  className: "gradient",
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;

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

const ImageWrapper = styled.div`
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

const Image = styled.div`
  background-image: url(${props => props.image});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  filter: contrast(1.5) grayscale(1);
`

const Body = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 8px;
  width: 100%;
`

const Metadata = styled(BlogPostItemMetadata)`
  color: ${props => hexToRGB(props.theme.text, 0.5)};
  justify-content: space-between;
  font-size: 1rem;

  p {
    font-size: 1rem;
  }
`

const Text = styled.div`
  max-width: 75%;
  @media screen and (max-width: 576px) {
    max-width: unset;
  }
`

export function BlogFeaturedPostItem({
  post,
  className,
  children,
  animationName = "fadeInLeft",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  })

  const getClassName = () => {
    if (!inView) return "hidden"
    return "animate__" + animationName
  }

  return (
    <Wrapper
      className={`${className} animate__animated ${getClassName()}`}
      to={`/blog/${post.slug}/`}
      ref={ref}
    >
      <Gradient>
        <ImageWrapper>
          <Image image={post.imageUrl || blogPlaceholderImageUrl} />
        </ImageWrapper>
      </Gradient>
      <Body>
        <Text>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
        </Text>
        <Metadata post={post} />
      </Body>
      {children}
    </Wrapper>
  )
}

const Secondary = styled(BlogFeaturedPostItem)`
  height: 25vh;
  width: 100%;

  @media screen and (max-width: 576px) {
    height: 200px;
  }

  h1 {
    font-size: 1.5rem;
    text-shadow: ${props => hexToRGB(props.theme.bg, 0.8)} 0px 0px 20px;
  }

  .gradient::after {
    height: 100%;
    background: linear-gradient(
      to top,
      ${props => hexToRGB(props.theme.bg, 0.9)} 5%,
      transparent
    );
  }
`

export function SecondaryBlogFeaturedPostItem({ post }) {
  return <Secondary post={post} animationName="fadeInRight" />
}
