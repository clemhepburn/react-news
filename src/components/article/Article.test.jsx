import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article';

describe('article component', () => {
  it('should render the article component', () => {
    const article = {
      title: 'bad movie',
      author: 'Roger Ebert',
      url: 'https://rogerebert.com'
    };

    const { asFragment } = render(
      <Article
        title={article.title}
        author={article.author}
        url={article.url} />
    );

    expect(asFragment).toMatchSnapshot();
  })
})