import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";



const ResourcesPage = ({ data }) => {
  const articles = data.allSanityResources.edges;

  return (
    <Layout>
      <Seo title="Resources" />
      <h1>Resources</h1>
      <p>Essential tools to level-up your game.</p>
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
    allSanityResources {
      edges {
        node {
        _id
        title
        URL
      }
    }
  }
}
`;

export default ResourcesPage;
