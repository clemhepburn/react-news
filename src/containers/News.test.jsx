require('dotenv').config();

import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import News from './News';
import Search from '../components/search/Search';

describe('news container', () => {
  it('should render container and display search result', async () => {
    render(<News />);
    screen.getByText('Loading...');

    const fakeSearch = jest.fn();
    const { queryByTestId } = render(<Search fakeSearch={fakeSearch} />);
    const searchInput = queryByTestId('search');
    fireEvent.change(searchInput, { target: { value: 'hello' } });
    expect(searchInput.value).toBe('hello');

    return waitFor(async () => {
      const ul = await screen.findByTestId('list');
      expect(ul).not.toBeEmptyDOMElement();
    }, 9000)
  })
})