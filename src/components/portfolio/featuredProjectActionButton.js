import { RoundButton } from "../button"
import { hexToRGB } from "../../style/theme"
import styled from "styled-components"

const ActionButton = styled(RoundButton)`
  position: absolute;
  bottom: 50%;
  right: 0%;
  z-index: 2;
  width: 75px;
  height: 75px;
  margin: 0 !important;
  box-shadow: 0px 6px 10px 0 ${props => hexToRGB(props.theme.bg, 0.6)},
    0 1px 18px 0 ${props => hexToRGB(props.theme.bg, 0.6)},
    0 3px 5px -1px ${props => hexToRGB(props.theme.bg, 0.6)};
  transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
    translate(60%, 50%);

  :hover {
    transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
      translate(60%, 50%) scale(1.1);
    box-shadow: 0px 6px 10px 0 ${props => hexToRGB(props.theme.bg, 0.6)},
      0 1px 18px 0 ${props => hexToRGB(props.theme.bg, 0.6)},
      0 3px 5px -1px ${props => hexToRGB(props.theme.bg, 0.6)};
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
  const { index } = props
  return (
    <ActionButton to="/subscribe" sameTab={false} idx={index}>
      <i className="material-icons">launch</i>
    </ActionButton>
  )
}
