import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Tech",
    url: "tech",
    description:
      "Fundamentals of how technology works.",
  },
  {
    text: "Business",
    url: "business",
    description:
      "Structured frameworks for decision making.",
  },
  {
    text: "Design",
    url: "design",
    description:
      "Concepts to develop intuitive design sense.",
  },
  {
    text: "Productivity",
    url: "productivity",
    description:
      "Tips to become more efficient at work.",
  },
  {
    text: "Careers",
    url: "careers",
    description:
      "Advice on navigating careers in tech.",
  },
  {
    text: "Resources",
    url: "resources",
    description:
      "Essential tools to level-up your game.",
  }

]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: true,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]


const moreLinks = [
  { text: "Rakshit's website", url: "https://rakshitranjan.com" },
  {
    text: "Newsletter",
    url: "https://newsletter.rakshitranjan.com",
  },
  {
    text: "Email",
    url: "mailto://rakshit@rakshitranjan.com",
  },
  {
    text: "Twitter",
    url: "https://x.com/rakshran",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
     {/* <StaticImage
        src="../images/pawduck_logo.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> */}
      <h1>
        Welcome to <b>pawduck!</b>
      </h1>
        <h4>
        Curation of timeless writing for builders of tech products.
        </h4>
      {/* <p className={styles.intro}>
        <b>Get started here</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </p> */}
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
