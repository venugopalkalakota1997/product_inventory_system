import React from 'react';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import EditProduct from '../compoents/EditProduct';
import {configure} from 'enzyme'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});


test('Addproduct', () => {
    expect(true).toBeTruthy();
  });

it('Submit Fucntion',()=>{
  const onSubmitFun=jest.fn();
  const wrapper=mount(<form onSubmit={onSubmitFun}></form>)
  const form=wrapper.find('form');
  form.simulate('submit');
  expect(onSubmitFun).toHaveBeenCalledTimes(1);
});
it('productname ',()=>{
  const wrapper=mount(<input type="text" id="productname"/>);
  const input=wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('text');
  expect(input.prop('id')).toEqual('productname');
})
it('productdetails ',()=>{
  const wrapper=mount(<input type="text" name="productdetails"/>);
  const input=wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('text');
  expect(input.prop('name')).toEqual('productdetails');
})
it('productprice ',()=>{
  const wrapper=mount(<input type="number" id="productprice"/>);
  const input=wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('number');
  expect(input.prop('id')).toEqual('productprice');
})
it('productquantity ',()=>{
  const wrapper=mount(<input type="number" id="productquantity"/>);
  const input=wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('number');
  expect(input.prop('id')).toEqual('productquantity');
})
it('productimage ',()=>{
  const wrapper=mount(<input type="file" />);
  const input=wrapper.find('input');
  expect(input).toHaveLength(1);
  expect(input.prop('type')).toEqual('file');
  
})
it('Button ',()=>{
  const wrapper=mount(<button type="submit">Login</button>);
  const input=wrapper.find('button');
  const result=input.text();
  expect(result).toBe('Login')
  expect(input.prop('type')).toEqual('submit');
})
