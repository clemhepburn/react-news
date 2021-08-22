import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('article list', () => {
  it('should render a list of articles', () => {
    const articles = [{
      title: 'bad movie',
      author: 'Roger Ebert',
      url: 'https://www.rogerebert.com'
    }];

    const { asFragment } = render(<ArticleList articles={articles} />)
    expect(asFragment).toMatchSnapshot();
  });
});