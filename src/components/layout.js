/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

import CustomNav from "./nav"
// import "typeface-anton"
// import 'typeface-roboto'

const Layout = ({ children }) => {

  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lucia Gomez</title>
          <script src="https://kit.fontawesome.com/9dd13a1052.js" crossOrigin="anonymous"></script>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-
        wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
          <script async defer data-website-id="5b5deb3e-51e6-4091-bb02-0d6219a5dd95" src="https://umami-lg.herokuapp.com/umami.js"></script>
        </Helmet>
      </div>
      <CustomNav></CustomNav>
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
