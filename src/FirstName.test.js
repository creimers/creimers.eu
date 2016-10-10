import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import FirstName from './FirstName';

let comp;
const name = ['a', 'b', 'c'];

describe('test suite for FirstName component', () => {
  beforeEach(() => {
    comp = mount(<FirstName name={name} />);
  });

  it('FirstName component should exist', () => {
    expect(comp).to.exist;
  });

  it('FirstName component should have children', () => {
    expect(comp.props().name).to.equal(name);
    expect(comp.children()).to.have.length(name.length);
  });

  it('FirstName component should have "collapsed" class', () => {
    expect(comp).to.have.className('collapsed');
    expect(comp).not.to.have.className('open');
  });

  it('FirstName component should have "open" class', () => {
    comp.instance().animateFirstName();
    expect(comp).not.to.have.className('collapsed');
    expect(comp).to.have.className('open');
  });

})
