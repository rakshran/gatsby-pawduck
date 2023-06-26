import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";



const TechPage = ({ data }) => {
  //const articles = data.sanityTechArticle.nodes;

  return (
    <Layout>
      <Seo title="tech" />
      <h1>Tech</h1>
      <p>Fundamentals of Computer Science.</p>
      <ul>
        {articles.map((data) => (
          <li key={data.sanityTechaArticle.title}>
            <a href={data.sanityTechaArticle.url}>{ata.sanityTechaArticle.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query($_id: String!) {
    sanityTechArticle(id: {eq: $_id}) {
        _id
        title
        url
      }
    }
  }
`;

export default TechPage;
