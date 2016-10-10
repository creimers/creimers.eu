import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import LastName from './LastName';

let comp;
const name = ['a', 'b', 'c'];

describe('test suite for LastName component', () => {
  beforeEach(() => {
    comp = mount(<LastName name={name} />);
  });

  it('LastName component should exist', () => {
    expect(comp).to.exist;
  });

  it('LastName component should have children', () => {
    expect(comp.props().name).to.equal(name);
    expect(comp.find('.hover-letter')).to.have.length(name.length);
  });

})
