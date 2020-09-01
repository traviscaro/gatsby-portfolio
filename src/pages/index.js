import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <div className="logo">
      <Img fixed={data.file.childImageSharp.fixed} />
    </div>

    <p className="intro">
      👋 Hey, I'm Travis!
    </p>
    <p className="summary">
      I'm a software engineer, freelance web developer, and adventurer.
    </p>

    <div className="btn-contact-container">
      <a className="btn-contact" href="mailto:hello@traviscaro.dev">Say Hello</a>
    </div>
  </Layout>
)

export default IndexPage
export const query = graphql`
  query {
    file(relativePath: { eq: "tc-logo.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`