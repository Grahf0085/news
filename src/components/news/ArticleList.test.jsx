import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  it('renders title, author, description', () => {
    const articles = [{
      title: 'olympics are so cool',
      author: 'some person',
      description: 'people scream a lot'
    }];

    const { asFragment } = render(<ArticleList articles={articles}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
