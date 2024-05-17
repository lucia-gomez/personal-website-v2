import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa/index.esm.js"
import { Link, useLocation } from "react-router-dom"

import { Button } from "../button"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
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

const LogoutButton = styled(Button)`
  background-color: ${props => hexToRGB(props.theme.medium, 0.5)};

  :hover {
    background-color: ${props => props.theme.medium};
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
    { name: "About", link: "/about-me" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Art", link: "/art" },
    { name: "Blog", link: "/blog" },
    ...(isAuthenticated ? [{ name: "Admin", link: "/admin" }] : []),
    {
      name: "Resume",
      link: "https://ik.imagekit.io/5xtlzx2c3y/website/resume.pdf",
      target: "_blank",
    },
  ]

  const icons = [
    {
      icon: <FaInstagram size="24px" />,
      link: "https://www.instagram.com/lugoo.dev",
    },
    {
      icon: <FaGithub size="24px" />,
      link: "https://github.com/lucia-gomez",
    },
    {
      icon: <FaLinkedin size="24px" />,
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
        {sections.map((section, key) => {
          let idxSecondSlash = pathname.indexOf("/", 1)
          let activePath = pathname.substring(
            pathname.indexOf("/"),
            idxSecondSlash === -1 ? pathname.length : idxSecondSlash
          )
          return (
            <NavLink
              onClick={() => {
                collapseNav()
                if (section.name === "Resume") {
                  window.gtag("event", "page_view", {
                    page_location: "/resume",
                    page_title: "Resume",
                  })
                }
              }}
              selected={activePath === section.link}
              to={section.link}
              target={section.target ?? null}
              key={key}
            >
              {section.name}
            </NavLink>
          )
        })}
        <IconsNav>
          {icons.map((icon, key) => (
            <NavLink
              key={key}
              to={icon.link}
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
                  returnTo: "https://lucia-gomez.dev",
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
