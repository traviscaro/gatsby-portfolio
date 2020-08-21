import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <p className="intro">👋 Hey, I'm Travis Caro!</p>

    <p style={{ width: "400px", margin: "auto" }}>
      My site is in development right now, but please check back in from time to
      time. I'm actively developing it in my freetime.
      <br />
      <br />
      In the meantime, feel free to say{" "}
      <a href="mailto:hello@traviscaro.dev">hello@traviscaro.dev</a>
    </p>

    <div className="social-media-icon-container">
      <a href="https://twitter.com/travisbcaro" className="social-media-link">
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>

      <a
        href="https://www.linkedin.com/in/travisbcaro/"
        className="social-media-link"
      >
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
      </a>

      <a href="https://github.com/tbcaro" className="social-media-link">
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
    </div>
  </Layout>
)

export default IndexPage
