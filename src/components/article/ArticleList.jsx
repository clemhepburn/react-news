import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  const articleElements = articles.map((article) => (
    <li key={article.url}>
      <Article
        title={article.title}
        description={article.description}
        author={article.author}
        url={article.url}
      />
    </li>
  ));

  return <ul>{articleElements}</ul>;
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default ArticleList;
