import React from 'react';
import { mount } from 'enzyme';
import { PublicRoute } from '../../routers/PublicRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Tests in <PublicRoute />', () => {
    
    const props = {
        location: {
            pathname: '/login'
        }
    }


    test('should show the component if a user is not authenticated', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute 
                    isAuthenticated={ false }
                    component={ () => <span>Component mounted</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe(true);


    })


    test('should not show the component if a user not authenticated', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PublicRoute 
                    isAuthenticated={ true }
                    component={ () => <span>Component mounted</span> }
                    { ...props }
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe(false);

    });
    
    

})
