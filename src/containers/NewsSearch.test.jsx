import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import Search from '../components/news/Search';

describe('NewsSearch container', () => {
  it('renders news and displays news', async () => {
    render(<NewsSearch />);

    const { queryByPlaceholderText } = render(<Search />);
    const input = queryByPlaceholderText('Search For News');

    fireEvent.change(input, { target: { value: 'Olympics' } });
    expect(input.value).toBe('Olympics');

    screen.getByText('Loading...');
    const ul = await screen.findByTestId('list');
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    }, 5000);

  });
});
