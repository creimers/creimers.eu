import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import HoverLetter from './HoverLetter';

var wrapper;

describe('Test suite for HoverLetter component', () => {
  beforeEach(() => {
    wrapper = mount(<HoverLetter letter={'r'} />);
  });

  it('HoverLetter component should exist', () => {
    expect(wrapper).to.exist;
  });

  it('HoverLetter component should display a letter', () => {
    expect(wrapper.type()).to.equal(HoverLetter);
    expect(wrapper.text()).to.equal('r');
  });

  it("HoverLetter component's initial color should be black", () => {
    expect(wrapper).to.have.style("color", "rgb(0, 0, 0)");
  });

  it("HoverLetter component's change color function should change color", () => {
    wrapper.simulate('mouseover');
    expect(wrapper).not.to.have.style("color", "rgb(0, 0, 0)");
    wrapper.simulate('mouseout');
    expect(wrapper).to.have.style("color", "rgb(0, 0, 0)");
  });

});
