import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";



const TechPage = ({ data }) => {
  // Collect articles by section
  const articlesBySection = data.allSanityTech.edges.reduce((sections, edge) => {
    const { section, title, URL } = edge.node;

    if (!sections[section]) {
      sections[section] = [];
    }

    sections[section].push({ title, URL });
    return sections;
  }, {});

  return (
    <Layout>
      <Seo title="Tech" />
      <h1>Tech</h1>
      <p>Fundamentals of Computer Science.</p>
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
    allSanityTech {(sort: { fields: title, order: ASC })
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

export default TechPage;
