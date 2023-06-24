import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const Head = () => <Seo title="tech" />

export const query = graphql`
  query {
    allSanityTechArticle {
      nodes {
        title
        url
      }
    }
  }
`;

const articles = data.allSanityTechArticle.nodes;

const TechPage = ({data}) => (
    
  <Layout>
    <h1>Tech</h1>
    <p>Fundamentals of Computer Science.</p>
    <ul>
          {articles.map((article) => (
            <li key={article.title}>
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
  
  export default TechPage;