import React from "react"

export default () => (
  <header>
    <nav>
      <div>
        <img src="https://source.unsplash.com/random/48x48"></img>
      </div>
      <div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        {/* This isn't going to work this way... need to figure that out */}
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </header>
)
