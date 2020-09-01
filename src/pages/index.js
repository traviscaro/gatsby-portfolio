import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* Add logo image to site */}
    {/* Then add the logo as the favicon */}
    {/* <img src="../../images/tc-logo.png" /> */}

    <p className="intro">👋 Hey, I'm Travis!</p>
    <p></p>

    <div className="btn-contact-container">
      <a className="btn-contact" href="mailto:hello@traviscaro.dev">Say Hello</a>
    </div>
  </Layout>
)

export default IndexPage
