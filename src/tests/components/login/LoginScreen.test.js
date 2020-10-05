import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import { act } from 'react-dom/test-utils';

describe('Tests in <LoginScreen />', () => {
    
    const history = {
        replace: jest.fn()
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <LoginScreen history={ history } />
        </AuthContext.Provider>
    );

    test('should render the component correctly', () => {       
        expect( wrapper ).toMatchSnapshot();
    });

    test('should call dispatch with the given name and redirect to the right path', async() => {

        const handleInputChange = wrapper.find('input').prop('onChange');
        const form = wrapper.find('form'); 

        await act( async() => {
            handleInputChange({ target: { value: 'Xabi' }})
        })

        form.simulate('submit', { preventDefault: () => {} } );

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Xabi'
            }
        });
        
        expect( history.replace ).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath','/marvel');
        form.simulate('submit', { preventDefault: () => {} }); 

        expect( history.replace ).toHaveBeenCalledWith('/marvel');
        
    })

})
