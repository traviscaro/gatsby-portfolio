import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const tcLogoData = useStaticQuery(graphql`
    query {
      tcLogo: file(relativePath: { eq: "tc-logo.png" }) {
        childImageSharp {
          fixed(width: 128, height: 128) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  //   const query = graphql`
  //   query {
  //     file(relativePath: { eq: "tc-logo.png" }) {
  //       childImageSharp {
  //         fixed(width: 125, height: 125) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `

  return (
    <Layout>
      <SEO title="Home" />

      <div className="logo">
        <Img fixed={tcLogoData.tcLogo.childImageSharp.fluid} />
      </div>

      <p className="intro">
        <span role="img" aria-label="wave-hello">
          👋
        </span>{" "}
        Hey, I'm Travis!
      </p>
      <p className="summary">
        I'm a software engineer, freelance web developer, and adventurer.
      </p>

      <div className="btn-contact-container">
        <a className="btn-contact" href="mailto:hello@traviscaro.dev">
          Say Hello
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
