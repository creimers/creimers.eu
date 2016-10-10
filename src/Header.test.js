import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Header from './Header';

var wrapper;

describe('Header tests', () => {

  beforeEach(() => {
    wrapper = mount(<Header/>);
  });

  it('Header component should exist', () => {
    expect(wrapper).to.exist;
  });
});
