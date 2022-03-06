import "@testing-library/jest-dom";
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe('Prueba en <GifGridItem />', () =>{

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg'
    let wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Debe mostrar correctamente <GifGridItem />', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafor con el title', () => { 
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe de tener la imagen igual al url y alt de los props', () => { 
        const img = wrapper.find('img');
        // console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener animate__fadeIn', () => { 
        const div = wrapper.find('div');
        // console.log(div.hasClass('animate__fadeIn1'));
        expect(div.hasClass('animate__fadeIn')).toBe(true);
    });

});