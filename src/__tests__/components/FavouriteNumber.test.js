import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';

import { FavoriteNumber } from '../../components/FavouriteNumber';

test('renders a number input with a label "Favorite Number"', () => {
  const { getByLabelText, debug } = render(<FavoriteNumber />);
  const input = getByLabelText(/Favorite Number/i);

  // debug(input);

  expect(input).toHaveAttribute('type', 'number');
});

test('entering an invalid number shows error message', () => {
  const { getByLabelText, getByRole, queryByRole, rerender, debug } = render(
    <FavoriteNumber />
  );
  const input = getByLabelText(/favorite number/i);

  user.type(input, '13');

  console.log('first render');
  debug(getByRole('alert'));

  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i);

  rerender(<FavoriteNumber max={13} />);
  console.log('re----render');

  // errorMessage = queryByRole('alert');
  expect(queryByRole('alert')).toBeNull();

  debug(queryByRole('alert'));
});
