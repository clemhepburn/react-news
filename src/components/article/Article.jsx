import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, description, author, url }) => (
  <article>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>By {author}</p>
    <p><a href={url}>Read more</a></p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
