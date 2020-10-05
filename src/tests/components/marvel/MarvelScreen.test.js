import React from 'react';
import { mount } from 'enzyme'
import { MarvelScreen } from '../../../components/marvel/MarvelScreen';
import { MemoryRouter} from 'react-router-dom';


describe('Tests in <MarvelScreen', () => {
    
    test('should render the component correctly', () => {

        const wrapper = mount(
            <MemoryRouter>
                <MarvelScreen />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();

    })
    
})
