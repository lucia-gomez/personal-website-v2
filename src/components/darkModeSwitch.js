import React from "react"
import Switch from "react-switch"
import { FaMoon } from "react-icons/fa"

const DarkModeToggle = props => {
  const moonIcon = (
    <div style={{ padding: '0px 5px', background: 'transparent' }} className='nav-link'>
      <FaMoon size='15px' />
    </div>
  )

  return (
    <label style={{ margin: 'auto', display: 'flex' }}>
      <Switch
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
        id="material-switch"
      />
      {moonIcon}
    </label>
  );
}

export default DarkModeToggle;
