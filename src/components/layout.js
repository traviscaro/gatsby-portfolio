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

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/pro-regular-svg-icons"
import { fal } from "@fortawesome/pro-light-svg-icons"
import { fad } from "@fortawesome/pro-duotone-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false
library.add(fab, fas, far, fal, fad)

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
      
      <Footer />
    </>
  )
}
