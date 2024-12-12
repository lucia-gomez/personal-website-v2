import { RoundButton } from "../button"
import styled from "styled-components"

export const RoundActionButton = styled(RoundButton)`
  background: ${props => props.theme.bg};
  border: 1px solid ${props => props.theme.accent};
  position: absolute;
  bottom: 77%;
  right: 0%;
  z-index: 2;
  width: 75px;
  height: 75px;
  margin: 0 !important;
  box-shadow: ${props => (props.idx % 2 === 0 ? 6 : -6)}px -6px 0px 0px ${props => props.theme.accent};

  transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
    translate(60%, 50%);

  ion-icon {
    margin-top: 4px;
  }

  :hover,
  :focus,
  :not(:disabled):not(.disabled):active {
    transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
      translate(60%, 50%) scale(1.1);
    box-shadow: ${props => (props.idx % 2 === 0 ? 6 : -6)}px -6px 0px 0px ${props => props.theme.accentHover};
    background-color: inherit;
    border: inherit;
    border-color: ${props => props.theme.accentHover};
  }

  @media screen and (max-width: 870px) {
    ${props => (props.idx % 2 === 0 ? "right: 0%;" : "right: 0%;")};

    transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
      translate(60%, ${props => (props.idx % 2 === 0 ? "50%" : "50%")});

    :hover,
    :focus,
    :not(:disabled):not(.disabled):active {
      transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
        translate(60%, ${props => (props.idx % 2 === 0 ? "50%" : "50%")})
        scale(1.1);
      box-shadow: ${props => (props.idx % 2 === 0 ? 6 : -6)}px -6px 0px 0px ${props => props.theme.accentHover};
      background-color: inherit;
      border: inherit;
      border-color: ${props => props.theme.accentHover};
    }
  }
`

export default function FeaturedProjectActionButton(props) {
  const { project, index, className } = props
  return (
    <RoundActionButton
      to={project.featuredLink}
      sameTab={project.featuredSameTab}
      idx={index}
      className={className}
    >
      <ion-icon name="link" style={{ fontSize: 44 }}></ion-icon>
    </RoundActionButton>
  )
}
