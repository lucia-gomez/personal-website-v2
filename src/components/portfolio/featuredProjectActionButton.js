import { RoundButton } from "../button"
import { hexToRGB } from "../../style/theme"
import styled from "styled-components"

export const RoundActionButton = styled(RoundButton)`
  position: absolute;
  bottom: 80%;
  right: 0%;
  z-index: 2;
  width: 75px;
  height: 75px;
  margin: 0 !important;
  box-shadow: 0px 0px 10px 0 ${props => hexToRGB(props.theme.bg, 0.4)};
  transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
    translate(60%, 50%);

  i {
    font-size: 32px;
    margin-top: 4px;
  }

  :hover {
    transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
      translate(60%, 50%) scale(1.1);
    box-shadow: 0px 6px 10px 0 ${props => hexToRGB(props.theme.bg, 0.6)};
  }

  @media screen and (max-width: 870px) {
    ${props => (props.idx % 2 === 0 ? "right: 0%;" : "right: 0%;")};

    transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
      translate(60%, ${props => (props.idx % 2 === 0 ? "50%" : "50%")});

    :hover {
      transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
        translate(60%, ${props => (props.idx % 2 === 0 ? "50%" : "50%")})
        scale(1.1);
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
      <i className="material-icons">launch</i>
    </RoundActionButton>
  )
}
