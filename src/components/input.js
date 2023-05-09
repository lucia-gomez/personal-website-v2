import styled, { css } from "styled-components"

import Form from "react-bootstrap/Form"
import { hexToRGB } from "../style/theme"

const placeholderStyle = css`
  color: ${props => hexToRGB(props.theme.text, 0.2)};
`

const Wrapper = styled(Form.Control).attrs(_ => ({
  className: "form-control",
}))`
  background-color: ${props => hexToRGB(props.theme.medium, 0.4)};
  color: ${props => props.theme.text};
  border-radius: 8px;
  border: 2px solid
    ${props => (props.isActive ? props.theme.accentHover : props.theme.accent)};
  padding: 5px 10px 5px 10px;
  ${props => (props.hasIcon ? "padding-left: 28px;" : "")}

  :focus-visible {
    outline: none;
    border: 2px solid ${props => props.theme.accentHover};
    box-shadow: none;
    background-color: ${props => hexToRGB(props.theme.medium, 0.4)};
    color: ${props => props.theme.text};
  }

  ::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    ${placeholderStyle}
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    ${placeholderStyle}
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    ${placeholderStyle}
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    ${placeholderStyle}
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    ${placeholderStyle}
  }

  ::placeholder {
    ${placeholderStyle}
  }
`

const Icon = styled.i`
  position: absolute;
  top: 11px;
  left: 8px;
  z-index: 1;
  ${placeholderStyle}
`

export default function Input(props) {
  const { iconClassName, width } = props
  return (
    <div style={{ position: "relative" }}>
      <Icon isActive={props.isActive} className={iconClassName} />
      <Wrapper
        {...props}
        hasIcon={iconClassName != null}
        style={width != null ? { width: 300 } : {}}
      />
    </div>
  )
}
