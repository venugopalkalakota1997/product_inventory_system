import React from 'react';
import { render } from '@testing-library/react';
import {shallow} from 'enzyme'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
import Navbar from './compoents/Navbar'
configure({adapter:new Adapter()});
test('should to link', () => {
  expect(true).toBeTruthy();
});

it('renders without crash',()=>{
  const wrapper=shallow(<App/>)
  const nav =wrapper.find(Navbar)
 expect(nav.exists()).toBe(true);
})
