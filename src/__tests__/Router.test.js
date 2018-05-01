import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import * as enzyme from 'enzyme';
import { MemoryRouter } from 'react-router';
import LandingPage from '../components/Home';
import PageNotFound from '../components/PageNotFound';
import App from '../components/App';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('Router Testing', () => {
  it('invalid path should redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/random' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(PageNotFound)).toHaveLength(1);
  });

  it('valid path should not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(LandingPage)).toHaveLength(1);
    expect(wrapper.find(PageNotFound)).toHaveLength(0);
  });
})