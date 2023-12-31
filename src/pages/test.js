import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";



const TechPage = ({ data }) => {
  const articles = data.allSanityTech.edges;

  return (
    <Layout>
      <Seo title="Tech" />
      <h1>Tech</h1>
      <p>Fundamentals of Computer Science.</p>
      <ul>
        {articles.map((edge) => (
          <li key={edge.node.title}>
            <a href={edge.node.URL} target="_blank">{edge.node.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityTech {
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

export default TechPage;
