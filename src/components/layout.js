import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import "./bootstrap.min.css"

const Layout = ({ children }) => {
  return <>{children}</>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
