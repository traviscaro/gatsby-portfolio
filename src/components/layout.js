/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

export default ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // https://reactjs.org/docs/fragments.html#short-syntax
  return (
    <>
      {/* <Header /> */}
      <main
        style={{
          margin: `0 auto`,
          maxWidth: 1024,
          padding: `0 1.25rem 1.5rem`,
        }}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}
