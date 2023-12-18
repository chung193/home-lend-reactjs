import * as React from 'react';
import  InterlockPage from '..';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

const renderPage: any = () =>
  renderer.create(
    <MemoryRouter>``
      <InterlockPage />
    </MemoryRouter>,
  );

describe('<InterlockPage />', () => {
  it('should match snapshot', () => {
    const interlockPage = renderPage();
    expect(interlockPage.toJSON()).toMatchSnapshot();
  });
});
