import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup() {
  let props = {
    course: {},
    saving: false,
    errors: {},
    onChange: () => {},
    onSave: () => {}
  };

  let render = TestUtils.createRenderer();
  render.render(<CourseForm {...props} />);
  let output = render.getRenderOutput();

  return {
    props,
    output,
    render
  };
}

describe('CourseForm via React Test Utils', () => {

  it('render form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });
});
