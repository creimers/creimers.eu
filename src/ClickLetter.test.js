import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import sinon from 'sinon';

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ClickLetter from './ClickLetter';

var wrapper;
const onLetterClick = sinon.spy();

describe('Test suite for ClickLetter component', () => {
  beforeEach(() => {
    wrapper = shallow(<ClickLetter letter={'c'} onLetterClick={onLetterClick}/>);
  });

  it('ClickLetter component should exist', () => {
    expect(wrapper).to.exist;
  });

  it('ClickLetter component should display a letter', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.hasClass('click-letter')).to.equal(true);
    expect(wrapper.text()).to.equal('c');
  });

  it('Simulate click event', () => {
    wrapper.simulate('click');
    expect(onLetterClick).to.have.property('callCount', 1);
  });

});
