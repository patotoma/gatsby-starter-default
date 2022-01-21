import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: React.FC<
  PageProps<{
    site: {
      buildTime: string
      siteMetadata?: {
        title: string
        description: string
        author: string
      }
    }
  }>
> = ({ data, path }) => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <p>
      siteMetadata: <br />
      title: {data.site.siteMetadata?.title} <br />
      description: {data.site.siteMetadata?.description} <br />
      author: {data.site.siteMetadata?.author}
    </p>
    <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
