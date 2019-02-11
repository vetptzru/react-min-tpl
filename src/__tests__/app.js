import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/app';

describe('App', () => {
  const app = shallow(<App />);
  it('render', () => {
    expect(app).toMatchSnapshot();
  });
});
