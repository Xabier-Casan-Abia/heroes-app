import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../auth/AuthContext';
import { HeroesApp } from '../HeroesApp';

describe('Tests in HeroesApp', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Xabi'
        }
    };

    test('should mount the component correctly', () => {

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                    <HeroesApp />
            </AuthContext.Provider>
        );
        
        expect( wrapper ).toMatchSnapshot();
    })
    
})
