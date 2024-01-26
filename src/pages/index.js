import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faStackOverflow,
  faChrome,
  faDev,
} from "@fortawesome/free-brands-svg-icons"

import { faEarth } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"

import vocablyImage from "./projects/vocably.png"
import imgComparisonSliderImage from "./projects/img-comparison-slider.png"
import cvTemplateImage from "./projects/cv-template.png"
import sensusImage from "./projects/sensus.png"
import hermesImage from "./projects/hermes.png"
import pontisImage from "./projects/pontis.png"
import greenBlockerImage from "./projects/green-blocker.png"
import ionicNativeHttpConnectionBackendImage from "./projects/ionic-native-http-connection-backend.png"

const links = [
  {
    title: "Vocably – language learning platform",
    image: vocablyImage,
    url: "https://vocably.pro",
    urlIcon: faEarth,
    urlTitle: `Project page`,
    description:
      "Language learning app and browser extension for discovering and memorizing words and phrases with spaced repetition.",
  },
  {
    title: "img-comparison-slider",
    image: imgComparisonSliderImage,
    url: "https://img-comparison-slider.sneas.io",
    urlIcon: faEarth,
    urlTitle: `Component page`,
    description:
      "Slider for comparing two images. Useful for highlighting changes between two images. Works in React, Vue, Angular, and plain HTML.",
  },
  {
    title: "cv-template",
    image: cvTemplateImage,
    url: "https://github.com/sneas/cv-template",
    urlIcon: faGithub,
    urlTitle: `GitHub`,
    description:
      "A developer-friendly HTML and PDF CV managed as a Web App. The app is built and deployed to GitHub Pages on every push to main.",
  },
  {
    title: "Sensus",
    image: sensusImage,
    url: "https://chromewebstore.google.com/detail/sensus-ai-sensor-for-your/eeeacchbfimdlomgbdfchlpghjlcmeod",
    urlIcon: faChrome,
    urlTitle: `Chrome Extension`,
    description:
      "An open-source ChatGPT wrapper that evaluates constructiveness of GitHub comments and gives them a score between 1 and 5. Chrome extension.",
  },
  {
    title: "hermes",
    image: hermesImage,
    url: "https://github.com/vocably/hermes",
    urlIcon: faGithub,
    urlTitle: `GitHub`,
    description:
      "A typesafe and promise-based messaging for the browser extension. Treat messages as function calls.",
  },
  {
    title: "pontis",
    image: pontisImage,
    url: "https://github.com/vocably/pontis",
    urlIcon: faGithub,
    urlTitle: `GitHub`,
    description:
      "An authentication bridge between the browser extension and AWS Amplify web applications. Pontis means bridge in Latin.",
  },
  {
    title: "Green Blocker",
    image: greenBlockerImage,
    url: "https://chromewebstore.google.com/detail/green-blocker/bddacdohgmaebklmbambdhpopdkadkdg",
    urlIcon: faChrome,
    urlTitle: `Chrome Extension`,
    description:
      "An extension that politely blocks websites that you don't want to visit. It lets you to temporarily unblock them if you want to.",
  },
  {
    title: "ionic-native-http-connection-backend",
    image: ionicNativeHttpConnectionBackendImage,
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
  {
    icon: faDev,
    url: "https://dev.to/sneas",
  },
]

const IndexPage = () => (
  <Layout>
    <div className="grid grid-cols-12 gap-6 my-6 items-center">
      <div className="col-span-12 md:col-span-8 lg:col-span-9">
        <div className="text-2xl text-gray-600">
          Hello! I'm a Freelance Software Engineer with a love for every aspect
          of web development. Such as front-end, back-end, DevOps, and QA. I
          also love open-sourcing my code.
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 lg:col-span-3 md:text-center">
        <div className="mb-4 inline-flex items-center justify-center gap-4">
          {socialLinks.map(({ icon, url }) => (
            <a
              href={url}
              className="text-gray-600 hover:text-inherit transition-colors duration-300"
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
    <h2 className="text-4xl mb-6 mt-8">My Projects</h2>
    <ul className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {links.map(({ title, url, description, urlIcon, urlTitle, image }) => (
        <li>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="h-full group flex flex-col rounded overflow-hidden shadow-5 hover:shadow-6 transition-shadow duration-300"
          >
            <img className="w-full" src={image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 group-hover:underline">
                {title}
              </div>
              <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-5 mt-auto">
              <FontAwesomeIcon icon={urlIcon} /> <span>{urlTitle}</span>
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
export const Head = () => <Seo title="Dima Snisarenko (sneas)" />

export default IndexPage
