import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
  <section>
    <p>Title: {title}</p>
    <p>Author: {author}</p>
    <p>Description: {description}</p>
  </section>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Article;
