import { GifExpertApp } from "../GifExpertApp";
import "@testing-library/jest-dom";
import React from 'react';
import { shallow } from 'enzyme';

describe('Prueba de renderizado index', () =>{

    let wrapper = shallow(<GifExpertApp/>);
    test('Debe mostrar correctamente <GifExpertApp />', () => { 
        expect(wrapper).toMatchSnapshot();
    });

});