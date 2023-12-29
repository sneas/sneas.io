import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1 className="text-8xl my-6">Page 404: Not Found</h1>
    <div className="my-6">You've just hit the route that doesn't exist.</div>
    <div className="my-6">
      <a href="/" className="underline">
        Go to the main page.
      </a>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
