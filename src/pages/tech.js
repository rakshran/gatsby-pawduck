import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";



const TechPage = ({ data }) => {
  const articles = data.allSanityTechArticle.edges;

  return (
    <Layout>
      <Seo title="tech" />
      <h1>Tech</h1>
      <p>Fundamentals of Computer Science.</p>
      <ul>
        {articles.map((edge) => (
          <li key={edge.node.title}>
            <a href={edge.node.url}>{edge.node.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityTechArticle {
      edges {
        node {
        _id
        title
        url
      }
    }
  }
}
`;

export default TechPage;
