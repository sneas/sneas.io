import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const links = [
  {
    title: "Vocably - language learning app",
    url: "https://vocably.pro",
    description:
      "Language learning and browser extension for discovering and memorizing words and phrases with spaced repetition.",
  },
  {
    title: "img-comparison-slider",
    url: "https://img-comparison-slider.sneas.io",
    description:
      "Slider for comparing two images. Useful for highlighting changes between two images.",
  },
  {
    title: "cv-template",
    url: "https://github.com/sneas/cv-template",
    description:
      "A developer-friendly HTML and PDF CV managed as a Web App. Used by hundreds of people.",
  },
]

const IndexPage = () => (
  <Layout>
    <h1 className="text-4xl text-center my-6">
      Projects I maintain in my spare time.
    </h1>
    <ul className="my-6 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      {links.map(({ title, url, description }) => (
        <li>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="p-4 block hover:bg-gray-50"
          >
            <div className="font-bold mb-4">{title}</div>
            <div className="text-gray-500">{description}</div>
          </a>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
