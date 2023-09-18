import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";



const BusinessPage = ({ data }) => {
  // Collect articles by section
  const articlesBySection = data.allSanityBusiness.edges.reduce((sections, edge) => {
    const { section, title, url } = edge.node;

    if (!sections[section]) {
      sections[section] = [];
    }

    sections[section].push({ title, url });
    return sections;
  }, {});

  return (
    <Layout>
      <Seo title="Business" />
      <h1>Business</h1>
      <p>Structured frameworks for decision making.</p>
      {Object.entries(articlesBySection).map(([section, articles]) => (
        <div key={section}>
          <h2>{section}</h2>
          <ul>
            {articles.map((edge) => (
              <li key={edge.node.title}>
                <a href={edge.node.url} target="_blank">{edge.node.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityBusiness {
      edges {
        node {
          _id
          title
          URL
          section
        }
      }
    }
  }
`;

export default BusinessPage;
