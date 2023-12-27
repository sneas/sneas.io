import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <header className="my-6 flex items-center justify-center">
        <StaticImage
          src="../images/photo.png"
          width={64}
          quality={95}
          formats={["png", "webp", "avif"]}
          className="rounded-full mr-4"
          alt=""
        />
        <div className="text-4xl text-center">sneas</div>
      </header>
      <div className="flex-1">
        <div className="mx-auto max-w-screen-lg">
          <main>{children}</main>
        </div>
      </div>

      <footer className="my-6">
        © {new Date().getFullYear()} &middot;{" "}
        <a href="https://twitter.com/sneasio">Dmytro Snisarenko</a>
      </footer>
    </div>
  )
}

export default Layout
