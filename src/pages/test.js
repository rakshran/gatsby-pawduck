import React from "react";
import { useSanity } from "sanity";

const TestPage = () => {
  const { data } = useSanity();
  const links = data.collections.testLinks.filter((link) => link.title);

  return (
    <ul>
      {links.map((link) => (
        <li key={link._id}>
          {link.title}: {link.url}
        </li>
      ))}
    </ul>
  );
};

export default TestPage;
