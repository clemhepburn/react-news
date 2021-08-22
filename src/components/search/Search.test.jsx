import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('search component', () => {
  it('should render search', () => {
    const search = 'boats';
    const { asFragment } = render(<Search search={search} />);

    expect(asFragment).toMatchSnapshot();
  });
});