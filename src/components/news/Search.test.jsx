import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

describe('search component', () => {
  it('input box', () => {
    const term = 'olympics';
    const { asFragment } = render(<Search search={term} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
