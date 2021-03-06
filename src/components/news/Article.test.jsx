import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article.jsx';

describe('Article componenet', () => {
  it('renders article', () => {
    const article = {
      title: 'Distaster Happens',
      author: 'Some Person',
      description: 'Life went on'
    };

    const { asFragment } = render(<Article title={article.title} 
      author={article.author} description={article.description} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
