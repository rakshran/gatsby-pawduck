import React from "react";
import { useSanity } from "sanity";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";


const TestPage = () => {
  const { data } = useSanity();
  const links = data.collections.testLinks.filter((link) => link.title);

  return (
    <Layout>
    <ul>
      {links.map((link) => (
        <li key={link._id}>
          {link.title}: {link.url}
        </li>
      ))}
    </ul>
    </Layout>
  );
};

export default TestPage;
