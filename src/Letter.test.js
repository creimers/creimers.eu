import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Letter from './Letter';

var wrapper;

describe('Test suite for Letter component', () => {
  beforeEach(() => {
    wrapper = shallow(<Letter letter={'h'} hidden={true} />);
  });

  it('Letter component should exist', () => {
    expect(wrapper).to.exist;
  });

  it('Letter component should display a letter', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.text()).to.equal('h');
  });

  it('Letter component should have "hidden" class', () => {
    expect(wrapper).to.have.className('hidden');
  });

});
