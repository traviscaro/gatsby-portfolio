import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import resumeFile from "../assets/TravisCaro_Resume.pdf" 

const IndexPage = () => {
  const tcLogoData = useStaticQuery(graphql`
    query {
      tcLogo: file(relativePath: { eq: "tc-logo-primary.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
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

      {/* Header bar */}
      <div>
        <div className="logo">
          <Img fixed={tcLogoData.tcLogo.childImageSharp.fixed} />
        </div>
      </div>

      <p className="intro">👋&nbsp;Hey, I'm Travis!</p>
      <p className="summary">I build stuff for the web.</p>
      <p className="summary">
        I am currently working on this site.
        Here are some links you might find useful while we wait for the dough to
        rise 😉
      </p>

      <div className="btn-contact-container">
        <a className="btn-contact" href="mailto:hello@traviscaro.dev">
          Say Hello
        </a>
      </div>

      <div className="btn-contact-container" style={{ marginTop: "1rem" }}>
        <a className="btn-contact" href={resumeFile} target="_blank">
          Checkout My Resume
        </a>
      </div>

      {/* Footer */}
      <div className="footer">
        <div>
          <a
            href="https://twitter.com/travisbcaro"
            className="social-media-link"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
          </a>

          <a
            href="https://www.linkedin.com/in/travisbcaro/"
            className="social-media-link"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg" />
          </a>

          <a href="https://github.com/tbcaro" className="social-media-link">
            <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
          </a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Travis Caro
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
