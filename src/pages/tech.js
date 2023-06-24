import React from 'react';
import { graphql } from 'gatsby';

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

const TechPage = ({ data }) => {
    const articles = data.allSanityTechArticle.nodes;
  
    return (
      <div>
        <h1>Tech Articles</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.title}>
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TechPage;