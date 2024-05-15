import BlogGradientBanner from "./blogGradientBanner"
import BlogPostItemMetadata from "./blogPostItemMetadata"
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton"
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
      className={`${className} animate__animated ${getClassName()} blog-post`}
      to={post ? `/blog/${post.slug}` : undefined}
      ref={ref}
      data-test-id="blog-featured-post-item"
    >
      <BlogGradientBanner post={post} />
      <Body>
        <Text>
          <h1>{post?.title || <Skeleton />}</h1>
          <p>{post?.summary || <Skeleton count={3} />}</p>
        </Text>
        {post && <Metadata post={post} />}
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
