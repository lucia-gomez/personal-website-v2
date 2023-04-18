import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"

import Doc from "../../assets/resume.pdf"
import React from "react"
import { hexToRGB } from "../../style/theme"
import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react"

const NavWrapper = styled(Navbar)`
  backdrop-filter: blur(50px);

  @media only screen and (max-width: 576px) {
    background-color: none;
  }
`

const IconsNav = styled(Nav)`
  margin-left: auto;
  flex-wrap: wrap;
  flex-direction: row;
  .nav-link {
    padding-right: 5px;
  }

  @media only screen and (max-width: 576px) {
    flex-basis: 100%;
    padding-left: 8px;
  }
`

const NavLink = styled(Link).attrs(_ => ({
  className: "nav-link",
}))`
  color: ${props => props.theme.text};
  opacity: ${props => (props.selected ? 1 : 0.5)};

  :hover,
  .active {
    color: ${props => props.theme.text};
    opacity: 1;
  }

  @media screen and (max-width: 576px) {
    padding: 0.5rem 8px;
  }
`

const LogoutButton = styled.a.attrs(_ => ({
  className: "btn",
}))`
  background-color: ${props => hexToRGB(props.theme.medium, 0.5)};
  color: ${props => props.theme.text};
  transition: background-color 200ms;

  :hover {
    background-color: ${props => props.theme.medium};
    color: ${props => props.theme.text};
  }
`

const collapseNav = () => {
  const collapseButton = document.getElementsByClassName("navbar-toggler")[0]
  if (window.getComputedStyle(collapseButton).display !== "none") {
    collapseButton.click()
  }
}

const CustomNav = () => {
  const { pathname } = useLocation()
  const { logout } = useAuth0()
  const { isAuthenticated } = useAuth0()
  const sections = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/about-me" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Art", link: "/art" },
    { name: "Blog", link: "/blog" },
    ...(isAuthenticated ? [{ name: "Admin", link: "/admin" }] : []),
    { name: "Resume", link: Doc, target: "_blank" },
  ]

  const icons = [
    {
      icon: <FaGithub size="20px" />,
      link: "https://github.com/lucia-gomez",
    },
    {
      icon: <FaLinkedin size="20px" />,
      link: "https://www.linkedin.com/in/lucia-g-22115110b/",
    },
  ]

  return (
    <NavWrapper
      id="main-navbar"
      className="navbar navbar-dark"
      expand="sm"
      fixed="top"
    >
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        {sections.map((section, key) => (
          <NavLink
            onClick={collapseNav}
            selected={pathname === section.link}
            to={section.link}
            target={section.target ?? null}
            key={key}
          >
            {section.name}
          </NavLink>
        ))}
        <IconsNav>
          {icons.map((icon, key) => (
            <NavLink
              key={key}
              to={{ pathname: icon.link }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <LogoutButton
              href="#logout"
              onClick={e => {
                logout({
                  returnTo: window.location.origin,
                })
                e.preventDefault()
              }}
            >
              Log Out
            </LogoutButton>
          ) : null}
        </IconsNav>
      </Navbar.Collapse>
    </NavWrapper>
  )
}

export default CustomNav
