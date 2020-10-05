import React from 'react';
import { mount } from 'enzyme'
import { DCScreen } from '../../../components/dc/DCScreen';
import { MemoryRouter} from 'react-router-dom';


describe('Tests in <DCScreen', () => {

    test('should render the component correctly', () => {

        const wrapper = mount(
            <MemoryRouter>
                <DCScreen />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();

    })
    
})
