import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faStackOverflow,
  faChrome,
} from "@fortawesome/free-brands-svg-icons"

import { faEarth } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"

const links = [
  {
    title: "Vocably - language learning app",
    url: "https://vocably.pro",
    urlIcon: faEarth,
    urlTitle: `Project page`,
    description:
      "Language learning and browser extension for discovering and memorizing words and phrases with spaced repetition.",
  },
  {
    title: "img-comparison-slider",
    url: "https://img-comparison-slider.sneas.io",
    urlIcon: faEarth,
    urlTitle: `Component page`,
    description:
      "Slider for comparing two images. Useful for highlighting changes between two images. Works in React, Vue, Angular, and plain HTML.",
  },
  {
    title: "cv-template",
    url: "https://github.com/sneas/cv-template",
    urlIcon: faGithub,
    urlTitle: `GitHub`,
    description:
      "A developer-friendly HTML and PDF CV managed as a Web App. The app is built and deployed to GitHub Pages on every push to main.",
  },
  {
    title: "Sensus",
    url: "https://chromewebstore.google.com/detail/sensus-ai-sensor-for-your/eeeacchbfimdlomgbdfchlpghjlcmeod",
    urlIcon: faChrome,
    urlTitle: `Chrome Extension`,
    description:
      "An open-source ChatGPT wrapper that evaluates constructiveness of GitHub comments and gives them a score between 1 and 5. Chrome extension.",
  },
  {
    title: "hermes",
    url: "https://github.com/vocably/hermes",
    urlIcon: faGithub,
    urlTitle: `GitHub`,
    description:
      "A typesafe and promise-based messaging for the browser extension. Treat messages as function calls.",
  },
  {
    title: "pontis",
    url: "https://github.com/vocably/pontis",
    urlIcon: faGithub,
    urlTitle: `GitHub`,
    description:
      "An authentication bridge between the browser extension and AWS Amplify web applications. Pontis means bridge in Latin.",
  },
  {
    title: "Green Blocker",
    url: "https://chromewebstore.google.com/detail/green-blocker/bddacdohgmaebklmbambdhpopdkadkdg",
    urlIcon: faChrome,
    urlTitle: `Chrome Extension`,
    description:
      "An extension that politely blocks websites that you don't want to visit. It lets you to temporarily unblock them if you want to.",
  },
  {
    title: "ionic-native-http-connection-backend",
    url: "https://github.com/sneas/ionic-native-http-connection-backend",
    urlIcon: faGithub,
    urlTitle: `GitHub`,
    description: "A solution to a CORS issue in Ionic.",
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
    <div className="grid grid-cols-12 gap-6 my-6 items-center">
      <div className="col-span-12 md:col-span-8 lg:col-span-9 text-2xl text-gray-400">
        Freelance software engineer fond of all the aspects of web development:
        front-end, back-end, DevOps, and QA. Founder of Vocably - the best
        flashcards app for language learning. Maintainer of several open-source
        projects.
      </div>
      <div className="col-span-12 md:col-span-4 lg:col-span-3 md:text-center">
        <div className="mb-4 inline-flex items-center justify-center gap-4">
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

        <div className="mb-6">
          <a
            href="https://sneas.github.io/cv"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Download CV.
          </a>
        </div>
      </div>
    </div>
    <h1 className="text-4xl mb-6 mt-8">Projects I use and maintain</h1>
    <ul className="my-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 -mx-4">
      {links.map(({ title, url, description, urlIcon, urlTitle }) => (
        <li>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="group p-4 block hover:bg-gray-50 transition-colors duration-300 rounded-xl"
          >
            <div className="font-bold mb-4">{title}</div>
            <div className="text-gray-500 mb-4">{description}</div>
            <div className="text-gray-500 text-sm">
              <FontAwesomeIcon icon={urlIcon} />{" "}
              <span className="group-hover:underline">{urlTitle}</span>
            </div>
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
