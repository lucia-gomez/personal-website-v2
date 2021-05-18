import React from "react"
import styled from "styled-components"
import Switch from "react-switch"
import { FaMoon } from "react-icons/fa"

const MoonIcon = styled.div.attrs(_ => ({
  className: 'nav-link'
}))`
  padding: 0px 5px;
  background: transparent;
`;

const MySwitch = styled(Switch)`
  .react-switch-bg {
    background: ${props => props.theme.bg} !important;
  }
`;

const SwitchLabel = styled.label`
  margin: auto;
  display: flex;

  @media only screen and (max-width: 576px) {
    margin: unset!important;
  }
`;

const DarkModeToggle = props => {
  const moonIcon = (
    <MoonIcon>
      <FaMoon size='15px' />
    </MoonIcon>
  )

  return (
    <SwitchLabel>
      <MySwitch
        checked={props.isDarkMode}
        onChange={() => props.toggleDarkMode(!props.isDarkMode)}
        onHandleColor="#ede7f6"
        handleDiameter={15}
        uncheckedIcon={null}
        checkedIcon={null}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={19}
        width={35}
        className="react-switch"
      />
      {moonIcon}
    </SwitchLabel>
  );
}

export default DarkModeToggle;
