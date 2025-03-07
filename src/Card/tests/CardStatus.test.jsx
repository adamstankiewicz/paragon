import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import CardStatus from '../CardStatus';
import WarningFilled from '../../../icons/jsx/WarningFilled';

describe('correct rendering', () => {
  it('renders CardStatus element', () => {
    const tree = renderer.create((
      <CardStatus>Text</CardStatus>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correct base className', () => {
    const status = mount(<CardStatus>Text</CardStatus>);
    expect(status.find('.pgn__card-status').length).toBeGreaterThan(0);
  });
  it('renders body with custom className', () => {
    const className = 'my-class-name';
    const status = mount(<CardStatus className={className}>Text</CardStatus>);
    expect(status.find('.my-class-name').length).toBeGreaterThan(0);
  });
  it('renders with correct variant', () => {
    const variant = 'primary';
    const status = mount(<CardStatus variant={variant}>Text</CardStatus>);
    expect(status.find('.pgn__card-status__primary').length).toBeGreaterThan(0);
  });
  it('renders with icon', () => {
    const icon = WarningFilled;
    const status = mount(<CardStatus icon={icon}>Text</CardStatus>);
    expect(status.find('.pgn__icon').length).toBeGreaterThan(0);
  });
});
