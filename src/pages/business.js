import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";



const BusinessPage = ({ data }) => {
  // Collect articles by section
  const articlesBySection = data.allSanityBusiness.edges.reduce((sections, edge) => {
    const { section, title, URL } = edge.node;

    if (!sections[section]) {
      sections[section] = [];
    }

    sections[section].push({ title, URL });
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
            {articles.map((article) => (
              <li key={article.title}>
                <a href={article.URL} target="_blank">{article.title}</a>
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
