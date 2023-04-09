import React from "react"
import styled from "styled-components"
import { Navbar, Nav } from "react-bootstrap"
import { useAuth0 } from "@auth0/auth0-react"
import { Link, useLocation } from "react-router-dom"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import Doc from "../assets/resume.pdf"
import { hexToRGB } from "../style/theme"

const NavWrapper = styled(Navbar)`
  @media only screen and (max-width: 576px) {
    backdrop-filter: blur(50px);
  }

  .navbar-nav {
    flex-wrap: wrap;
    flex-direction: row;
  }
`

const ExtraNav = styled(Nav).attrs(_ => ({
  className: "extra-nav",
}))`
  margin-left: auto;
  .nav-link {
    padding-right: 5px;
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

  .extra {
    padding-right: 5px;
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

const NavItem = styled(Nav.Item)`
  list-style-type: none;
  @media only screen and (max-width: 576px) {
    .nav-link {
      padding: 0.1rem 1.2rem;
    }

    :not(:nth-last-child(-n + 2)) {
      display: flex;
      align-items: center;

      :after {
        content: "|";
        color: ${props => props.theme.text};
        opacity: 0.5;
      }
    }
  }
`

const MobileNav = styled(Navbar.Collapse)`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 576px) {
    .extra-nav {
      flex-basis: 100%;
      padding-left: 1.2rem;
    }
  }
`

const CustomNav = () => {
  const { pathname } = useLocation()
  const { logout } = useAuth0()
  const { isAuthenticated } = useAuth0()
  const sections = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-me" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Experience", link: "/experience" },
    { name: "Blog", link: "/blog" },
    ...(isAuthenticated ? [{ name: "Admin", link: "/admin" }] : []),
    { name: "Art", link: "/art" },
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
      collapseOnSelect
    >
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <MobileNav id="navbarCollapse">
        {sections.map((section, key) => (
          <NavItem as="li" key={key}>
            <NavLink
              selected={pathname === section.link}
              to={section.link}
              target={section.target ?? null}
            >
              {section.name}
            </NavLink>
          </NavItem>
        ))}
        <ExtraNav>
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
        </ExtraNav>
      </MobileNav>
    </NavWrapper>
  )
}

export default CustomNav
