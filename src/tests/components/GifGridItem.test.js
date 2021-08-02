import React from 'react';
import GifGridItem from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en <GifGridItem />', () => {
  const url = 'https://localhost/asdf.jpg';
  const title = 'Este es el titulo';
  const wrapper = shallow(<GifGridItem url={ url } title={ title } />);

  test('debe de mostrar el compon ente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('debe de tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe de tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    // expect(div.props().className).toContain('animate__fadeIn');
    expect(className.includes('animate__fadeIn')).toBe(true);
  });


});
