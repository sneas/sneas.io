import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center max-w-screen-lg px-4 mx-auto">
      <header className="my-6 flex items-center">
        <StaticImage
          src="../images/photo.png"
          width={64}
          quality={95}
          formats={["png", "webp", "avif"]}
          className="rounded-full mr-4"
          alt=""
        />
        <div className="text-4xl">sneas</div>
      </header>
      <div className="flex-1">
        <div className="mx-auto">
          <main>{children}</main>
        </div>
      </div>

      <footer className="my-6 text-center">
        © {new Date().getFullYear()} &middot;{" "}
        <a href="https://twitter.com/sneasio">Dmytro Snisarenko</a>
      </footer>
    </div>
  )
}

export default Layout
