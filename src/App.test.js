import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
  let app;
  let inputWrapper;

  const changeInputValue = (value) => {
    inputWrapper.simulate('change', {target: {value: value}});
  };

  const outputWrapper = () => {
    return app.find('#output');
  };

  const outputValue = () => {
    return outputWrapper().prop('value');
  };

  beforeEach(() => {
    app = shallow(<App/>);
    inputWrapper = app.find('#input');
  });

  it('should show header', () => {
    expect(app.find('header').text()).toBe('FizzBuzz');
  });
  it('should show input text field', () => {
    expect(inputWrapper.length).toBe(1);
  });
  it('should show output text field', () => {
    expect(outputWrapper().length).toBe(1);
  });

  describe('should', function () {
    it('return input value', function () {
      changeInputValue(1);

      expect(outputValue()).toBe(1);
    });
  });
});
