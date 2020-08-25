import React from 'react';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import Product from '../compoents/Product';
import {configure} from 'enzyme'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

it('Render',()=>{
  const wrapper=shallow(<Product/>);
  const h=wrapper.find("h2");
  const result=h.text();

  expect(result).toBe("");
})

test('Product', () => {
    expect(true).toBeTruthy();
  });


it('Button ',()=>{
  const wrapper=mount(<button type="submit">Login</button>);
  const input=wrapper.find('button');
  const result=input.text();
  expect(result).toBe('Login')
  expect(input.prop('type')).toEqual('submit');
})
test('mathes Snapshot',()=>{
  const tree=renderer.create(<Router><Product/></Router>).toJSON()
  expect(tree).toMatchSnapshot();
})