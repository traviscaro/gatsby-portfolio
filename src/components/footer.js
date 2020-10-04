import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default () => (
  <footer>
    <div>
      <a href="https://twitter.com/travisbcaro" className="social-media-link">
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

    <div className="copyright">© {new Date().getFullYear()} Travis Caro</div>
  </footer>
)
