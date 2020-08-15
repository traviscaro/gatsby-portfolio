import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <p className="intro">
      👋 Hey, I'm Travis Caro!
    </p>

    <p style={{ width: "400px", margin: "auto" }}>
      My site is in development right now, but please check back in from time to time. I'm actively developing it in my freetime.

      <br/>
      <br/>

      In the meantime, feel free to say <a href="mailto:hello@traviscaro.dev">hello@traviscaro.dev</a>
    </p>
    
  </Layout>
)

export default IndexPage
