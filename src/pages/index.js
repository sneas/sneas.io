import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"

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

const socialLinks = [
  {
    icon: faGithub,
    url: "https://github.com/sneas",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com/in/sneas",
  },
  {
    icon: faXTwitter,
    url: "https://twitter.com/sneasio",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/379949/sneas",
  },
]

const IndexPage = () => (
  <Layout>
    <div className="text-center my-6">
      Software engineer fond of all the aspects of web development: front-end,
      back-end, DevOps, and QA. Founder of Vocably - the best flashcards app for
      language learning. Maintainer of several open-source projects.
    </div>
    <div className="my-6 flex items-center justify-center gap-4">
      {socialLinks.map(({ icon, url }) => (
        <a
          href={url}
          className="text-gray-400 hover:text-inherit transition-colors duration-300"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={icon} size="2x" />
        </a>
      ))}
    </div>
    <div className="my-6 text-center">
      <a
        href="https://sneas.github.io/cv"
        className="underline"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a>
    </div>
    <h1 className="text-4xl text-center mb-6 mt-8">
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
